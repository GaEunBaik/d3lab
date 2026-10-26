importScripts('vendor/sql-wasm.js','content.js');
const engine=initSqlJs({locateFile:f=>'vendor/'+f});
const MAX_ROWS=2000;
function execute(SQL,sql){
 const db=new SQL.Database();let last={columns:[],values:[]};
 try{db.run(D3_CONTENT.setupSQL);const statements=db.iterateStatements(sql);for(const stmt of statements){const columns=stmt.getColumnNames();const values=[];while(stmt.step()){if(values.length>=MAX_ROWS)throw new Error('결과가 너무 많습니다. LIMIT 2000 이하로 범위를 줄여 주세요.');if(columns.length)values.push(stmt.get());}if(columns.length)last={columns,values};}return last;}finally{db.close();}
}
function canon(r,ordered){const rows=r.values.map(row=>JSON.stringify(row.map(v=>typeof v==='number'?Math.round(v*1e8)/1e8:v)));if(!ordered)rows.sort();return JSON.stringify([r.columns.map(x=>x.toLowerCase()),rows]);}
self.onmessage=async({data})=>{const {id,sql,solution,ordered}=data;try{const SQL=await engine;const result=execute(SQL,sql);const expected=solution?execute(SQL,solution):null;self.postMessage({id,result,correct:expected?canon(result,ordered)===canon(expected,ordered):null,expected:expected?{columns:expected.columns,count:expected.values.length}:null});}catch(e){self.postMessage({id,error:e.message});}};

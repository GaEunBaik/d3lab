self.D3_CONTENT = {
  "schemaInfo": {
    "customers": [
      "customer_id INTEGER PK",
      "customer_name TEXT",
      "region TEXT",
      "join_date TEXT",
      "grade TEXT"
    ],
    "products": [
      "product_id INTEGER PK",
      "product_name TEXT",
      "category TEXT",
      "unit_price INTEGER",
      "active INTEGER"
    ],
    "orders": [
      "order_id INTEGER PK",
      "customer_id INTEGER FK",
      "order_date TEXT",
      "status TEXT"
    ],
    "order_items": [
      "order_item_id INTEGER PK",
      "order_id INTEGER FK",
      "product_id INTEGER FK",
      "quantity INTEGER",
      "unit_price INTEGER"
    ],
    "refunds": [
      "refund_id INTEGER PK",
      "order_id INTEGER FK",
      "refund_date TEXT",
      "refund_amount INTEGER",
      "reason TEXT"
    ]
  },
  "setupSQL": "\nCREATE TABLE customers(customer_id INTEGER PRIMARY KEY,customer_name TEXT,region TEXT,join_date TEXT,grade TEXT);\nINSERT INTO customers VALUES\n(1,'김하나','서울','2026-01-05','VIP'),(2,'이준호','경기','2026-01-12','BASIC'),(3,'박서윤','서울','2026-02-03','GOLD'),(4,'최민재','부산','2026-02-17','BASIC'),(5,'정유진','대전','2026-03-01','GOLD'),(6,'한도윤','경기','2026-03-15','VIP'),(7,'윤지아','서울','2026-04-02','BASIC'),(8,'오현우','인천','2026-04-19','BASIC'),(9,'임채원','부산','2026-05-04','GOLD'),(10,'강민서','대구','2026-05-20','VIP'),(11,'송지후','경기','2026-06-01','BASIC'),(12,'조수빈','서울','2026-06-11','GOLD'),(13,'배지훈','광주','2026-06-25','BASIC'),(14,'문예린','인천','2026-07-03','GOLD'),(15,'신우진','서울','2026-07-18','VIP');\nCREATE TABLE products(product_id INTEGER PRIMARY KEY,product_name TEXT,category TEXT,unit_price INTEGER,active INTEGER);\nINSERT INTO products VALUES\n(101,'미니 토트백','BAG',59000,1),(102,'실크 스카프','FASHION',29000,1),(103,'메탈 헤어핀','ACCESSORY',18000,1),(104,'데일리 파우치','BAG',24000,1),(105,'울 머플러','FASHION',42000,1),(106,'진주 귀걸이','ACCESSORY',32000,1),(107,'레더 카드지갑','WALLET',39000,1),(108,'캔버스 숄더백','BAG',48000,0);\nCREATE TABLE orders(order_id INTEGER PRIMARY KEY,customer_id INTEGER,order_date TEXT,status TEXT);\nINSERT INTO orders VALUES\n(1001,1,'2026-07-02','PAID'),(1002,3,'2026-07-04','SHIPPED'),(1003,2,'2026-07-05','CANCELLED'),(1004,6,'2026-07-11','SHIPPED'),(1005,4,'2026-07-18','PAID'),(1006,1,'2026-08-01','SHIPPED'),(1007,7,'2026-08-03','PAID'),(1008,10,'2026-08-08','SHIPPED'),(1009,9,'2026-08-14','SHIPPED'),(1010,12,'2026-08-21','PAID'),(1011,6,'2026-09-02','SHIPPED'),(1012,15,'2026-09-05','PAID'),(1013,5,'2026-09-09','CANCELLED'),(1014,3,'2026-09-12','SHIPPED'),(1015,11,'2026-09-18','PAID'),(1016,1,'2026-09-23','SHIPPED'),(1017,14,'2026-09-25','PAID'),(1018,8,'2026-09-29','SHIPPED');\nCREATE TABLE order_items(order_item_id INTEGER PRIMARY KEY,order_id INTEGER,product_id INTEGER,quantity INTEGER,unit_price INTEGER);\nINSERT INTO order_items VALUES\n(1,1001,101,1,59000),(2,1001,103,2,18000),(3,1002,102,1,29000),(4,1002,105,1,42000),(5,1003,104,1,24000),(6,1004,101,2,59000),(7,1004,106,1,32000),(8,1005,107,1,39000),(9,1006,102,2,29000),(10,1006,103,1,18000),(11,1007,104,2,24000),(12,1008,105,2,42000),(13,1008,106,1,32000),(14,1009,101,1,59000),(15,1009,107,1,39000),(16,1010,103,3,18000),(17,1011,101,1,59000),(18,1011,102,1,29000),(19,1012,106,2,32000),(20,1013,108,1,48000),(21,1014,105,1,42000),(22,1014,103,1,18000),(23,1015,104,1,24000),(24,1016,101,1,59000),(25,1016,106,1,32000),(26,1017,102,1,29000),(27,1017,107,1,39000),(28,1018,103,2,18000);\nCREATE TABLE refunds(refund_id INTEGER PRIMARY KEY,order_id INTEGER,refund_date TEXT,refund_amount INTEGER,reason TEXT);\nINSERT INTO refunds VALUES\n(1,1002,'2026-07-10',29000,'단순변심'),(2,1009,'2026-08-20',39000,'상품불량'),(3,1014,'2026-09-17',18000,'배송지연'),(4,1017,'2026-09-30',29000,'단순변심');",
  "beginnerLessons": [
    {
      "title": "데이터베이스와 Excel",
      "explain": "Excel은 표를 직접 편집하는 데 편리하고, 관계형 DB는 여러 테이블의 데이터를 구조적으로 저장·연결·조회하는 데 강합니다.",
      "task": "customers를 열어 고객 정보가 행과 열로 저장되는 모습을 살펴보세요.",
      "example": "SELECT * FROM customers LIMIT 5;"
    },
    {
      "title": "DBMS와 SQL",
      "explain": "DBMS는 데이터를 저장·관리하는 소프트웨어이고, SQL은 데이터에 질문하거나 변경을 요청하는 언어입니다. 이 실습실은 SQLite를 사용합니다.",
      "task": "SQL을 실행하면 DBMS가 결과를 반환합니다.",
      "example": "SELECT customer_name FROM customers LIMIT 3;"
    },
    {
      "title": "테이블·행·열·자료형",
      "explain": "테이블은 행(한 건의 기록)과 열(속성)로 구성됩니다. INTEGER는 정수, TEXT는 문자열입니다. NULL은 값이 없거나 알려지지 않은 상태입니다.",
      "task": "customers의 이름과 지역 열을 조회해 보세요.",
      "example": "SELECT customer_name, region FROM customers;"
    },
    {
      "title": "PK·FK·테이블 관계",
      "explain": "PK는 행을 고유하게 식별하는 키, FK는 다른 테이블의 키를 참조하는 열입니다. 한 고객이 여러 주문을 할 수 있어 1:N 관계가 됩니다.",
      "task": "주문번호와 고객번호를 확인해 보세요.",
      "example": "SELECT order_id, customer_id FROM orders;"
    },
    {
      "title": "SELECT·FROM·WHERE",
      "explain": "SELECT는 출력할 열, FROM은 읽을 테이블, WHERE는 선택할 행의 조건을 지정합니다.",
      "task": "서울 고객의 이름만 찾아보세요.",
      "example": "SELECT customer_name FROM customers WHERE region = '서울';"
    },
    {
      "title": "정렬과 중복 제거",
      "explain": "ORDER BY로 정렬하고 DISTINCT로 중복을 제거합니다. WHERE와 달리 정렬은 행을 삭제하지 않습니다.",
      "task": "고객 지역을 중복 없이 정렬해 보세요.",
      "example": "SELECT DISTINCT region FROM customers ORDER BY region;"
    },
    {
      "title": "문자열 연결과 별칭",
      "explain": "SQLite에서는 || 연산자로 문자열을 연결합니다. AS는 결과 열에 이름을 붙입니다. NULL은 0이나 빈 문자열과 다르며, NULL과 문자열을 연결하면 결과도 NULL입니다.",
      "example": "SELECT customer_name || ' (' || grade || ')' AS customer_label\nFROM customers;"
    },
    {
      "title": "집계·GROUP BY·HAVING",
      "explain": "COUNT, SUM, AVG는 값을 집계합니다. GROUP BY는 그룹을 만들고 HAVING은 집계된 그룹을 거릅니다.",
      "task": "지역별 고객 수를 계산해 보세요.",
      "example": "SELECT region, COUNT(*) AS customer_count FROM customers GROUP BY region;"
    },
    {
      "title": "JOIN으로 테이블 연결",
      "explain": "JOIN은 서로 관련된 행을 연결합니다. INNER JOIN은 일치하는 행만, LEFT JOIN은 왼쪽 행을 유지합니다. 1:N 연결 시 행이 늘어날 수 있습니다.",
      "task": "주문과 고객 이름을 연결해 보세요.",
      "example": "SELECT o.order_id, c.customer_name FROM orders o JOIN customers c ON o.customer_id = c.customer_id;"
    },
    {
      "title": "서브쿼리",
      "explain": "서브쿼리는 SQL 안에 들어 있는 또 다른 조회문입니다. 먼저 평균값을 구한 뒤 그 값과 비교할 수 있습니다.",
      "task": "평균보다 비싼 상품을 찾아보세요.",
      "example": "SELECT product_name FROM products WHERE unit_price > (SELECT AVG(unit_price) FROM products);"
    },
    {
      "title": "데이터 변경과 트랜잭션",
      "explain": "INSERT는 행을 추가합니다. BEGIN으로 트랜잭션을 시작하고 COMMIT으로 변경을 확정합니다. 확정 전에는 ROLLBACK으로 취소할 수 있습니다. 임시 테이블은 현재 DB 연결에서만 존재합니다.",
      "task": "임시 테이블을 만들고 한 행을 추가한 뒤 조회해 보세요.",
      "example": "BEGIN;\nCREATE TEMP TABLE beginner_notes (note TEXT);\nINSERT INTO beginner_notes VALUES ('연습');\nCOMMIT;\nSELECT * FROM beginner_notes;"
    },
    {
      "title": "ERD와 정규화",
      "explain": "ERD는 테이블과 관계를 나타내는 그림입니다. 고객과 주문을 나누면 고객 정보 중복을 줄이고 데이터 불일치를 예방할 수 있습니다.",
      "task": "customers와 orders의 고객번호가 어떻게 연결되는지 확인해 보세요.",
      "example": "SELECT c.customer_name, COUNT(o.order_id) AS order_count FROM customers c LEFT JOIN orders o ON c.customer_id=o.customer_id GROUP BY c.customer_id,c.customer_name;"
    }
  ],
  "problems": [
    {
      "id": "B01",
      "topic": "개념 다지기",
      "level": "Easy",
      "title": "데이터베이스와 Excel",
      "desc": "customers 테이블에서 전체 고객 정보를 최대 5행까지 조회하세요.",
      "starter": "-- SQL을 작성하세요.\n",
      "solution": "SELECT * FROM customers LIMIT 5;",
      "hint": "SELECT * FROM 테이블명 형태로 전체 열을 조회하고 LIMIT로 행 수를 제한합니다.",
      "lesson": 0,
      "track": "concept",
      "ordered": false,
      "tables": [
        "customers"
      ]
    },
    {
      "id": "B02",
      "topic": "개념 다지기",
      "level": "Easy",
      "title": "DBMS와 SQL",
      "desc": "customers 테이블에서 customer_name을 최대 3행까지 조회하세요.",
      "starter": "-- SQL을 작성하세요.\n",
      "solution": "SELECT customer_name FROM customers LIMIT 3;",
      "hint": "SELECT 뒤에는 조회할 열, FROM 뒤에는 테이블 이름을 적습니다.",
      "lesson": 1,
      "track": "concept",
      "ordered": false,
      "tables": [
        "customers"
      ]
    },
    {
      "id": "B03",
      "topic": "개념 다지기",
      "level": "Easy",
      "title": "테이블·행·열·자료형",
      "desc": "customers 테이블에서 customer_name과 region 두 열을 조회하세요.",
      "starter": "-- SQL을 작성하세요.\n",
      "solution": "SELECT customer_name, region FROM customers;",
      "hint": "여러 열은 쉼표로 구분해 SELECT 뒤에 나열합니다.",
      "lesson": 2,
      "track": "concept",
      "ordered": false,
      "tables": [
        "customers"
      ]
    },
    {
      "id": "B04",
      "topic": "개념 다지기",
      "level": "Easy",
      "title": "PK·FK·테이블 관계",
      "desc": "orders 테이블에서 order_id와 customer_id를 조회하여 주문과 고객의 연결 키를 확인하세요.",
      "starter": "-- SQL을 작성하세요.\n",
      "solution": "SELECT order_id, customer_id FROM orders;",
      "hint": "orders의 customer_id는 customers의 customer_id와 연결됩니다.",
      "lesson": 3,
      "track": "concept",
      "ordered": false,
      "tables": [
        "orders"
      ]
    },
    {
      "id": "B05",
      "topic": "개념 다지기",
      "level": "Easy",
      "title": "SELECT·FROM·WHERE",
      "desc": "customers 테이블에서 region이 '서울'인 고객의 customer_name만 조회하세요.",
      "starter": "-- SQL을 작성하세요.\n",
      "solution": "SELECT customer_name FROM customers WHERE region = '서울';",
      "hint": "행에 조건을 줄 때는 WHERE를 사용합니다.",
      "lesson": 4,
      "track": "concept",
      "ordered": false,
      "tables": [
        "customers"
      ]
    },
    {
      "id": "B06",
      "topic": "개념 다지기",
      "level": "Easy",
      "title": "정렬과 중복 제거",
      "desc": "customers 테이블의 region을 중복 없이 조회하고 오름차순으로 정렬하세요.",
      "starter": "-- SQL을 작성하세요.\n",
      "solution": "SELECT DISTINCT region FROM customers ORDER BY region;",
      "hint": "DISTINCT로 중복을 제거하고 ORDER BY로 정렬합니다.",
      "lesson": 5,
      "track": "concept",
      "ordered": true,
      "tables": [
        "customers"
      ]
    },
    {
      "id": "B07",
      "topic": "개념 다지기",
      "level": "Easy",
      "title": "문자열 연결과 별칭",
      "desc": "customers의 customer_name과 grade를 '이름 (등급)' 형태의 customer_label 한 열로 조회하세요.",
      "starter": "-- SQL을 작성하세요.\n",
      "solution": "SELECT customer_name || ' (' || grade || ')' AS customer_label FROM customers;",
      "hint": "SQLite에서는 ||로 문자열을 연결하고 AS로 별칭을 지정할 수 있습니다.",
      "lesson": 6,
      "track": "concept",
      "ordered": false,
      "tables": [
        "customers"
      ]
    },
    {
      "id": "B08",
      "topic": "개념 다지기",
      "level": "Medium",
      "title": "집계·GROUP BY·HAVING",
      "desc": "customers 테이블에서 지역별 고객 수를 region, customer_count 순서로 조회하세요.",
      "starter": "-- SQL을 작성하세요.\n",
      "solution": "SELECT region, COUNT(*) AS customer_count FROM customers GROUP BY region;",
      "hint": "region으로 GROUP BY한 뒤 COUNT(*)로 각 그룹의 행 수를 셉니다.",
      "lesson": 7,
      "track": "concept",
      "ordered": false,
      "tables": [
        "customers"
      ]
    },
    {
      "id": "B09",
      "topic": "개념 다지기",
      "level": "Medium",
      "title": "JOIN으로 테이블 연결",
      "desc": "orders와 customers를 연결하여 order_id와 customer_name을 조회하세요.",
      "starter": "-- SQL을 작성하세요.\n",
      "solution": "SELECT o.order_id, c.customer_name FROM orders o JOIN customers c ON o.customer_id = c.customer_id;",
      "hint": "두 테이블의 customer_id가 같은 행을 JOIN 조건으로 연결합니다.",
      "lesson": 8,
      "track": "concept",
      "ordered": false,
      "tables": [
        "customers",
        "orders"
      ]
    },
    {
      "id": "B10",
      "topic": "개념 다지기",
      "level": "Medium",
      "title": "서브쿼리",
      "desc": "products 테이블에서 전체 상품 평균 가격보다 비싼 상품의 product_name을 조회하세요.",
      "starter": "-- SQL을 작성하세요.\n",
      "solution": "SELECT product_name FROM products WHERE unit_price > (SELECT AVG(unit_price) FROM products);",
      "hint": "WHERE에서 비교할 평균값을 괄호 안의 서브쿼리로 먼저 구해보세요.",
      "lesson": 9,
      "track": "concept",
      "ordered": false,
      "tables": [
        "products"
      ]
    },
    {
      "id": "B11",
      "topic": "개념 다지기",
      "level": "Medium",
      "title": "데이터 변경과 트랜잭션",
      "desc": "임시 테이블 beginner_notes를 만들고 '연습' 한 행을 추가한 뒤 전체 내용을 조회하세요.",
      "starter": "-- SQL을 작성하세요.\n",
      "solution": "BEGIN;\nCREATE TEMP TABLE beginner_notes (note TEXT);\nINSERT INTO beginner_notes VALUES ('연습');\nCOMMIT;\nSELECT * FROM beginner_notes;",
      "hint": "CREATE TEMP TABLE → INSERT INTO → SELECT 순서로 작성합니다.",
      "lesson": 10,
      "track": "concept",
      "ordered": false,
      "tables": []
    },
    {
      "id": "B12",
      "topic": "개념 다지기",
      "level": "Medium",
      "title": "ERD와 정규화",
      "desc": "모든 고객을 기준으로 주문 수를 계산하세요. customer_name과 order_count를 조회하며 주문이 없는 고객도 포함하세요.",
      "starter": "-- SQL을 작성하세요.\n",
      "solution": "SELECT c.customer_name, COUNT(o.order_id) AS order_count FROM customers c LEFT JOIN orders o ON c.customer_id=o.customer_id GROUP BY c.customer_id,c.customer_name;",
      "hint": "주문이 없는 고객도 남겨야 하므로 customers를 기준으로 LEFT JOIN합니다.",
      "lesson": 11,
      "track": "concept",
      "ordered": false,
      "tables": [
        "customers",
        "orders"
      ]
    },
    {
      "id": "A01",
      "topic": "기초",
      "level": "Easy",
      "title": "전체 고객 조회",
      "desc": "customers 테이블의 모든 고객 정보를 조회하세요.",
      "starter": "-- SQL을 작성하세요.\n",
      "solution": "SELECT * FROM customers;",
      "hint": "SELECT와 FROM의 가장 기본 형태입니다.",
      "track": "practical",
      "ordered": false,
      "tables": [
        "customers"
      ]
    },
    {
      "id": "A02",
      "topic": "기초",
      "level": "Easy",
      "title": "고객명과 지역만 조회",
      "desc": "모든 고객의 customer_name, region 컬럼만 조회하세요.",
      "starter": "-- SQL을 작성하세요.\n",
      "solution": "SELECT customer_name, region FROM customers;",
      "hint": "필요한 컬럼 이름만 SELECT 뒤에 나열합니다.",
      "track": "practical",
      "ordered": false,
      "tables": [
        "customers"
      ]
    },
    {
      "id": "A03",
      "topic": "조건",
      "level": "Easy",
      "title": "서울 고객 찾기",
      "desc": "region이 '서울'인 고객의 customer_id, customer_name, grade를 조회하세요.",
      "starter": "-- SQL을 작성하세요.\n",
      "solution": "SELECT customer_id, customer_name, grade FROM customers WHERE region='서울';",
      "hint": "WHERE로 행을 필터링합니다.",
      "track": "practical",
      "ordered": false,
      "tables": [
        "customers"
      ]
    },
    {
      "id": "A04",
      "topic": "조건",
      "level": "Easy",
      "title": "3만원 이상 상품",
      "desc": "unit_price가 30000 이상인 상품의 product_name과 unit_price를 가격이 높은 순으로 조회하세요.",
      "starter": "-- SQL을 작성하세요.\n",
      "solution": "SELECT product_name, unit_price FROM products WHERE unit_price >= 30000 ORDER BY unit_price DESC;",
      "hint": "WHERE + ORDER BY를 함께 사용합니다.",
      "track": "practical",
      "ordered": true,
      "tables": [
        "products"
      ]
    },
    {
      "id": "A05",
      "topic": "조건",
      "level": "Easy",
      "title": "고객 지역 중복 제거",
      "desc": "고객이 존재하는 region 목록을 중복 없이 오름차순으로 조회하세요.",
      "starter": "-- SQL을 작성하세요.\n",
      "solution": "SELECT DISTINCT region FROM customers ORDER BY region;",
      "hint": "DISTINCT를 사용해 중복을 제거합니다.",
      "track": "practical",
      "ordered": true,
      "tables": [
        "customers"
      ]
    },
    {
      "id": "A06",
      "topic": "집계",
      "level": "Easy",
      "title": "전체 고객 수",
      "desc": "전체 고객 수를 customer_count라는 별칭으로 조회하세요.",
      "starter": "-- SQL을 작성하세요.\n",
      "solution": "SELECT COUNT(*) AS customer_count FROM customers;",
      "hint": "COUNT(*)와 AS 별칭을 사용합니다.",
      "track": "practical",
      "ordered": false,
      "tables": [
        "customers"
      ]
    },
    {
      "id": "A07",
      "topic": "집계",
      "level": "Medium",
      "title": "지역별 고객 수",
      "desc": "지역별 고객 수를 구하고 고객 수가 많은 지역부터 조회하세요. 컬럼은 region, customer_count 순서입니다. 고객 수가 같으면 region 오름차순으로 정렬하세요.",
      "starter": "-- SQL을 작성하세요.\n",
      "solution": "SELECT region, COUNT(*) AS customer_count FROM customers GROUP BY region ORDER BY customer_count DESC, region;",
      "hint": "GROUP BY로 region 단위의 그룹을 만듭니다.",
      "track": "practical",
      "ordered": true,
      "tables": [
        "customers"
      ]
    },
    {
      "id": "A08",
      "topic": "집계",
      "level": "Medium",
      "title": "등급별 고객 수 3명 이상",
      "desc": "등급별 고객 수를 구하되 고객이 3명 이상인 등급만 조회하세요. 컬럼은 grade, customer_count입니다. grade 오름차순으로 정렬하세요.",
      "starter": "-- SQL을 작성하세요.\n",
      "solution": "SELECT grade, COUNT(*) AS customer_count FROM customers GROUP BY grade HAVING COUNT(*) >= 3 ORDER BY grade;",
      "hint": "그룹 결과에 조건을 줄 때는 HAVING입니다.",
      "track": "practical",
      "ordered": true,
      "tables": [
        "customers"
      ]
    },
    {
      "id": "A09",
      "topic": "JOIN",
      "level": "Medium",
      "title": "주문 고객 이름 붙이기",
      "desc": "orders와 customers를 연결하여 order_id, order_date, customer_name, status를 주문번호 순으로 조회하세요.",
      "starter": "-- SQL을 작성하세요.\n",
      "solution": "SELECT o.order_id,o.order_date,c.customer_name,o.status FROM orders o JOIN customers c ON o.customer_id=c.customer_id ORDER BY o.order_id;",
      "hint": "orders.customer_id와 customers.customer_id를 JOIN합니다.",
      "track": "practical",
      "ordered": true,
      "tables": [
        "customers",
        "orders"
      ]
    },
    {
      "id": "A10",
      "topic": "JOIN",
      "level": "Medium",
      "title": "주문별 결제금액 계산",
      "desc": "취소 주문을 제외하고 주문별 총 상품금액(quantity × unit_price)을 계산하세요. order_id, order_amount를 금액 내림차순으로 조회하세요. 금액이 같으면 order_id 오름차순으로 정렬하세요.",
      "starter": "-- SQL을 작성하세요.\n",
      "solution": "SELECT o.order_id, SUM(oi.quantity*oi.unit_price) AS order_amount FROM orders o JOIN order_items oi ON o.order_id=oi.order_id WHERE o.status <> 'CANCELLED' GROUP BY o.order_id ORDER BY order_amount DESC, o.order_id;",
      "hint": "JOIN 후 SUM과 GROUP BY를 사용합니다.",
      "track": "practical",
      "ordered": true,
      "tables": [
        "orders",
        "order_items"
      ]
    },
    {
      "id": "A11",
      "topic": "JOIN",
      "level": "Medium",
      "title": "상품별 판매수량",
      "desc": "취소 주문을 제외하고 상품별 판매수량을 계산하세요. product_name, sold_qty를 판매수량 내림차순으로 조회하세요. 판매수량이 같으면 product_name 오름차순으로 정렬하세요.",
      "starter": "-- SQL을 작성하세요.\n",
      "solution": "SELECT p.product_name, SUM(oi.quantity) AS sold_qty FROM products p JOIN order_items oi ON p.product_id=oi.product_id JOIN orders o ON o.order_id=oi.order_id WHERE o.status <> 'CANCELLED' GROUP BY p.product_id,p.product_name ORDER BY sold_qty DESC,p.product_name;",
      "hint": "3개 테이블을 연결하고 취소 주문을 제외합니다.",
      "track": "practical",
      "ordered": true,
      "tables": [
        "products",
        "orders",
        "order_items"
      ]
    },
    {
      "id": "A12",
      "topic": "분석",
      "level": "Medium",
      "title": "월별 매출",
      "desc": "취소 주문을 제외하고 월별 상품 매출을 계산하세요. month는 YYYY-MM 형식, revenue와 함께 월 순서대로 조회하세요.",
      "starter": "-- SQL을 작성하세요.\n",
      "solution": "SELECT substr(o.order_date,1,7) AS month, SUM(oi.quantity*oi.unit_price) AS revenue FROM orders o JOIN order_items oi ON o.order_id=oi.order_id WHERE o.status <> 'CANCELLED' GROUP BY substr(o.order_date,1,7) ORDER BY month;",
      "hint": "SQLite에서는 substr(date,1,7)로 YYYY-MM을 만들 수 있습니다.",
      "track": "practical",
      "ordered": true,
      "tables": [
        "orders",
        "order_items"
      ]
    },
    {
      "id": "A13",
      "topic": "분석",
      "level": "Medium",
      "title": "고객별 누적 구매액",
      "desc": "취소 주문을 제외하고 고객별 구매액을 계산하여 100000원 이상 구매한 고객만 조회하세요. customer_name, total_amount 순이며 금액 내림차순입니다. 금액이 같으면 customer_name 오름차순으로 정렬하세요.",
      "starter": "-- SQL을 작성하세요.\n",
      "solution": "SELECT c.customer_name, SUM(oi.quantity*oi.unit_price) AS total_amount FROM customers c JOIN orders o ON c.customer_id=o.customer_id JOIN order_items oi ON o.order_id=oi.order_id WHERE o.status <> 'CANCELLED' GROUP BY c.customer_id,c.customer_name HAVING SUM(oi.quantity*oi.unit_price) >= 100000 ORDER BY total_amount DESC,c.customer_name;",
      "hint": "WHERE는 주문 행을, HAVING은 고객별 집계 결과를 거릅니다.",
      "track": "practical",
      "ordered": true,
      "tables": [
        "customers",
        "orders",
        "order_items"
      ]
    },
    {
      "id": "A14",
      "topic": "서브쿼리",
      "level": "Medium",
      "title": "평균 가격보다 비싼 상품",
      "desc": "전체 상품 평균 가격보다 비싼 상품의 product_name, unit_price를 가격 내림차순으로 조회하세요.",
      "starter": "-- SQL을 작성하세요.\n",
      "solution": "SELECT product_name, unit_price FROM products WHERE unit_price > (SELECT AVG(unit_price) FROM products) ORDER BY unit_price DESC;",
      "hint": "먼저 서브쿼리로 전체 평균 가격을 구합니다.",
      "track": "practical",
      "ordered": true,
      "tables": [
        "products"
      ]
    },
    {
      "id": "A15",
      "topic": "서브쿼리",
      "level": "Medium",
      "title": "주문한 적 없는 고객",
      "desc": "한 번도 주문하지 않은 고객의 customer_id, customer_name을 조회하세요. customer_id 오름차순으로 정렬하세요.",
      "starter": "-- SQL을 작성하세요.\n",
      "solution": "SELECT customer_id,customer_name FROM customers WHERE customer_id NOT IN (SELECT customer_id FROM orders) ORDER BY customer_id;",
      "hint": "orders에 존재하지 않는 customer_id를 찾습니다.",
      "track": "practical",
      "ordered": true,
      "tables": [
        "customers",
        "orders"
      ]
    },
    {
      "id": "A16",
      "topic": "서브쿼리",
      "level": "Hard",
      "title": "지역별 고객 수의 평균",
      "desc": "먼저 지역별 고객 수를 구한 뒤, 그 지역별 고객 수들의 평균을 avg_customer_count라는 이름으로 조회하세요. 소수점 둘째 자리까지 반올림합니다.",
      "starter": "-- SQL을 작성하세요.\n",
      "solution": "SELECT ROUND(AVG(customer_count),2) AS avg_customer_count FROM (SELECT region, COUNT(*) AS customer_count FROM customers GROUP BY region) t;",
      "hint": "AVG(COUNT(*))처럼 집계함수를 바로 중첩하지 말고, 지역별 COUNT 결과를 파생 테이블로 만든 뒤 AVG합니다.",
      "track": "practical",
      "ordered": false,
      "tables": [
        "customers"
      ]
    },
    {
      "id": "A17",
      "topic": "서브쿼리",
      "level": "Hard",
      "title": "지역별 고객 수의 최댓값",
      "desc": "지역별 고객 수 중 가장 큰 값을 max_customer_count라는 이름으로 조회하세요.",
      "starter": "-- SQL을 작성하세요.\n",
      "solution": "SELECT MAX(customer_count) AS max_customer_count FROM (SELECT region, COUNT(*) AS customer_count FROM customers GROUP BY region) t;",
      "hint": "지역별 COUNT 결과를 만든 다음 바깥 쿼리에서 MAX를 적용합니다.",
      "track": "practical",
      "ordered": false,
      "tables": [
        "customers"
      ]
    },
    {
      "id": "A18",
      "topic": "서브쿼리",
      "level": "Hard",
      "title": "평균보다 고객이 많은 지역",
      "desc": "지역별 고객 수가 전체 지역별 고객 수의 평균보다 큰 지역만 region, customer_count로 조회하세요. 고객 수 내림차순입니다. 고객 수가 같으면 region 오름차순으로 정렬하세요.",
      "starter": "-- SQL을 작성하세요.\n",
      "solution": "WITH rc AS (SELECT region, COUNT(*) AS customer_count FROM customers GROUP BY region) SELECT region, customer_count FROM rc WHERE customer_count > (SELECT AVG(customer_count) FROM rc) ORDER BY customer_count DESC, region;",
      "hint": "같은 집계 결과를 여러 번 쓸 때는 CTE로 먼저 만들어도 좋습니다.",
      "track": "practical",
      "ordered": true,
      "tables": [
        "customers"
      ]
    },
    {
      "id": "A19",
      "topic": "실무",
      "level": "Hard",
      "title": "환불 반영 순매출",
      "desc": "취소 주문을 제외한 총 상품매출에서 전체 환불액을 차감한 순매출을 net_revenue로 조회하세요.",
      "starter": "-- SQL을 작성하세요.\n",
      "solution": "SELECT (SELECT SUM(oi.quantity*oi.unit_price) FROM orders o JOIN order_items oi ON o.order_id=oi.order_id WHERE o.status <> 'CANCELLED') - (SELECT COALESCE(SUM(refund_amount),0) FROM refunds) AS net_revenue;",
      "hint": "매출 집계와 환불 집계를 각각 스칼라 서브쿼리로 계산합니다.",
      "track": "practical",
      "ordered": false,
      "tables": [
        "orders",
        "order_items",
        "refunds"
      ]
    },
    {
      "id": "A20",
      "topic": "실무",
      "level": "Hard",
      "title": "고객별 순구매액 TOP 3",
      "desc": "취소 주문을 제외한 구매액에서 해당 고객 주문의 환불액을 차감하여 고객별 순구매액을 구하고 상위 3명을 조회하세요. customer_name, net_amount 순입니다. 금액이 같으면 customer_name 오름차순으로 정렬하세요.",
      "starter": "-- SQL을 작성하세요.\n",
      "solution": "WITH sales AS (SELECT c.customer_id,c.customer_name,SUM(oi.quantity*oi.unit_price) gross FROM customers c JOIN orders o ON c.customer_id=o.customer_id JOIN order_items oi ON o.order_id=oi.order_id WHERE o.status<>'CANCELLED' GROUP BY c.customer_id,c.customer_name), ref AS (SELECT o.customer_id,SUM(r.refund_amount) refund FROM orders o JOIN refunds r ON o.order_id=r.order_id GROUP BY o.customer_id) SELECT s.customer_name, s.gross-COALESCE(r.refund,0) AS net_amount FROM sales s LEFT JOIN ref r ON s.customer_id=r.customer_id ORDER BY net_amount DESC,s.customer_name LIMIT 3;",
      "hint": "매출과 환불을 각각 고객 단위로 집계한 뒤 LEFT JOIN하면 중복 집계를 피하기 쉽습니다.",
      "track": "practical",
      "ordered": true,
      "tables": [
        "customers",
        "orders",
        "order_items",
        "refunds"
      ]
    }
  ]
};

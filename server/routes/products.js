import { con } from "../db/db.js"
import express from 'express';
var router = express.Router()

router.get('/', () => {
  console.log('Connected in /products file')
})

//to obtain the product names to provide in the dropdown box
router.get('/read1', (req,res) => {
  console.log('In /product name file read')
  con.query("SELECT product_name FROM PRODUCT", function (err, result, fields) {
  if (err) throw err;
  res.json(result);
  
});
})
router.post('/create', (req, res) => {
  console.log('In /products file')
    var sql = `INSERT INTO PRODUCT(product_name ,product_price ,quantity_made) VALUES ('${req.body['ProductName']}', '${req.body['ProductPrice']}', '${req.body['QuantityMade']}') `;
    con.query(sql, function (err, result) {
      if (err) throw err;
      con.query("SELECT LAST_INSERT_ID() AS ID ", function (err, result, fields) { //returning the order_id of the last inserted order
        console.log(result[0].ID)
        res.json(result)
      })
    });
})

router.post('/update', (req,res) => {
  console.log('In /products file')
 
    var sql = `UPDATE PRODUCT SET product_name = '${req.body['NewProductName']}',product_price = '${req.body['NewProductPrice']}',quantity_made = '${req.body['NewQuantityMade']}' WHERE product_id = '${req.body['ProductId']}'`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
      res.json(result)
    });
  
})

router.post('/delete', (req,res) => {
  console.log('In /products file')
    var sql = `DELETE FROM PRODUCT WHERE product_id = '${req.body['DProductId']}'`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
    });
})
router.get('/read', (req,res) => {
  console.log('In /products file')
  con.query("SELECT * FROM PRODUCT", function (err, result, fields) {
  if (err) throw err;
  res.json(result);
  
});
})
export default router;

/*con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE PRODUCT (product_id INT AUTO_INCREMENT PRIMARY KEY,product_name varchar(100),product_price int,quantity_made int)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });*/

  /*con.connect(function(err) {
    if (err) throw err;
    var sql = "INSERT INTO PRODUCT (product_name ,product_price ,quantity_made) VALUES ('chain',100,10)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });*/
  
  
  /*con.connect(function(err) {
    if (err) throw err;
    var sql = "INSERT INTO PRODUCT (product_name ,product_price ,quantity_made) VALUES ('earrings',20,100)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });*/


  /*con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM PRODUCT", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });*/


  /*con.connect(function(err) {
    if (err) throw err;
    var sql = "DELETE FROM PRODUCT WHERE product_name = 'earrings' ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
    });
  });*/


  /*con.connect(function(err) {
    if (err) throw err;
    var sql = "UPDATE PRODUCT SET product_name = 'ring' WHERE product_id = 1";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  });*/


  /*con.connect(function(err) {
    if (err) throw err;
    var sql = "UPDATE PRODUCT SET product_price = 120 WHERE product_id = 1";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  });*/

  /*con.connect(function(err) {
    if (err) throw err;
    var sql = "UPDATE PRODUCT SET quantity_made = 150 WHERE product_id = 1";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  });*/



  /*con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM PRODUCT ORDER BY product_price DESC ", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });*/


  /*con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM PRODUCT ORDER BY product_price ", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });*/





  /*con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM PRODUCT WHERE product_name = 'ring' ", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });*/
  


  /*con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT material_name AS MaterialName ,mat_count AS QuantityRequired FROM to_make JOIN RAW_MATERIALS ON RAW_MATERIALS.material_id = to_make.mat_id JOIN PRODUCT ON to_make.prod_id = PRODUCT.product_id ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });*/









  
  /*
con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT DISTINCT material_name AS MaterialName, mat_count AS QuantityRequired FROM TO_MAKE JOIN PRODUCT ON TO_MAKE.prod_id = 1 JOIN RAW_MATERIAL ON RAW_MATERIAL.material_id = TO_MAKE.mat_id  ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
*/
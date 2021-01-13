import { con } from "../db/db.js"
import express from 'express';
var router = express.Router()

router.get('/', () => {
  console.log('Connected in /raw material file')
})
router.post('/create', (req, res) => {
  console.log('In /RawMaterial file')
    var sql = `INSERT INTO RAW_MATERIALS(material_name ,manufacturer , phone_no ,mat_price ,mat_quantity) VALUES ('${req.body['MaterialName']}', '${req.body['Manufacturer']}', '${req.body['MPhoneNum']}','${req.body['MaterialQuantity']}','${req.body['MaterialPrice']}') `;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("INSERTED");
      res.json("Success!")
    });
})

router.post('/update', (req,res) => {
  console.log('In /RawMaterial file')
 
    var sql = `UPDATE RAW_MATERIALS SET material_name = '${req.body['NewMaterialName']}' , manufacturer = '${req.body['NewManufacturer']}', phone_no = '${req.body['NewMPhoneNum']}' , mat_price = '${req.body['NewMaterialPrice']}' , mat_quantity = '${req.body['NewMaterialQuantity']}' WHERE material_id = '${req.body['MaterialID']}'`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  
})

router.post('/delete', (req,res) => {
  console.log('In /raw_materials file')
    var sql = `DELETE FROM RAW_MATERIALS WHERE material_id = '${req.body['DMaterialId']}'`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
    });
})
router.get('/read', (req,res) => {
  console.log('In /RawMaterial file')
  con.query("SELECT * FROM RAW_MATERIALS", function (err, result, fields) {
  if (err) throw err;
  res.json(result);
  
});
})

router.get('/read1', (req,res) => {
  console.log('In /raw_material name file read')
  con.query("SELECT material_name FROM RAW_MATERIAL", function (err, result, fields) {
  if (err) throw err;
  res.json(result);
  
});
})

export default router;
/*con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE RAW_MATERIALS (material_id int AUTO_INCREMENT PRIMARY KEY, material_name VARCHAR(100), manufacturer VARCHAR(100),phone_no varchar(100),mat_price int,mat_quantity int)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });*/

    /*con.connect(function(err) {
    if (err) throw err;
    var sql = "INSERT INTO RAW_MATERIALS(material_name ,manufacturer , phone_no ,mat_price ,mat_quantity) VALUES ('Beads','xyz','2562362267',100,100)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted, ID: " + result.insertId);
    });
  });*/

  /*con.connect(function(err) {
    if (err) throw err;
    var sql = "INSERT INTO RAW_MATERIALS(material_name ,manufacturer , phone_no ,mat_price ,mat_quantity) VALUES ('Strings','yzab','2562542267',110,50)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted, ID: " + result.insertId);
    });
  });*/


  /*con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM RAW_MATERIALS", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });*/




/*con.connect(function(err) {
    if (err) throw err;
    var sql = "DELETE FROM RAW_MATERIALS WHERE material_name = 'Strings' ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
    });
  });*/

  /*con.connect(function(err) {
    if (err) throw err;
    var sql = "DELETE FROM RAW_MATERIALS WHERE manufacturer = 'yzab' ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
    });
  });*/
  

  /*con.connect(function(err) {
    if (err) throw err;
    var sql = "UPDATE RAW_MATERIALS SET material_name = 'abc' WHERE material_id = 1";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  });*/



  /*con.connect(function(err) {
    if (err) throw err;
    var sql = "UPDATE RAW_MATERIALS SET manufacturer = 'Nivedha' WHERE material_id = 1";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  });*/


  /*con.connect(function(err) {
    if (err) throw err;
    var sql = "UPDATE RAW_MATERIALS SET mat_price= 12500 WHERE material_id = 1";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  });*/



  /*con.connect(function(err) {
    if (err) throw err;
    var sql = "UPDATE RAW_MATERIALS SET phone_no = '8951843018' WHERE material_id = 1";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  });*/

  /*con.connect(function(err) {
    if (err) throw err;
    var sql = "UPDATE RAW_MATERIALS SET mat_quantity = 25 WHERE material_id = 1";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  });*/

  /*con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM RAW_MATERIALS ORDER BY mat_price DESC ", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });*/


  /*con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM RAW_MATERIALS ORDER BY mat_price ", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });*/



  /*con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM RAW_MATERIALS WHERE material_name = 'abc' ", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });*/


  /*con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM RAW_MATERIALS WHERE manufacturer = 'xyz' ", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });*/


  //SEARCH BY NAME

/*con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM RAW_MATERIALS WHERE material_name='abc'", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });*/

/* SEARCH BY MANUFACTURER

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM RAW_MATERIAL WHERE manufacturer='xyz'", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });*/
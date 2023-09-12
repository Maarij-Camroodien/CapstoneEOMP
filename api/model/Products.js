const db = require("../config")

class Products{
fetchProducts(req, res){
    const query = `
    SELECT prodID, prodName,
    amount, Category,
    prodUrl
    FROM Products;
    `
    db.query(query,
       (err, results) =>{
        if (err) throw err
    res.json({
        status: res.statusCode,
        results,
    })  
    })
}
fetchShoes(req, res){
    const query = `
    SELECT * FROM Products
    WHERE Category = 'Shoes';
    `
    db.query(query,
       (err, results) =>{
        if (err) throw err
    res.json({
        status: res.statusCode,
        results,
    })  
    })
}
fetchTops(req, res){
    const query = `
    SELECT * FROM Products
    WHERE Category = 'Tops';
    `
    db.query(query,
       (err, results) =>{
        if (err) throw err
    res.json({
        status: res.statusCode,
        results,
    })  
    })
}
fetchBottoms(req, res){
    const query = `
    SELECT * FROM Products
    WHERE Category = 'Bottoms';
    `
    db.query(query,
       (err, results) =>{
        if (err) throw err
    res.json({
        status: res.statusCode,
        results,
    })  
    })
}
fetchPriceAsc(req, res){
    const query = `
    Select * From Products 
    ORDER BY CAST(amount AS DECIMAL(18,2)) ASC;
    `
    db.query(query,
       (err, results) =>{
        if (err) throw err
    res.json({
        status: res.statusCode,
        results,
    })  
    })
}
fetchPriceDesc(req, res){
    const query = `
    Select * From Products 
    ORDER BY CAST(amount AS DECIMAL(18,2)) DESC;
    `
    db.query(query,
       (err, results) =>{
        if (err) throw err
    res.json({
        status: res.statusCode,
        results,
    })  
    })
}
 fetchProduct(req,res){
    const query = `
    SELECT prodID, prodName,
    amount, Category,
    prodUrl
    FROM Products
    WHERE prodID = ${req.params.id};
    `
    const id = req.params.id
    db.query(query, [id],
        (err, result)=>{
            if (err) throw err
            res.json({
              status:  res.statusCode,
              result
             })
        })
 }
 registerProduct(req, res) {
    const data = req.body;
    const query = `
        INSERT INTO Products
        SET ?;
        `
    db.query(query, [data], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "New Product has been registered",
      });
    })
}
updateProduct(req,res){
    const query = `
    UPDATE Products
    SET ?
    WHERE prodID = ?
    `
    const data = req.body
    const id = req.params.id
    db.query(query, [data,id],
        (err)=>{
            if (err) throw err
            res.json({
              status:  res.statusCode,
              msg: "Products sucessfully updated"
             })
        })
 }
 deleteProduct(req,res){
    const query = `
    DELETE FROM Products
    WHERE prodID = ?;
    `
    const id = req.params.id
    db.query(query, [id],
        (err, )=>{
            if (err) throw err
            res.json({
              status:  res.statusCode,
              msg: 'Product was deleted'
             })
        })
 }
}
module.exports = Products
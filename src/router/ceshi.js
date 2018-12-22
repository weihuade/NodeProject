var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("nodeproject");
   let ObjectID = require('mongodb').ObjectID;
     var whereStr = {_id:ObjectID("5c1cfcdce3a02d1560b6905e")};  // 查询条件
    dbo.collection("username").find(whereStr).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
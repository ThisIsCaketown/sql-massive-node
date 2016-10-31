var app = require('../server.js');
var db = app.get('db');

module.exports = {
  GetAll: function(req, res, next){
    db.read_products(function(err, products){
      if(err){
        res.status(500).json(products)
      }
      else{
      res.status(200).json(products);
    }
    })
  },

  GetOne: function(req, res, next){
    db.read_product([req.params.id], function(err, products){
      if(err){
        res.status(500).json(products)
      }
      else{
      res.status(200).json(products);
    }
    })
  },

  Create: function(req, res, next){
    var product = req.body
    db.create_product([product.name, product.description, product.price, product.imageurl], function(err, products){
      if(err){
        res.status(500).json(products)
      }
      else{
      res.status(200).json(products);
    }
    })
  },

  Update: function(req, res, next){
    var product = req.body
    db.update_product([product.description, product.id], function(err, products){
      if(err){
        res.status(500).json(products)
      }
      else{
      res.status(200).json(products);
    }
    })
  },

  Delete: function(req, res, next){
    var product = req.body
    db.delete_product([product.id], function(err, products){
      if(err){
        res.status(500).json(products)
      }
      else{
      res.status(200).json(products);
    }
    })
  }


}

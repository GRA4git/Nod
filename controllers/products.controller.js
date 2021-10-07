
   
module.exports.productsController = {
    getProducts: (req, res) => {
      res.json("get products test");
    },
  
    getProductsId: (req, res) => {
      res.json(`get products ID:${req.params.id} test`);
    },
  
    createProducts: (req, res) => {
      res.json("post products test");
    },
  
    deleteProductsId: (req, res) => {
      res.json(`delete products ID:${req.params.id} test`);
    },
  };
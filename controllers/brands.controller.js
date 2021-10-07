module.exports.brandsController = {
  getBrands: (req, res) => {
    res.json("get brands test");
  },

  createBrands: (req, res) => {
    res.json("post brands test");
  },

  deleteBrandsId: (req, res) => {
    res.json(`delete brands test`);
  },
};
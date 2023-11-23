import { getConnection, sql, querys } from "../database/index";

export const playerasHome = async (req, res, next) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getPlayeras);

    const infoCart = await pool.request().query(querys.getCart)

    res.render("index", {
      result,
      infoCart
    });

  } catch (error) {
    
    res.status(500);
    res.send(error.message);
  
  }
};

export const playerasProducts = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .query(querys.getProductById);
    res.render("products", {
      result,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const addProduct = async (req, res) => {
  const {id} = req.params
  let quantity = req.body.quantity
  let size = req.body.size

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .input("quantity", sql.Int, quantity)
      .input("size", sql.VarChar, (size.substr(-1,1)))
      .query(querys.addCart);
    
    res.redirect("/playeras")
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }

};

export const playerasAbout = async (req, res, next) => {
  res.render("about", {
    title: "Nosotros",
  });
};

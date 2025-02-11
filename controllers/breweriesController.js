import { connection } from "../db/connection.js";

const breweriesController = {
  index(req, res) {
    const sqlIndex = "SELECT * FROM breweries";

    connection.query(sqlIndex, (err, results) => {
      if (err)
        return res.status(500).json({ status: "KO", message: err.sqlMessage });
      return res.json(results);
    });
  },

  store(req, res) {
    const { brewery, nation } = req.body;

    // # Input Empty
    if (!brewery || !nation)
      return res
        .status(400)
        .json({ status: "KO", message: "Input Cannot be Empty" });

    const sqlStore =
      "INSERT INTO `breweries` (`brewery`, `nation`) VALUES (?, ?);";

    connection.query(sqlStore, [brewery, nation], (err) => {
      if (err)
        return res.status(500).json({ status: "KO", message: err.sqlMessage });

      return res
        .status(201)
        .json({ status: "OK", message: "Created Succesfully" });
    });
  },

  //   update() {},
  //   modify() {},
  //   destroy() {},
};

export { breweriesController };

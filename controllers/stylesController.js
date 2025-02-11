import { connection } from "../db/connection.js";

const stylesController = {
    index(req, res) {
        const sqlIndex = "SELECT * FROM styles";
    
        connection.query(sqlIndex, (err, results) => {
          if (err)
            return res.status(500).json({ status: "KO", message: err.sqlMessage });
          return res.json(results);
        });
      },
    
      store(req, res) {
        const { style, fermentation } = req.body;
    
        // # Input Empty
        if (!style || !fermentation)
          return res
            .status(400)
            .json({ status: "KO", message: "Input Cannot be Empty" });
    
        const sqlStore =
          "INSERT INTO `styles` (`style`, `fermentation`) VALUES (?, ?);";
    
        connection.query(sqlStore, [style, fermentation], (err) => {
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

export { stylesController };

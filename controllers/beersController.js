import { connection } from "../db/connection.js";

const beersController = {
  index(req, res) {
    const sqlIndex = `
    SELECT beers.id, beers.name, beers.liked, beers.image, beers.alcohol_degrees, beers.size, beers.brewery_id, breweries.brewery, breweries.nation, beers.style_id, styles.style, styles.fermentation
      FROM beers
      INNER JOIN breweries
      ON beers.brewery_id = breweries.id
	    INNER JOIN styles
      ON beers.style_id = styles.id
    `;

    connection.query(sqlIndex, (err, results) => {
      if (err)
        return res.status(500).json({ status: "KO", message: err.sqlMessage });
      return res.json(results);
    });
  },

  show(req, res) {
    const beerId = parseInt(req.params.id);
    if (isNaN(beerId) || beerId < 1)
      return res
        .status(400)
        .json({ status: "KO", message: "Invalid Parameter" });

    const sqlShow = `
    SELECT beers.id, beers.name, beers.image, beers.alcohol_degrees, beers.size, beers.liked, breweries.brewery, breweries.nation, styles.style, styles.fermentation
      FROM beers
      INNER JOIN breweries
      ON beers.brewery_id = breweries.id
	    INNER JOIN styles
      ON beers.style_id = styles.id
      WHERE beers.id = ?
    `;

    connection.query(sqlShow, [beerId], (err, results) => {
      if (err)
        return res.status(500).json({ status: "KO", message: err.sqlMessage });
      if (!results.length)
        return res
          .status(404)
          .json({ status: "KO", message: "Doctor Not Found" });

      return res.json(results[0]);
    });
  },

  //   store() {},
  //   update() {},
  //   modify() {},
  //   destroy() {},
};

export { beersController };

import { connection } from "../db/connection.js";

/**
 *
 * Ritorna Vero o Falso se l'Email è valida, ovvero se contiene esattamente una @ e un .
 *
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

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
    const sqlShow = `
    SELECT beers.id, beers.name, beers.image, beers.alcohol_degrees, beers.size, beers.liked, breweries.brewery, breweries.nation, styles.style, styles.fermentation
      FROM beers
      INNER JOIN breweries
      ON beers.brewery_id = breweries.id
	    INNER JOIN styles
      ON beers.style_id = styles.id
    `;

    connection.query(sqlShow, (err, results) => {
      if (err)
        return res.status(500).json({ status: "KO", message: err.sqlMessage });

      return res.json(results);
    });
  },

  //   store() {},
  //   update() {},
  //   modify() {},
  //   destroy() {},
};

export { beersController };

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
    return res.json("Birre");
  },

  //   show() {},
  //   store() {},
  //   update() {},
  //   modify() {},
  //   destroy() {},
};

export { beersController };

exports.employeeValidator = (req, res, next) => {
  //checking name
  req
    .check("prenom", "prenom non valid!")
    .notEmpty()
    .isLength({
      max: 30,
    })
    .withMessage("le prénom doit contenir 30 caractères au maximum!");

  //checking last-name
  req
    .check("nom", "nom non valid!")
    .notEmpty()
    .isLength({
      max: 30,
    })
    .withMessage("le nom doit contenir 30 caractères au maximum!");

  //checking poste
  req
    .check("poste", "poste non valid!")
    .notEmpty()
    .isLength({
      max: 30,
    })
    .withMessage("le nom de poste doit contenir 30 caractères au maximum!");

  //phone number validator
  // req
  //   .check("poste", "poste non valid!")
  //   .notEmpty()
  //   .isLength({
  //     max: 30,
  //   })
  //   .withMessage("le nom de poste doit contenir 30 caractères au maximum!");

  //return error
  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }

  next();
};

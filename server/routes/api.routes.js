const express = require("express");
const router = express.Router();
const MeetingP = require("../models/map.model");

router.get("/details/:city", (req, res) => {
  const cityM = req.params.city;
  console.log("YAY");
  console.log(MeetingP.find);
  MeetingP.find({ city: cityM })
    .then(t => {
      console.log("SE HA CREADO " + t);
      res.json(t);
    })
    .catch(err => console.log(err));
});

module.exports = router;

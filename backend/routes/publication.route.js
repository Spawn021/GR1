const express = require("express");
const router = express.Router();
const { Publication } = require("../model/publication");

router.get("/", async (req, res) => {
  const publications = await Publication.find();
  res.status(200).json(publications);
});

router.get("/create", async (req, res) => {
  let publication1 = new Publication({
    year: "2022",
    names: ["Author1", "Author2"],
  });
  let publication2 = new Publication({
    year: "2021",
    names: ["Author3"],
  });

  await Publication.insertMany([publication1, publication2]);
  const publications = await Publication.find();
  res.json({ publications });
});

module.exports = router;

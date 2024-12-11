const express = require("express");
const axios = require("axios");
const app = express();

const API_URL = "https://trefle.io/api/v1/plants";
const API_KEY = "AdA095MXx3Cg_Ly-GZUMijEvQ6NEHQRsb4nQN-ZNF4g";

app.get("/plants", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}?token=${API_KEY}`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

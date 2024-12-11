import React, { useState } from "react";
import axios from "axios";
import "./../styles/PlantNet.css";

const PlantNet = () => {
  const [image, setImage] = useState(null);
  const [plantData, setPlantData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = "https://my-api.plantnet.org/v2/identify/all";
  const API_KEY = "2b10LxDf1e8iHgxcTuCd62c2Se";

  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  const identifyPlant = async () => {
    if (!image) {
      alert("Please upload an image first!");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("images", image);
      formData.append("organs", "leaf");

      console.log("Making request to API...");
      console.log("API URL:", `${API_URL}?api-key=${API_KEY}`);
      console.log("FormData:", formData);
      console.log("Headers:", {
        "Content-Type": "multipart/form-data",
      });

      const response = await axios.post(
        `${API_URL}?api-key=${API_KEY}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("API Response:", response.data);
      setPlantData(response.data);
    } catch (error) {
      console.error("Error identifying plant:", error);
      setError("Failed to identify the plant. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="plantNet">
      <h2>Idenitfy Your Plant!</h2>
      <div className="interactiveStuff">
        <input type="file" onChange={handleImageUpload} accept="image/*" />
        <button onClick={identifyPlant}>Identify Plant</button>

        {loading && <p>Identifying plant...</p>}

        {error && <p style={{ color: "red" }}>{error}</p>}

        {plantData && (
          <div>
            <h3>Identification Results:</h3>
            <ul>
              {plantData.results.map((result, index) => (
                <li key={index}>
                  <strong>{result.species.scientificNameWithoutAuthor}</strong> (
                  {result.species.commonNames?.join(", ") || "No common name"})
                  <br />
                  Confidence: {(result.score * 100).toFixed(2)}%
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlantNet;

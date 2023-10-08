// client/src/components/GardeningTipsList.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const GardeningTipsList = () => {
  const [gardeningTips, setGardeningTips] = useState([]);

  useEffect(() => {
    axios
      .get("/api/gardening-tips")
      .then((response) => setGardeningTips(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Gardening Tips</h2>
      <ul>
        {gardeningTips.map((tip) => (
          <li key={tip._id}>{tip.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default GardeningTipsList;

// client/src/components/AddGardeningTipForm.js
import React, { useState } from "react";
import axios from "axios";

const AddGardeningTipForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/tips", {
        title,
        description,
        // user information can be added based on authentication
      });

      console.log("Gardening tip added:", response.data);
    } catch (error) {
      console.error("Error adding gardening tip:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label>Description:</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <button type="submit">Add Gardening Tip</button>
    </form>
  );
};

export default AddGardeningTipForm;

// src/services/api.js
const API_BASE_URL = "http://localhost/SpaceX/SpaceX.php";

const fetchData = async (filters) => {
  // Convert filters object to query parameters
  const queryParams = new URLSearchParams(filters).toString();

  const response = await fetch(`${API_BASE_URL}?${queryParams}`);

  if (!response.ok) {
    // Handle errors if needed
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  return data;
};

export default fetchData;

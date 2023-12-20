// src/pages/ShowData.js
import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import DataGrid from "./DataGrid";
import fetchData from "../Services/api";

const ITEMS_PER_PAGE = 10;

const ShowData = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    status: "",
    original_launch: "",
    type: "",
  });
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const result = await fetchData(filters);
        setData(result);
        setCurrentPage(1); 
      } catch (error) {
       
        console.error("Error fetching data:", error.message);
      }
    };

    fetchDataAsync();
  }, [filters]);

  const resetFilters = () => {
    fetchData().then((result) => {
      setData(result);
      setCurrentPage(1); 
    });
    setFilters({ status: "", original_launch: "", type: "" });
  };

  
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const displayedData = data.slice(startIndex, endIndex);

  return (
    <div>
      <SearchForm setFilters={setFilters} resetFilters={resetFilters} />
      <DataGrid data={displayedData} />

      {/* Pagination controls */}
      <div className="pagination">
        <button
          onClick={() =>
            setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
          }
          disabled={currentPage === 1}
        >
          <span>Previous Page</span>
        </button>
        <span className="paginationtext"> &lt; Page {currentPage} &gt; </span>
        <button
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          disabled={endIndex >= data.length}
        >
          <span>Next Page</span>
        </button>
      </div>
    </div>
  );
};

export default ShowData;

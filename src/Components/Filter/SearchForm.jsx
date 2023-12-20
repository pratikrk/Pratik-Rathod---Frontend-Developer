
import React, { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({ setFilters, resetFilters }) => {
  const [formValues, setFormValues] = useState({
    status: "",
    original_launch: "",
    type: "",
  });

  const handleInputChange = (e) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };
  //   const handleInputChange = (e) => {
  //     setFormValues((prevValues) => ({
  //       ...prevValues,
  //       [e.target.name]:
  //         e.target.type === "date"
  //           ? e.target.valueAsDate.toISOString().split("T")[0]
  //           : e.target.value,
  //     }));
  //   };
  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredValues = removeEmptyValues(formValues);
    setFilters(filteredValues);
  };

  const handleReset = () => {
    setFormValues({ status: "", original_launch: "", type: "" });
    resetFilters();
  };

  const removeEmptyValues = (obj) => {
    return Object.fromEntries(
      Object.entries(obj).filter(([_, value]) => value !== "")
    );
  };

  return (
    <form className="search-form text-center mt-5 " onSubmit={handleSubmit}>
      <div className="col-md-4 d-inline-block ps-1 pe-1">
        <label htmlFor="status" className="form-label ">
          Status:
        </label>
        <input
          type="text"
          className="form-control "
          id="status"
          name="status"
          placeholder="Enter status"
          value={formValues.status}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-md-4 d-inline-block ps-1 pe-1">
        <label htmlFor="original_launch" className="form-label">
          Original Launch Date:
        </label>
        <input
          type="text"
          className="form-control"
          id="original_launch"
          name="original_launch"
          placeholder="Enter original launch"
          value={formValues.original_launch}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-md-4 d-inline-block ps-1 pe-1">
        <label htmlFor="type" className="form-label">
          Type:
        </label>
        <input
          type="text"
          className="form-control"
          id="type"
          name="type"
          placeholder="Enter type"
          value={formValues.type}
          onChange={handleInputChange}
        />
      </div>
      <div className="button-container mt-3 ">
        <button type="submit" className=" Sbutton ">
          Apply Filters
        </button>
        <button type="button" className=" Sbutton " onClick={handleReset}>
          Reset Filters
        </button>
      </div>
    </form>
  );
};

export default SearchForm;

import React from "react";
import SearchBar from "../components/common/SearchBar"; // Ensure correct import

const AllPages = () => {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    // You can implement search logic here (e.g., filter blogs, fetch results, etc.)
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: "90vh" }}>
      <h1>All Pages</h1>

      {/* Search Bar Component */}
      {/* <SearchBar onSearch={handleSearch} /> */}
    </div>
  );
};

export default AllPages;

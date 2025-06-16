import React from "react";

export const YearFilter = () => {
  return (
    <div>
      <label htmlFor="year">Year: </label>
      <select className="filterSelect" name="yearFilter" id="year">
        <option value="all">All</option>
      </select>
    </div>
  );
};

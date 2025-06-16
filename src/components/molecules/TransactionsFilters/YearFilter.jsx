export const YearFilter = ({ selectedYear, onYearChange }) => {
  return (
    <div>
      <label htmlFor="year">Year: </label>
      <select
        className="filterSelect"
        id="year"
        value={selectedYear}
        onChange={(e) => onYearChange(e.target.value)}
      >
        <option value="all">All</option>
        <option value="2025">2025</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
};

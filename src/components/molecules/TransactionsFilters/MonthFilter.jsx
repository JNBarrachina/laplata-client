export const MonthFilter = ({ selectedMonth, onMonthChange, isDisabled }) => {
  return (
    <div>
      <label htmlFor="month">Month: </label>
      <select
        className="filterSelect"
        id="month"
        value={selectedMonth}
        onChange={(e) => onMonthChange(e.target.value)}
        disabled={isDisabled}
      >
        <option value="all">All</option>
        <option value="01">January</option>
        <option value="02">February</option>
        <option value="03">March</option>
        <option value="04">April</option>
        <option value="05">May</option>
        <option value="06">June</option>
        <option value="07">July</option>
        <option value="08">August</option>
        <option value="09">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  );
};

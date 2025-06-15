import React from 'react'

export const YearFilter = () => {
    return (
        <div>
            <label htmlFor="">Year: </label>
            <select name="yearFilter" id="year">
                <option value="all">All</option>
            </select>
        </div>
    )
}

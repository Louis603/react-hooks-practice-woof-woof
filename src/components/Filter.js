import React, {useState}from 'react'
// click function changes 
function Filter({handleFilter}) {
    const [filter, setFilter] = useState(false)

    handleFilter(filter)

    function handleClick() {
        setFilter((filter) => !filter)
    }

  return (
    <div id="filter-div">
        <button 
        onClick={handleClick}
        id="good-dog-filter"
        >Filter good dogs: {filter?'ON' : 'OFF'}</button>
      </div>
  )
}

export default Filter
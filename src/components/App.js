import React, {useState, useEffect} from "react";
import Filter from "./Filter";
import DogList from "./DogList";
import DogInfo from './DogInfo'

//IN PATCH CALLBACK ON RES TO UPDATE ARRAY WITH MAP TO CHANGE BOOLEAN OF CERTAIN DOG


function App() {
  const [dogArr, setDogArr] = useState([])
  const [selectedId, setSelectedId] = useState(1)
  const [ filterOnOff, setFilterOnOff]  = useState(false)

  useEffect(() => {
    fetch("http://localhost:3001/pups")
    .then(res => res.json())
    .then(data => setDogArr(data))
  }, [selectedId])

  function handleDogBoolean(data) {
    setDogArr(dogArr.map(dog => {
      if (dog.id === data.id) {
        return data
      }else return dog
    }))
  }

  function handleId(clickedId) {
    setSelectedId(clickedId)
  }

  function handleFilter(data) {
    setFilterOnOff(data)
  }

  

  return (
    <div className="App">
      <Filter handleFilter={handleFilter}/>
      <DogList dogArr={dogArr} handleId={handleId} filterOnOff={filterOnOff}/>
      <DogInfo selectedId={selectedId} handleDogBoolean={handleDogBoolean}/>
    </div>
  );
}

export default App;

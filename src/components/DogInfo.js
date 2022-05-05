import React, {useEffect, useState} from 'react'
//click on button changes state boolean use state to update in patch
function DogInfo({selectedId, handleDogBoolean}) {

  const [displayedDog, setDisplayedDog] = useState({})
  const [goodDog, setGoodDog] = useState('')

  useEffect(() => {
    fetch(`http://localhost:3001/pups/${selectedId}`)
    .then(res => res.json())
    .then(data => {
      setGoodDog(data.isGoodDog)
      setDisplayedDog(data)})
  }, [selectedId])

  function handleGood(e) {
    setGoodDog(!goodDog)

    // fetch(`http://localhost:3001/pups/${selectedId}`, {
    //   method: 'PATCH',
    //   body: JSON.stringify({ isGoodDog: goodDog,}),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // })
    //   .then(res => res.json())
    //   .then(data => console.log(data))
  }

  useEffect(() => {
    fetch(`http://localhost:3001/pups/${selectedId}`, {
      method: 'PATCH',
      body: JSON.stringify({ isGoodDog: goodDog,}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(res => res.json())
      .then(data => handleDogBoolean(data))
  }, [goodDog, selectedId])


  return (
    <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          <img src={displayedDog.image} alt="picture_of_dog"/>
          <h2>{displayedDog.name}</h2>
          <button onClick={handleGood}>
          {goodDog ? "Good Dog!" : "Bad Dog!"}
          </button>
        </div>
      </div>
  )
}

export default DogInfo
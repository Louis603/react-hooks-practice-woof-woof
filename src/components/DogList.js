import React from 'react'
import DogBar from './DogBar'

//mmap data into bar

function DogList({dogArr, handleId, filterOnOff}) {
    const filteredDogs = dogArr.filter(dog => {
        if (filterOnOff) {
            return dog.isGoodDog === true
        }else return true
    })
    const dogMaker = filteredDogs.map(dog => {
        return (
            <DogBar 
            handleId={handleId}
            key={dog.id}
            dog={dog}/>
        )
    })
  return (
    <div id="dog-bar">
        {/* {dogbar span } */}
        {dogMaker}
        </div>
  )
}

export default DogList
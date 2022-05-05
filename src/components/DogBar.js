import React from 'react'
//span tags
function DogBar({dog, handleId}) {
    
    const {name, id} = dog

    function handleClick(){
        handleId(id)
    }
  return (
    <span
    onClick={handleClick}
    >{name}
    </span>
  )
}

export default DogBar
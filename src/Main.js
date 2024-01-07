import React, { useState } from 'react'
import Posts from './posts'



export default function Main(props) {
 



  let button1_ref = React.createRef()

  function Hide() {
    button1_ref.current.style.display = "none"
  }
  function Open() {
    button1_ref.current.style.display = "flex"
  }


  

  return (

    <div>
      
     

      <div ref={button1_ref}>        <Posts posts={props.data} /> </div>
    </div>


  )
}

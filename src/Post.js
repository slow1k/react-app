import React, { useState } from 'react'

export default function Post(props) {
  let title_ref = React.createRef()

function ChangeFont(){

title_ref.current.style.fontSize="40px"
}

function returnFont(){
  title_ref.current.style.fontSize="32px"
}


const[likes, setLikes]=useState(0)
const[Dislikes, setDisLikes]=useState(0)

function Like(){

  setLikes(likes +1)
}

function DisLike(){

  setDisLikes(Dislikes +1)
}


  return (
   <div className='image'>
<h1 ref={title_ref } onMouseEnter={ChangeFont} onMouseLeave={returnFont}>{props.postTitle}</h1>
<p>{props.text}</p>

<p>лайки:{likes}</p>
<p>дислайки:{Dislikes}</p>
<button onClick={Like} className='but2 but'>поставить лайк</button>
<button onClick={DisLike} className='but1 but'> поставить дислайк</button>
<img src="delete.png" alt="" onClick={() =>props.deletePost(props.id)} className='del'/>
   </div>
  )
}

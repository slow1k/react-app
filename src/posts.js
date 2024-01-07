import React, { useState } from 'react'
import Post from './Post'


export default function Posts(props) {
  
let postData = props.posts

const[posts_data, setPosts]= useState(postData)
const[text, setText]= useState("")
const[postTitle , setTitle]= useState("")

const addNewPost = () => {
  const newPost = {
    id:Date.now(),
    text,
    postTitle
  }

setPosts([...posts_data, newPost])
setText("")
setTitle("")
}


let posts = posts_data.map(p =>{
  return <Post postTitle={p.postTitle} text={p.text}  id={p.id} deletePost={deletePost}/>
})

function deletePost(post_id) {
setPosts(posts_data.filter(p => p.id !== post_id))

}




  return (
    <div>
     <form action=''>
      <div className='form-post'>
        <h1>создать пост</h1>
<div className='form-input'>
<input type='text' value={postTitle} onChange={e => setTitle(e.target.value)} placeholder='название поста'></input>
</div>
<div className='form-input'>
  <textarea type='text' value={text} onChange={e => setText(e.target.value)} placeholder='описание поста '></textarea>
</div>
<div>
  <button type='button' onClick={addNewPost} className='enter'> добавить пост</button>
</div>
      </div>
      </form> 
{posts}
    </div>
  )
}

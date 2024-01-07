import React from 'react'
import Profile from './Profile'

export default function Profiles(props) {
let profiles = props.data.users.map(f =>{
  return <Profile login={f.login} name={f.name} subs={f.subs} description={f.description} />
})


  return (
    <div>
      {profiles}
    </div>
  )
}

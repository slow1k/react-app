import React from 'react'

export default function Profile(props) {
    return (
        <div>

            <div class="shapka">
                
            </div>
            <div class="ava">
                <img src="user icon.png" alt="" />
            </div>
            <div class="btn">
                <button>read</button>
            </div>
            <div class="text">
                <div class="nik">
                    <h1>    {props.login}    </h1>
                </div>
                <div class="email">
                    <p> {props.name} </p>
                </div>
                <div class="info">
                    <p>{props.description}</p>
                    <p>{props.subs}</p>

                </div>

            </div>

        </div>
    )
}

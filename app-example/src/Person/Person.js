import React from 'react'

var Person = (props)=> {
    return (
        <div>
            <p><b>The name of this person is: {props.name} and the age is {props.age}</b></p>
            <p>{props.children}</p>
        </div>
    )
    
}

export default Person
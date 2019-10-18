import React, {Component} from "react";

class PersonClass extends Component {
    state = {
        persons: [{name: 'Array', age: '22'}]
    }

    switchNameHandler = ()=>{
        console.log('This element was clicked!!')
    }

    render(){
        return (
            <div>
                <p><b>The name of this person is: {this.state.persons[0].name} and the age is {this.state.persons[0].age}</b></p>
                <button onClick={this.switchNameHandler}>Change</button>
            </div>
        )
    }
}

export default PersonClass;

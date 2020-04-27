import React from 'react'
import Stateless from '../sub/Stateless'


//for stateless example

export default class Sample extends React.Component{
    state={
        name1:{
            name:"Darshan",
            email:"darshanmesta47@yahoo.com"
        },
        name2:{
            name:"Suraj",
            email:"surajmesta47@gmail.com"
        }
    }


    render(){
        return(
            <div>
                <Stateless name1={this.state.name1} name2={this.state.name2}/>

            </div>
        )
    }
}
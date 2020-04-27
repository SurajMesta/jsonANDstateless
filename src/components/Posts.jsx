import React from 'react'
import Axios from 'axios'
const URI="https://jsonplaceholder.typicode.com"

//stateless component
const Post=(props)=>{
    const {userId, id, title, body} =props.datas

    return(
        
           
                <div className="col-sm-4">
                    <div className="panel panel-info" style={{width:"350px", height:"350px"}}>
                        <div className="panel-heading">
                            <div className="panel-title">
                             <h2 className="text-center">Id = {id}</h2>
                            </div>
                        </div>

                        <div className="panel-body">
                         <p>{title}</p>

                         <div>
                         <p>{body}</p>
                         </div>
                        </div>

                        <div className="panel-footer">
                        <p>UserId= {userId}</p>
                        </div>
                    </div>
                </div>
          
       
    )

}

export default class Posts extends React.Component{

    state={
        posts:[]
    }

    componentDidMount(){
      Axios.get(`${URI}/posts`).then(result=>{
          let posts=result.data
          console.log(result.data)

          this.setState({
              posts
          })
      }).catch(err=>{
          console.log(err)

      })
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h2 className="jumbotron text-center">
                            Welcome to the Posts Section
                        </h2>
                    </div>
                </div>

                <div className="row">
                    {this.state.posts.map((item)=>{
                        return(
                            <Post key={item.id} datas={item}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}
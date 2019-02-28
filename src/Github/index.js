import React, {Component} from 'react';
import axios from 'axios';
import './index.css'

class Github extends Component{
    state = { user: 'noeypatt', data:''}

   componentDidMount = () => this.fetchUser(this.state.user)

   fetchUser = (USER) => {
       axios.get(`https://api.github.com/users/${USER}`)
           .then(response => {
               this.setState({data: response.data})
               console.log(response.data)
           })
   }

    render(){
        const {data} = this.state
       if (data)

        return(
            <div className = "git">
                <h1 className = "forn">Hello</h1>
                <img  src={data.avatar_url} alt="avatar" width="50%"/>
                <h3>ID : {data.id} User: {data.name} '🍕' </h3> 
            
            </div> 
            );

       return (<div>.</div>);
    
    }
}
export default Github;
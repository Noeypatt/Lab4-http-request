import React, { Component } from 'react'
import axios from 'axios';

class Wather extends Component {

    state = {
        user: '0b241b0b1abaffa11dc195ccb313a684',
        data: ''
    }

    componentDidMount = () => {
        this.fetchUser(this.state.user)
    }

    fetchUser = (USER) => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${USER}`)
            .then(response => {
                this.setState({ data: response.data })
                console.log(response.data)
            })
    }

    render() {
        const { data } = this.state
        if (data)
            return (
            <div className = "w"><h1 className ="forn">Today</h1><img src = "https://www.wonderfulpackage.com/uploads/moxie/Article/%E0%B8%A2%E0%B8%B8%E0%B9%82%E0%B8%A3%E0%B8%9B/London/111.jpg" width = "50%"/>
            <div><p> Name:{data.name} City:{data.sys.country} 
            <br/>Longitude: {data.coord.lon}  Latitude: {data.coord.lat} 
            </p></div>
           </div> );

        return (<div>.</div>);
    }
}

export default Wather

import React from 'react';
import cardBack from '../assets/cardbackground.jpeg'
import logo from '../assets/visalogo.png'

export default class CreditCard extends React.Component {
    render() {
        return <div style={{ backgroundImage: `url(${cardBack})`, width: "650px", height: "400px", borderRadius: "5px" }}>
            <img src={logo} alt="logo" style={{ position: "relative", top: "30px", left: "200px" }}></img>

            <div style={{ position: "relative", top: "50px", right: "200px" }}>
                <br></br>
                <label>CARD NUMBER</label>
            </div>

            <div style={{ position: "relative", top: "150px", right: "210px" }}>
                <br></br>
                <label>Card Holder</label>
            </div>

            <div style={{ position: "relative", top: "130px", left: "200px" }}>
                <label>Expires</label>
                <br></br>
                <label>{this.props.expdate}</label>
            </div>

        </div>
    }
}
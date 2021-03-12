import React, { useState } from 'react';
import CreditCard from './creditCard';

function CardForm() {

    const [cardNumber, setCardNumber] = useState("");
    const [cardHolder, setCardHolder] = useState("");
    const [expiry, setExpiry] = useState("MM/YY");

    const updateNumber = (event) => {
        setCardNumber(event.target.value);
    };

    const updateHolder = (event) => {
        setCardHolder(event.target.value);
    };

    const updateExpiry = (event) => {
        setExpiry(event.target.value);
    };

    const submitData = (event) => {
        console.log("http request");
        console.log(event.value);
    }


    return (
        <div>
            <CreditCard onHandleNumber={cardNumber} />
            <form>
                <p>Card number: {cardNumber}</p>
                <label>Card number</label>
                <input type="text" id="cardNumber" value={cardNumber} onChange={updateNumber}></input>

                <br></br>
                <p>Card holder: {cardHolder}</p>
                <label>Card holder</label>
                <input type="text" id="cardHolder" value={cardHolder} onChange={updateHolder}></input>

                <br></br>
                <p>Expiration date: {expiry}</p>

                <button onClick={submitData}>Submit</button>
            </form>
        </div>

    )
}
export default CardForm;
import React from "react"

// import scooby from './imgs/scooby.jpg'

function ContactCard(props) {
    return (
        <div className="contact-card">
            <img src={props.contact.imgUrl} alt="Image" />
            <h3>Mr. {props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>
    )
}

export default ContactCard
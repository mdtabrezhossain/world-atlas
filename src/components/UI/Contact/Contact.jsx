import React from "react";
import "./Contact.css";
export default function Contact() {
    return (
        <>
            <div className="form-container">
                <p className="form_title font-bold">Contact Us</p>
                <form action="" className="form">
                    <input type="text" className="form_input" placeholder="Enter Your Name" required />
                    <input type="text" className="form_input" placeholder="Enter Your Email" required />
                    <textarea
                        className="form_input"
                        rows="6"
                        placeholder="Drop Your Thoughts Here"
                        autoComplete="off"
                    ></textarea>
                    <button className="form_button">Alright</button>
                </form>
            </div>
        </>
    )
}



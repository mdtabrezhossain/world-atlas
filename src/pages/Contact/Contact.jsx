import React, { useActionState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Contact.css";


export default function Contact() {
    const [state, formAction, isPending] = useActionState(formSubmit);
    const navigate = useNavigate();
    const theme = useSelector((state) => state.themeReducer.theme);

    function formSubmit(prevFormData, formData) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const userEmail = formData.get("userEmail");
                const userPassword = formData.get("userPassword");
                const userMessage = formData.get("userMessage");
                const user = {
                    email: userEmail,
                    password: userPassword,
                    message: userMessage || ""
                }
                resolve(console.log(user));
            }, 1000);
            navigate("/home");
        });
    }
    return (
        <>
            <div className={`form-container ${theme}`}>
                <p className="form_title font-bold">Contact Us</p>
                <form action={formAction} className="form">
                    <input name="userEmail" type="text" className={`form_input ${theme}`} placeholder="Enter Your Email" required />
                    <input name="userPassword" type="text" className={`form_input ${theme}`} placeholder="Enter Your Password" required />
                    <textarea
                        name="userMessage"
                        className={`form_input ${theme}`}
                        rows="6"
                        placeholder="Drop Your Thoughts Here"
                        autoComplete="off"
                    ></textarea>
                    <button className={`form_button ${theme}`} disabled={isPending}>Done</button>
                </form><br />
                <p>Note: Do Not Worry Your Data Will Not Be Submitted. This Is A Dummy Form {"😄"}</p>
            </div >
        </>
    )
}



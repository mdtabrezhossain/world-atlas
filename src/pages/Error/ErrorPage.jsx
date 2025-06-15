import React from 'react';
import { useRouteError, useNavigate } from 'react-router-dom';
import "./ErrorPage.css";

export default function ErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate();

    function handleClick() {
        navigate(-1);
    }
    return (
        <>
            <div className="error-container">
                <p>Oops! Something went wrong.</p>
                {error && (
                    <div>
                        <p><strong>Status:</strong> {error.status}</p>
                        <p><strong>Message:</strong> {error.statusText}</p>
                    </div>
                )}
                <button onClick={handleClick}>Go Back</button>
            </div>
        </>
    );
}

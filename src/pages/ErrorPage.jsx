import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    return (
        <>
            <p>Oops! Something went wrong.</p>
            {error && (
                <div>
                    <p><strong>Status:</strong> {error.status}</p>
                    <p><strong>Message:</strong> {error.statusText}</p>
                </div>
            )}
        </>
    );
}

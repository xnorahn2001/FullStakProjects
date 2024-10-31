// ErrorPage.jsx
import React from 'react';
import { useHistory } from 'react-router-dom';

const ErrorPage = () => {
    const history = useHistory();

    const handleGoBack = () => {
        history.goBack();
    };

    return (
        <div className="error-container">
            <h1>Oops! Something went wrong.</h1>
            <p>We Couldn't find the page You're looking for.</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default ErrorPage;
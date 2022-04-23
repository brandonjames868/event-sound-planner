import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <button
            className="btn btn-success btn-block login-btn rounded shadow"
            onClick={() => loginWithRedirect()}
        >
            Log In/Register
        </button>
    );
};

export default LoginButton;
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import './styles.LoginPage'

const LoginPage = () => {
    return (
        <div className='LoginPage'>
            <h1>This is login page!</h1>
            <div className='LoginPageContainer'>
                <div className='LoginPageElement'>
                    <TextField id="outlined-basic" label="email" variant="outlined" />
                </div>
                <div className='LoginPageElement'>
                    <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" />
                </div>
                <div className='LoginPageElement'>
                    <Link to='/main'>
                        <Button variant="outlined">
                            <span className='LoginPageButtonText'>Log In!</span>
                        </Button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default LoginPage;
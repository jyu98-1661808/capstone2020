import React from 'react';
import '../styles/SignIn.css';

function SignIn(){
    return (
        <div>
            <div className='nav-bar'> </div>
            <div className='main-content'>
                <div className='header'> </div>
                <div className='body'>
                    {/* <button className='sign-in'> Sign In</button> */}
                    <div className="login-btn">
                        <a href="#" class="button" data-toggle="modal" data-target="#login-modal">Login</a>
                    </div>

                    <div className="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
                        <div className="modal-dialog">
                            <div className="loginmodal-container">
                                <h1>Login to Your Account</h1>
                                <form>
                                    <input type="text" name="user" placeholder="Username" />
                                    <input type="password" name="pass" placeholder="Password" />
                                    <input type="submit" name="login" class="login loginmodal-submit" value="Login" />
                                </form>
                                
                                <div class="login-help">
                                    <a href="#">Register</a> - <a href="#">Forgot Password</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <button className='sign=up'> Sign Up </button>
                    <button className ='guest-play'> Play as Guest </button> */}
                </div>
                {/* Share */}
                {/* Report */}
                {/* Fullscreen */}
            </div>
        </div>    
    )
}

export default SignIn
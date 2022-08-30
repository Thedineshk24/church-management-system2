import React from 'react';
import "../styles/login.scss";
import {useNavigate} from "react-router-dom";

const Email = () => {
    const navigate = useNavigate();
    const handleRedirect = () => {
      navigate('/', { replace: true })
    }
    return (
        <section className='login'>
            <div className='section1'>
                <img src="https://images.pexels.com/photos/792953/pexels-photo-792953.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="church" />
                <p className='title'>C H U R C H</p>
                <p className='subtitle'>
                    Please enter your email address <span>and password below to login</span>
                </p>
                <form>
                    <label>Email</label>
                    <input type="text" placeholder='Enter email address' />
                    <div className="flex">
                        <label>Password</label>
                        <label className='forget'>
                            Forgot your password
                        </label>
                    </div>
                    <div className="eye__icon">
                        <span className='ab'><i className="fa fa-eye"></i></span>
                        <input className='password' type="password" placeholder='Enter Password' />
                    </div>
                    <div className='d-flex justify-content-between'>
                        <button className='btn btn-secondry' onClick={handleRedirect}>Back</button>
                        <button className='btn btn-primary reset'>Send me reset instructions</button>
                    </div>

                </form>

            </div>
            <div className="section2">
                <img src="https://images.pexels.com/photos/3767996/pexels-photo-3767996.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="hero" />
            </div>
        </section>
    )
}

export default Email
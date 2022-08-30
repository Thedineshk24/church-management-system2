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
                    Please enter your email address below and we'll <span>send you password reset instructions.</span>
                </p>
                <form className='mt-5'>
                    <label>Email</label>
                    <input type="text" placeholder='Enter email address' />
                    <div className='d-flex justify-content-between mt-3'>
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
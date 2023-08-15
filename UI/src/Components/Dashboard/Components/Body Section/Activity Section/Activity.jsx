import React from 'react'
import './Activity.css'

//import icon
import { BsArrowRightShort } from 'react-icons/bs';

//import img
import user from '../../../Assets/user (3).jpg';

const Activity = () => {
    return (
        <div className='activitySection'>
            <div className="heading flex">
                <h1>Resent Activity</h1>
                <button className='btn flex'>
                    See All
                    <BsArrowRightShort className="icon" />
                </button>
            </div>

            <div className="secContainer grid">
                <div className="singleCustomer flex">
                    <img src={user} alt="Custom Image" />
                    <div className="customerDetails">
                        <span className='name'>Ola Martin</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>
                <div className="singleCustomer flex">
                    <img src={user} alt="Custom Image" />
                    <div className="customerDetails">
                        <span className='name'>Ola Martin</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>
                <div className="singleCustomer flex">
                    <img src={user} alt="Custom Image" />
                    <div className="customerDetails">
                        <span className='name'>Ola Martin</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>
                <div className="singleCustomer flex">
                    <img src={user} alt="Custom Image" />
                    <div className="customerDetails">
                        <span className='name'>Ola Martin</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activity
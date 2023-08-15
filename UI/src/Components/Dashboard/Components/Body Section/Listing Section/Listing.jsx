import React from 'react'
import './Listing.css'

// import icon
import { BsArrowRightShort } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'

//import img
import img from '../../../Assets/user (1).png'
import userimg from '../../../Assets/pexels-alvin-caal-2853592.jpg'
import img1 from '../../../Assets/user (3).jpg'

const Listing = () => {
    return (
        <div className="listingSection">
            <div className="heading flex">
                <h1>My Listings</h1>
                <button className='btn flex'>
                    See All <BsArrowRightShort className="icon" />
                </button>
            </div>

            <div className="secContainer flex">
                <div className="singleItem">
                    <AiFillHeart className="icon" />
                    <img src={img} alt="Image Name" />
                    <h3>Anunual Vince</h3>
                </div>

                <div className="singleItem">
                    <AiFillHeart className="icon" />
                    <img src={img} alt="Image Name" />
                    <h3>Anunual Vince</h3>
                </div>

                <div className="singleItem">
                    <AiFillHeart className="icon" />
                    <img src={img} alt="Image Name" />
                    <h3>Anunual Vince</h3>
                </div>

                <div className="singleItem">
                    <AiFillHeart className="icon" />
                    <img src={img} alt="Image Name" />
                    <h3>Anunual Vince</h3>
                </div>
            </div>

            <div className="sellers flex">
                <div className="topSellers">
                    <div className="heading flex">
                        <h3>Top Sellers</h3>
                        <button className='btn flex'>
                            See All <BsArrowRightShort className='icon' />
                        </button>
                    </div>

                    <div className="card flex">
                        <div className="users">
                            <img src={userimg} alt="User Image" />
                            <img src={img1} alt="User Image" />
                        </div>
                        <div className="cardText">
                            <span>14.556 Plant sold <br />
                                <small>
                                    21 Sellers <span className="date"> 7 Days</span>
                                </small>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="featuredSellers">
                    <div className="heading flex">
                        <h3>Featured Sellers</h3>
                        <button className='btn flex'>
                            See All <BsArrowRightShort className='icon' />
                        </button>
                    </div>

                    <div className="card flex">
                        <div className="users">
                            <img src={userimg} alt="User Image" />
                            <img src={img1} alt="User Image" />
                        </div>
                        <div className="cardText">
                            <span>28.556 Plant sold <br />
                                <small>
                                    26 Sellers <span className="date"> 31 Days</span>
                                </small>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Listing
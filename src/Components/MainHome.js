import React from 'react';
import homeimage from '../img/home-img.png'
import banner1 from '../img/banner-1.jpg'
import banner2 from '../img/banner-2.jpg'
import deal from '../img/deal-bg.jpg'


const MainHome = (props) => {
    return (
        <div>

            


            

            

            <section class="home" id="home">
                <div class="image">
                    <img src={homeimage} alt="" />
                    <img src="" alt="" />

                </div>
                <div class="content">
                    <span>Fresh and organic</span>
                    <h3>Your daily Need products</h3>
                    <a href="#" class="btn">Get Started</a>
                </div></section>



            <section class="banner-container">
                <div class="banner">
                    <img src={banner1} />

                    <div class="content">
                        <h3>Special Offer</h3>
                        <p>upto 45% off</p>
                        <a href="#" class="btn">Check Out</a>
                    </div>
                </div>
                <div class="banner">
                    <img src={banner2} />
                    <div class="content">
                        <h3>Special Offer</h3>
                        <p>upto 50% off</p>
                        <a href="#" class="btn">Check Out</a>
                    </div>
                </div>
            </section>



            
            <section class="banner-container">
                <div class="banner">
                    <img src={deal}/>

                    <div class="content">

                    </div>
                </div>
            </section>




        </div>
    )
}

export default MainHome;

import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img
                className="home_image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            />
            <div className="home_row">
                <Product
                    id="1"
                    title="Faawn Smart Watches with Bluetooth, Sim Card Health and Fitness Tracker Smart Watches for Boys Mens and Girls ( smartwatch ) - (Black)"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51LO7NCsMjL.jpg"
                />
                <Product
                    id="2"
                    title="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (White)"
                    price={11.96}
                    rating={5}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
            </div>

            <div className="home_row">
                <Product
                    id="3"
                    title="Samsung 6.2 kg Fully-Automatic Top load Washing Machine (WA62M4100HY/TL, Imperial Silver)"
                    price={11.96}
                    rating={5}
                    image="https://static.digit.in/product/9ed2dfd640ef687d654ad0d316a368096f6e15cc.jpeg?tr=n-product_detail_leader_thumb"
                />
                <Product
                    id="4"
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={11.96}
                    rating={5}
                    image="https://rukminim1.flixcart.com/image/416/416/jtyouq80/book/6/1/4/the-lean-startup-original-imaff69qyjpfyvrc.jpeg?q=70"
                />
                <Product
                    id="5"
                    title="Apple iPhone SE (Black, 64 GB)"
                    price={11.96}
                    rating={5}
                    image="https://rukminim1.flixcart.com/image/416/416/k9loccw0/mobile/p/z/q/apple-iphone-se-mxd02hn-a-original-imafrcpjfehbbqgb.jpeg?q=70"
                />
            </div>

            <div className="home_row">
                <Product
                    id="6"
                    title="LG 80cm (32 inch) HD Ready LED Smart TV 2020 Edition  (32LM565BPTA)"
                    price={11.96}
                    rating={5}
                    image="https://rukminim1.flixcart.com/image/416/416/kdyus280/television/g/d/q/lg-32lm565bpta-32lm565bpta-original-imafurgkdrjfggbw.jpeg?q=70"
                />
            </div>
        </div>
    );
}

export default Home;

import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import "../Styles/Carousel.css"


function Carousel1() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (
        <div>
            <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={1}
                itemsToScroll={1}
                forwardBtnProps={{
                    //here you can also pass className, or any other button element attributes
                    style: {
                        alignSelf: 'center',
                        background: 'black',
                        border: 'none',
                        borderRadius: '50%',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '20px',
                        height: 30,
                        lineHeight: 1,
                        textAlign: 'center',
                        width: 30,
                    },
                    children: <span>{`>`}</span>,
                }}
                backwardBtnProps={{
                    //here you can also pass className, or any other button element attributes
                    style: {
                        alignSelf: 'center',
                        background: 'black',
                        border: 'none',
                        borderRadius: '50%',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '20px',
                        height: 30,
                        lineHeight: 1,
                        textAlign: 'center',
                        width: 30,
                    },
                    children: <span>{`<`}</span>,
                }}
                responsiveProps={[
                    {
                        itemsToShow: 4,
                        itemsToScroll: 1,
                        minWidth: 768,
                    },
                ]}
                speed={200}
                easing="linear"
            >
                {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}



                <div className="carousel" >
                    <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6494/6494230_sd.jpg;maxHeight=240;maxWidth=240" alt="" />
                    <p>Samsung - Galaxy Tab S8 Ultra - 14.6\" 256GB - Wi-Fi - with S-Pen - Graphite</p>
                    <h3>Price : Your price for this item is $849.99</h3>
                    <h4>$1,199.99</h4>
                </div>

                <div className="carousel" >
                    <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6494/6494439_sd.jpg;maxHeight=240;maxWidth=240" alt="" />
                    <p>Samsung - Galaxy S22 Ultra 128GB (Unlocked) - Phantom Black</p>
                    <h3>"User Rating: 4.6 out of 5 stars with 488 Reviews"</h3>
                    <h4>$1,299.99</h4>
                </div>

                <div className="carousel" >
                    <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6464/6464584_sd.jpg;maxHeight=240;maxWidth=240" alt="" />
                    <p>Samsung - Galaxy Tab A7 Lite 8.7" 32GB with Wi-Fi - Dark Gray</p>
                    <h3>Price:Your price for this item is  849.99$</h3>
                    <h4>$1,199.99</h4>
                </div>

                <div className="carousel" >
                    <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6510/6510527_sd.jpg;maxHeight=272;maxWidth=400" alt="" />
                    <p>HP - 15.6" Touch-Screen Laptop - Intel Core i5 - 8GB Memory - 512GB SSD - Natural Silver</p>
                    <h3>Price:Your price for this item is $ 450.99</h3>
                    <h4>$650.99</h4>
                </div>

                <div className="carousel" >
                    <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6468/6468484_sd.jpg;maxHeight=272;maxWidth=400" alt="" />
                    <p>LG - 27 Cu. Ft. Side-by-Side Smart Refrigerator with Craft Ice and InstaView - Stainless steel</p>
                    <h3>Price:Your price for this item is $849.99</h3>
                    <h4>$1,199.99</h4>
                </div>

                <div className="carousel" >
                    <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6502/6502181_sd.jpg;maxHeight=272;maxWidth=400" alt="" />
                    <p>HP - ENVY x360 2-in-1 15.6" Touch-Screen Laptop - Intel Evo Platform Intel Core i5 - 8GB</p>
                    <h3>Price:Your price for this item is $849.99</h3>
                    <h4>$1,199.99</h4>
                </div>

                <div className="carousel" >
                    <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6502/6502236_sd.jpg;maxHeight=240;maxWidth=240" alt="" />
                    <p>Samsung - 50” Class Q60B QLED 4K Smart Tizen TV</p>
                    <h3>Price:Your price for this item is $849.99</h3>
                    <h4>$1,199.99</h4>
                </div>

                <div className="carousel" >
                    <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6512/6512622_sd.jpg;maxHeight=240;maxWidth=240" alt="" />
                    <p>Samsung - Galaxy Z Fold4 256GB (Unlocked) - Phantom</p>
                    <h3>Price:Your price for this item is $849.99</h3>
                    <h4>$1,199.99</h4>
                </div>

                <div className="carousel" >
                    <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4900/4900915_sd.jpg;maxHeight=272;maxWidth=400" alt="" />
                    <p>Beats by Dr. Dre - Beats Studio Buds Totally Wireless Noise Cancelling Earbuds - Black</p>
                    <h3>Price:Your price for this item is $849.99</h3>
                    <h4>$1,199.99</h4>
                </div>
            </ReactSimplyCarousel>
        </div>
    );
}

export default Carousel1;
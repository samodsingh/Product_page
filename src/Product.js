import React from 'react'
import './Product.css';
import cruelty from "./image/cruelty.jpeg";
import images from "./image/images.jpg";
 import no_toxic from "./image/no_taxic.jpg";
 import plastic from "./image/plastic.png";
import myproduct from "./image/myproduct.jpg";
import { Col, Row, Button } from 'antd';


const Product = () => {


    return (
        <div className='main-page'>
            <Row>
                <Col xs={24} sm={24} md={24} lg={10} xl={10}>
                    <div className='pro_image'>
                       <img src={myproduct} alt="My images" />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={14} xl={14}>
                    <div className='pro_details'>
                    <h2>Tooth Powder</h2>
                    <span>50g</span>
                    <div className='price'>
                        <p>-21% <span> 369.00</span></p>
                    </div>
                    <div> <strike> 499.00</strike></div>
                    <Button type="primary" block>Buy Now</Button>
                    </div>
                   
                </Col>

                <Col span={18} offset={4}>
                    <div className="pro_logo">
                        <div className='cruelty'>
                            <div>
                                <img className='logo' src={cruelty} alt="logo1" />
                            </div>
                            <p>Cruelty Free</p>
                        </div>
                        <div className='best_of'>
                            <div>
                                <img className='logo' src={images} alt="logo1" />
                            </div>
                            <p>Best Of Nature</p>
                        </div>
                        <div className='no_toxins'>
                            <div>
                                <img className='logo' src={no_toxic} alt="logo1" />
                            </div>
                            <p>No Toxins</p>
                        </div>
                        <div className='plastic_positive'>
                            <div>
                                <img className='logo' src={plastic} alt="logo1" />
                            </div>
                            <p>Plastic Postive</p>
                        </div>
                    </div>
                </Col>

            </Row>
            <Row>
                <Col span={8}><h5>Item value</h5></Col>
                <Col span={14}><p> : 25g </p></Col>
                <Col span={8}><h5>Age Range</h5></Col>
                <Col span={14}> <p>: For all age free </p></Col>
                <Col span={8}><h5>Item Form</h5></Col>
                <Col span={14}><p>: Powder </p></Col>
                <Col span={8}><h5>Marerial type</h5></Col>
                <Col span={14}><p>: Chemical free </p></Col>
                <Col span={8}><h5>Product Type</h5></Col>
                <Col span={14}><p>: Tooth Care </p></Col>
                <Col span={8}><h5>Product Benefits</h5></Col>
                <Col span={14}><p>: Calcium and mineral rich formula keep teeth healthy and strong. Ensures complete oral care delivering healthy gums, all-round germ protection, and plaque removal.</p></Col>
                <Col span={8}><h5>Product Ingredients </h5></Col>
                <Col span={14}><p> : Long Pepper, Clive Powder & Clove Oil, Manjistha, ajawain ,Clary Sage Oil , Babool Bark Powder, Pacha, Karpooram, Cinnamon Powder, Triphala Amalak, Bibhitaki, Haritaki, Tomar, Rock Salt & Cinnamon Powder.</p></Col>
                <Col span={8}><h5>Usage</h5></Col>
                <Col span={14}> <p>: Use this tooth powder twice for a week is enough for healthy tooth.</p></Col>
                <Col span={24}>
                    <h1>Why HIGHLIVE Product?</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis debitis dolor necessitatibus quam quos, delectus nesciunt doloremque ipsa vero eius unde non voluptatem neque voluptatum, quibusdam sequi quidem obcaecati optio......
                    </p>
                   
                </Col>
                <Col span={12} offset={6}>
                   <Button type="primary" block>
                        Back to Products
                    </Button>
                </Col>


            </Row>

        </div>
    )
}

export default Product
import React from "react";
import { Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
import Logoimg from "./logo";
import './Navbar.css'
function Navbar(){
    const navigate = useNavigate();
    const navigateToBurgerbuilder = () => {
       
        navigate('/home');
       
      };
      return (
        <>
        <Layout className="layout">Burgerbuilder App
        </Layout>
        <div className="centerimg">
            <Logoimg/>
        </div>
        {/* <div className="Burger"> */}
            <button className="button1" onClick={navigateToBurgerbuilder}>Let's Create Burger..!</button>
        {/* </div> */}
        </>
        
    )
}
export default Navbar;

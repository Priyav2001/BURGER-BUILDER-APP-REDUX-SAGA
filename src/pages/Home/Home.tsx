import React from "react";
import "./Home.css";
import { useNavigate } from 'react-router-dom';
import BurgerBuilder from "../../components/BurgerBuilder/BurgerBuilder";
import { Button } from 'antd';
const Home = () => {
  const navigate = useNavigate();
  const navigateToForms = () => {
     
      // navigate('/Forms');
      navigate('/Forms');
     
    };

  return (
    <>
      <div className="parent-container">
        <div className="left-child">
          <h2 className="h2text" style={{ textAlign: "center", color:"#964B00" }}>Let's Build the Burger..!</h2>
          
        </div>

      </div>
      <div className="feature">
        <div className="left-child" style={{ textAlign: "right" }}>

        </div>

      </div>
      <BurgerBuilder />
      <div className="buttonform">
      <Button type="primary" style={{marginLeft: 1,display: 'inline-flex',justifyContent: 'center',alignItems: 'center'}}className="button1" onClick={navigateToForms}>Confirm the Order!</Button>
      </div> 
      </>
  );
};

export default Home;

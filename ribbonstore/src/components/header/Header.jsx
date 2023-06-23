import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const handleButtonClick = () => {
        window.location.href = '/login';
      };
      const handleLogoutClick = () => {
        window.location.href = '/logout';
        navigate('/')
      };
  
    return (
        <>
        <div className="header">
            </div>
            <span className="logo">Ribbion.Inc</span>
             <h1 className="headerTitle">
        
             </h1>
             {!user && <button className="headerBtn" onClick={handleButtonClick}>Log in </button>}
             {!user && <button className="headerBtn" onClick={handleLogoutClick}>Log out</button>}
             </>
               );
            };
            
            export default Header;
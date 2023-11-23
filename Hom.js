import React from "react";
import "./Hom.css"
// import { useNavigate } from "react-router-dom";

const Hom =() => {
    return(
        
        <>
       <div className="divbody">
    <div class="container">
        <div class="design">
            <div class="pill-1 rotate-45"></div>
            <div class="pill-2 rotate-45"></div>
            <div class="pill-3 rotate-45"></div>
            <div class="pill-4 rotate-45"></div>
        </div>
        <div class="login">
            <h3 class="title">User Login</h3>
            <div class="text-input">
                <i class="ri-user-fill"></i>
                <input type="text" placeholder="Username"></input>
            </div>
            <div class="text-input">
                <i class="ri-lock-fill"></i>
                <input type="password" placeholder="Password"></input>
            </div>
            <button class="login-btn" >Login</button>
            <a href="#" class="forgot"><p>Forgot Username/Password?</p></a>
            
           <div  class="create">
              <p>Dont have an account?Sign up</p>
                <i class="ri-arrow-right-fill"></i>
            </div>
        
        </div>
    </div>
</div>


       </>       
        

    )
    
}
export default Hom;


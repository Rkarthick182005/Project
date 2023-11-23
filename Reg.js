import "./Hom.css"
// import { useNavigate} from "react-router-dom";

const Reg =() => {
    return(
        
        <div className="hi">
    <div class="container">
        <div class="design">
            <div class="pill-1 rotate-45"></div>
            <div class="pill-2 rotate-45"></div>
            <div class="pill-3 rotate-45"></div>
            <div class="pill-4 rotate-45"></div>
        </div>
        <div class="login">
        
            <h3 class="title" style={{color:'purple'}}>SIGN UP</h3>
            <div class="text-input">
                <i class="ri-user-fill"></i>
                <input type="text" placeholder="Email"></input>
            </div>
            
            <div class="text-input">
                <i class="ri-user-fill"></i>
                <input type="text" placeholder="Username"></input>
            </div>
            <div class="text-input">
                <i class="ri-lock-fill"></i>
                <input type="password" placeholder="Password"></input>
            </div>
            <button class="login-btn">Create Account</button><br></br>
          
                <div class="in" ><p>Already have an account? Sign in</p></div>
                <i class="ri-arrow-right-fill"></i>
            </div>
        </div>
    
</div>

        

    )
    
}
export default Reg;
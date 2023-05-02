import './Weather/WeatherForm.css';
import Link from "../context/Link"

export default function Register(){

    return (
        <div>
            <br/>
            <div className="form fontlogin">
                Register
                <br/>
                <form>
            <input type="text" name="name" required className='input w-fix' placeholder="Put your name" />
            <br/>                
            <input type="email" name="email" required className='input w-fix' placeholder="Put your email" />
            <br/>
            <input type="text" name="password" required className='input w-fix' placeholder="Put your password" />
            <input type='submit' value="Register" className="button mt"></input>
                </form>
            <div className="fontf">
            You have a account? <br/>Log in &nbsp;  
            <Link className="fontlink" href="/" >
                here 
            </Link>
            </div>

            </div>
        </div>  
    )
}
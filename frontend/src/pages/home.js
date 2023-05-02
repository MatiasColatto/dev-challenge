import Link from "../context/Link"
import './Weather/WeatherForm.css';

export default function Home(){


    return (
        <div>
            <br/>
            <div className="form fontlogin">
                Login
                <br/>
                <form>

            <input type="text" required name="password" className='input w-fix' placeholder="Put your password" />
            <br/>
            <input type="email" name="email" className='input w-fix' placeholder="Put your email" />
            <br/>
            <Link href="/weather" >
                <button className="button mt"> Sign in </button>
            </Link>
                </form>
            <div className="fontf">
            You dont have a account? <br/>Register &nbsp;  
            <Link className="fontlink" href="/register" >
                here 
            </Link>
            </div>

            </div>
        </div>
    )
}
import classes from './login.module.css'

function Login(){
    return(
        <>
        <div className={classes.container}>
            <form>
                <h2>Login</h2>
                <div className={classes.input_box}>
                    <input type="email" name="" id="" placeholder='E-Mail'/>
                    <i class="ri-mail-line"></i>
                </div>
                <div className={classes.input_box}>
                    <input type="password" name="" id="Password" placeholder='Password'/>
                    <i class="ri-lock-password-line"></i>
                </div>
                <div className={classes.input_remember}>
                    <input type="checkbox" name="" id="remember" />
                    <label htmlFor="remember">Remember Me!</label>    
                </div> 
                <div className={classes.input_button}>
                    <button>Login</button>
                </div>
                <div className={classes.login_forgot_password}>
                    <a href="#">Forgot your Password? Click Here!</a>
                </div>
            </form>
        </div>
        </>
    )
}
export default Login;
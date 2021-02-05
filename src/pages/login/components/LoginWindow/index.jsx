import LoginFooter from '../LoginFooter'
import LoginMain from '../LoginMain'
import './index.scss'
const LoginWindow = () => {
    return (
        <div className='login-window'>
            <LoginMain />
            <LoginFooter />
        </div>
    )
}

export default LoginWindow
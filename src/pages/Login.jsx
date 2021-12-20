import { GoogleLogin } from 'react-google-login'
import { BiHeart } from 'react-icons/bi'
import { setLogin, setUserData, setUserToken } from '../services/Auth'

const Login = () => {

    const handleLogin = async googleData => {
        setLogin({ token: googleData.tokenId }).then(res => {
            console.log(res)
            setUserToken(res.data)
            setUserData(googleData.profileObj)
            window.location.href = '/'
        }).catch(err => {
            alert('Error')
        })
    }

    return (
        <>
            <div className='bg-yellow-50 h-screen flex flex-wrap items-between justify-center'>
                <div className='w-full text-center pt-[44px] px-[16px]'>
                    <h1 className='font-bold text-2xl text-yellow-500 mb-[8px]'>Financial Reporting</h1>
                    <p className='text-sm text-gray-400'>Documentized your financial bugets in simple ways.</p>
                </div>
                <div className='self-center w-full text-center'>
                    <GoogleLogin
                        clientId={process.env.REACT_APP_CLIENT_ID}
                        buttonText="Log in with Google"
                        onSuccess={handleLogin}
                        onFailure={handleLogin}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
                <div className='self-end w-full text-center pb-[22px]'>
                    <div className='flex items-center gap-2 mb-[8px] justify-center'>
                        <BiHeart />
                        <p>Powered by <a href="https://github.com/alwaysmind" className='text-blue-500 font-bold'>Alwaysmind</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
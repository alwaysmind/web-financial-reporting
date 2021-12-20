import { Navigate, Route, Routes } from 'react-router-dom'

// Pages
import Login from '../pages/Login'
import Main from '../pages/Main'
import Activities from '../pages/Activities'

// Cookies
import Cookies from 'js-cookie'
import MainProvider from '../contexts/MainContext'

const routes = [
    {
        name: 'LOGIN',
        path: '/login',
        isLoggedOnly: false,
        isUnloggedOnly: true,
        element: <Login />
    },
    {
        name: 'MAIN',
        path: '/',
        isLoggedOnly: true,
        isUnloggedOnly: false,
        element: <Main />
    },
    {
        name: 'ACTIVITIES',
        path: '/activities',
        isLoggedOnly: true,
        isUnloggedOnly: false,
        element: <Activities />
    },
]


const Routing = () => {
    return (
        <MainProvider>
            <Routes>
                {routes.map(route => {
                    if (route.isLoggedOnly) {
                        return <Route path={route.path} element={
                            Cookies.get('token') ? route.element : <Navigate to="/login" />
                        } key={route.name} />
                    } if (route.isUnloggedOnly) {
                        return <Route path={route.path} element={
                            Cookies.get('token') ? <Navigate to="/" /> : route.element
                        } key={route.name} />
                    } else {
                        return <Route path={route.path} element={route.element} key={route.name} />
                    }
                })}
            </Routes>
        </MainProvider>
    )
}

export default Routing
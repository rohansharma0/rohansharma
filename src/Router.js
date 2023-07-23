import React, { useEffect, useRef, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Background from './Pages/Background';
import GlobalStyles from './Components/Styles/Global';
import { LoadingPage } from './Pages/LoadingPage';
import NavBar from './Components/Navbar';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: 'about',
        element: <About />
    },
    {
        path: 'contact',
        element: <Contact />
    }
]);

const Router = () => {
    const [preloader, setPreloader] = useState(true);
    const [timer, setTimer] = useState(1);
    const id = useRef(null);

    const clear = () => {
        window.clearInterval(id.current);
        setPreloader(false);
    };

    useEffect(() => {
        id.current = window.setInterval(() => {
            setTimer(timer - 1);
        }, 500);
    });

    useEffect(() => {
        if (timer === 0) {
            clear();
        }
    }, [timer]);



    return (
        <>
            <GlobalStyles />
            <Background />
            {preloader ? (
                <LoadingPage />
            ) : (
                <>
                    <NavBar />
                    <RouterProvider router={routes} />
                </>
            )}
        </>

    )
}

export default Router
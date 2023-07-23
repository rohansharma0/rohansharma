import React, { useEffect, useRef, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Background from './Pages/Background';
import GlobalStyles from './Components/Styles/Global';
import { LoadingPage } from './Pages/LoadingPage';
import NavBar from './Components/Navbar';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './Helper/ThemeContext';

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

const App = () => {
    const [preloader, setPreloader] = useState(true);
    const [timer, setTimer] = useState(1);
    const id: any = useRef(null);

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



    const properties = {
        //Dark theme
        darkTheme: {
            backgroundColor: "#080808",
            textColor: "#fff",
            borderColor: "#000",
        },
        //Light theme
        lightTheme: {
            backgroundColor: "#f3f2f9",
            textColor: "#000",
            borderColor: "f3f2f9",
        }
    }

    const [theme, setTheme] = useState("darkTheme")


    const getTheme = () => {
        return theme === "darkTheme" ? properties.darkTheme : properties.lightTheme;
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <ThemeProvider theme={getTheme}>
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
            </ThemeProvider>
        </ThemeContext.Provider>

    )
}

export default App
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

// import './components/HeaderComp/Header.css';
import './App.css';


import HeaderComponent from './components/HeaderComp/HeaderComp'
import FooterComponent from './components/FooterComp/FooterComp'
import BootstrapComponent from './components/BootstrapComp';
import ReactBootstrapComponent from './components/ReactBootstrapComp';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LayoutPage from './pages/LayoutPage';
import BlogPage from './pages/BlogPage';
import CEOPage from './pages/CEOPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className='div1'>
        Div Container
      </div>
      <h2 className='title'>App Component</h2> */}
      {/* <HeaderComponent />
      <FooterComponent /> */}

      {/* <BootstrapComponent /> */}

      {/* <ReactBootstrapComponent /> */}

      {/* This is for a layout wrapper and inside that we have the web pages as component */}
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayoutPage />}>
            <Route index element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/blog' element={<BlogPage />} />
          </Route>
        </Routes>
      </BrowserRouter> */}

      <HashRouter>
        <Routes>
          <Route path='/' element={<LayoutPage />}>
            <Route index element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/about/ceo' element={<CEOPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/blog' element={<BlogPage />} />
          </Route>
        </Routes>
      </HashRouter>

      {/* This is for individual web pages */}
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/blog' element={<BlogPage />} />
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App

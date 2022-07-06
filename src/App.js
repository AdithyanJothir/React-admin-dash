import React , {useEffect} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import {Navbar,Sidebar,Footer,ThemeSettings} from './components'
import {Employees,Calendar,Customers} from './pages'
import './App.css';
import {useState, useStateContext} from './context/ContextProvider';

export const App = () => {
    const { activeMenu } = useStateContext();

   
  return (
    <div>
    <BrowserRouter>
    <div className="felx relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{zindex:'1000'}}>
            <TooltipComponent content="Settings" position="Top">
                <button className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                style={{background:"blue", borderRadius:"50%"}}>
                    <FiSettings></FiSettings>
                </button>
            </TooltipComponent>
        </div>
        {activeMenu?  (
            <div className='w-72 fixed sidebar
            bg-secondary-dark-bg bg-white'><Sidebar/></div>
        ):(
            <div className='w-0 dark:bg-secondary-dark-bg'><Sidebar/>
        </div>
        )}
        <div className={`dark:bg-main-bg bg-main-bg
        min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
            <div className="fixed md:static bg-main-bg
            dark:bg-main-dark-bg navbar w-full">
                <Navbar/>
            </div>
        </div> 
        <div>
            <Routes>
                <Route path="/" element={<Employees />}/>
                {/* <Route path="/registration" element={<Registration />}/>
                <Route path="/assignment" element={<Assignment />}/>
                <Route path="/views" element={<Views />}/>
                <Route path="/purchase" element={<Purchase />}/> */}
            </Routes>
        </div>
        
    </div>
    </BrowserRouter>
    </div>
     
  )
}

export default App;
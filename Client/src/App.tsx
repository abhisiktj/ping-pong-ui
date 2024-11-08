import React from 'react'
import ReactDom from 'react-dom/client';
import About from './Pages/About';



const root=ReactDom.createRoot(document.getElementById('root') as HTMLElement );
 root.render(
  <React.StrictMode>
    <About /> 
  </React.StrictMode>
);



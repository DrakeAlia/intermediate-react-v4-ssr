// Everything we put in ClientApp.js is what is going 
// to actually render in the broswer and NOT in node
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import App from './App'

hydrate(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root"));
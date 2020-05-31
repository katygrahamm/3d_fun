import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import home from './home.js'


function App () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={home}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';


/** TODO: import REDUX **/
import {createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

/** TODO: Add REDUCERS */

const airlineCount = (state=[], action) => {
    return state
}

/** TODO: Create store */

const airlineStoreDutyFree = createStore(
    combineReducers({
        airlineCount
    })
);



// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={airlineStoreDutyFree}>
        <App />
    </Provider>
);
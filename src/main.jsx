import React from 'react';
import ReactDOM from 'react-dom/client';
import {HelloWorldApp} from './FirstApp'
import { MiNombre } from './primeraApp';
import './styles.css';
import {Counter} from './CounterApp'


ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <Counter value={0} />
    </React.StrictMode>
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ResetStyled from "./style/ResetStyled"
import GlobalStyled from './style/GlobalStyled';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <ResetStyled />
        <GlobalStyled />
        <App />
    </>
);

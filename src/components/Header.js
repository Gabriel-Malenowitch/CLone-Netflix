import React from "react";
import './Header.css';

function Main({black}){
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logo" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img id="header--profile" src="https://avatars.githubusercontent.com/u/56513919?v=4" alt="Usuario" />
                </a>
            </div>
        </header>
    );
}

export default Main;
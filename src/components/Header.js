import React from 'react';


class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="page-container text-center">
                <header>
                    <h1>Welcome to the ToDo List Web App  <ion-icon name="receipt-outline" fontSize="64px"/></h1>
                    <p className="lead">Track your tasks for the day with ease...</p>
                </header>
            </div>
        )
    }
}

export default Header;
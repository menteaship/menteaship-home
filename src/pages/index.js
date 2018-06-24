import React from 'react';

export default class IndexPage extends React.Component {
    render() {
        return (
            <div className="container" id="mainContent">
                <div className="text-center">
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
                    <a className="navbar-brand" href="#">men<i>tea</i>ship</a>
                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <main role="main">
                    <div className="jumbotron">
                        <div className="container-fluid">
                            <h1 className="display-3">Welcome to men<i>tea</i>ship</h1>
                            <p>We're building a community of inclusive and supportive developers who meet together to chat about our careers</p>
                            <p><a className="btn btn-primary btn-lg" href="http://email.menteaship.com" role="button" target="_blank">Subscribe</a></p>
                        </div>
                    </div>
                </main>
            </div>
            </div>

        );
    }
}


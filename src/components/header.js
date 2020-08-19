import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <div className="wrapper">
                <Jumbotron fluid>
                    <Container>
                        <h1>Welcome to the Geometry Calculator!</h1>
                        <h4>Find the area, perimeter, and volume of geometric shapes</h4>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}

export default Header;
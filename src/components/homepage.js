import React, { Component } from 'react';
import { Button, Row } from 'react-bootstrap';

class Homepage extends Component {
    render() {
        return (
            <div className="wrapper">
                <Row>
                    <h3>Please click the button to continue</h3>
                </Row>
                <Row>
                    <Button type="submit" variant="primary" href="/input">
                        Start Calculatin'
                    </Button>
                </Row>
            </div>
        )
    }
}

export default Homepage;
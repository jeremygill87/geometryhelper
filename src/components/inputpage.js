import React, { Component } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

class InputPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            side1: 0,
            side2: 0,
            side3: 0,
            answer: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("Submitted");
        console.log(this.state);
        this.trianglePerimeter(this.state.side1, this.state.side2, this.state.side3)

    } 
    
    trianglePerimeter = (side1, side2, side3) => {
        var answer = parseInt(side1) + parseInt(side2) + parseInt(side3);
        this.setState({
            answer: answer
        })
    }

    render() {
        return (
            <div className="wrapper">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="triangle-sides">
                        <Form.Label><strong>Triangle Sides</strong></Form.Label>
                        <Row horizontal="space-between">
                            <input type="text" name="side1" value={this.state.side1} placeholder="Side 1" onChange={this.handleChange}/>
                            <input type="text" name="side2" value={this.state.side2} placeholder="Side 2" onChange={this.handleChange}/>
                            <input type="text" name="side3" value={this.state.side3} placeholder="Side 3" onChange={this.handleChange}/>
                        </Row>
                    </Form.Group>
                    <Row>
                         <Col horizontal="center" className="button">
                        <Button variant="primary" id="calculate-button" type="submit">Calculate</Button>
                    </Col>
                    </Row>
                   <Row>
                       <Col horizontal="center" className="result" id="answers" onChange={this.handleChange}>
                           {this.state.answer}
                       </Col>
                   </Row>
                    
                </Form>
            </div>
        )
    }
}

export default InputPage;
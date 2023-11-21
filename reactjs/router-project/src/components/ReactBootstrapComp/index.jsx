import { Button } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function ReactBootstrapComponent() {
    return (
        <>
            <Button variant="primary" className="btn-sm">React Button</Button>
            <Button variant="primary">React Button</Button>
            <Button variant="primary" className="btn-lg">React Button</Button>
            <br /><br />
            <Button variant="primary" size="sm">React Button</Button>
            <Button variant="primary">React Button</Button>
            <Button variant="primary" size="lg">React Button</Button>
            <Container fluid>
                <Row className="bg-primary">
                    <Col>1 of 1</Col>
                    <Col>1 of 1</Col>
                    <Col>1 of 1</Col>
                    <Col>1 of 1</Col>
                </Row>
                <Row className="bg-secondary">
                    <Col>1 of 1</Col>
                    <Col>1 of 1</Col>
                    <Col>1 of 1</Col>
                    <Col>1 of 1</Col>
                </Row>
                <Row>
                    <Col>1 of 1</Col>
                    <Col>1 of 1</Col>
                    <Col>1 of 1</Col>
                    <Col>1 of 1</Col>
                </Row>
            </Container>
        </>
    )
}
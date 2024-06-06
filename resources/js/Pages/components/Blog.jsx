import React from 'react';
import { Card, Button } from 'react-bootstrap';
function Blog({ image, title, text }) {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                {/* <Card.Button>{button}</Card.Button> */}

                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default Blog;
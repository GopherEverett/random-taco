import React from 'react'
import { Button, Card } from 'react-bootstrap'

export default function Taco(props) {
    return (
        <div className="cardCon">
            <Button>Random Taco Me</Button>
            <Card bg="dark" text="white" style={{ width: '40rem', margin: '10px' }}>
                <Card.Body>
                    <h2>Base Layer</h2>
                    <Card.Title>{props.taco.base_layer.name}</Card.Title>
                    <Card.Text>{props.taco.base_layer.recipe}</Card.Text>
                    <a href={props.taco.base_layer.url}>{props.taco.base_layer.url}</a>
                </Card.Body>
            </Card >
            <Card bg="dark" text="white" style={{ width: '40rem', margin: '10px' }}>
                <Card.Body>
                    <h2>Mixin</h2>
                    <Card.Title>{props.taco.mixin.name}</Card.Title>
                    <Card.Text>{props.taco.mixin.recipe}</Card.Text>
                    <a href={props.taco.mixin.url}>{props.taco.mixin.url}</a>
                </Card.Body>
            </Card>
            <Card bg="dark" text="white" style={{ width: '40rem', margin: '10px' }}>
                <Card.Body>
                    <h2>Seasoning</h2>
                    <Card.Title>{props.taco.seasoning.name}</Card.Title>
                    <Card.Text>{props.taco.seasoning.recipe}</Card.Text>
                    <a href={props.taco.seasoning.url}>{props.taco.seasoning.url}</a>
                </Card.Body>
            </Card>
            <Card bg="dark" text="white" style={{ width: '40rem', margin: '10px' }}>
                <Card.Body>
                    <h2>Shell</h2>
                    <Card.Title>{props.taco.shell.name}</Card.Title>
                    <Card.Text>{props.taco.shell.recipe}</Card.Text>
                    <a href={props.taco.shell.url}>{props.taco.shell.url}</a>
                </Card.Body>
            </Card>
            <Card bg="dark" text="white" style={{ width: '40rem', margin: '10px' }}>
                <Card.Body>
                    <h2>Condiment</h2>
                    <Card.Title>{props.taco.condiment.name}</Card.Title>
                    <Card.Text>{props.taco.condiment.recipe}</Card.Text>
                    <a href={props.taco.condiment.url}>{props.taco.condiment.url}</a>
                </Card.Body>
            </Card>
        </div>
    )
}

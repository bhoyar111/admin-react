import React, { useContext } from 'react';
import  { Redirect } from 'react-router-dom';
import { UserContext } from '../UserContext';
import { Container, Row } from 'react-bootstrap';

export default function GuestLayout(props) {

    const { user } = useContext(UserContext);

    if(user !== null) return <Redirect to='/dashboard' />;

    return (
        <>
            <section className="login-wrapper">
                <Container fluid>
                    <Row>
                        {props.children}
                    </Row>
                </Container>
            </section>
        </>
    )
}

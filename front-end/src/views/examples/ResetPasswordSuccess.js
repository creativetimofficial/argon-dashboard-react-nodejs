import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {confirmRegister} from "../../network/ApiAxios";
import {Card, CardBody, Col} from "reactstrap";

const ResetPasswordSuccess = props => {

    useEffect(() => {
        setTimeout(() => {
            props.history.push("/auth/login");
        }, 5000);
    }, [])

    return (
        <>
            <Col lg="6" md="8">
                <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                        <div className="text-center mb-4">
                            <h1>Password reset confirmed! You will be redirected to login...</h1>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </>
    )
};

export default ResetPasswordSuccess;

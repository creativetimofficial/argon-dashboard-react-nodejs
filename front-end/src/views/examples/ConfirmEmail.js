import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {confirmRegister} from "../../network/ApiAxios";
import {Card, CardBody, Col} from "reactstrap";

const ConfirmEmail = props => {

    const {id} = useParams();
    const [valid, setValid] = useState(true);

    useEffect(() => {
        if (!id) {
            setValid(false);
        } else {
            const runAsync = async () => {
                const response = await confirmRegister(id);
                const {data} = response;
                console.log(data);
                if (!data.success) {
                    setValid(false);
                } else {
                    setTimeout(() => {
                        props.history.push('/auth/login');
                    }, 5000);
                }
            }
            runAsync();
        }
    }, [])

    return (
        <>
            <Col lg="6" md="8">
                <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                        <div className="text-center mb-4">
                            <h1>{valid ? "Email confirmed! You will be redirected to login..." : "Something went wrong!"}</h1>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </>
    )
};

export default ConfirmEmail;

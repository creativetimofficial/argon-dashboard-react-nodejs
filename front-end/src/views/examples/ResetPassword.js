/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useState} from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col
} from "reactstrap";
import {forgotPassword, login} from "../../network/ApiAxios";
import Toast from "react-bootstrap/Toast";
import config from "../../config";

const ResetPassword = props => {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("Email sent! Check it to reset your password.");
    const [userID, setUserID] = useState(null);

    const sendEmail = async () => {
        const response = await forgotPassword(email);
        const {data} = response;
        if (data.success) {
            console.log(data);
            if (config.DEMO) {
                setToastMessage("This is a demo, so we will not send you an email. Instead, click on this link to reset your password:")
                setUserID(data.userID);
            }
            setShowToast(true);
        } else {
            setError(data.errors[0].msg);
        }
    }

    return (
        <>
            <div
                aria-live="polite"
                aria-atomic="true"
                style={{
                    position: 'fixed',
                    minHeight: '100px',
                    width: "35%",
                    right: 10,
                    bottom: 100,
                    zIndex: 50
                }}
            >
                <Toast style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    backgroundColor: "white",
                    padding: 10,
                    borderRadius: 10
                }} onClose={() => setShowToast(false)} show={showToast} delay={5000} autohide={!config.DEMO}>
                    <Toast.Header>
                        <img style={{height: "30px", width: "100px"}} src={require("assets/img/brand/argon-react.png").default}  alt="..."/>
                    </Toast.Header>
                    <Toast.Body>
                        {toastMessage}
                        {config.DEMO ?
                            <a href={config.DOMAIN_NAME + '/auth/confirm-password/' + userID}>
                                {config.DOMAIN_NAME + '/auth/confirm-password/' + userID}
                            </a> : null}
                    </Toast.Body>
                </Toast>
            </div>
            <Col lg="5" md="7">
                <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                        <Form role="form">
                            <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-email-83"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Email" type="email" autoComplete="email" value={email}
                                           onChange={e => setEmail(e.target.value)}/>
                                </InputGroup>
                            </FormGroup>
                            {error ?
                                <div className="text-muted font-italic">
                                    <small>
                                        error:{" "}
                                        <span className="text-red font-weight-700">{error}</span>
                                    </small>
                                </div> : null }
                            <div className="text-center">
                                <Button className="my-4" color="primary" type="button" onClick={sendEmail}>
                                    Reset Password
                                </Button>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </>
    );
}

export default ResetPassword;

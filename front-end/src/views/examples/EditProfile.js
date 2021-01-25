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
import React, {useEffect, useState} from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import EditHeader from "../../components/Headers/EditHeader";
import {edit} from "../../network/ApiAxios";

const EditProfile = props => {

    let user = JSON.parse(localStorage.getItem("user"));

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [isTestUser, setIsTestUser] = useState(false);

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("user")).email === "test@test.com") {
            setIsTestUser(true);
        }
    }, []);

    const editUser = async () => {
        const response = await edit(user._id, name, email);
        const { data } = response;
        if (data.success) {
            user = {...user, name, email}
            localStorage.setItem("user", JSON.stringify(user));
            props.history.push("/admin/user-profile");
        }
    }

    return (
        <>
            <EditHeader/>
            {/* Page content */}
            <Container className="mt--7" fluid>
                <Row>
                    <div className="col">
                        <Card className="bg-secondary shadow">
                            <CardHeader className="bg-white border-0">
                                <Row className="align-items-center">
                                    <Col xs="8">
                                        <h3 className="mb-0">My account</h3>
                                        {isTestUser ? <h5>You are not allowed to edit the test user. Create another user to test this functionality</h5> : null}
                                    </Col>
                                    <Col className="text-right" xs="4">
                                        <Button
                                            color="primary"
                                            href="#pablo"
                                            onClick={editUser}
                                            size="sm"
                                            disabled={isTestUser}
                                        >
                                            Save
                                        </Button>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <h6 className="heading-small text-muted mb-4">
                                        User information
                                    </h6>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-username"
                                                    >
                                                        Username
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        value={name}
                                                        id="input-username"
                                                        placeholder="Username"
                                                        onChange={e => setName(e.target.value)}
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-email"
                                                    >
                                                        Email address
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-email"
                                                        value={email}
                                                        onChange={e => setEmail(e.target.value)}
                                                        type="email"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </div>
                </Row>
            </Container>
        </>
);
}

export default EditProfile;

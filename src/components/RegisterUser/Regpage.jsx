import React from "react";
import { Container, Row, Col, FloatingLabel, Form, Button, Modal } from "react-bootstrap/";
import "./RegistrationPage.css";

const RegPage = (props) => {
  const user = props.user;
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      let form = new FormData();
      form.append("firstName", props.value0);
      form.append("lastName", props.value1);
      form.append("email", props.value2);
      form.append("password", props.value3);
      form.append("image", props.value4);


      props.setFormData(form);
      props.register();
    } catch (ex) {
      console.log(ex.message);
    }

    const userData = {
      firstName: event.target[0].value,
      lastName: event.target[1].value,
      email: event.target[2].value,
      christmasPreference: event.target[3].value,
      password: event.target[4].value,
      dob: event.target[5].value,
      image: event.target[6].value,
    };
  };
  const handleChange0 = (event) => {
    props.setValue0(event.target.value);
  };
  const handleChange1 = (event) => {
    props.setValue1(event.target.value);
  };
  const handleChange2 = (event) => {
    props.setValue2(event.target.value);
  };
  const handleChange3 = (event) => {
    props.setValue3(event.target.value);
  };
  const handleChange4 = (event) => {
    props.setValue4(event.target.value);
  };
  const handleChange5 = (event) => {
    props.setValue5(event.target.value);
  };
  const handleChange6 = (event) => {
    props.setValue6(event.target.value);
  };

  return (
    <Container className="gatePageBackground">
    <Row className="center">
      <Col md={6} xs={12}>
        <img
          className="logo"
          src="/assets/img/logo.png"
          alt="Christmas Stories"
        />
        {/* <p className="text-white">
          Join us for the holidays, enjoy playing games, discussing recipes and
          celebrating holiday traditions
        </p> */}
      </Col>
      <Col md={6} xs={12}>
        <>
          <Modal.Dialog>
            <Modal.Body className="mt-5">
              <Form onSubmit={handleSubmit} noValidate>
                <FloatingLabel
                  controlId="firstName"
                  label="firstName"
                  className="mb-3"
                >
                  <Form.Control
                    controlId="value0"
                    onChange={(e) => handleChange0(e)}
                    type="string"
                    placeholder="First Name"
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="lastName"
                  label="lastName"
                  className="mb-3"
                >
                  <Form.Control
                    controlId="value1"
                    onChange={(e) => handleChange1(e)}
                    type="string"
                    placeholder="Last Name"
                  />
                </FloatingLabel>
                <FloatingLabel controlId="email" label="email" className="mb-3">
                  <Form.Control
                    controlId="value2"
                    onChange={(e) => handleChange2(e)}
                    type="string"
                    placeholder="name@email.com"
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="christmasPreference"
                  label="christmasPreference"
                  className="mb-3"
                >
                  <Form.Control
                    controlId="value3"
                    type="string"
                    placeholder="Christmas Preference"
                    onChange={(e) => handleChange3(e)}
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="value4"
                  label="Password"
                  className="mb-3"
                >
                  <Form.Control
                    controlId="value5"
                    onChange={(e) => handleChange4(e)}
                    type="string"
                    placeholder="Password"
                  />
                </FloatingLabel>
                <FloatingLabel controlId="dob" label="dob" className="mb-3">
                  <Form.Control
                    controlId="value6"
                    onChange={(e) => handleChange5(e)}
                    type="date"
                    placeholder="Date of Birth"
                  />
                </FloatingLabel>
                <Form.Group controlId="image" className="mb-3">
                  <Form.Control
                    controlId="value7"
                    onChange={(e) => handleChange6(e)}
                    type="file"
                    accept=".jpg,.jpeg,.png"
                  />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="primary" size="lg" type="submit">
                    Register
                  </Button>
                </div>
              </Form>
            </Modal.Body>
            <Modal.Footer className="d-grid gap-2 mb-5">
              <p>Already an user? Login</p>
            </Modal.Footer>
          </Modal.Dialog>
        </>
      </Col>
    </Row>
    </Container>
  );
};

export default RegistrationPage;

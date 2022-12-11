import React from "react";

import { Col, Button, Card, InputGroup, CardTitle, CardBody } from "reactstrap";

export function Register ({setLoginFormVisible}) {  

    const signUp = () => {

      };

  return (
    <Col md="6" lg="5" xl="4">
      <Card id="chat3" style={{ borderRadius: "15px" }}>
        <CardTitle className="border-bottom">
          <div className="d-flex justify-content-center m-3">
            <h5>Register</h5>
          </div>
        </CardTitle>
        <CardBody>
            <InputGroup className="rounded mb-3">
                <input
                    className="form-control rounded ms-3"
                    placeholder="Your name..."
                    type="name"
                    onChange={(e) => ""}
                    style={{ backgroundColor: "#f5f6f7" }}
                />
                <div className="social__links d-flex gap-3 ms-1 me-3 align-items-center ">
                    <span className="ms-1 text-muted" href="/">
                    <i className="ri-user-line"></i>
                    </span>
                </div>
            </InputGroup>
            <InputGroup className="rounded mb-3">
                <input
                    className="form-control rounded ms-3"
                    placeholder="Enter email..."
                    type="email"
                    onChange={(e) => ""}
                    style={{ backgroundColor: "#f5f6f7" }}
                />
                <div className="social__links d-flex gap-3 ms-1 me-3 align-items-center ">
                    <span className="ms-1 text-muted" href="/">
                    <i className="ri-mail-line"></i>
                    </span>
                </div>
            </InputGroup>
            <InputGroup className="rounded mb-3">
                <input
                    className="form-control rounded ms-3"
                    placeholder="Enter password..."
                    type="password"
                    onChange={(e) => ""}
                    style={{ backgroundColor: "#f5f6f7" }}
                />
                <div className="social__links d-flex gap-3 ms-1 me-3 align-items-center ">
                    <span className="ms-1 text-muted" href="/">
                    <i className="ri-lock-password-line"></i>
                    </span>
                </div>
            </InputGroup>
            <InputGroup className="rounded mb-3">
            <input
              className="form-control rounded ms-3"
              placeholder="Repeat password..."
              type="password"
              onChange={(e) => ""}
              style={{ backgroundColor: "#f5f6f7" }}
            />
            <div className="social__links d-flex gap-3 ms-1 me-3 align-items-center ">
              <span className="ms-1 text-muted" href="/">
                <i className="ri-lock-password-line"></i>
              </span>
            </div>
          </InputGroup>
            <div className="d-flex justify-content-center mt-4">
                <Button color="primary" onClick={() => signUp()} >Sign up</Button>
            </div>
            <div 
                className="d-flex justify-content-center mt-4" 
                style={{cursor: 'pointer'}}
                onClick={() => setLoginFormVisible(true)}
            >
                <span>Have account? Login</span>
            </div>
        </CardBody>
      </Card>
    </Col>
  );
};
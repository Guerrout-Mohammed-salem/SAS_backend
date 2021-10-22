import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { useHistory, Redirect } from "react-router-dom";
import { authenticate, isAuthenticate, login } from "src/Auth";
import { API } from "src/config";
const axios = require("axios");

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [value, SetValue] = useState([]);

  const history = useHistory();

  const onSubmitHandler = (e) => {
    console.log("api", API);
    axios
      .post(`${API}/admin/login`, { username, password })
      .then((result) => {
        authenticate(result.data, () => {
          history.push({
            pathname: "/",
          });
        });
      })
      .catch((error) => {
        axios
          .post(`${API}/reception/login`, { username, password })
          .then((result) => {
            authenticate(result.data, () => {
              history.push({ pathname: "/" });
            });
          })
          .catch((error) => console.log(error));
      });

    // const user = login(username, password);
    // console.log("User: ", user);
    // if (!user.error) {
    //   history.push({
    //     pathname: "/",
    //     // username: username === "admin",
    //     // state1: password,
    //   });
    // } else {
    //   console.log("login error");
    // }

    // history.push({
    //   pathname: "/",
    //   state: {
    //     // location state\
    //     search: "?update=true",
    //     update: true,
    //   },
    // });
    e.preventDefault();
  };

  return (
    <div>
      {!isAuthenticate() ? (
        <div className="c-app c-default-layout flex-row align-items-center">
          <CContainer>
            <CRow className="justify-content-center">
              <CCol md="5">
                <CCardGroup>
                  <CCard className="p-4">
                    <CCardBody>
                      <CForm>
                        <h1>Login</h1>
                        <p className="text-muted">Sign In to your account</p>
                        <CInputGroup className="mb-3">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-user" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput
                            type="text"
                            placeholder="Username"
                            autoComplete="username"
                            value={username}
                            onChange={(e) => {
                              setUserName(e.target.value);
                            }}
                          />
                        </CInputGroup>
                        <CInputGroup className="mb-4">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-lock-locked" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput
                            type="password"
                            placeholder="Password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                          />
                        </CInputGroup>
                        <CRow>
                          <CCol xs="6">
                            <CButton
                              color="primary"
                              className="px-4"
                              onClick={onSubmitHandler}
                            >
                              Login
                            </CButton>
                          </CCol>
                          <CCol xs="6" className="text-right">
                            <CButton color="link" className="px-0">
                              Forgot password?
                            </CButton>
                          </CCol>
                        </CRow>
                      </CForm>
                    </CCardBody>
                  </CCard>
                  {/* <CCard
                className="text-white bg-primary py-5 d-md-down-none"
                style={{ width: "44%" }}
              > */}
                  {/* <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Link to="/register">
                      <CButton
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody> */}
                  {/* </CCard> */}
                </CCardGroup>
              </CCol>
            </CRow>
          </CContainer>
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

export default Login;

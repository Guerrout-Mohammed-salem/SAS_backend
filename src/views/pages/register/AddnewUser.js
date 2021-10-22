import React, { useState } from "react";

import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CLabel,
  CFormGroup,
  CInputFile,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { addEmployee } from "src/Auth";

const AddnewUser = () => {
  const [firstName, setFirstName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");

  //On-submit-handler
  const onSubmitHandler = (e) => {
    e.preventDefault();
    addEmployee(familyName, firstName, email, phone, role, image);
  };

  return (
    <CContainer>
      <CRow className="justify-content-center">
        <CCol md="9" lg="7" xl="6">
          <CCard className="mx-4">
            <CCardBody className="p-4">
              <CForm>
                <h1>Add a new emplyee</h1>
                <p className="text-muted">Create new employee</p>
                <CInputGroup className="mb-3">
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      <CIcon name="cil-user" />
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    type="text"
                    placeholder="Fisrt Name"
                    autoComplete="first_name"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      <CIcon name="cil-user" />
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    type="text"
                    placeholder="Familly Name"
                    autoComplete="familly_name"
                    onChange={(e) => {
                      setFamilyName(e.target.value);
                    }}
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInputGroupPrepend>
                    <CInputGroupText>@&nbsp;</CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    type="text"
                    placeholder="Email"
                    autoComplete="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInputGroupPrepend>
                    <CInputGroupText>R&nbsp;&nbsp;</CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    type="text"
                    placeholder="Role"
                    autoComplete="role"
                    onChange={(e) => {
                      setRole(e.target.value);
                    }}
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      <CIcon name="cil-phone" />
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    type="number"
                    placeholder="Phone"
                    autoComplete="phone"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </CInputGroup>
                <CFormGroup col>
                  <CCol xs="12" md="9">
                    <small className="text-muted">Upload Image</small>
                    <CInputFile
                      id="file-input"
                      name="file-input"
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                      }}
                    />
                  </CCol>
                </CFormGroup>

                <CButton color="success" block onClick={onSubmitHandler}>
                  Create new employee
                </CButton>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default AddnewUser;

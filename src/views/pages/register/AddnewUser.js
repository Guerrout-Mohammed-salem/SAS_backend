import React from "react";
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

const AddnewUser = () => {
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
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInputGroupPrepend>
                    <CInputGroupText>R&nbsp;&nbsp;</CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput type="text" placeholder="Role" autoComplete="role" />
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
                  />
                </CInputGroup>
                <CFormGroup col>
                  <CCol xs="12" md="9">
                    <small className="text-muted">Upload Image</small>
                    <CInputFile id="file-input" name="file-input" />
                  </CCol>
                </CFormGroup>

                <CButton color="success" block>
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

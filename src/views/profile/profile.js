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

const Profile = () => {
  return (
    <CContainer>
      <CRow className="justify-content-center">
        <CCol md="9" lg="7" xl="6">
          <CCard className="mx-4">
            <CCardBody className="p-4">
              <CForm>
                <h1>Profile</h1>
                <CInputGroup className="mb-3">
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      <CIcon name="cil-user" />
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    type="text"
                    defaultValue="Adel"
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
                    defaultValue="DAFI"
                    autoComplete="familly_name"
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInputGroupPrepend>
                    <CInputGroupText>@&nbsp;</CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    type="text"
                    defaultValue="adel@gmail.com"
                    placeholder="Email"
                    autoComplete="email"
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInputGroupPrepend>
                    <CInputGroupText>R&nbsp;&nbsp;</CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    type="text"
                    placeholder="Role"
                    defaultValue="Developer"
                    autoComplete="role"
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
                    defaultValue="0656618909"
                    placeholder="Phone"
                    autoComplete="phone"
                  />
                </CInputGroup>
                <CFormGroup col>
                  <CCol xs="12" md="9">
                    <small className="text-muted">update profile image</small>
                    <CInputFile id="file-input" name="file-input" />
                  </CCol>
                </CFormGroup>

                <CButton color="success" block>
                  Save changes
                </CButton>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default Profile;

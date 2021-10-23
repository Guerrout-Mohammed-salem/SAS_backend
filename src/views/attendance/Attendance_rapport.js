import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CInput,
} from "@coreui/react";

const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "danger";
  }
};

const Attendance_rapport = () => {
  const history = useHistory();
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  function handleClick() {
    console.log(start, end);
  }
  return (
    <CRow>
      <CCol xl={12}>
        <CCard>
          <CCardHeader>
            <CRow>
              <CCol>Attendance rapport</CCol>
            </CRow>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol>
                <small className="text-muted">From</small>
                <CInput
                  type="date"
                  placeholder="Search"
                  autoComplete="seach"
                  value={start}
                  onChange={(e) => {
                    setStart(e.target.value);
                  }}
                />
              </CCol>
              <CCol>
                <small className="text-muted">to</small>
                <CInput
                  type="date"
                  placeholder="Search"
                  autoComplete="seach"
                  value={end}
                  onChange={(e) => {
                    setEnd(e.target.value);
                  }}
                />
              </CCol>
            </CRow>
            <br />

            <center>
              <CButton color="success" onClick={handleClick}>
                Get Rapport
              </CButton>
            </center>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Attendance_rapport;

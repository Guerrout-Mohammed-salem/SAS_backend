import React, { lazy } from "react";
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import "./dashboard.css";
import { useHistory } from "react-router-dom";
import { isAdmin } from "src/Auth";

const Dashboard = () => {
  const history = useHistory();

  function handleOnclick(path) {
    // console.log(process.env.PORT);
    history.push(path);
  }
  return (
    <CRow>
      {isAdmin() ? (
        <>
          <CCol sm="6" lg="3">
            <CWidgetDropdown
              className="card"
              onClick={() => handleOnclick("/users")}
              color="gradient-info"
              header="Users"
              text="–––––––----"
            ></CWidgetDropdown>
          </CCol>
          <CCol sm="6" lg="3">
            <CWidgetDropdown
              className="card"
              onClick={() => handleOnclick("/addnewuser")}
              color="gradient-info"
              header="Add User"
              text="–––––––––-------"
            ></CWidgetDropdown>
          </CCol>
          <CCol sm="6" lg="3">
            <CWidgetDropdown
              className="card"
              onClick={() => handleOnclick("/mark_attendance_qr")}
              color="gradient-info"
              header="Mark Attendance QR"
              text="––––––––––––––-----------"
            ></CWidgetDropdown>
          </CCol>
          <CCol sm="6" lg="3">
            <CWidgetDropdown
              className="card"
              onClick={() => handleOnclick("/manual_mark_attendance")}
              color="gradient-info"
              header="Manual Mark Attendance"
              text="––––––––––––––-----------"
            ></CWidgetDropdown>
          </CCol>
          <CCol sm="6" lg="3">
            <CWidgetDropdown
              className="card"
              // onClick={() => handleOnclick("/addnewuser")}
              color="gradient-primary"
              header="Attendance rapport"
              text="––––––––––––––––-----------"
            ></CWidgetDropdown>
          </CCol>
        </>
      ) : (
        <>
          <CCol sm="6" lg="3">
            <CWidgetDropdown
              className="card"
              onClick={() => handleOnclick("/users")}
              color="gradient-info"
              header="Users"
              text="–––––––----"
            ></CWidgetDropdown>
          </CCol>
          <CCol sm="6" lg="3">
            <CWidgetDropdown
              className="card"
              onClick={() => handleOnclick("/mark_attendance_qr")}
              color="gradient-info"
              header="Mark Attendance QR"
              text="––––––––––––––-----------"
            ></CWidgetDropdown>
          </CCol>
          <CCol sm="6" lg="3">
            <CWidgetDropdown
              className="card"
              onClick={() => handleOnclick("/manual_mark_attendance")}
              color="gradient-info"
              header="Manual Mark Attendance"
              text="––––––––––––––-----------"
            ></CWidgetDropdown>
          </CCol>
        </>
      )}
    </CRow>
  );
};

export default Dashboard;

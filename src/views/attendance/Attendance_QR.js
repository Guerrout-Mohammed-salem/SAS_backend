import React, { lazy, useState } from "react";
import { CRow, CImg, CCol, CCard, CCardBody, CCardHeader } from "@coreui/react";
import QrReader from "react-qr-reader";
import { getEmployee, markAttendance } from "src/Auth";
import { API } from "src/config";
import axios from "axios";

const Attendance_QR = () => {
  //   const history = useHistory();
  const [user, setUser] = useState({
    id: "no data",
    name: "no data",
    role: "no data",
    status: "no data",
    image: "",
  });
  const handleScan = (data) => {
    if (data) {
      let array = JSON.parse(localStorage.getItem("users"));
      let result = array.find((user) => user.id == data);
      if (result) {
        setUser({
          id: result.id,
          name: result.name,
          role: result.role,
          status: result.status,
          image: result.img,
        });
        markAttendance(data);
      }
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  return (
    <CRow>
      <CCol lg={12}>
        <CCard>
          <CCardHeader>Scan Employee Card</CCardHeader>
          <CCardBody>
            <CRow>
              <CCol lg={4}>
                <QrReader
                  delay={300}
                  onError={handleError}
                  onScan={handleScan}
                  style={{ height: 240, width: 300 }}
                />
              </CCol>

              <CCol>
                <center>
                  <CImg
                    rounded
                    thumbnail
                    src={user.image}
                    width="150"
                    height="150"
                  />
                </center>
                <br />
                <table className="table table-striped table-hover">
                  <tbody>
                    <tr>
                      <td>id:</td>
                      <td>
                        <strong>{user.id}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>name</td>
                      <td>
                        <strong>{user.name}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>role</td>
                      <td>
                        <strong>{user.role}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>status</td>
                      <td>
                        <strong>{user.status}</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Attendance_QR;

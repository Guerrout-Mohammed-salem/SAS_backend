import React, { lazy, useState } from "react";
import {
  CWidgetDropdown,
  CRow,
  CImg,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { useHistory } from "react-router-dom";
import QrReader from "react-qr-reader";

const Attendance_QR = () => {
  //   const history = useHistory();
  const [qrscan, setQrscan] = useState("No result");
  const handleScan = (data) => {
    if (data) {
      setQrscan(data);
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
                  style={{ height: 240, width: 320 }}
                />
              </CCol>

              <CCol>
                <center>
                  <CImg
                    rounded
                    thumbnail
                    src={
                      "https://e7.pngegg.com/pngimages/297/506/png-clipart-computer-icons-user-interface-google-account-my-account-icon-miscellaneous-blue-thumbnail.png"
                    }
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
                        <strong>{qrscan}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>name</td>
                      <td>
                        <strong>{qrscan}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>role</td>
                      <td>
                        <strong>{qrscan}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>status</td>
                      <td>
                        <strong>{qrscan}</strong>
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

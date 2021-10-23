import React from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CImg,
  CButton,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { getCard } from "src/Auth";

const User = ({ match }) => {
  const usersData = JSON.parse(localStorage.getItem("users"));
  const user = usersData.find((user) => user.id.toString() == match.params.id);
  const userDetails = user
    ? Object.entries(user)
    : [
        [
          "id",
          <span>
            <CIcon className="text-muted" name="cui-icon-ban" /> Not found
          </span>,
        ],
      ];

  function handleClick() {
    getCard(match.params.id);
  }
  function handleRemove() {
    if (window.confirm("Confirm")) {
      console.log("Removed!");
    }
  }
  return (
    <CRow>
      <CCol lg={12}>
        <CCard>
          <CCardHeader>User info: {match.params.id}</CCardHeader>
          <CCardBody>
            <CRow>
              <CCol md="3">
                <CImg
                  rounded
                  thumbnail
                  src={user.img}
                  width="200"
                  height="200"
                />
              </CCol>
              <CCol>
                <table className="table table-striped table-hover">
                  <tbody>
                    {userDetails.map(([key, value], index) => {
                      if (key != "img")
                        return (
                          <tr key={index.toString()}>
                            <td>{`${key}:`}</td>
                            <td>
                              <strong>{value}</strong>
                            </td>
                          </tr>
                        );
                    })}
                  </tbody>
                </table>

                <CRow>
                  <CCol md={2}>
                    <CButton color="success" onClick={handleClick}>
                      View card
                    </CButton>
                  </CCol>
                  <CCol>
                    <CButton color="success">Veiw all status</CButton>
                  </CCol>
                  <CCol>
                    <CButton color="danger" onClick={handleRemove}>
                      Delete
                    </CButton>
                  </CCol>
                </CRow>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default User;

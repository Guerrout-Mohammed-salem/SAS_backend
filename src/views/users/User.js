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

import usersData from "./UsersData";

const User = ({ match }) => {
  const user = usersData.find((user) => user.id.toString() === match.params.id);
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
                  src={usersData[match.params.id].img}
                  width="200"
                  height="200"
                />
              </CCol>
              <CCol>
                <table className="table table-striped table-hover">
                  <tbody>
                    {userDetails.map(([key, value], index) => {
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
                <CButton color="success">View card</CButton>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default User;

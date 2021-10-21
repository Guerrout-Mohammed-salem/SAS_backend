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
  CPagination,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CInput,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import usersData from "../users/UsersData";
import "../dashboard/dashboard.css";

const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "danger";
  }
};

const Manual_attendance = () => {
  const history = useHistory();
  const queryPage = useLocation().search.match(/page=([0-9]+)/, "");
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const [page, setPage] = useState(currentPage);
  const [search, setSearch] = useState("");

  const pageChange = (newPage) => {
    currentPage !== newPage &&
      history.push(`/manual_mark_attendance?page=${newPage}`);
  };

  useEffect(() => {
    currentPage !== page && setPage(currentPage);
  }, [currentPage, page]);

  function handleClick(e) {
    e == "active"
      ? console.log("active pressed!")
      : console.log("inactive pressed!");
  }
  return (
    <CRow>
      <CCol xl={12}>
        <CCard>
          <CCardHeader>
            <CRow>
              <CCol>Users</CCol>
              <CCol lg={4}>
                <CInputGroup className="m">
                  <CInput
                    type="text"
                    placeholder="Search"
                    autoComplete="seach"
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
                  {/* <CInputGroupPrepend>
                    <CInputGroupText>
                      <CIcon name="cil-search"/>
                    </CInputGroupText>
                  </CInputGroupPrepend> */}
                </CInputGroup>
              </CCol>
            </CRow>

            {/* <small className="text-muted"> table</small> */}
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={usersData}
              fields={[
                { key: "name", _classes: "font-weight-bold" },
                // "registered",
                "role",
                "status",
              ]}
              hover
              striped
              itemsPerPage={20}
              activePage={page}
              clickableRows
              // onRowClick={(item) =>
              //   user ? history.push(`/manual_mark_attendance/${item.id}`) : null
              // }
              scopedSlots={{
                status: (item) => (
                  <td>
                    <CDropdown>
                      <CDropdownToggle>
                        <CBadge color={getBadge(item.status)}>
                          {item.status}
                        </CBadge>
                      </CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem onClick={() => handleClick("active")}>
                          Active
                        </CDropdownItem>
                        <CDropdownItem onClick={() => handleClick("inactive")}>
                          Inactive
                        </CDropdownItem>
                        {/* <CDropdownItem>Another Action</CDropdownItem> */}
                      </CDropdownMenu>
                    </CDropdown>
                  </td>
                ),
              }}
            />
            <CPagination
              activePage={page}
              onActivePageChange={pageChange}
              pages={Math.round(usersData.length / 20)}
              doubleArrows={false}
              align="center"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Manual_attendance;

import React from "react";
import CIcon from "@coreui/icons-react";
import { user } from "src/global";

const _nav = user
  ? [
      /// admin
      {
        _tag: "CSidebarNavItem",
        name: "Dashboard",
        to: "/dashboard",
        icon: (
          <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />
        ),
      },
      {
        _tag: "CSidebarNavTitle",
        _children: ["User managments"],
      },
      {
        _tag: "CSidebarNavItem",
        name: "Users",
        to: "/users",
        icon: <CIcon name="cil-user" customClasses="c-sidebar-nav-icon" />,
      },
      {
        _tag: "CSidebarNavItem",
        name: "Add User",
        to: "/addnewuser",
        icon: (
          <CIcon name="cil-user-follow" customClasses="c-sidebar-nav-icon" />
        ),
      },
      {
        _tag: "CSidebarNavItem",
        name: "Mark attendance QR",
        to: "/mark_attendance_qr",
        icon: <CIcon name="cil-user" customClasses="c-sidebar-nav-icon" />,
      },
      {
        _tag: "CSidebarNavItem",
        name: "Mark attendance manual",
        to: "/manual_mark_attendance",
        icon: <CIcon name="cil-user" customClasses="c-sidebar-nav-icon" />,
      },
      // {
      //   _tag: "CSidebarNavDivider",
      //   className: "m-2",
      // },
    ]
  : [
      {
        _tag: "CSidebarNavItem",
        name: "Dashboard",
        to: "/dashboard",
        icon: (
          <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />
        ),
      },
      {
        _tag: "CSidebarNavItem",
        name: "User",
        to: "/users",
        icon: (
          <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />
        ),
      },
      {
        _tag: "CSidebarNavItem",
        name: "Mark attendance QR",
        to: "/mark_attendance_qr",
        icon: <CIcon name="cil-qr-code" customClasses="c-sidebar-nav-icon" />,
      },
      {
        _tag: "CSidebarNavItem",
        name: "Mark attendance manual",
        to: "/manual_mark_attendance",
        icon: <CIcon name="cil-pen-alt" customClasses="c-sidebar-nav-icon" />,
      },
    ];

export default _nav;

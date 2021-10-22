import getEmployees from "src/Auth/getEmployees";
const usersData = [];

const users = getEmployees().then((data) =>
  data.employees.map((employee) => {
    usersData.push({
      id: employee._id,
      name: `${employee.nom} ${employee.prenom}`,
      registered: "2018/01/01",
      role: employee.poste,
      status: "Pending",
      img: `data:image/png;base64,${employee.image}`,
    });
  })
);

// const usersData = [
//   {
//     id: 0,
//     name: "John Doe",
//     registered: "2018/01/01",
//     role: "Guest",
//     status: "Pending",
//     img: "https://www.remove.bg/images/remove_image_background.jpg",
//   },
//   {
//     id: 1,
//     name: "Samppa Nori",
//     registered: "2018/01/01",
//     role: "Member",
//     status: "Active",
//     img: "https://picsum.photos/id/117/1544/1024",
//   },
//   {
//     id: 2,
//     name: "Estavan Lykos",
//     registered: "2018/02/01",
//     role: "Staff",
//     status: "Banned",
//     img: "https://picsum.photos/id/118/1500/1000",
//   },
//   {
//     id: 3,
//     name: "Chetan Mohamed",
//     registered: "2018/02/01",
//     role: "Admin",
//     status: "Inactive",
//   },
//   {
//     id: 4,
//     name: "Derick Maximinus",
//     registered: "2018/03/01",
//     role: "Member",
//     status: "Pending",
//   },
//   {
//     id: 5,
//     name: "Friderik Dávid",
//     registered: "2018/01/21",
//     role: "Staff",
//     status: "Active",
//   },
//   {
//     id: 6,
//     name: "Yiorgos Avraamu",
//     registered: "2018/01/01",
//     role: "Member",
//     status: "Active",
//   },
//   {
//     id: 7,
//     name: "Avram Tarasios",
//     registered: "2018/02/01",
//     role: "Staff",
//     status: "Banned",
//   },
//   {
//     id: 8,
//     name: "Quintin Ed",
//     registered: "2018/02/01",
//     role: "Admin",
//     status: "Inactive",
//   },
//   {
//     id: 9,
//     name: "Enéas Kwadwo",
//     registered: "2018/03/01",
//     role: "Member",
//     status: "Pending",
//   },
//   {
//     id: 10,
//     name: "Agapetus Tadeáš",
//     registered: "2018/01/21",
//     role: "Staff",
//     status: "Active",
//   },
//   {
//     id: 11,
//     name: "Carwyn Fachtna",
//     registered: "2018/01/01",
//     role: "Member",
//     status: "Active",
//   },
//   {
//     id: 12,
//     name: "Nehemiah Tatius",
//     registered: "2018/02/01",
//     role: "Staff",
//     status: "Banned",
//   },
//   {
//     id: 13,
//     name: "Ebbe Gemariah",
//     registered: "2018/02/01",
//     role: "Admin",
//     status: "Inactive",
//   },
//   {
//     id: 14,
//     name: "Eustorgios Amulius",
//     registered: "2018/03/01",
//     role: "Member",
//     status: "Pending",
//   },
//   {
//     id: 15,
//     name: "Leopold Gáspár",
//     registered: "2018/01/21",
//     role: "Staff",
//     status: "Active",
//   },
//   {
//     id: 16,
//     name: "Pompeius René",
//     registered: "2018/01/01",
//     role: "Member",
//     status: "Active",
//   },
//   {
//     id: 17,
//     name: "Paĉjo Jadon",
//     registered: "2018/02/01",
//     role: "Staff",
//     status: "Banned",
//   },
//   {
//     id: 18,
//     name: "Micheal Mercurius",
//     registered: "2018/02/01",
//     role: "Admin",
//     status: "Inactive",
//   },
//   {
//     id: 19,
//     name: "Ganesha Dubhghall",
//     registered: "2018/03/01",
//     role: "Member",
//     status: "Pending",
//   },
//   {
//     id: 20,
//     name: "Hiroto Šimun",
//     registered: "2018/01/21",
//     role: "Staff",
//     status: "Active",
//   },
//   {
//     id: 21,
//     name: "Vishnu Serghei",
//     registered: "2018/01/01",
//     role: "Member",
//     status: "Active",
//   },
//   {
//     id: 22,
//     name: "Zbyněk Phoibos",
//     registered: "2018/02/01",
//     role: "Staff",
//     status: "Banned",
//   },
//   {
//     id: 23,
//     name: "Aulus Agmundr",
//     registered: "2018/01/01",
//     role: "Member",
//     status: "Pending",
//   },
//   {
//     id: 42,
//     name: "Ford Prefect",
//     registered: "2001/05/25",
//     role: "Alien",
//     status: "Don't panic!",
//   },
// ];

export default usersData;

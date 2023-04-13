import React from "react";

import "./index.css";

const dumpData = [
  {
    id: 1,
    fullName: "Uday",
    compName: "Google",
    emailId: "uday@google.com",
    mobNo: 7702310859,
    clientType: "Seller",
    servReq: "Market Place",
    queries: "Assistance needed",
  },
  {
    id: 3,
    fullName: "Ram Tej",
    compName: "Oracle",
    emailId: "ramtej@oracle.com",
    mobNo: 7702310880,
    clientType: "Seller",
    servReq: "Market Place",
    queries: "Assistance needed",
  },
  {
    id: 4,
    fullName: "Radha",
    compName: "Genzeon",
    emailId: "radha@genzeon.com",
    mobNo: 7708970880,
    clientType: "Seller",
    servReq: "Market Place",
    queries: "Assistance needed",
  },
  {
    id: 5,
    fullName: "Vineela",
    compName: "apollo",
    emailId: "vineela@apollo.com",
    mobNo: 7708956978,
    clientType: "Buyer",
    servReq: "Market Place",
    queries: "Assistance needed",
  },
  {
    id: 6,
    fullName: "Pradeep",
    compName: "Accenture",
    emailId: "pradeep@accenture.com",
    mobNo: 9440547642,
    clientType: "Buyer",
    servReq: "Market Place",
    queries: "Assistance needed",
  },
];

const ContactUsDetails = () => {
  if (dumpData.length === 0) {
    return (
      <div className="details-main-container">
        <table class="table-container">
          <tr className="tr-1">
            <th>Full Name</th>
            <th>Company Name</th>
            <th>Email Id</th>
            <th>Mobile Number</th>
            <th>client Type</th>
            <th>service Type</th>
            <th className="th-header-2">Queries</th>
          </tr>
        </table>
        <h1 className="no-tr">There is no Data Available</h1>
      </div>
    );
  }
  return (
    <div className="details-main-container">
      <table class="table-container">
        <tr className="tr-1">
          <th>Full Name</th>
          <th>Company Name</th>
          <th>Email Id</th>
          <th>Mobile Number</th>
          <th>client Type</th>
          <th>service Type</th>
          <th className="th-header-2">Queries</th>
        </tr>
        {dumpData.map((data) => (
          <tr className="tr-1">
            <td>{data.fullName}</td>
            <td>{data.compName}</td>
            <td>{data.emailId}</td>
            <td>{data.mobNo}</td>
            <td>{data.clientType}</td>
            <td>{data.servReq}</td>
            <td className="th-header-2">{data.queries}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ContactUsDetails;

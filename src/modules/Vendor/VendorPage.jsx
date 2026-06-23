import CommonTable from "../../components/CommonTable/CommonTable";

const CustomerPage = () => {
  const columns = [
    { field: "vendorName", headerName: "Vendor Name" },
    { field: "mobile", headerName: "Mobile" },
    { field: "email", headerName: "Email" },
    { field: "customerType", headerName: "Type" },
    { field: "status", headerName: "Status" }
  ];

  const rows = [
    {
      id: 1,
      vendorName: "Ramesh",
      mobile: "9876543210",
      email: "ramesh@gmail.com",
      customerType: "Individual",
      status: "Active"
    }
  ];

  return (
    <>
      <h1>Vendors</h1>

      <CommonTable
        columns={columns}
        rows={rows}
      />
    </>
  );
};

export default CustomerPage;
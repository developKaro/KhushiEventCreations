import CommonTable from "../../components/CommonTable/CommonTable";

const EventPage = () => {
  const columns = [
    {
      field: "eventName",
      headerName: "Event Name"
    },
    {
      field: "customer",
      headerName: "Customer"
    },
    {
      field: "eventDate",
      headerName: "Event Date"
    },
    {
      field: "status",
      headerName: "Status"
    }
  ];

  const rows = [
    {
      id: 1,
      eventName: "Wedding",
      customer: "Ramesh",
      eventDate: "20-Jun-2026",
      status: "Confirmed"
    },
    {
      id: 2,
      eventName: "Corporate Event",
      customer: "ABC Ltd",
      eventDate: "25-Jun-2026",
      status: "Planning"
    }
  ];

  return (
    <div>
      <h1>Events</h1>

      <CommonTable
        columns={columns}
        rows={rows}
      />
    </div>
  );
};

export default EventPage;
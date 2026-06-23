export const columns = [
        {
            field: "Customer Name",
            headerName: "Customer Name",
            renderCell: (row) => (
                <span
                    style={{
                        color: "#1976d2",
                        cursor: "pointer",
                        textDecoration: "underline",
                    }}
                    onClick={() => navigate(`/CustomerDetails/${row.id}`)}
                >
                    {row['Customer Name']}
                </span>
            ),
        },
        { field: "Customer Phone", headerName: "Mobile" },
        { field: "created_at", headerName: "Created On", type:"date"},
        { field: "Events", headerName: "Type" },
        { field: "created_at", headerName: "Status" ,type:"date"},
    ];
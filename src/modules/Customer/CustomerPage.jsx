import CommonTable from "../../components/CommonTable/CommonTable";
import { useEffect, useState } from "react";
import { supabase } from "../../Services/supabase"
import { Link, useNavigate } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";





const CustomerPage = () => {
    const navigate = useNavigate();
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        getCustomers();
    }, []);

    const getCustomers = async () => {

        let { data, error } = await supabase
            .from('Customer')
            .select('*')
        console.log(data)
        if (error) {
            console.error(error);
            return;
        }
        console.log(data)
        setCustomers(data);
    };
    const columns = [
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
    const rows = [
  {
    id: 1,
    customerName: "Satya",
    customerPhone: "9876543210",
    email: "satya@gmail.com",
    events: "Wedding",
    status: "Active",
  },
];

    return (
        <>
            <h1>Customers</h1>
            {customers.map((customer) => (
                <div >
                    {customer.name}
                </div>
            ))}
            <CommonTable
                columns={columns}
                rows={customers}
            />


        </>
    );
};



export default CustomerPage
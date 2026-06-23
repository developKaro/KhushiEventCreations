import CommonTable from "../../components/CommonTable/CommonTable";
import { useEffect, useState } from "react";
import { supabase } from "../../Services/supabase"
import { Link, useNavigate } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";
import { columns } from "./CustomerColunms";





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
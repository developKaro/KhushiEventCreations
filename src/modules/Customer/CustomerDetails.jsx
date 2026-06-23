import { useParams } from "react-router-dom";

const CustomerDetails = () => {
  const { id } = useParams();
    console.log(id)
  return (
    <div>
      <h1>Customer Details</h1>

      <div>
        <strong>Customer ID:</strong> {id}
      </div>

      {/* Later fetch customer details from Supabase using this ID */}
    </div>
  );
};

export default CustomerDetails;
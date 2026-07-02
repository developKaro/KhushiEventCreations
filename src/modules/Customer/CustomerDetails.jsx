import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../Services/supabase';

const CustomerDetails = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCustomerDetails();
  }, [id]);

  const getCustomerDetails = async () => {
    try {
      const { data, error } = await supabase
        .from('Customer')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      setCustomer(data);
    } catch (err) {
      console.error('Error fetching customer:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!customer) return <div>Customer not found</div>;

  return (
    <div>
      <h2>
        <strong>{customer['Customer Name']}</strong>
      </h2>
      <h3>Customer Details</h3>
      <p><strong>Name:</strong> {customer['Customer Name']}</p>
      <p><strong>Mobile:</strong> {customer['Customer Phone']}</p>
      <p><strong>Email:</strong> {customer.email}</p>
    </div>
  );
};

export default CustomerDetails;
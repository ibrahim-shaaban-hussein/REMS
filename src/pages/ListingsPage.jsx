// src/pages/ListingsPage.jsx
import { useEffect, useState } from 'react';
import { fetchListings } from '../services/api';

const ListingsPage = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetchListings()
      .then(response => setListings(response.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {listings.map(listing => (
        <div key={listing.id}>{listing.name}</div>
      ))}
    </div>
  );
};

export default ListingsPage;


import { useEffect, useState } from 'react';

const useFetch = () => {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://sheltered-bastion-67111.herokuapp.com/inventory`)
      .then((res) => res.json())
      .then((data) => {
        setInventory(data);
        setLoading(false);
      });
  }, []);

  return [inventory, setInventory, loading];
};

export default useFetch;

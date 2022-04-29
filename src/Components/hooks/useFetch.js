import { useEffect, useState } from 'react';

const useFetch = () => {
    const [inventory,setInventory] = useState([]);

    useEffect(() =>{
        fetch(`https://sheltered-bastion-67111.herokuapp.com/inventory`)
          .then((res) => res.json())
          .then((data) => setInventory(data));
    },[])

    return [inventory,setInventory];
}

export default useFetch
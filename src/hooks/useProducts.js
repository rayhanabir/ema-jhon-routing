import {useState, useEffect} from 'react';

const useProducts=()=>{
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[])
    //retun neccesary things
    return [products];
}

export default useProducts;
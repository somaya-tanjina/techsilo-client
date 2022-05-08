import { useEffect, useState } from "react";

const useProductDetails = (id) => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const url = `https://evening-citadel-22182.herokuapp.com/inventory/${id}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [id]);
    return [product, setProduct];
};
export default useProductDetails;

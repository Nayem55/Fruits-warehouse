import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import auth from "../firebase_init"

const useProducts=()=>{
    const [products,setProduct] = useState([])
    const user = useAuthState(auth);
    const email = user[0]?.email;
    useEffect(()=>{
        fetch(`https://fruitify-server.vercel.app/products?email=${email}`)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[email])
    return [products,setProduct]
}
export default useProducts;

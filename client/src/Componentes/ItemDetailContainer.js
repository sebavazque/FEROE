import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getDocs , collection, query, where} from 'firebase/firestore';
import { dbFirebase } from './Firebase';
import Loader from "./Loader";


const ItemDetailContainer = (props) => {

    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState([])
    const {itemId} = useParams()
    
    useEffect(()=>{   
        const q =  query(collection(dbFirebase, "Productos"),where("id", "==", Number(itemId)))

        getDocs(q)
        .then((res => setProducto(res.docs.map (doc =>  doc.data())[0]))) 
        .catch(err => toast.error(err.message))
        .finally(()=>setLoading(false))


    },[itemId])

    return  loading ? <Loader/>  : <ItemDetail producto = {producto}/>
            
    
}


export default  ItemDetailContainer
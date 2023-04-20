import { dbFirebase } from './Firebase'
import { doc, getDoc, collection, query,where, writeBatch, addDoc} from 'firebase/firestore';
import { useEffect, useState} from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import { useAppContext } from './CartContext';
import OrdenDetail from './OrdenDetail';




const Order = (props) => {

        const { orderId } = useParams();
        const [ loading, setLoading ] = useState(true)
       const orders = collection(dbFirebase, "Ordenes");

        useEffect(() => {
            const order = getDoc(orders, orderId);
            
            order.then(order => {
                order.data().items.forEach(item => {
                    addDoc(collection(dbFirebase, "Productos"), item.id, item)
                }
                )
                setLoading(false)
            }
            )
            .catch(err => toast.error(err.message))

        }, [orderId, orders])

    
    
 
        return (
            <div>
                {loading ? <Loader /> : <OrdenDetail order={orders} />}
                
            </div>

        )
    
}

export default Order
import React, { useEffect } from 'react'
import styles from "./orders.module.css"
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Singleorder from '../../components/SingleOrder/Singleorder'
import Adminfooter from '../../components/AdminFooter/Adminfooter'
import axios from 'axios'

const Orders = () => {

    const {id} = useParams()
    const orders = [
        { 
          id: "340394",
          price: "3434",
          time: "12 may, 2020",
          
          
        },
        {
          id: "340124",
          price: "324",
          time: "1 June, 2020",
          
        },
        {
          id: "340364",
          price: "1234",
          time: "06 Apr, 2020",
          
        },
        {
          id: "344494",
          price: "3434",
          time: "10 Dec, 2020",
          
        },
      ]

      const getOrders = async() => {
          try {
            let res = await axios.get(`https://tame-tan-bee-fez.cyclic.app/user`)
            console.log(res.data)
          } catch (error) {
            
          }
      }

     useEffect(()=> {
      getOrders()
     },[])
    

  return (
    <>
        <Navbar/>
        <div className={styles.orders}>
      <table className={styles.ordertable}>
        <thead>

      <tr>
        <th>orderId</th>
        <th>Order price</th>
        <th>order placed at</th>
        <th>Details</th>
        
      </tr>
        </thead>
        <tbody>
      {orders?.map((item)=> {
        return <Singleorder {...item} key={item.id}/>
      })}
      </tbody>
      
      </table>
    </div>
    <Adminfooter/>
    </>
  )
}

export default Orders
import React from 'react'
import Homebutton from '../../components/homebutton/Homebutton'
import Reportbar from '../../components/reportbar/Reportbar'
import "./productpage.scss"
// import axios from 'axios'
// import { useState } from 'react'
// import { useEffect } from 'react'

const ProductPage = () => {
    // const url = 'erika inventory url'
    // const [product, setProduct] = useState(null)
    // useEffect(() => {
    //     axios.get(url).then(
    //         response => {
    //             setProduct(response.data)
    //         }
    //     )
    // }, [url])
  return (
    <div className="Page">
        <div className="reportbar">
            <Reportbar/>
        </div>
    </div>
  )
}

export default ProductPage
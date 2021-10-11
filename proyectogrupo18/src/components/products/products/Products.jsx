import React, { useState, useEffect } from 'react'



import Navegation from '../../nav/Navegation';
import AddProducts from '../addProducts/AddProducts'
import SearchProducts from '../searchProducts/SearchProducts';
import ShowProducts from '../showProducts/ShowProducts'



const Products = () => {

    const [user, setUser] = useState([])
    const [searchProduc, setSearchProduc] = useState('')


    useEffect(() => {
        setUser("user")
    }, [user])


    return (
        <>
            {
                user === "admin" ? <Navegation /> :
                    <>
                        <br />
                        <h1>Bienvenido Comprador</h1>
                    </>

            }


            <div className="container">
                <SearchProducts searchProduc={searchProduc} setSearchProduc={setSearchProduc} />
                <ShowProducts searchProduc={searchProduc} />
                <AddProducts />
            </div>



        </>
    )
}

export default Products

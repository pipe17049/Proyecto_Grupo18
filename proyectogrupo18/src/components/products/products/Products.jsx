import React, { useState } from 'react'



import Navegation from '../../nav/Navegation';
import AddProducts from '../addProducts/AddProducts'
import ShowProducts from '../showProducts/ShowProducts'

/*
ShowProducts
AddProducts
*/


const Products = () => {

    const [typeuser, setTypeUser] = useState('')


    return (
        <>
            <Navegation />
            <AddProducts />
            {console.clear()}
            {console.log('Hola mundo')}

        </>
    )
}

export default Products

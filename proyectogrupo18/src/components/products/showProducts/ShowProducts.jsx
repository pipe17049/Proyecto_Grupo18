import React from 'react'
import CardProducts from '../card/CardProducts'


const productos = [
    {
        id: 123456,
        description: 'Hola mundo',
        value: 2000,
        state: 'off'
    },
    {
        id: 222222,
        description: 'Hola mundo2',
        value: 4000,
        state: 'on'
    },
    {
        id: 33333,
        description: 'Hola mundo3',
        value: 60000,
        state: 'off'
    },
    {
        id: 123456,
        description: 'Hola mundo',
        value: 2000,
        state: 'off'
    },
    {
        id: 222222,
        description: 'Hola mundo2',
        value: 4000,
        state: 'on'
    },
    {
        id: 33333,
        description: 'Hola mundo3',
        value: 60000,
        state: 'off'
    }]

const ShowProducts = () => {
    return (
        <div className="container">
            <h1 className="text-center">Hola mundo</h1>
            <h2>COmo estan</h2>

            <div className="row justify-content-around">

                {
                    productos.map((producto) => {
                        return (
                            <CardProducts
                                producto={producto}
                                key={producto.id}
                            />
                        )

                    })
                }
            </div>


        </div>
    )
}

export default ShowProducts

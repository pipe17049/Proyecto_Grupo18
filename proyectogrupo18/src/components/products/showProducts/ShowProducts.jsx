import React, { useEffect, useState } from 'react'
import CardProducts from '../card/CardProducts'


const list_productos = [
    {
        id: 1111111,
        description: 'Hola mundo y bienvenido a lo munodfo de jack',
        value: 2000,
        state: false
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
        id: 444444,
        description: 'Hola mundo',
        value: 2000,
        state: 'off'
    },
    {
        id: 555555,
        description: 'Hola mundo2',
        value: 4000,
        state: 'on'
    },
    {
        id: 777777,
        description: 'Hola mundo3',
        value: 60000,
        state: 'off'
    }]

const ShowProducts = ({ searchProduc }) => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        if (searchProduc !== "") {
            if (Object.keys(searchProduc).length > 3) {

                console.log("Hola")
            }
            console.log('keyword', searchProduc);
            //setProductos(searchProduc)
            // fetch(`http://localhost:5000/api/getByName/${searchProduc}`)
            //     .then(response => response.json())
            //     .then(data => {
            //         console.log('response', data)
            //         setProductos(data);
            //     }
            //     ).catch((error) => {
            //         console.log(error);
            //     });

        } else {
            setProductos(list_productos)
            // fetch('http://localhost:5000/api/')
            //     .then(response => response.json())
            //     .then(data => {
            //         console.log('response', data)
            //         setProductos(data);
            //     }
            //     ).catch((error) => {
            //         console.log(error);
            //     });

        }
    }, [searchProduc])
    return (

        <div className="row">
            <div className="col-12">
                try {
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Description</th>
                                <th scope="col">Value</th>
                                <th scope="col">State</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>



                        <tbody>{
                            productos.map(producto => {
                                return (

                                    <CardProducts
                                        producto={producto}
                                        key={producto.id}
                                    />
                                )
                            })
                        }

                        </tbody>
                    </table>
                } catch (error) {
                    console.log("No es encuentra el elemento")
                }





            </div>
        </div>


    )
}

export default ShowProducts

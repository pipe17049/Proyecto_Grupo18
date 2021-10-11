import React from 'react'

const CardProducts = ({ producto }) => {

    return (
        <>
            <tr>
                <th scope="row">{producto.id} </th>
                <td>{producto.description}</td>
                <td>{producto.value}</td>
                <td>{producto.state ? "IN STOCK" : "OUT STOCK"}</td>
                <td>
                    <button type="button" className="btn btn-primary"><i className="far fa-eye"></i></button>
                    <button type="button" className="btn btn-success"><i className="fas fa-edit"></i></button>
                    <button type="button" className="btn btn-danger"><i className="fas fa-trash-alt"></i></button>
                </td>
            </tr>
        </>
    )
}

export default CardProducts

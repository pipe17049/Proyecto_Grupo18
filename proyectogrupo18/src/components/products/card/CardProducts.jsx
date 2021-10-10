import React from 'react'

const CardProducts = ({ producto }) => {

    return (
        <>
            <div className="card col-6 col-sm-5 col-md-4 col-lg-3 col-xl-3 col-xxl-2">

                <div className="card-body">
                    <h5 className="card-title">{producto.id} </h5>
                    <p className="card-text">{producto.description} </p>
                    <p className="card-text"><small className="text-muted">{producto.value} </small></p>
                </div>
            </div>
        </>
    )
}

export default CardProducts

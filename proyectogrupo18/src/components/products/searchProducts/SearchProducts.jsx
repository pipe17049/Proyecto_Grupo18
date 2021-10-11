import React from 'react'


const SearchProducts = ({ searchProduc, setSearchProduc }) => {

    const changeInput = (e) => {
        console.log(e.target.value);
        setSearchProduc(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        console.log('entro');
    }

    return (
        <div>
            <form className="row">
                <div className="col-12 col-sm-10 col-md-10">
                    <input value={searchProduc} onChange={changeInput} type="text" className="form-control inputSearch" id="inputPassword2" placeholder="busca un producto" />
                </div>
                <div className="col-12 col-sm-2 col-md-2">
                    <button onClick={submit} type="submit" className="btn btn-primary mb-3">Buscar</button>
                </div>
            </form>
        </div>
    )
}

export default SearchProducts

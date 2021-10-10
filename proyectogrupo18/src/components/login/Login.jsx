import React, { useState } from 'react'
import { useHistory } from 'react-router'
import './Login.css'

const Login = () => {

    const [formValues, setFormValues] = useState({})
    const history = useHistory()
    const changeField = (e) => {

        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault();
        history.push('/home')
    }

    return (
        <div className="container">

            <div className="row vh-100 justify-content-center align-items-center">

                <div className="card col-auto">

                    <div className="card-header">
                        <h3>Bienvenido a casa</h3>
                    </div>

                    <div className="card-body">
                        <form action="#">
                            <label for="email">Ingrese su email</label>
                            <div className="input-group form-group">

                                <input onChange={changeField} value={formValues.username} name="username" type="email" className="form-control" placeholder="username" />

                            </div>
                            <label for="password">Ingrese su Password</label>
                            <div className="input-group form-group">
                                <input onChange={changeField} value={formValues.password} name="password" type="password" className="form-control" placeholder="password" />
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Default checkbox
                                </label>
                            </div>
                            <div className="form-group">
                                <input onClick={submit} type="submit" value="Login" className="btn btn-primary float-right login_btn" />
                            </div>

                        </form>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Login

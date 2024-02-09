import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function Register() {
    const data = ({ name: "", email: "", lname: "", password: "" })
    const [inputData, setInputData] = useState(data)
    const [flag, setFlag] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        if (!inputData.name || !inputData.email || !inputData.lname || !inputData.password) {
            alert("All Field are Mandotary!!")

        } else {
           console.log("InputData",inputData)
            Axios.post("/users", inputData).
                then((resonse) => {
                    console.log(resonse)

                }).catch(Error)
               {

                console.log(Error)
               }

            setFlag(true)
        }

    }
    useEffect(() => {
        console.log("Registered")
    }, [flag])


    function handleData(e) {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
        console.log(inputData)

    }

    return (
        <>
            <pre>{(flag) ? <h2> Hello {inputData.name},You have Registered Suceesfully</h2> : ""}</pre>
            <div className="text-center">
                <h1 className='register'>
                    Register</h1> <br></br>
            </div>
            <form className="text-center" onSubmit={handleSubmit}>
                <div className="bg-img">
                    First Name:
                    <input type='text' name='name' value={inputData.name} onChange={handleData} size={30} /><br></br><br></br>
                    Last Name:
                    <input type='text' name='lname' value={inputData.lname} onChange={handleData} size={30} /><br></br><br></br>
                    Email :&nbsp;&nbsp;&nbsp;
                    <input type='email' name='email' value={inputData.email} onChange={handleData} size={33} /><br></br><br></br>
                    Password :&nbsp;&nbsp;&nbsp;
                    <input type='password' name='password' value={inputData.password} onChange={handleData} size={30} /><br></br><br></br>
                    <button className="btn btn-success">Submit</button><br></br>
                </div>
            </form>

        </>

    )
}

export default Register
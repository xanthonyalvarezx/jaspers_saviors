'use client'
import React from "react";
import styles from "./auth.module.css"
import Link from "next/link";

const errorMessage = document.getElementById("error")


const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData);

    const response = await fetch("/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
    });
    const result = await response.json();
    if (result.error) {
        console.log(result.error)
        errorMessage.innerText = result.error
    }
    event.target.reset()

};

const clearErrors = (event) => {
    event.preventDefault();
    errorMessage.innerText = ""



}

const Register = () => {
    return (
        <div className="flex flex-col justify-center items-center">

            <form className="flex justify-center w-3/6 " onSubmit={handleSubmit} onFocus={clearErrors}>
                <div className="flex flex-col justify-between border w-72 h-96 bg-white rounded-lg p-5">
                    <div id="error" className="text-red-700 text-center"></div>
                    <input className={styles.input} onFocus={clearErrors} type="text" name="name" placeholder="Full Name" required />
                    <input className={styles.input} onFocus={clearErrors} type="email" name="email" placeholder="Email" required />
                    <input className={styles.input} onFocus={clearErrors} type="password" name="password" placeholder="Password" required />
                    {/* <input className={styles.input} type="password" placeholder="Confirm Password" /> */}
                    <button type="submit">Submit</button>
                    <sub className="text-center mt-2"><Link href='/api/auth/signin'>Already registered? Login</Link></sub>
                </div>
            </form>
        </div>
    );
};

export default Register;

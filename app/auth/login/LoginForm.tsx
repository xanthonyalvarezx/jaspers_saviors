'use client'
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "../auth.module.css"
import Link from "next/link";
import Image from "next/image";
import googleIcon from "../../assets/google_full.svg"


export default function LoginForm() {
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState("");


    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData)
        console.log(formData)

        try {
            const response = await fetch("/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            if (!result.success) {
                setErrorMessage(result.error)
            } else {
                router.push("/");
                event.target.reset()
            }
        } catch (error) {
            console.log("ERROR", error)
        }
    };
    const clearErrors = (event) => {
        setErrorMessage("")
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center w-72 h-96 bg-white rounded-lg shadow-lg">
                <form className="flex justify-center w-3/6 " onSubmit={handleSubmit} onFocus={clearErrors}>
                    <div className="flex flex-col justify-around h-40 p-5">
                        {errorMessage && <div className="text-red-700 text-center">{errorMessage}</div>}
                        <input className="rounded-lg shadow-xl p-1" onFocus={clearErrors} type="email" name="email" placeholder="Email" required />
                        <input className="rounded-lg shadow-xl p-1" onFocus={clearErrors} type="password" name="password" placeholder="Password" required />
                        <button className="shadow-xl" type="submit">Login</button>
                    </div>
                </form>
                <div className="text-center">
                    <sub>or login with Google </sub>
                    <form action="http://localhost:3000/api/auth/signin/google" method="POST">
                        <input type="hidden" name="csrfToken" value="2eff0479d90626e0e77d2e3c4d9cd2e083c5c224798c1352a0cafda6276c7524" />
                        <input type="hidden" name="callbackUrl" value="http://localhost:3000" />
                        <button type="submit" className={styles.googleButton}>
                            <Image
                                src={googleIcon}
                                width={75}
                                height={75}
                                alt="Google logo"
                            />
                        </button>
                    </form>
                </div>
                <sub className="text-center mt-2"><Link href='/auth/register'>Not registered? Sign Up!</Link></sub>
            </div>
        </div>
    );
}


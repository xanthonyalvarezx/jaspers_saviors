"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "../auth.module.css";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function RegisterComponent() {
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const jsonData = Object.fromEntries(formData);

        try {
            const response = await fetch("/api/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(jsonData),
            });

            const result = await response.json();

            if (result.error) {
                console.log(result.error);
                setErrorMessage(result.error);
            }

            if (result.success) {
                router.push("/auth/login");
            }
            event.target.reset();
        } catch (error) {
            console.error("An error occurred:", error);
            setErrorMessage("Something went wrong. Please try again.");
        }
    };

    const clearErrors = () => {
        setErrorMessage("");
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <form className="flex justify-center w-3/6" onSubmit={handleSubmit} onFocus={clearErrors}>
                <div className="flex flex-col justify-around border w-72 h-96 bg-white rounded-lg p-5">
                    {errorMessage && <div className="text-red-700 text-center">{errorMessage}</div>}
                    <input className="rounded-lg shadow-xl" onFocus={clearErrors} type="text" name="name" placeholder="Full Name" required />
                    <input className="rounded-lg shadow-xl" onFocus={clearErrors} type="email" name="email" placeholder="Email" required />
                    <input className="rounded-lg shadow-xl" onFocus={clearErrors} type="password" name="password" placeholder="Password" required />
                    <button type="submit">Submit</button>
                    <sub className="text-center mt-2"><Link href="../auth/login">Already registered? Login</Link></sub>
                </div>
            </form>
        </div>
    );
}

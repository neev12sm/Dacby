

import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

export default function Register() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await API.post(
                "/auth/register",
                formData
            );

            alert("Registration Successful");

            window.location.href = "/login";

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Registration failed"
            );
        }
    };


    return (

        <div
            className="
                min-h-screen
                bg-gradient-to-br
                from-slate-950
                via-blue-950
                to-slate-900
                flex
                items-center
                justify-center
                px-4
            "
        >

            <div
                className="
                    w-full
                    max-w-md
                    bg-white/10
                    backdrop-blur-lg
                    border
                    border-white/20
                    rounded-3xl
                    shadow-2xl
                    p-8
                "
            >

                <h1
                    className="
                        text-4xl
                        font-bold
                        text-center
                        text-cyan-400
                        mb-2
                    "
                >
                    Create Account
                </h1>

                <p
                    className="
                        text-gray-300
                        text-center
                        mb-8
                    "
                >
                    Join Hacker News Community
                </p>


                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <div>

                        <label
                            className="
                                block
                                text-gray-300
                                mb-2
                            "
                        >
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            className="
                                w-full
                                px-4
                                py-3
                                rounded-xl
                                bg-slate-900/70
                                border
                                border-slate-700
                                text-white
                                outline-none
                                focus:ring-2
                                focus:ring-cyan-400
                            "
                        />

                    </div>


                    <div>

                        <label
                            className="
                                block
                                text-gray-300
                                mb-2
                            "
                        >
                            Email Address
                        </label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="
                                w-full
                                px-4
                                py-3
                                rounded-xl
                                bg-slate-900/70
                                border
                                border-slate-700
                                text-white
                                outline-none
                                focus:ring-2
                                focus:ring-cyan-400
                            "
                        />

                    </div>


                    <div>

                        <label
                            className="
                                block
                                text-gray-300
                                mb-2
                            "
                        >
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            placeholder="Create password"
                            value={formData.password}
                            onChange={handleChange}
                            className="
                                w-full
                                px-4
                                py-3
                                rounded-xl
                                bg-slate-900/70
                                border
                                border-slate-700
                                text-white
                                outline-none
                                focus:ring-2
                                focus:ring-cyan-400
                            "
                        />

                    </div>


                    <button
                        type="submit"
                        className="
                            w-full
                            py-3
                            rounded-xl
                            bg-cyan-400
                            hover:bg-cyan-300
                            text-slate-900
                            font-bold
                            text-lg
                            transition
                            duration-300
                        "
                    >
                        Register
                    </button>

                </form>


                <p
                    className="
                        text-center
                        text-gray-400
                        mt-6
                    "
                >
                    Already have an account?

                    <Link
                        to="/login"
                        className="
                            text-cyan-400
                            ml-2
                            hover:underline
                        "
                    >
                        Login
                    </Link>

                </p>

            </div>

        </div>
    );
}
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PiEyeThin, PiEyeSlashThin } from "react-icons/pi";
import cogoToast from '@successtar/cogo-toast';

import AuthLayout from '../../Layout/Auth.Layout'

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState('Weak');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function TogglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }

    const HandleEmailChange = (e) => {
        const inputValue = e.target.value;
        setEmail(inputValue);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(emailRegex.test(inputValue));
    };

    const HandlePasswordChange = (e) => {
        const inputValue = e.target.value;
        setPassword(inputValue);
        const hasUpperCase = /[A-Z]/.test(inputValue);
        const hasLowerCase = /[a-z]/.test(inputValue);
        const hasDigit = /[0-9]/.test(inputValue);
        const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(inputValue);

        if (inputValue.length >= 8 && hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar) {
            setPasswordStrength('Strong');
        } else if (inputValue.length >= 6 && (hasUpperCase || hasLowerCase) && hasDigit) {
            setPasswordStrength('Medium');
        } else {
            setPasswordStrength('Weak');
        }
    };

    const SubmitValues = async () => { }

    return (
        <AuthLayout>
            <div className='flex flex-col bg-white shadow-2xl rounded-2xl border-2 border-white dark:border-black dark:bg-black py-5 sm:py-10 px-6 sm:px-14  transition-[flex] duration-[0.7s] ease-out-flex'>
                <div className='flex flex-col gap-y-2'>
                    <span className='font-extrabold text-xl sm:text-2xl text-[#000] dark:text-white'>Let's get started</span>
                    <span className='text-[#000] dark:text-white'>Please enter the following information to continue</span>
                </div>
                <div className='my-4'>
                    <span className='font-extrabold  text-[#000] dark:text-white'>Email Addresss</span>
                    <input
                        type="email"
                        value={email}
                        onChange={HandleEmailChange}
                        placeholder="blahblah@gmail.com"
                        className="w-full p-2 text-lg transition-all text-black dark:text-white duration-500 border-[1px] border-black outline-none rounded-xl dark:bg-transparent dark:border-2 dark:rounded-lg dark:border-white"
                    />
                    {!isValidEmail && email && <p style={{ color: 'red' }}>Please enter a valid email</p>}
                    {isValidEmail && <p style={{ color: 'green' }}>Email is valid</p>}
                </div>
                <div className='my-4'>
                    <span className='font-extrabold  text-[#000] dark:text-white'>Password</span>
                    <div className="relative">
                        <input
                            type={isPasswordVisible ? "text" : "password"}
                            value={password}
                            onChange={HandlePasswordChange}
                            placeholder="********"
                            className="w-full p-2 text-lg transition-all text-black dark:text-white  duration-500 border-[1px] border-black outline-none rounded-xl dark:bg-transparent dark:border-2 dark:rounded-lg dark:border-white"
                        />
                        {passwordStrength !== "Strong" && <p>Password Strength: {passwordStrength}</p>}
                        <button
                            className="absolute bottom-6 inset-y-0 right-0 flex items-center px-4 text-black dark:text-white"
                            onClick={TogglePasswordVisibility}
                        >
                            {isPasswordVisible ? (
                                <PiEyeThin />
                            ) : (
                                <PiEyeSlashThin />
                            )}
                        </button>
                    </div>
                </div>
                <div className='flex w-full my-4'>
                    <button
                        onClick={SubmitValues}
                        className='w-full px-8 py-3 text-sm text-white transition-all bg-black border border-black rounded-full hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>
                        Create account
                    </button>
                </div>
                <div className='flex justify-end mt-4'>
                    <Link to='/Login'>
                        <span className='text-[#000] hover:text-[#000] dark:text-white'>Access your account</span>
                    </Link>
                </div>
            </div>
        </AuthLayout>
    )
}

export default Register
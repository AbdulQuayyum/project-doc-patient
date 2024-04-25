import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PiEyeThin, PiEyeSlashThin } from "react-icons/pi";
import cogoToast from '@successtar/cogo-toast';
import Select from 'react-select'

import AuthLayout from '../../Layout/Auth.Layout'
import { NINOTPModal } from '../../Components/Index';
import { DocumentTitle } from '../../Utilities/DocumentTitle'

const Register = () => {
    DocumentTitle("NNo Name Yet || A Medical Platform - Register Page")
    const [nin, setNin] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [accountType, setAccountType] = useState("")
    const [loading, setLoading] = useState(false)
    const [isValidNin, setIsValidNin] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState('Weak');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [disableNINInput, setDisableNINInput] = useState(false);
    const [showNINOTPModal, setShowNINOTPModal] = useState(false);
    const navigate = useNavigate();

    function TogglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }

    const HandleNinChange = (e) => {
        let inputValue = e.target.value;
        inputValue = inputValue.replace(/\D/g, '');
        inputValue = inputValue.slice(0, 11);
        setNin(inputValue);
        if (inputValue.length === 11) {
            setShowNINOTPModal(true);
        }
    };

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

    const HandleDisableNINInput = (disable) => {
        setDisableNINInput(disable);
    };

    const CustomStyles = {
        control: (provided) => ({
            ...provided,
            cursor: "pointer",
            color: "#e5e7eb",
            background: 'transparent',
            borderColor: "#000",
            borderWidth: "1px",
            borderRadius: "12px",
            minHeight: '48px',
            padding: "0px 2px"
        })
    };

    const AccountTypeData = [
        {
            "label": "Individual Account",
            "datavalue": "individual",
        },
        {
            "label": "Family Account",
            "datavalue": "family",
        },
    ]

    const isDisabled = !nin || !email || !password || !isValidEmail || !disableNINInput || passwordStrength !== "Strong"
    const condition = nin && email && password && isValidEmail && disableNINInput && passwordStrength === "Strong" 

    const SubmitValues = async () => {
        console.log(nin, email, password)
        if (accountType.datavalue === 'family') {
            navigate('/payment'); 
        } else {
            navigate("/Dashboard")
        }
    }

    return (
        <AuthLayout>
            <div className='flex flex-col bg-white shadow-2xl rounded-2xl border-2 border-white dark:border-black dark:bg-black py-5 sm:py-10 px-6 sm:px-14  transition-[flex] duration-[0.7s] ease-out-flex'>
                <div className='flex flex-col mb-3 gap-y-2'>
                    <span className='font-extrabold text-xl sm:text-2xl text-[#000] dark:text-white'>Let's get started</span>
                    <span className='text-[#000] dark:text-white'>Please enter the following information to continue</span>
                </div>
                <div className='flex flex-col my-3 gap-y-1'>
                    <span className='font-extrabold  text-[#000] dark:text-white'>NIN (National Identification Number)</span>
                    <input
                        type="text"
                        maxLength={11}
                        value={nin}
                        disabled={disableNINInput}
                        onChange={HandleNinChange}
                        placeholder="00000000000"
                        className="w-full p-2 text-lg transition-all text-black dark:text-white duration-500 border-[1px] border-black outline-none rounded-xl dark:bg-transparent dark:border-2 dark:rounded-lg dark:border-white disabled:opacity-70 disabled:cursor-not-allowed"
                    />
                    {disableNINInput && <p style={{ color: 'green' }}>NIN has been verified</p>}
                    {!disableNINInput && <p style={{ color: 'red' }}>NIN has not been verified</p>}
                </div>
                <div className='flex flex-col my-3 gap-y-1'>
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
                <div className='flex flex-col my-3 gap-y-1'>
                    <span className='font-extrabold  text-[#000] dark:text-white'>Password</span>
                    <div className="relative">
                        <input
                            type={isPasswordVisible ? "text" : "password"}
                            value={password}
                            onChange={HandlePasswordChange}
                            placeholder="********"
                            className="w-full p-2 text-lg transition-all text-black dark:text-white  duration-500 border-[1px] border-black outline-none rounded-xl dark:bg-transparent dark:border-2 dark:rounded-lg dark:border-white"
                        />
                        {passwordStrength !== "Strong" && <p className='text-[#000] dark:text-white'>Password Strength: {passwordStrength}</p>}
                        <button
                            className="absolute inset-y-0 right-0 flex items-center px-4 text-black bottom-6 dark:text-white"
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
                { condition &&
                <div className='flex flex-col my-3 gap-y-1'>
                    <label htmlFor="accountType" className="font-extrabold  text-[#000] dark:text-white" >
                        Select an account type
                    </label>
                    <Select
                        isSearchable
                        value={accountType}
                        options={AccountTypeData}
                        styles={CustomStyles}
                        placeholder='Select an account type...'
                        getOptionLabel={(AccountTypeData) => AccountTypeData.label}
                        getOptionValue={(AccountTypeData) => AccountTypeData.datavalue}
                        onChange={item => {
                            setAccountType(item);
                        }}
                    />
                </div>
                }
                <div className='flex w-full my-4'>
                    <button
                        // disabled={isDisabled}
                        onClick={SubmitValues}
                        className='w-full px-8 py-3 text-sm text-white transition-all bg-black border border-black rounded-md hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white disabled:opacity-70 disabled:cursor-not-allowed'>
                        Create account
                    </button>
                </div>
                <div className='flex justify-end mt-4'>
                    <Link to='/Login'>
                        <span className='text-[#000] hover:text-[#000] dark:text-white'>Access your account</span>
                    </Link>
                </div>
            </div>
            {showNINOTPModal && <NINOTPModal showNINOTPModal={showNINOTPModal} setShowNINOTPModal={setShowNINOTPModal} HandleDisableNINInput={HandleDisableNINInput} />}
        </AuthLayout>
    )
}

export default Register
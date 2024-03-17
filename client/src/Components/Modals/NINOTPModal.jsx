import React, { useState } from 'react'
import { PiXThin } from "react-icons/pi";
import cogoToast from '@successtar/cogo-toast';

const NINOTPModal = ({ showNINOTPModal, setShowNINOTPModal, HandleDisableNINInput }) => {
    const [otp, setOtp] = useState("")

    const HandleChange = (e) => {
        const inputValue = e.target.value;
        if (/^\d*$/.test(inputValue) || inputValue === "") {
            setOtp(inputValue);
        }
    };

    const HandleSubmit = () => {
        if (otp.trim() === "") {
            cogoToast.error("Please enter OTP value.");
            return;
        } else if (otp === "123456") {
            setShowNINOTPModal(false);
            HandleDisableNINInput(true);
            cogoToast.success("OTP successfully verified.");
        } else {
            cogoToast.error("Wrong OTP value.");
        }
    };
    return (
        <div className={showNINOTPModal ? "modal active-modal" : "modal"}>
            <div className="modal-content dark:bg-black">
                < PiXThin className='modal-close dark:text-[#fff]' onClick={() => setShowNINOTPModal(false)} />
                <div>
                    <div className='my-4 gap-y-4 flex flex-col'>
                        <div className='flex flex-col gap-y-1'>
                            <span className='font-extrabold  text-black dark:text-white'>OTP Value</span>
                            <span className=' font-semibold text-black dark:text-white'>Enter the otp sent to the number linked to your NIN</span>
                        </div>
                        <input
                            type="text"
                            maxLength={6}
                            value={otp}
                            onChange={HandleChange}
                            placeholder="Enter OTP value"
                            className="w-full p-2 text-lg transition-all text-black dark:text-white duration-500 border-[1px] border-black outline-none rounded-xl dark:bg-transparent dark:border-2 dark:rounded-lg dark:border-white"
                        />
                    </div>
                </div>
                <div className='flex justify-end gap-x-4'>
                    <button
                        onClick={HandleSubmit}
                        className='px-8 py-3 text-sm text-black transition-all bg-white border border-black rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:text-white hover:bg-black hover:border-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NINOTPModal
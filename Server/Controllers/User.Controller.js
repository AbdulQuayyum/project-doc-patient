import axios from 'axios';
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

import User from "../Models/User.Model.js"
import { ValidateEmail, ValidatePasswordStrength } from '../Utilities/Utilities.js';
import { HTTP_STATUS_OK, HTTP_STATUS_BAD_REQUEST, HTTP_STATUS_UNAUTHORIZED, HTTP_STATUS_NOT_FOUND, HTTP_STATUS_CONFLICT, HTTP_STATUS_INTERNAL_SERVER_ERROR } from '../Utilities/Status.js';

export async function CreateUser(req, res) {
    try {
        const { nin, email, password } = req.body;
        if (!nin || !email || !password) {
            return res.status(HTTP_STATUS_BAD_REQUEST).json({
                success: false,
                message: 'email, nin and password are required fields.',
            });
        }

        if (!ValidateEmail(email)) {
            return res.status(HTTP_STATUS_BAD_REQUEST).json({
                success: false,
                message: 'Invalid email format.',
            });
        }

        if (nin.length !== 11) {
            return res.status(HTTP_STATUS_BAD_REQUEST).json({
                success: false,
                message: 'NIN must be 11 characters long.',
            });
        }

        const { isPasswordStrong, errors } = ValidatePasswordStrength(password);

        if (!isPasswordStrong) {
            return res.status(HTTP_STATUS_BAD_REQUEST).json({
                success: false,
                message: 'Password does not meet the strength requirements.',
                errors,
            });
        }

        let CheckUserEmail = await User.findOne({ Email: req.body.Email })
        if (CheckUserEmail) {
            return res.status(HTTP_STATUS_CONFLICT).json({
                success: false,
                message: "User already exists"
            })
        }

        let CheckUserNIN = await User.findOne({ Email: req.body.NationalIdentificationNumber })
        if (CheckUserNIN) {
            return res.status(HTTP_STATUS_CONFLICT).json({
                success: false,
                message: "An existing user is using this NIN"
            })
        }

        const Salt = await bcrypt.genSalt(10)
        const HashedPassword = await bcrypt.hash(req.body.Password, Salt)
        req.body.Password = HashedPassword
        const NewUser = new User(req.body)
        await NewUser.save()
        res.status(HTTP_STATUS_OK).json({
            success: true,
            message: "User Created Successfully",
            data: null,
        })
    } catch (error) {
        res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json({
            success: false,
            message: 'Error occurred',
            error: error.message
        })
    }
}
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const UserSchema = new Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    PhoneNumber: {
        type: String,
        required: true
    },
    NationalIdentificationNumber: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    IsVerified: {
        type: Boolean,
        default: false
    },
    IsAdmin: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

const User = model("Users", UserSchema);

export default User;
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    registeredPhoneNo: {
        type: String,
        match: /^[0-9]{10}$/,
        required: true,
    },
    emailAddress: {
        type: String,
        trim: true,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        required: true,
    },
    age: {
        type: Number
    },
    Role: {
        type: [String],
        required: true,
    },
    aadhar: {
        type: String
    },
    Password: {
        type: String
    },
    currentAddress: {
        type: String
    },
    permanentAddress: {
        type: String,
    },
    panNumber: {
        type: String
    },
    bankAccountDetails: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    }
});
export const userModel = mongoose.model("users", userSchema);
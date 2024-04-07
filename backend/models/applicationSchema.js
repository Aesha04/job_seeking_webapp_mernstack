import mongoose from "mongoose";
import validator from "validator";

const applicattionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide your name!"],
        minLength: [3, "Name must constain at leat 3 characters!"],
        maxLength: [30, "Name must cannot exceed 30 characters!"],
    },
    email : {
        type: String,
        validate: [validator.isEmail, "Please provide a valid email"],
        required: [true, "please provide tour email"],
    },
    coverLetter: {
        type: String,
        required: [true, "Please provide your cover Letter!"],
    },
    phone : {
        type: Number,
        required: [true, "Please provide your Phone number!"],
    },
    address : {
        type: String,
        required: [true, "please provide your address!"],
    },
    resume: {
        public_id: {
            type:String,
            required: true,
        },
        url:{
            type: String,
            required: true,
        }
    },
    applicantID: {
        user: {
            type: mongoose.Schema.Types.ObjectID,
            ref: "User",
            required: true,
        },
        role: {
            type: String,
            enum: ["Job Seeker"],
            required: true,
        }
    },
    employerID : {
        user: {
            type: mongoose.Schema.Types.ObjectID,
            ref: "User",
            required: true,
        },
        role: {
            type: String,
            enum: ["Employer"],
            required: true,
        }
    }
});

export const Application = mongoose.model("Application",applicattionSchema);
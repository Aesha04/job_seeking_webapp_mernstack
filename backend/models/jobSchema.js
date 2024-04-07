import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type : String,
        required : [true, "Please provide job title"],
        minLength : [3,"Job title must contain 3 letters!"],
        maxLength : [50,"Job title cannot exceed 50 characters!"],
    },
    description : {
        type : String,
        required : [true, "Please provide job description"],
        minLength : [3,"Job description must contain 3 letters!"],
        maxLength : [350,"Job title cannot exceed 350 characters!"],
    },
    category : {

        type : String,
        required : [true, "Job category is required"],
    },
    country : {
        type : String,
        required : [true,"Job country is required"],
    },
    city : {
        type : String,
        required : [true,"Job city is required"],
    },
    location : {
        type : String,
        required : [true, "Please provide exact location"],
        minLength : [10,"Job location must contain 10 characters"]
    },
    fixedSalary : {
        type : Number,
        minLength : [4,"must contain atleast 4 digits"],
        maxLength : [9, "cannot exceed 9 digits"],
    },
    salaryFrom : {
        type :Number,
        minLength : [4,"must contain atleast 4 digits"],
        maxLength : [9, "cannot exceed 9 digits"],
    },
    salaryTo : {
        type :Number,
        minLength : [4,"must contain atleast 4 digits"],
        maxLength : [9, "cannot exceed 9 digits"],
    },
    expired: {
        type : Boolean,
        default : false,
    },
    jobPostedOn : {
        type : Date,
        default : Date.now,
    },
    postedBy : {
        type : mongoose.Schema.ObjectId,
        ref : "User",
        required : true,
    },
});

export const Job = mongoose.model("Job",jobSchema);
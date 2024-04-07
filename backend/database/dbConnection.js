import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL, {
        dbName : "MERN_JOB_SEEKING",
    })
    .then(() => {
        console.log("SUCCESSFULLY CONNECTED");
    })
    .catch((err) => {
        console.log(err);
    });
};


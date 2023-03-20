import {config} from "dotenv";

config();

export const configs ={
    PORT:process.env.PORT || 5001,
    DB_URL:process.env.DB_URL || "google",


    ACCESS_SECRET: process.env.JWT_ACCESS_SECRET || '111',
    REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || '222',

    TWILIO_AUTH_TOKEN:process.env.TWILIO_AUTH_TOKEN,
    TWILIO_ACCOUNT_SID:process.env.TWILIO_ACCOUNT_SID,
    TWILIO_SERVICE_SID: process.env.TWILIO_SERVICE_SID
}

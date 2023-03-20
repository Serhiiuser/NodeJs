import { ESmsActionEnum } from "../enums"

export const  smsTemplates:{[key:string]: string} = {
    [ESmsActionEnum.WELCOME]: "Hello welcome in your app",

    [ESmsActionEnum.FORGOT_PASSWORD]: "We control your password go to link and restore your password"

}
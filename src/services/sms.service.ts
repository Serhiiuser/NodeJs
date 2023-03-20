import {Twilio} from "twilio";
import {configs} from "../configs";
import {smsTemplates} from "../constants";
import {ESmsActionEnum} from "../enums";

class SmsService {

    constructor(
        private client = new Twilio(
            configs.TWILIO_AUTH_TOKEN,
            configs.TWILIO_ACCOUNT_SID
        )) {

    }

    public async sendSms(phone: string, smsAction: ESmsActionEnum) {

        try {
            const message = smsTemplates[smsAction];
            await this.client.messages.create({
                body: message,
                to: phone,
                messagingServiceSid: configs.TWILIO_SERVICE_SID,
            });

        } catch (e){
            console.error(JSON.stringify(e,null,2));
        }

    }
}

export const smsService = new SmsService();
import * as jwt from "jsonwebtoken";

import {configs} from "../configs"
import { ITokenPair, ITokenPayload } from "../types";
import {ApiError} from "../errors/api.error";
import {ETokenType} from "../enums";

class TokenService {
    public generateTokenPair(payload: ITokenPayload): ITokenPair {
        // @ts-ignore
        const accessToken = jwt.sign(payload, configs.ACCESS_SECRET, {
            expiresIn: "15m",
        });
        // @ts-ignore
        const refreshToken = jwt.sign(payload, configs.REFRESH_SECRET, {
            expiresIn: "30d",
        });

        return {
            accessToken,
            refreshToken,
        };
    }
    public checkToken(token:string, tokenType = ETokenType.access){
        try {
            let secret = '';

            switch (tokenType) {
                case ETokenType.access:
                    secret =configs.ACCESS_SECRET;
                    break
                case ETokenType.refresh:
                    secret =configs.REFRESH_SECRET;
                    break
            }
 return jwt.verify(token,secret)
        }catch (e) {
            throw new ApiError("Token not valid", 401)
        }
    }

}

export const tokenService = new TokenService();
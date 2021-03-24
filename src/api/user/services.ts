import { Item } from '../../database/schemas/Item'
import { CognitoUserPool, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import AWS from 'aws-sdk';
import jwkToPem from 'jwk-to-pem';
import jwt from 'jsonwebtoken';


export const Services = {

    getUser: async (req: any) => {
        try {
            let idDex = req.params.idDex;
            const data = await Item.findOne({ idDex })
            return data
        } catch (error) {
            return `Error al buscar los items ${error}`
        }
    },

    authUser: async (item: any) => {
        try {
            const data = await Item.create(Object.assign({}, item))
            return data
        } catch (error) {
            return `Error authUser el Item ${error}`
        }
    },

    createUser: async (item: any) => {
        try {
            const poolData = {
                UserPoolId: "us-east-2_3kLb5uhy3",
                ClientId: "3984co9agiigpnqka22cahc9tp",
            };
            console.log('[poolData]', poolData);
            const pool_region = 'us-east-1';
            console.log('[pool_region]', pool_region);
            console.log('====================================');
            const userPool = new CognitoUserPool(poolData);
            console.log('[userPool]', userPool);
            console.log('====================================');
            // const data = await Item.create(Object.assign({}, item))
            // return data
            return true
        } catch (error) {
            console.log('=============ERROR================');
            console.log('[error]', error);
            console.log('====================================');
            return `Error crear el User ${error}`
        }
    },
}
import { Client,Databases,ID } from 'appwrite';
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('666acc0300172f7e8358');

    export const DATABASE = new Databases(client);
    export const DATA_ID = new ID();


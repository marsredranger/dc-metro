import fetch from 'node-fetch';
import * as dotenv from 'dotenv';

dotenv.config();


const contentType = "json";
const url = `https:api.wmata.com/TrainPositions/TrainPositions?contentType=${contentType}`;
const headers = {"api_key" : process.env.SECONDARY_KEY};

const response = await fetch(url, {'method' : 'get',
				'headers' : headers});
const body = await response.text();

console.log(body);

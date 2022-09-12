const Binance = require('node-binance-api');
import {MA} from './ma';
const axios = require('axios');
// const binance = new Binance().options({
//     APIKEY: '<key>',
//     APISECRET: '<secret>'
// });

function binanceParser(data) {
    return {
        source: 'binance',
        pair: 'BTCUSDT',
        open: parseFloat(data[1]),
        high: parseFloat(data[2]),
        low: parseFloat(data[3]),
        close: parseFloat(data[4]),
        open_time: data[0],
        close_time: data[6],
        volume: parseFloat(data[5])
    };
}

function getData(pair, interval, limit = 500) {
    return axios.get(`https://api.binance.com/api/v3/klines?symbol=${pair}&interval=${interval}&limit=${limit}`);
}

async function main(){
}

main();
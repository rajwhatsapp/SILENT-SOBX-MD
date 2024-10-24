const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "HjwX1YaI#RRGrPpX2Wp32UQK3Xun_yb9OgzPdSC1zucqDK1usqA0",
MONGODB: process.env.MONGODB || "mongodb+srv://suhail:suhail@clustere.tuhzpez.mongodb.net/?retryWrites=true&w=majority",
};

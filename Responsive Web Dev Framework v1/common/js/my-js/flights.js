
// const scheduledTime = document.querySelectorAll("table td:nth-of-type(5)")
// const updatedTime = document.querySelectorAll("table td:nth-of-type(6)")




const axios = require('axios');
const cheerio = require('cheerio');

async function getUpdatedArrivalTimes() {
    try {
        const { data } = await axios.get('https://www.flightview.com/airport/MCI-Kansas_City-MO/#google_vignette');
        const $ = cheerio.load(data);

        // Scrape the updated arrival times
        const updatedTimes = [];
        $('table td:nth-of-type(6)').each((index, element) => {
            updatedTimes.push($(element).text().trim());
        });

        return updatedTimes;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

// Usage example
getUpdatedArrivalTimes().then(times => {
    console.log('Updated Arrival Times:', times);
});
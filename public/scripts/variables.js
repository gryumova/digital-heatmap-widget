const url = 'http://127.0.0.1:8000';

const data = {
    "EUR": { "USD":"-0.04","AUD":"-0.11","GBP":"0.23","NZD":"0.06","JPY":"0","CHF":"-0.21" },
    "USD": { "EUR":"0.06","AUD":"-0.64","GBP":"-0.29","NZD":"0.23","JPY":"0.05","CHF":"0.02" },
    "JPY": { "EUR":"0.03","AUD":"-0.35","GBP":"0.37","NZD":"0.2","USD":"0" },
    "AUD": { "EUR":"-0.21","USD":"-0.04","GBP":"0.24","NZD":"-0.15","USD":"0.42"},
    "GBP": { "EUR":"-0.6","AUD":"-0.15","JPY":"0.42","NZD":"-0.15","USD":"-0.02"},
    "NZD": { "EUR":"-0.32","AUD":"-0.5","GBP":"0.24","CHF":"0.45","USD":"-0.32"},
    "CHF": { "EUR":"0.21","AUD":"0.45","GBP":"0.24","NZD":"-0.15","USD":"0.02"}
};

const colors = {
    "red": '#fdb3b6',
    "moreRed": '#f6646c',
    "green": '#abd6cd',
    "moreGreen": '#52ae9a',
    "grey": '#878a93',
    "undefined": '#f8f9fd'
};

export {data, colors, url}
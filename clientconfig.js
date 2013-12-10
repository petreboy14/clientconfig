var cookies = require('cookie-getter'),
    config = cookies('config') || {};

// wipe it out
document.cookie = 'config=;expires=Thu, 01 Jan 1970 00:00:00 GMT';

// export it
module.exports = config;

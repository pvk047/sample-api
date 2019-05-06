let getConfig = function () {
    if (process.env.NODE_ENV && (process.env.NODE_ENV.toLowerCase() === 'prod' || process.env.NODE_ENV.toLowerCase() === 'production')) {
        return require('./prod')
    } else {
        return require('./dev');
    }
}

module.exports = getConfig();

var credentials = process.env.mlab_key;
console.log(credentials);
module.exports = {
  url: `mongodb://${credentials}@ds231941.mlab.com:31941/excrum`
};

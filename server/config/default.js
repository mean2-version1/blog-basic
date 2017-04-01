module.exports = {
  port: 3000,
  session: {
    secret: 'myblog',
    key: 'myblog',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://michaelchen:michaelchen@ds147510.mlab.com:47510/blog-data'
};

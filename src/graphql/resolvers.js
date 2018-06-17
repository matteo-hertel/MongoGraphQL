module.exports = {
  Query: {
    hello: (root, { msg }, context, info) => {
      return msg;
    }
  }
};

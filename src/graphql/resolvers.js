const Car = require("./../models/car");
module.exports = {
  Query: {
    allCars: async (root, { msg }, context, info) => {
      return await Car.find();
    },
    getCar: async (root, { _id }, context, info) => {
      return await Car.findById(_id);
    }
  },
  Mutation: {
    createCar: async (root, { input }) => {
      return await Car.create(input);
    },
    updateCar: async (root, { _id, input }) => {
      return await Car.findOneAndUpdate({ _id }, input, { new: true });
    },
    deleteCar: async (root, { _id }) => {
      return await Car.findOneAndDelete({ _id });
    }
  }
};

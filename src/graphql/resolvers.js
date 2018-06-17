const cars = [
  {
    _id: 8,
    name: "Ferrari 458",
    topSpeed: 340
  },
  {
    _id: 16,
    name: "Aston Martin DB11",
    topSpeed: 334
  }
];
module.exports = {
  Query: {
    allCars: (root, { msg }, context, info) => {
      return cars;
    }
  },
  Mutation: {
    createCar(_, { input }) {
      cars.push(input);
      return input;
    }
  }
};

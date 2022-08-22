const Review = require('./../models/reviewModel');
const factory = require('./handlerFactory');

exports.setTourUserIds = async (req, res, next) => {
  // Allow nested routes
  if (!req.body.tour) req.body.tour = await req.params.tourId;
  if (!req.body.user) req.body.user = await req.user.id;
  next();
};

exports.getAllReviews = factory.getAll(Review);
exports.getReview = factory.getOne(Review);
exports.createReview = factory.createOne(Review);
exports.updateReview = factory.updateOne(Review);
exports.deleteReview = factory.deleteOne(Review);

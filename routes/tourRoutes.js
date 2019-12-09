const express = require('express');
const tourController = require('./../controllers/tourController');
const { protect, restrictTo } = require('./../controllers/authController');
const reviewRouter = require('./../routes/reviewRoutes');

const router = express.Router();

// POST /tour/32434fs35/reviews
// GET /tour/32434fs35/reviews
// GET /tour/32434fs35/reviews/97987dssad8

// router.route('/:tourId/reviews').post(protect, restrictTo('user'), reviewController.createReview);

router.use('/:tourId/reviews', reviewRouter);

// router.param('id', checkID);

// Create a checkBody middleware
// Check if body contains the name and price property
// If not, send back 400 (bad requst)
// Add it to the post handler stack

router.route('/top-5-cheap').get(tourController.aliasTopTours, tourController.getAllTours);

router.route('/tour-stats').get(tourController.getTourStats);
router
  .route('/monthly-plan/:year')
  .get(protect, restrictTo('admin', 'lead-guide', 'guide'), tourController.getMonthlyPlan);

router
  .route('/tours-within/:distance/center/:latlng/unit/:unit')
  .get(tourController.getToursWithin);
// /tours-within?distance=233&center=-40,45&unit=mi
// /tours-within/233/center/-40,45/unit/mi

router.route('/distances/:latlng/unit/:unit').get(tourController.getDistances);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(protect, restrictTo('admin', 'lead-guide'), tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(
    protect,
    restrictTo('admin', 'lead-guide'),
    tourController.uploadTourImages,
    tourController.resizeTourImages,
    tourController.updateTour
  )
  .delete(protect, restrictTo('admin', 'lead-guide'), tourController.deleteTour);

module.exports = router;

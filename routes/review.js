const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");
const reviewController = require("../controllers/reviews.js"); 

// POST a new review
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

// DELETE a review
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyreview));

module.exports = router;

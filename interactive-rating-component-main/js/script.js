const provideRatingSection = document.querySelector(".section-provide-rating");
const displayProvidedRating = document.querySelector(".section-display-rating");

const ratingsBox = document.querySelector(".select-ratings");
const allRatings = document.querySelectorAll(".rating");

const selectedRatingLabel = document.querySelector(".selected-rating-text");

const submitButton = document.querySelector(".btn--submit-rating");

const ratingClicked = function (e) {
  const clicked = e.target;

  if (!clicked.classList.contains("rating")) return;

  allRatings.forEach((rating) => {
    rating.classList.remove("rating--active");
  });
  clicked.classList.add("rating--active");
};

ratingsBox.addEventListener("click", ratingClicked);

/////////////////////////////////////
/// SUBMIT BUTTON CLICKED

const changeSection = function () {
  provideRatingSection.classList.toggle("section--hidden");
  displayProvidedRating.classList.toggle("section--hidden");
};

const changeRating = function (rating) {
  selectedRatingLabel.textContent = `You selected ${rating} out of 5`;
};

submitButton.addEventListener("click", function (e) {
  allRatings.forEach((rating) => {
    if (rating.classList.contains("rating--active")) {
      changeRating(rating.textContent);
      changeSection();
    }
  });
});

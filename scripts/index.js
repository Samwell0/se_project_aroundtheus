const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

console.log(initialCards);

/* -------------------------------------------------------------------------- */
/*                                  Elements                                  */
/* -------------------------------------------------------------------------- */
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileCloseButton = document.querySelector("#profile-close-modal");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardListEl = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */
function closePopUp() {
  profileEditModal.classList.remove("modal_opened");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  cardTitleEl.textContent = cardData.name;
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.imageAlt;
  return cardElement;
}

cardDataArray.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardsContainer.prepend(cardElement);
});

/* -------------------------------------------------------------------------- */
/*                               Event Handlers                               */
/* -------------------------------------------------------------------------- */
function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopUp();
}

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */
profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileEditModal.classList.add("modal_opened");
});

profileCloseButton.addEventListener("click", closePopUp);

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
});

/* -------------------------------------------------------------------------- */
/*                                  Card Data                                 */
/* -------------------------------------------------------------------------- */
const cardDataArray = [
  {
    name: "Lago di Braies",
    imageSrc: "../se_project_aroundtheus/images/card-images/lago.jpg",
    imageAlt: "A beautiful view of Lago di Braies",
  },
  {
    name: "Vanoise Natinoal Park",
    imageSrc: "../se_project_aroundtheus/images/card-images/vanoise.jpg",
    imageAlt: "A stunning view of Vanoise National Park",
  },
  {
    name: "Latemar",
    imageSrc: "../se_project_aroundtheus/images/card-images/latemar.jpg",
    imageAlt: "An amazing nighttime view of Latemar",
  },
  {
    name: "Bald Mountains",
    imageSrc: "../se_project_aroundtheus/images/card-images/bald-mountains.jpg",
    imageAlt: "An incredible sunrise in the Bald Mountains",
  },
  {
    name: "Lake Louise",
    imageSrc: "../se_project_aroundtheus/images/card-images/lake-louise.jpg",
    imageAlt: "An stunning crystal clear view of Lake Louise",
  },
  {
    name: "Yosemite Valley",
    imageSrc: "../se_project_aroundtheus/images/card-images/yosemite.jpg",
    imageAlt: "A breathtaking view of a river in Yosemite Valley",
  },
];

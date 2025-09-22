const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
    alt: "A breathtaking view of a river in Yosemite Valley",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
    alt: "An stunning crystal clear view of Lake Louise",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
    alt: "An incredible sunrise in the Bald Mountains",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
    alt: "An amazing nighttime view of Latemar",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
    alt: "A stunning view of Vanoise National Park",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
    alt: "A beautiful view of Lago di Braies",
  },
];

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

// Wrappers
const cardsWrap = document.querySelector(".cards__list");
const profileEditModal = document.querySelector("#edit-modal");
const addCardModal = document.querySelector("#add-card-modal");
const profileFormElement = document.querySelector(".modal__form");

// Buttons and other DOM nodes
const profileEditButton = document.querySelector(".profile__edit-button");
const profileCloseButton = document.querySelector(".modal__close");
const addCardModalCloseButton = addCardModal.querySelector(".modal__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const addNewCardButton = document.querySelector(".profile__add-button");

// Form Data
const nameInput = profileFormElement.querySelector(".modal__input_type_name");
const jobInput = profileFormElement.querySelector(
  ".modal__input_type_description"
);
const cardTitleInput = addCardFormElement.querySelector(
  ".modal__input_type_title"
);
const cardUrlInput = addCardFormElement.querySelector(".modal__input_type_url");

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

// function openModal() {
// nameInput.value = profileTitle.textContext;
// jobInput.value = profileDescription.textContext;

// editProfileModal.classList.add("modal_is-opened");
// }

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function handleProfileFormSubmit(Event) {
  Event.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal();
}

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;
  cardTitle.textContent = data.name;

  return cardElement;
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);
profileEditButton.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(profileEditModal);
});
profileModalCloseButton.addEventListener("click", () =>
  closeModal(profileEditModal)
);

// add new card
addNewCardButton.addEventListener("click", () => openModal(addCardModal));
addCardModalCloseButton.addEventListener("click", () =>
  closeModal(addCardModal)
);

initialCards.forEach((cardData) => {
  cardsWrap.prepend(getCardElement(cardData));
});

/*console.log(inititalCards);

// Elements
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

// Functions
function closePopUp() {
  profileEditModal.classList.remove("modal_opened");
}

function handleProfileEditSubmit(Event) {
  Event.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopUp(profileEditModal);
}

function handleAddCardFormSubmit(Event) {
  Event.preventDefault();
  const cardElement = getCardElement();
  closePopUp(addCardModal);
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  cardTitleEl.textContent = cardData.name;
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.alt;
  return cardElement;
}

// Event Handlers
function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopUp();
}

// Event Listeners
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
*/

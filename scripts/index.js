// @todo: Темплейт карточки
const cardTmp = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(infoCard,deleteCard){
    const cardElement = cardTmp.querySelector('.places__item').cloneNode(true);
    const cardDEL = cardElement.querySelector('.card__delete-button');

    cardElement.querySelector('.card__image').src = infoCard.link;
    cardElement.querySelector('.card__image').alt = infoCard.name;
    cardElement.querySelector('.card__title').textContent = infoCard.name;

    cardDEL.addEventListener('click', () => {
        deleteCard(cardElement);
        console.info(`Удалена карточка: ${infoCard.name}`);
    });
    
    return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(cardElement) {
    cardElement.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(infoCard => {
    placesList.append(createCard(infoCard, deleteCard));
    console.info(`Добавлена карточка: ${infoCard.name}`);
});

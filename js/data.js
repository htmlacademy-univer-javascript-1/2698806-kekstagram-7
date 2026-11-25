import { getRandomInteger, getRandomArrayElement } from './util.js';

const PHOTOS_COUNT = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENTS_MAX = 30;
const AVATARS_COUNT = 6;

const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const AUTHOR_NAMES = ['Артём', 'Мария', 'Кекс', 'Борис', 'Анна', 'Виктор', 'Елена', 'Иван'];
const DESCRIPTIONS = ['Отличный день для прогулки!', 'Мой любимый ракурс.', 'Утренний кофе вдохновляет.', 'Магия момента.', 'Просто оставлю это здесь.', 'Выходные удались!'];

let commentIdCounter = 1;

const createMessage = () => {
  const sentencesCount = getRandomInteger(1, 2);
  const sentences = [];
  for (let i = 0; i < sentencesCount; i++) {
    sentences.push(getRandomArrayElement(COMMENT_MESSAGES));
  }
  return sentences.join(' ');
};

const createComment = () => ({
  id: commentIdCounter++,
  avatar: `img/avatar-${getRandomInteger(1, AVATARS_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(AUTHOR_NAMES),
});

const createPhotoDescription = (index) => {
  const commentsCount = getRandomInteger(0, COMMENTS_MAX);
  const photoComments = Array.from({ length: commentsCount }, createComment);

  return {
    id: index,
    url: `photos/${index}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(LIKES_MIN, LIKES_MAX),
    comments: photoComments,
  };
};

const generatePhotos = () => Array.from({ length: PHOTOS_COUNT }, (_, index) => createPhotoDescription(index + 1));

export { generatePhotos };

import {bookList, contact, form} from './variables.js';

export const change = (selection) => {
  bookList;
  contact;
  switch (selection) {
    case 'List':
      bookList.classList.remove('hidden');
      form.classList.add('hidden');
      contact.classList.add('hidden');
      break;
    case 'Add new':
      bookList.classList.add('hidden');
      form.classList.remove('hidden');
      contact.classList.add('hidden');
      break;
    case 'Contact':
      bookList.classList.add('hidden');
      form.classList.add('hidden');
      contact.classList.remove('hidden');
      break;
    default:
      bookList.classList.remove('hidden');
      form.classList.add('hidden');
      contact.classList.add('hidden');
  }
};

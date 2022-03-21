import {awesome} from '../index.js';
import {form, list, links} from './variables.js';
import {change} from './section.js';

export const pressButton = form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  if (title === '' || author === '') {
    alert('missing information');
  } else {
    awesome.addRecord(title, author);
    awesome.local();
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }
});

export const removeList = list.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.innerHTML === 'Remove') {
    const eliminateBook = e.path[1].childNodes[1].childNodes[0].data;
    const eliminateAuthor = e.path[1].childNodes[3].childNodes[0].data;
    awesome.eliminate(eliminateBook, eliminateAuthor);
  }
});

links.addEventListener('click', (e) => {
  const element = e.target.innerHTML;
  if (element === 'List' || element === 'Add new' || element === 'Contact') {
    const selection = e.target.innerHTML;
    change(selection);
  }
});

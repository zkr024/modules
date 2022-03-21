import { awesome } from './index';
import { form, list, links } from './variables';
import { change } from './section';

form.addEventListener('submit', (e) => {
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

list.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.innerHTML === 'Remove') {
    const eliminateBook = e.path[1].childNodes[1].childNodes[0].data;
    const eliminateAuthor = e.path[1].childNodes[3].childNodes[0].data;
    awesome.eliminate(eliminateBook, eliminateAuthor);
  }
});

links.addEventListener('click', (e) => {
  if (e.target.innerHTML === 'List' || e.target.innerHTML === 'Add new' || e.target.innerHTML === 'Contact') {
    const selection = e.target.innerHTML;
    change(selection);
  }
});

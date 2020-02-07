import globalStore from '../store';
import SubList from './subList';

class MainList {
  deleteItem(e) {
    console.log('pathId', e.path[1].id, 'globs', globalStore.state);
    if (e.path[1].id === globalStore.state && globalStore.state !== null) {
      let parent = document.querySelector('.list-name-container');
      let child = document.querySelector('.list-name');
      parent.removeChild(child);
    }
    let element = document.getElementById(e.path[1].id);
    element && element.parentElement.removeChild(element);
    if (e.path[1].id === globalStore.state) {
      globalStore.state = null;
      SubList.displaySubList(null);
    }
  }
  addToMainList() {
    let entry = { sublist: [] };
    let input = document.querySelector('#list-name-input').value;
    document.querySelector('#list-name-input').value = '';
    (entry.id = Date.now() + '-item'),
      (entry.value = input),
      globalStore.listItems.push(entry);
    const markup = `<div class="main-list-item flex"id="${
      globalStore.listItems[globalStore.listItems.length - 1].id
    }"><div>${
      globalStore.listItems[globalStore.listItems.length - 1].value
    }</div><button id="delete-main-list-item">Delete</button></div>`;
    document
      .querySelector('.main-list-items')
      .insertAdjacentHTML('beforeend', markup);
  }
}

export default new MainList();

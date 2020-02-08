import globalStore from '../store';
import SubList from './subList';

class MainList {
  deleteItem(e) {
    if (
      e.target.parentElement.id === globalStore.state &&
      globalStore.state !== null
    ) {
      let parent = document.querySelector('.list-name-container');
      let child = document.querySelector('.list-name');
      parent.removeChild(child);
    }
    let element = document.getElementById(e.target.parentElement.id);
    element && element.parentElement.removeChild(element);
    if (e.target.parentElement.id === globalStore.state) {
      globalStore.state = null;
      SubList.displaySubList(null);
    }
  }
  addToMainList() {
    let entry = { sublist: [] };
    let input = document.querySelector('.list-name-input').value;
    document.querySelector('.list-name-input').value = '';
    (entry.id = Date.now() + '-item'),
      (entry.value = input),
      globalStore.listItems.push(entry);
    const markup = `<div class="main-list-item flex" id="${
      globalStore.listItems[globalStore.listItems.length - 1].id
    }"><div>${
      globalStore.listItems[globalStore.listItems.length - 1].value
    }</div><button class="delete-main-list-item">Delete</button></div>`;
    document
      .querySelector('.main-list-items')
      .insertAdjacentHTML('beforeend', markup);
  }
}

export default new MainList();

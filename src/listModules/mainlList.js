import globalStore from '../store';

class mainList {
  deleteItem(e) {
    let element = document.getElementById(e.path[1].id);
    element && element.parentElement.removeChild(element);
  }
  addToMainList() {
    let entry = { sublist: [] };
    let input = document.querySelector('#list_name').value;

    document.querySelector('#list_name').value = '';
    (entry.id = Date.now() + '-item'),
      (entry.value = input),
      globalStore.listItems.push(entry);
    console.log('GS', globalStore);
    const markup = `<li class="main-list-item"id="${
      globalStore.listItems[globalStore.listItems.length - 1].id
    }">${
      globalStore.listItems[globalStore.listItems.length - 1].value
    } <button class="delete" id="delete-main-list">Delete</button></li>`;
    document
      .querySelector('.main-list-items')
      .insertAdjacentHTML('beforeend', markup);
  }
}

export default new mainList();

import globalStore from '../store';
import { renderSublist, getSublistItemHTML } from '../helpers/helper';
class SubList {
  deleteItem(e) {
    let temp = globalStore.listItems.find(
      elem => elem.id === globalStore.state
    );
    let i = globalStore.listItems.indexOf(temp);
    console.log('I', i);
    globalStore.listItems[i].sublist.forEach((elem, j, listItems) => {
      if (elem.id === e.path[1].id) {
        listItems.splice(j, 1);
      }
    });

    let element = document.getElementById(e.path[1].id);
    element && element.parentElement.removeChild(element);
  }

  addToSubList() {
    let subEntry = {};
    let a = globalStore.listItems.filter(elem => elem.id === globalStore.state);
    let elem = a[0];
    console.log('a', elem);
    let input = document.querySelector('#sub-input').value;
    document.querySelector('#sub-input').value = '';
    subEntry.value = input;
    subEntry.id = Date.now() + '-sub-item';
    elem.sublist.push(subEntry);
    let markup = getSublistItemHTML(subEntry.id, input);

    document
      .querySelector('.sub-list-items')
      .insertAdjacentHTML('beforeend', markup);
  }

  saveChanges(e) {
    let current_list_selected = globalStore.listItems.find(
      elem => elem.id === globalStore.state
    );
    let reqd_element = current_list_selected.sublist.find(
      elem => elem.id === e.path[1].id
    );
    reqd_element.value = e.target.previousElementSibling.innerText;
  }

  displaySubList(e) {
    let parent = document.querySelector('.sub-lists');
    let child = document.querySelector('.sub-list-items');
    parent.removeChild(child);
    let temp = `<ul class="sub-list-items"></ul>`;
    parent.insertAdjacentHTML('beforeend', temp);
    let current_element = globalStore.listItems.find(
      elem => elem.id === e.target.id
    );
    globalStore.state = current_element.id;
    current_element.sublist.forEach(elem => renderSublist(elem));
  }
}

export default new SubList();

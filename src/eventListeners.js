import MainList from './listModules/mainlList';
import SubList from './listModules/subList';
import globalStore from './store';
import subList from './listModules/subList';
class EventListener {
  setupEventListeners() {
    document
      .querySelector('.list-name-input')
      .addEventListener('keypress', e => {
        // console.log(e.keyCode);
        if (e.keyCode === 13) MainList.addToMainList();
      });
    document.querySelector('.add-listname-btn').addEventListener('click', e => {
      console.log(e);
      MainList.addToMainList();
    });

    document.querySelector('.todo-items-container').addEventListener(
      'keypress',
      e => {
        // e.stopPropagation();
        SubList.saveChanges(e);
      },
      false
    );

    document.querySelector('.main-list-items').addEventListener('click', e => {
      if (e.target.className == 'delete-main-list-item') {
        MainList.deleteItem(e);
      } else if (/item/.test(e.target.id)) {
        subList.removeCurrentSubList(e);
        SubList.displaySubList(e);
      } else if (/item/.test(e.target.parentNode.id)) {
        SubList.removeCurrentSubList(e);
        SubList.displaySubList(e);
      }
    });

    document
      .querySelector('.todo-tasks-container')
      .addEventListener('click', e => {
        console.log('check', e.target.id);
        if (e.target.id === 'strike-all') {
          SubList.strikeAll(e);
        } else if (e.target.id === 'delete-all') {
          SubList.deleteAll(e);
        } else if (e.target.id === 'delete-tasks') {
          SubList.deleteItem(e);
        } else if (e.target.id === 'strike') {
          SubList.strikeItem(e);
        } else if (e.target.id === 'save-changes') {
          SubList.saveChanges(e);
        }
      });

    document.querySelector('#create-task-btn').addEventListener('click', e => {
      console.log('here');
      SubList.addToSubList(e);
    });
    document.querySelector('#sub-input').addEventListener('keypress', e => {
      if (e.keyCode === 13) SubList.addToSubList(e);
    });
  }
}

export default new EventListener();

import MainList from './listModules/mainlList';
import SubList from './listModules/subList';
import globalStore from './store';
// import './style.css';

document.querySelector('.sub-lists').addEventListener('click', e => {
  if (e.target.id === 'delete-sublist') {
    SubList.deleteItem(e);
  } else if (e.target.id === 'save-changes') {
    SubList.saveChanges(e);
  }
});

document.querySelector('#sub-entry-btn').addEventListener('click', e => {
  SubList.addToSubList(e);
});

document.querySelector('.main-list-items').addEventListener('click', e => {
  console.log('e', e.target);

  if (e.toElement.id == 'delete-main-list') {
    MainList.deleteItem(e);
  }
  //when the list item is clicked
  else {
    let element = e.target;
    if (e.target.id === globalStore.state) element.style.background = '#44c6c6';

    document.querySelector('#sub-input').focus();
    SubList.displaySubList(e);
  }
});

document.querySelector('#enter_data').addEventListener('click', () => {
  MainList.addToMainList();
});

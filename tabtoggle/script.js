const tabs = document.querySelectorAll('.tabs');
const tabLink = document.querySelectorAll('.tab-link');

const opentab = (tabname) => {
  tabLink.forEach(link => link.classList.remove('active'))
  tabs.forEach(tab => tab.classList.remove('active-tab'))
  document.getElementById(tabname).classList.add('active-tab')
  event.currentTarget.classList.add('active')
 

}
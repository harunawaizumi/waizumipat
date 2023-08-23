
// waizumipat.com js
// change the tab depending on which tab a user click
 const tabs = document.querySelectorAll('[data-tab-value]')
     const tabInfos = document.querySelectorAll('[data-tab-info]')

     tabs.forEach(tab => {
         tab.addEventListener('click', () => {
             const target = document.querySelector(tab.dataset.tabValue);

             // remove active-style class from all of the menu
             tabs.forEach(tab2 => {
                 tab2.classList.remove('active-style')
             })
             // remove active class from all of the section div
             tabInfos.forEach(tabInfo => {
                 tabInfo.classList.remove('active')
             })

             // add active-style to the menu clicked
             target.classList.add('active');

             // add active class to the section div
             tab.classList.add('active-style');
         })
     })

// Initialize the admin buttons

const createPartyButton = document.querySelector('#create-party-toogle');
const createGovernmentButton = document.querySelector('#create-government-office-toggle');
const editPartyButton = document.querySelector('#edit-party-toogle');
const deletePartyButton = document.querySelector('#delete-government-office-toggle');

// handle pages toggles
function handleToggle(index) {
    // Store the active admin page in the localstorage
    localStorage.setItem('active-admin-page', index);

    const createParty = document.querySelector('#create-party');
    const createGovernment = document.querySelector('#create-government-post');
    const editParty = document.querySelector('#edit-party');
    const deleteParty = document.querySelector('#delete-party');

    createParty.classList.add('hidden');
    createGovernment.classList.add('hidden');
    deleteParty.classList.add('hidden');
    editParty.classList.add('hidden');

    createPartyButton.classList.remove('active');
    createGovernmentButton.classList.remove('active');
    deletePartyButton.classList.remove('active');
    editPartyButton.classList.remove('active');

    switch (index) {
        case 0:
            createPartyButton.classList.add('active');
            createParty.classList.remove('hidden');
            break;
        case 1:
            createGovernmentButton.classList.add('active');
            createGovernment.classList.remove('hidden');
            break;
        case 2:
            editPartyButton.classList.add('active');
            editParty.classList.remove('hidden');
            break;
        case 3:
            deletePartyButton.classList.add('active');
            deleteParty.classList.remove('hidden');
            break;
    }
}
// check if the default page is stored in localStorage
let activeAdminPage = localStorage.getItem('active-admin-page');
// parse activeAdminPage to integer
activeAdminPage = parseInt(activeAdminPage);


// Display default create party div
if(activeAdminPage === null){
  handleToggle(0);
}
else{
  handleToggle(activeAdminPage);
}

// Set respective event listeners
createPartyButton.addEventListener('click',
  () => {
    handleToggle(0);
  },
);
createGovernmentButton.addEventListener('click',
  () => {
    handleToggle(1);
  });
editPartyButton.addEventListener('click',
  () => {
    handleToggle(2);
  });
deletePartyButton.addEventListener('click',
  () => {
    handleToggle(3);
  });


// handle the submit button
function submitForm(event) {
  event.preventDefault();
  const inputValues = document.querySelector('#create-party-form').elements;
  const settedValues = {
    partyName: inputValues.partyName.value,
    partyHQ: inputValues.partyHQ.value,
  };
  console.log(settedValues);
}

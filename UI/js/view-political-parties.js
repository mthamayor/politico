getData();

// Initialize the user page buttons;
const offices = document.querySelector('#political-office-button');
const parties = document.querySelector('#political-party-button');

offices.addEventListener('click', function(){toggleView(0)});
parties.addEventListener('click', function () { toggleView(1) });


function getData(){
    let data = [
        {
            id: "value",
            party: "value",
            imgUrl: ""
        },
    ]

    return mapData(data);

}

function mapData(datas){

    const container = document.querySelector('#parties');

    let result = datas.map(function(data){
        return markItUp(data);
    })
    let returnString = "";

    for(let i=0; i < result.length; i++){
        returnString += result[i];
    }

    container.innerHTML = returnString;
}
// Each political parties would be marked up with the below data
function markItUp(data){
    
    const markUp = `
            <div class = "col-12 form-wrapper" >
                <div class="layout">
                    <div class="layout-header">
                        <div class="layout-wrapper">
                            <span class="small-margin">
                                <img class="small-image" alt ="img" src="${data.imgUrl}" />
                            </span>
                            <span>${data.party}</span>
                        </div>
                    </div>
                    <div class ="layout-body">
                        <div class="layout-wrapper">
                            <span class="small-margin radio-header">
                                HEADQUARTERS:
                            </span>
                            <span>${data.party}</span>
                        </div>
                    </div>
                </div>
            </div>

    `;
    return markUp;
}

// check if the default page is stored in localStorage
let activeUserPage = localStorage.getItem('active-user-page');
// parse activeAdminPage to integer
activeUserPage = parseInt(activeUserPage);


// Display default create party div
if(activeUserPage === null){
  toggleView(0);
}
else{
  toggleView(activeUserPage);
}


function toggleView(index) {
    localStorage.setItem('active-user-page', index);

    const politicalPartyView = document.querySelector('#parties');
    const politicalOfficesView = document.querySelector('#government-offices');

    if (index === 0) {
        politicalPartyView.classList.remove("hidden");
        politicalOfficesView.classList.add("hidden");

        offices.classList.add("active");
        parties.classList.remove("active");
    } else if(index === 1){
        politicalPartyView.classList.add("hidden");
        politicalOfficesView.classList.remove("hidden");
        offices.classList.remove("active");
        parties.classList.add("active");
    }
    

}


function submitForm(event) {
    event.preventDefault();
    const inputValues = document.querySelector('#create-party-form').elements
    const settedValues = {
        partyName: inputValues.partyName.value,
        partyHQ: inputValues.partyHQ.value,
    }
    console.log(settedValues);
}
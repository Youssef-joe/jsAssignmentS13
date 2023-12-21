let subButton = document.getElementById('submitButton');
let userName = document.getElementById('userName');
let userAge = document.getElementById('userAge');
let userGender = document.getElementById('userGender');
let userJob = document.getElementById('userJob');
let output = document.getElementById('output');
let deleteButton = document.getElementById('deleteButton');

let allData = JSON.parse(window.localStorage.getItem('usersData')) || [];

if (allData.length > 0) {
    loopData();
}

subButton.addEventListener('click', function(){
    let data = {
        uName: userName.value,
        uAge: userAge.value,
        uGender: userGender.value,
        uJob: userJob.value 
    };
    allData.push(data);
    loopData();
    window.localStorage.setItem('usersData', JSON.stringify(allData));
});

deleteButton.addEventListener('click', function(){
    if(allData.length > 0) {
        allData.pop(); // Remove the last entry
        loopData();
        window.localStorage.setItem('usersData', JSON.stringify(allData)); // Update localStorage
    }
});

function loopData() {
    let collectData = '';
    for (let i = 0; i < allData.length; i++ ) {
        collectData += `
            <div class="user">
                <img src="photos/${allData[i].uName}.jpg" alt="${allData[i].uName}">
                <div class="spans">
                    <span class="jobTitle">Job Title: ${allData[i].uJob}</span>
                    <span class="name">Name: ${allData[i].uName}</span>
                    <span class="age">Age: ${allData[i].uAge}</span>
                    <span class="gender">Gender: ${allData[i].uGender}</span>
                </div>
            </div>
        `;
    }
    output.innerHTML = collectData;
}




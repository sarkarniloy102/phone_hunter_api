
const LoadPhone = async (PhoneName, isshow) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${PhoneName}`);
    const data = await res.json();
    const phones = data.data;
    DisplayPhones(phones, isshow);

}
const DisplayPhones = (phones, isshow) => {

    const PhoneContainer = document.getElementById('phone_containers');
    // clear previous results
    PhoneContainer.textContent = "";
    const ShowBtn = document.getElementById('show_btn');
    if (phones.length > 9 && !isshow)
        ShowBtn.classList.remove('hidden');
    else
        ShowBtn.classList.add('hidden');

    // show the minimum number of phone is show button is avaiable
    if (!isshow)
        phones = phones.slice(0, 9);
    phones.forEach(phone => {
        console.log(phone);
        // create a div 
        const PhoneCard = document.createElement('div');
        // create class for div
        PhoneCard.classList = `card  bg-base-100 shadow-xl`;
        // adding html in div
        PhoneCard.innerHTML = `
        <figure class="px-10 pt-10">
        <img src="${phone.image}" alt="Phone" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>There are many variations of passages of available, but the majority have suffered</p>
        <p>$999</p>
        <div class="card-actions">
            <button class="btn btn-primary">Show Details</button>
        </div>
    </div>`
        // adding div in container
        PhoneContainer.appendChild(PhoneCard);
    });
    // calling toggle function to stop loading
    ToggleLoadSpin(false);

}
// finding Phone Card by input value
const SearchHandle = (isshow) => {
    ToggleLoadSpin(true);
    const SearchField = document.getElementById('Search_Field');
    const SearchText = SearchField.value;
    LoadPhone(SearchText, isshow);
}

// toggle load spinner
const ToggleLoadSpin = (isload) => {
    const LoadSpin = document.getElementById('load_spin');
    if (isload)
        LoadSpin.classList.remove('hidden');
    else
        LoadSpin.classList.add('hidden');
}
// handle show button
const HandleShowBtn = () => {
    console.log("hello");
    SearchHandle(true);
}
LoadPhone();
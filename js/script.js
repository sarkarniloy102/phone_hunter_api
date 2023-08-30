
const LoadPhone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones = data.data;
    DisplayPhones(phones);

}
const DisplayPhones = phones => {

    const PhoneContainer = document.getElementById('phone_containers');
    phones.forEach(phone => {
        console.log(phone);
        // create a div 
        const PhoneCard = document.createElement('div');
        // create class for div
        PhoneCard.classList = `card w-96 bg-base-100 shadow-xl`;
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

}


LoadPhone();
function renderCard(event){
    event.preventDefault();
    var div = document.createElement('div')


    var name = document.getElementById('name').value
    var job = document.getElementById('job').value
    var email = document.getElementById('email').value
    var telp = document.getElementById('telp').value
    var address = document.getElementById('address').value


    div.innerHTML = `
    <div class="card">
        <div class="col">
            <div class="card-content">
                <div class="head">
                    <p class="cardheading">${name}</p>
                    <p class="cardheading">${job}</p>
                </div>

                <div class="container">
                    <p class="cardcontainer">${email}</p>
                    <p class="cardcontainer">${telp}</p>
                    <p class="cardcontainer">${address}</p>
                </div>
            </div>
        </div>
    </div>
    `;
document.body.appendChild(div)}
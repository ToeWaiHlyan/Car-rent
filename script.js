import { cars } from "./cars.js";

const nissanBtn = document.querySelector('.nissan');
nissanBtn.addEventListener('click',()=>
{
    const secondGrid = document.querySelector('.second-grid');
    const thirdGrid = document.querySelector('.third-grid');
    let nissan;
    const id = nissanBtn.id;
    cars.forEach((car)=>
    {
        if (car.id === id)
        {
            nissan = car;
        }
    });

    secondGrid.innerHTML =
    `
    <img src="${nissan.image}">
    `;

    thirdGrid.innerHTML = 
    `
    <div class="table">
    <div class="price"><span>$${nissan.price}</span> / rent per day</div>
    <div class="model">
      <p>Model</p>
      <div class="line"></div>
      <p>${nissan.model}</p>
    </div>
    <div class="Year">
      <p>Year</p>
      <div class="line"></div>
      <p>${nissan.year}</p>
    </div>
    <div class="Doors">
      <p>Doors</p>
      <div class="line"></div>
      <p>${nissan.doors}</p>
    </div>
    <div class="AC">
      <p>AC</p>
      <div class="line"></div>
      <p>${nissan.ac}</p>
    </div>
    <div class="Transmission"> 
      <p>Transmission</p>
      <div class="line"></div>
      <p>${nissan.transmission}</p>
    </div>
    <div class="fuel">
      <p>Fuel</p>
      <div class="line"></div>
      <p>${nissan.fuel}</p>
    </div>
  </div>
  <button class="reserve-btn">Reserve Now</button>
    `
});

const audiBtn = document.querySelector('.audi');
audiBtn.addEventListener('click',()=>
{
    const secondGrid = document.querySelector('.second-grid');
    const thirdGrid = document.querySelector('.third-grid');
    let audi;
    const id = audiBtn.id;
    cars.forEach((car)=>
    {
        if (car.id === id)
        {
            audi = car;
        }
    });

    secondGrid.innerHTML = 
    `
    <img src="${audi.image}">
    `
    thirdGrid.innerHTML = 
    `
    <div class="table">
    <div class="price"><span>$${audi.price}</span> / rent per day</div>
    <div class="model">
      <p>Model</p>
      <div class="line"></div>
      <p>${audi.model}</p>
    </div>
    <div class="Year">
      <p>Year</p>
      <div class="line"></div>
      <p>${audi.year}</p>
    </div>
    <div class="Doors">
      <p>Doors</p>
      <div class="line"></div>
      <p>${audi.doors}</p>
    </div>
    <div class="AC">
      <p>AC</p>
      <div class="line"></div>
      <p>${audi.ac}</p>
    </div>
    <div class="Transmission"> 
      <p>Transmission</p>
      <div class="line"></div>
      <p>${audi.transmission}</p>
    </div>
    <div class="fuel">
      <p>Fuel</p>
      <div class="line"></div>
      <p>${audi.fuel}</p>
    </div>
  </div>
  <button class="reserve-btn">Reserve Now</button>
    `
});

const toyotaBtn = document.querySelector('.toyota');
toyotaBtn.addEventListener('click',()=>
{
    const secondGrid = document.querySelector('.second-grid');
    const thirdGrid = document.querySelector('.third-grid');
    let toyota;
    const id = toyotaBtn.id;
    cars.forEach((car)=>
    {
        if (car.id === id)
        {
            toyota = car;
        }
    });

    secondGrid.innerHTML = 
    `
    <img src="${toyota.image}">
    `
    thirdGrid.innerHTML = 
    `
    <div class="table">
    <div class="price"><span>$${toyota.price}</span> / rent per day</div>
    <div class="model">
      <p>Model</p>
      <div class="line"></div>
      <p>${toyota.model}</p>
    </div>
    <div class="Year">
      <p>Year</p>
      <div class="line"></div>
      <p>${toyota.year}</p>
    </div>
    <div class="Doors">
      <p>Doors</p>
      <div class="line"></div>
      <p>${toyota.doors}</p>
    </div>
    <div class="AC">
      <p>AC</p>
      <div class="line"></div>
      <p>${toyota.ac}</p>
    </div>
    <div class="Transmission"> 
      <p>Transmission</p>
      <div class="line"></div>
      <p>${toyota.transmission}</p>
    </div>
    <div class="fuel">
      <p>Fuel</p>
      <div class="line"></div>
      <p>${toyota.fuel}</p>
    </div>
  </div>
  <button class="reserve-btn">Reserve Now</button>
    `
})

const hondaBtn = document.querySelector('.honda');
hondaBtn.addEventListener('click',()=>
{
    const secondGrid = document.querySelector('.second-grid');
    const thirdGrid = document.querySelector('.third-grid');
    let honda;
    const id = hondaBtn.id;
    cars.forEach((car)=>
    {
        if (car.id === id)
        {
            honda = car;
        }
    });

    secondGrid.innerHTML = 
    `
    <img src="${honda.image}">
    `
    thirdGrid.innerHTML = 
    `
    <div class="table">
    <div class="price"><span>$${honda.price}</span> / rent per day</div>
    <div class="model">
      <p>Model</p>
      <div class="line"></div>
      <p>${honda.model}</p>
    </div>
    <div class="Year">
      <p>Year</p>
      <div class="line"></div>
      <p>${honda.year}</p>
    </div>
    <div class="Doors">
      <p>Doors</p>
      <div class="line"></div>
      <p>${honda.doors}</p>
    </div>
    <div class="AC">
      <p>AC</p>
      <div class="line"></div>
      <p>${honda.ac}</p>
    </div>
    <div class="Transmission"> 
      <p>Transmission</p>
      <div class="line"></div>
      <p>${honda.transmission}</p>
    </div>
    <div class="fuel">
      <p>Fuel</p>
      <div class="line"></div>
      <p>${honda.fuel}</p>
    </div>
  </div>
  <button class="reserve-btn">Reserve Now</button>
    `
});

const chevroletBtn = document.querySelector('.Chevrolet');
chevroletBtn.addEventListener('click',()=>
{
    const secondGrid = document.querySelector('.second-grid');
    const thirdGrid = document.querySelector('.third-grid');
    let chevrolet;
    const id = chevroletBtn.id;
    cars.forEach((car)=>
    {
        if (car.id === id)
        {
            chevrolet = car;
        }
    });

    secondGrid.innerHTML = 
    `
    <img src="${chevrolet.image}">
    `
    thirdGrid.innerHTML = 
    `
    <div class="table">
    <div class="price"><span>$${chevrolet.price}</span> / rent per day</div>
    <div class="model">
      <p>Model</p>
      <div class="line"></div>
      <p>${chevrolet.model}</p>
    </div>
    <div class="Year">
      <p>Year</p>
      <div class="line"></div>
      <p>${chevrolet.year}</p>
    </div>
    <div class="Doors">
      <p>Doors</p>
      <div class="line"></div>
      <p>${chevrolet.doors}</p>
    </div>
    <div class="AC">
      <p>AC</p>
      <div class="line"></div>
      <p>${chevrolet.ac}</p>
    </div>
    <div class="Transmission"> 
      <p>Transmission</p>
      <div class="line"></div>
      <p>${chevrolet.transmission}</p>
    </div>
    <div class="fuel">
      <p>Fuel</p>
      <div class="line"></div>
      <p>${chevrolet.fuel}</p>
    </div>
  </div>
  <button class="reserve-btn">Reserve Now</button>
    `
});

const lamborghiniBtn = document.querySelector('.lamborghini');
lamborghiniBtn.addEventListener('click',()=>
{
    const secondGrid = document.querySelector('.second-grid');
    const thirdGrid = document.querySelector('.third-grid');
    let lamborghini;
    const id = lamborghiniBtn.id;
    cars.forEach((car)=>
    {
        if (car.id === id)
        {
            lamborghini = car;
        }
    });

    secondGrid.innerHTML = 
    `
    <img src="${lamborghini.image}">
    `
    thirdGrid.innerHTML = 
    `
    <div class="table">
    <div class="price"><span>$${lamborghini.price}</span> / rent per day</div>
    <div class="model">
      <p>Model</p>
      <div class="line"></div>
      <p>${lamborghini.model}</p>
    </div>
    <div class="Year">
      <p>Year</p>
      <div class="line"></div>
      <p>${lamborghini.year}</p>
    </div>
    <div class="Doors">
      <p>Doors</p>
      <div class="line"></div>
      <p>${lamborghini.doors}</p>
    </div>
    <div class="AC">
      <p>AC</p>
      <div class="line"></div>
      <p>${lamborghini.ac}</p>
    </div>
    <div class="Transmission"> 
      <p>Transmission</p>
      <div class="line"></div>
      <p>${lamborghini.transmission}</p>
    </div>
    <div class="fuel">
      <p>Fuel</p>
      <div class="line"></div>
      <p>${lamborghini.fuel}</p>
    </div>
  </div>
  <button class="reserve-btn">Reserve Now</button>
    `
});

const bmwBtn = document.querySelector('.bmw');
bmwBtn.addEventListener('click',()=>
{
    const secondGrid = document.querySelector('.second-grid');
    const thirdGrid = document.querySelector('.third-grid');
    let bmw;
    const id = bmwBtn.id;
    cars.forEach((car)=>
    {
        if (car.id === id)
        {
            bmw = car;
        }
    });

    secondGrid.innerHTML = 
    `
    <img src="${bmw.image}">
    `
    thirdGrid.innerHTML = 
    `
    <div class="table">
    <div class="price"><span>$${bmw.price}</span> / rent per day</div>
    <div class="model">
      <p>Model</p>
      <div class="line"></div>
      <p>${bmw.model}</p>
    </div>
    <div class="Year">
      <p>Year</p>
      <div class="line"></div>
      <p>${bmw.year}</p>
    </div>
    <div class="Doors">
      <p>Doors</p>
      <div class="line"></div>
      <p>${bmw.doors}</p>
    </div>
    <div class="AC">
      <p>AC</p>
      <div class="line"></div>
      <p>${bmw.ac}</p>
    </div>
    <div class="Transmission"> 
      <p>Transmission</p>
      <div class="line"></div>
      <p>${bmw.transmission}</p>
    </div>
    <div class="fuel">
      <p>Fuel</p>
      <div class="line"></div>
      <p>${bmw.fuel}</p>
    </div>
  </div>
  <button class="reserve-btn">Reserve Now</button>
    `
});


const leftArrow = document.querySelector('.js-left-arrow');
const rightArrow = document.querySelector('.js-right-arrow');
const reivew = document.querySelector('.js-review-container');
const profile = document.querySelector('.js-profile');
const rating = document.querySelector('.rating');
rightArrow.addEventListener('click',()=>
{
  reivew.innerHTML = 
  `<i class="fa-solid fa-quote-left"></i>
  <span class="client-review">
  Great price, service and very convenient.the car was clean and worked fine.
  It was great car rental experience.
  </span>
  <i class="fa-solid fa-quote-right"></i>
  `;

  rating.innerHTML = 
  `
  <img src="./img/rating/rating-45.png">4.0
  `

  profile.innerHTML = 
  `
  <img src="./img/user2.jpg">
  <span>Mark</span>
  `
});

leftArrow.addEventListener('click',()=>
{
  reivew.innerHTML =
  `
  <i class="fa-solid fa-quote-left"></i>
  <span class="client-review">Best Car Rental Services.
    I was scared to book cab from Reliable Cars Rental at first place. But I tried and found they are reliable and affordable.Driver knew the route. Polite & Helpful. He came on time.
  </span>
  <i class="fa-solid fa-quote-right"></i>
  `

  rating.innerHTML = 
  `
  <img src="./img/rating/rating-50.png">5.0
  `

  profile.innerHTML = 
  ` <img src="./img/user1.jpg">
    <span>Jack</span>
  `
});

const error = document.querySelector('.error');

function getAndDisplayWish(name){
    fetch('./wish.json')
    .then((res) => res.json())
    .then((data) => {
       
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomWish = data[randomIndex];

        document.getElementById('name').innerHTML = name;
        document.getElementById('wish').src = randomWish.image;
    }) 
    .catch((error) => {
        document.getElementById('wish').textContent = "Oops Something went wrong."
        console.log(error);
    });
}

document.querySelector('button').addEventListener('click', () => {
    const nameInput = document.getElementById('name-input').value.trim();

    if (nameInput) {

        document.querySelector('.form-con').style.display = 'none';
        document.querySelector('.generator').style.display = 'block';

        getAndDisplayWish(nameInput);
        
        document.querySelector('.generate-btn').dataset.name = nameInput;
        document.getElementById('name').innerHTML = nameInput;
    }
    else {
        error.classList.add('error');
        error.style.display = 'block';
        setTimeout(function() {
        error.classList.remove('error');
        error.style.display = 'none';
        }, 2000);
    }
});

document.querySelector('.generate-btn').addEventListener('click', () =>{

function getAndDisplayWish(name){
    fetch('./wish.json')
    .then((res) => res.json())
    .then((data) => {
       
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomWish = data[randomIndex];

        document.getElementById('name').innerHTML = `${nameInput}`;
        document.getElementById('wish').src = randomWish.image;
    }) 
    .catch((error) => {
        document.getElementById('wish').textContent = "Oops Something went wrong."
    }) ;

document.querySelector('button').addEventListener('click', () => {
    const nameInput = document.getElementById('name-input').value.trim();

    if(nameInput) {

        document.querySelector('.form-con').style.display = 'none';
        document.querySelector('.generator').style.display = 'block';

        getAndDisplayWish(nameInput);
        document.querySelector('.generate-btn').dataset.name = nameInput;
        document.getElementById('name').innerHTML = nameInput;
    }
    else {
        error.classList.add('error');
        error.style.display = 'block';
        setTimeout(function() {
        error.classList.remove('error');
        error.style.display = 'none';
        }, 2000);
    }
});
}
});

document.querySelector('.generate-btn').addEventListener('click', () =>{
    const dice = document.getElementById('dice');
    dice.classList.add('spin');
    
    setTimeout(() => {
        dice.classList.remove('spin');
    }, 1000)
     const name = document.querySelector('.generate-btn').dataset.name;
    getAndDisplayWish(name);
});
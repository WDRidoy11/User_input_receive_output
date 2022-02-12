let pra = document.getElementById('pra');
let Name = prompt('Enter your Name');
let age = prompt('Enter your age');
let study = prompt('Enter your study');
let job = prompt('Enter your job');
let work = prompt('Enter your work');
let info = {
    Name,
    age,
    study,
    job,
    work
}
let message = {
    'body Name' () {
        pra.innerHTML = `My Name is ${info.Name}. I'm ${info.age} years old. I study is class ${info.study}. My Profation is ${info.job}. I work is ${info.work}.`;
    }
};
console.log(message['body Name']());
const display = document.querySelector('.display');
const detail = document.querySelectorAll('.detail');
const btn = document.querySelectorAll('.btn');

detail.forEach(item => {
    item.innerText = '.';
});

btn[0].addEventListener('click', () => {
    detail[0].innerText = 'Project Management';
    detail[1].innerText = 'Tuesday 20th July, 2021';
    detail[2].innerText = '8:00am - 10:00am';
    detail[3].innerText = 'Basement';
    btn[0].classList.add('clickEvent');
    btn[1].classList.remove('clickEvent');
    btn[2].classList.remove('clickEvent');
    btn[3].classList.remove('clickEvent');
    btn[4].classList.remove('clickEvent');
    btn[5].classList.remove('clickEvent');
})
btn[1].addEventListener('click', () => {
    detail[0].innerText = 'Software Engineering';
    detail[1].innerText = 'Thursday 22nd July, 2021';
    detail[2].innerText = '8:00am - 10:00am';
    detail[3].innerText = 'Basement';
    btn[1].classList.add('clickEvent');
    btn[0].classList.remove('clickEvent');
    btn[2].classList.remove('clickEvent');
    btn[3].classList.remove('clickEvent');
    btn[4].classList.remove('clickEvent');
    btn[5].classList.remove('clickEvent');
})
btn[2].addEventListener('click', () => {
    detail[0].innerText = 'Database (Oracle)';
    detail[1].innerText = 'Saturday 24th July, 2021';
    detail[2].innerText = '8:00am - 10:00am';
    detail[3].innerText = 'Basement';
    btn[2].classList.add('clickEvent');
    btn[1].classList.remove('clickEvent');
    btn[0].classList.remove('clickEvent');
    btn[3].classList.remove('clickEvent');
    btn[4].classList.remove('clickEvent');
    btn[5].classList.remove('clickEvent');
})
btn[3].addEventListener('click', () => {
    detail[0].innerText = 'Research Method';
    detail[1].innerText = 'Tuesday 27th July, 2021';
    detail[2].innerText = '8:00am - 10:00am';
    detail[3].innerText = 'Basement';
    btn[3].classList.add('clickEvent');
    btn[1].classList.remove('clickEvent');
    btn[2].classList.remove('clickEvent');
    btn[0].classList.remove('clickEvent');
    btn[4].classList.remove('clickEvent');
    btn[5].classList.remove('clickEvent');
})
btn[4].addEventListener('click', () => {
    detail[0].innerText = 'Data Comm II';
    detail[1].innerText = 'Thursday 29th July, 2021';
    detail[2].innerText = '8:00am - 10:00am';
    detail[3].innerText = 'Basement';
    btn[4].classList.add('clickEvent');
    btn[1].classList.remove('clickEvent');
    btn[2].classList.remove('clickEvent');
    btn[3].classList.remove('clickEvent');
    btn[0].classList.remove('clickEvent');
    btn[5].classList.remove('clickEvent');
})
btn[5].addEventListener('click', () => {
    detail[0].innerText = 'Operating System';
    detail[1].innerText = 'Saturday 31st July, 2021';
    detail[2].innerText = '2:00pm - 4:00pm';
    detail[3].innerText = 'Basement';
    btn[5].classList.add('clickEvent');
    btn[1].classList.remove('clickEvent');
    btn[2].classList.remove('clickEvent');
    btn[3].classList.remove('clickEvent');
    btn[4].classList.remove('clickEvent');
    btn[0].classList.remove('clickEvent');
})

var date = new Date();
var day = date.getDate();
// var month = date.getMonth().toString();
var year = date.getFullYear();
var nextDay = 1;

var shortMonthName = new Intl.DateTimeFormat("en-US", { month: "short" }).format;
var month = shortMonthName(date); // "Jul"

const vacDay = 31;
let vacSpan = document.getElementById('vacationSpan');
let examSpan = document.getElementById('examSpan');

vacSpan.textContent = vacDay - day;

if(day < 20){
    examSpan.textContent = 6;
}

// -------------To CHANGE Button Color --------- //
if(day == 20 && month === 'Jul' && year == 2021){
    document.getElementById('d1').classList.add('active');
    detail[0].innerText = 'Project Management';
    detail[1].innerText = 'Tuesday 20th July, 2021';
    detail[2].innerText = '8:00am - 10:00am';
    detail[3].innerText = 'Basement';
    examSpan.textContent = 6;
}

if(day == 22 && month === 'Jul' && year == 2021){
    document.getElementById('d2').classList.add('active');
    detail[0].innerText = 'Software Engineering';
    detail[1].innerText = 'Thursday 22nd July, 2021';
    detail[2].innerText = '8:00am - 10:00am';
    detail[3].innerText = 'Basement';
    examSpan.textContent = 5;
}

if(day == 24 && month === 'Jul' && year == 2021){
    document.getElementById('d3').classList.add('active');
    detail[0].innerText = 'Database (Oracle)';
    detail[1].innerText = 'Saturday 24th July, 2021';
    detail[2].innerText = '8:00am - 10:00am';
    detail[3].innerText = 'Basement';
    examSpan.textContent = 4;
}

if(day == 27 && month === 'Jul' && year == 2021){
    document.getElementById('d4').classList.add('active');
    detail[0].innerText = 'Research Method';
    detail[1].innerText = 'Tuesday 27th July, 2021';
    detail[2].innerText = '8:00am - 10:00am';
    detail[3].innerText = 'Basement';
    examSpan.textContent = 3;
}

if(day == 29 && month === 'Jul' && year == 2021){
    document.getElementById('d5').classList.add('active');
    detail[0].innerText = 'Data Comm II';
    detail[1].innerText = 'Thursday 29th July, 2021';
    detail[2].innerText = '8:00am - 10:00am';
    detail[3].innerText = 'Basement';
    examSpan.textContent = 2;
}

if(day == 31 && month === 'Jul' && year == 2021){
    document.getElementById('d6').classList.add('active');
    detail[0].innerText = 'Operating System';
    detail[1].innerText = 'Saturday 31st July, 2021';
    detail[2].innerText = '2:00pm - 4:00pm';
    detail[3].innerText = 'Basement';
    examSpan.textContent = 1;
}

// ----------------------------------------------------------------- //
btn.forEach(button => {
    if(button.textContent === 'Completed!'){
        button.classList.add('alert');
    }
});



// ---------------------To REMOVE Button---------------------------- //
if(day > 20 && month === 'Jul' && year == 2021){
    btn[0].classList.add('completed');
    btn[0].innerText = 'Completed!'
}

if(day > 22 && month === 'Jul' && year == 2021){
    btn[1].classList.add('completed');
    btn[1].innerText = 'Completed!'
}

if(day > 24 && month === 'Jul' && year == 2021){
    btn[2].classList.add('completed');
    btn[2].innerText = 'Completed!'
}

if(day > 27 && month === 'Jul' && year == 2021){
    btn[3].classList.add('completed');
    btn[3].innerText = 'Completed!'
}

if(day > 29 && month === 'Jul' && year == 2021){
    btn[4].classList.add('completed');
    btn[4].innerText = 'Completed!'
}

if(day > 31 && month === 'Jul' && year == 2021){
    btn[5].classList.add('completed');
    btn[5].innerText = 'Completed!'
    
}

let span = document.querySelectorAll('.alert');

if(day < 20){
    span.forEach(button => {
        button.textContent = 'Upcoming!';
    });
}

if(month == 'Aug' || month == 'Sept' || month == 'Oct' || month == 'Nov' || month == 'Dec'){
    span.forEach(button => {
        button.textContent = 'Completed!';
        button.style.color = 'red';
        document.querySelector('.right').style.display = 'none';
        document.querySelector('.left').style.display = 'none';
    });
}
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


// -------------To CHANGE Button Color --------- //
if(day == 20 && month === 'Jul' && year == 2021){
    document.getElementById('d1').style.backgroundColor = '#ffbb00';
    document.getElementById('d1').style.color = '#000000';
    document.getElementById('d1').style.fontWeight = 'bold';
}

if(day == 22 && month === 'Jul' && year == 2021){
    document.getElementById('d1').style.backgroundColor = '#ffbb00';
    document.getElementById('d1').style.color = '#000000';
    document.getElementById('d1').style.fontWeight = 'bold';
}

if(day == 24 && month === 'Jul' && year == 2021){
    document.getElementById('d1').style.backgroundColor = '#ffbb00';
    document.getElementById('d1').style.color = '#000000';
    document.getElementById('d1').style.fontWeight = 'bold';
}

if(day == 27 && month === 'Jul' && year == 2021){
    document.getElementById('d1').style.backgroundColor = '#ffbb00';
    document.getElementById('d1').style.color = '#000000';
    document.getElementById('d1').style.fontWeight = 'bold';
}

if(day == 29 && month === 'Jul' && year == 2021){
    document.getElementById('d1').style.backgroundColor = '#ffbb00';
    document.getElementById('d1').style.color = '#000000';
    document.getElementById('d1').style.fontWeight = 'bold';
}

if(day == 31 && month === 'Jul' && year == 2021){
    document.getElementById('d1').style.backgroundColor = '#ffbb00';
    document.getElementById('d1').style.color = '#000000';
    document.getElementById('d1').style.fontWeight = 'bold';
}




// ---------------------To REMOVE Button---------------------------- //
if(day == 20 + nextDay && month === 'Jul' && year == 2021){
    btn[0].classList.add('completed');
    btn[0].innerText = 'Completed!'
    btn[0].style.color = 'red';
    btn[0].style.backgroundColor = '#000';
}

if(day == 22 + nextDay && month === 'Jul' && year == 2021){
    btn[1].classList.add('completed');
    btn[1].innerText = 'Completed!'
    btn[1].style.color = 'red';
    btn[1].style.backgroundColor = '#000';
}

if(day == 24 + nextDay && month === 'Jul' && year == 2021){
    btn[2].classList.add('completed');
    btn[2].innerText = 'Completed!'
    btn[2].style.color = 'red';
    btn[2].style.backgroundColor = '#000';
}

if(day == 27 + nextDay && month === 'Jul' && year == 2021){
    btn[3].classList.add('completed');
    btn[3].innerText = 'Completed!'
    btn[3].style.color = 'red';
    btn[3].style.backgroundColor = '#000';
}

if(day == 29 + nextDay && month === 'Jul' && year == 2021){
    btn[4].classList.add('completed');
    btn[4].innerText = 'Completed!'
    btn[4].style.color = 'red';
    btn[4].style.backgroundColor = '#000';
}

if(day == 31 + nextDay && month === 'Jul' && year == 2021){
    btn[5].classList.add('completed');
    btn[5].innerText = 'Completed!'
    btn[5].style.color = 'red';
    btn[5].style.backgroundColor = '#000';
}



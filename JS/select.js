function scrollSeatSection(){
    const ticketArea= document.getElementById('ticketArea');
    console.log(ticketArea);
}

const seats = document.querySelectorAll(".seat");
const seletedSeats= document.getElementById('addSeats');
const removeText= document.getElementById('h1');
const availableSet= document.getElementById('availableSet');
const bookingSeat = document.getElementById('bookingSeat');
const nextButton = document.getElementById('nextButton');
const inputNumber= document.getElementById('inputNumber');

let selectedSeat = [];

function updateSeat(){
    availableSet.innerText= (40 - selectedSeat.length) ;
    bookingSeat.innerText= selectedSeat.length;
}

function addStyle(seatId){
    const seat = document.getElementById(seatId);
    const addSeats = document.createElement('p');
    seat.classList.add('bg-green-500');
    seat.classList.add('text-white');
    addSeats.innerText= seatId;
    seletedSeats.appendChild(addSeats);
}

function checkSelects(seatId){
    if(!selectedSeat.includes(seatId)){
        selectedSeat.push(seatId);
        addStyle(seatId);
        updateSeat();
    }else{
        alert("This Seat Already Selected!")
    }    
}


for(let i=0; i<seats.length; i++){
    const seat = seats[i];
    seat.addEventListener('click',function(){
        
        if( selectedSeat.length === 0){
            seletedSeats.removeChild(removeText);
            checkSelects(seat.innerText);
        }else if( selectedSeat.length < 4){
            checkSelects(seat.innerText);      
        }else{
            alert("You select only 4 seat!");
        }        
    });
    
}

function successMessage(){
    alert("Successfully done");
}

function getTicket(){
    inputNumber.value;
    if( !isNaN(inputNumber) || inputNumber ===""){
        alert("Please write currect Number!");
    }else if(selectedSeat.length === 0){
        alert("Please select atlist one seat!");
    }else{
        successMessage();
    }
}

inputNumber.addEventListener('input', function(){
    const count =buttonVisible(nextButton , inputNumber);
    if(count === 1){
        nextButton.addEventListener('click', getTicket);
    }else{
        nextButton.removeEventListener('click', getTicket);
    }
});

function conditionOfCoupon(){
    if(selectedSeat.length !== 0){
        applyCoupn();
    }else{
        alert('Please Select Atlist one seat');
    }
}


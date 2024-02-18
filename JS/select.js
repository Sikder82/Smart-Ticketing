function scrollSeatSection(){
    const ticketArea= document.getElementById('ticketArea');
    console.log(ticketArea);
}

const seats = document.querySelectorAll(".seat");
const seletedSeats= document.getElementById('addSeats');
const removeText= document.getElementById('h1');
const availableSet= document.getElementById('availableSet');
const bookingSeat = document.getElementById('bookingSeat');


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


const seats = document.querySelectorAll(".seat");
const seletedSeats= document.getElementById('addSeats');
const removeText= document.getElementById('h1');
const availableSet= document.getElementById('availableSet');
const bookingSeat = document.getElementById('bookingSeat');
const nextButton = document.getElementById('nextButton');
const inputNumber= document.getElementById('inputNumber');
const ticketPrice= document.getElementById('ticketPrice');

let selectedSeat = [];


function setTotalAmount(){
    const totalPrice= document.getElementById('totalPrice');
    const total=parseFloat(totalPrice.innerText)+parseFloat(ticketPrice.innerText);
    totalPrice.innerText = total;
    applyCoupn();
}

function updateSeat(){
    availableSet.innerText= (40 - selectedSeat.length) ;
    bookingSeat.innerText= selectedSeat.length;
    setTotalAmount();
}



function addStyle(seatId){
    const seat = document.getElementById(seatId);
    const addSeats = document.createElement('p');
    seat.classList.add('bg-green-500');
    seat.classList.add('text-white');
    addSeats.classList.add('flex');
    addSeats.classList.add('justify-between');
    addSeats.innerHTML= "<span>"+seatId+"</span><span>Economy</span><span>550</span>";
    seletedSeats.appendChild(addSeats);
}

function checkSelects(seatId){
    if(!selectedSeat.includes(seatId)){
        selectedSeat.push(seatId);
        addStyle(seatId);
        updateSeat();
    }else{
        Swal.fire({
            text: "This seat is already selected!",
          });
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
            Swal.fire({
                text: "You select only 4 seats!",
              });
        }        
    });
    
}


function getTicket(){
    if( isNaN(inputNumber.value) || inputNumber.value ===""){
        Swal.fire({
            text: "Please write correct Number!",
          });
    }else if(selectedSeat.length === 0){
        Swal.fire({
            text: "Please select atleast one seat!",
          });
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
        applyMessege();
    }else{
        Swal.fire({
            title: "",
            text: "Please Select Atlist one seat!",
            icon: ""
          });
    }
}


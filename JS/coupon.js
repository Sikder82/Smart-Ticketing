const usedCoupn = document.getElementById('usedCoupn');
const applyButton = document.getElementById('applyButton');
const firstCoupn = document.getElementById('firstCoupn').innerText;
    const secondCoupn = document.getElementById('secondCoupn').innerText;

 function unhideArea(){
    const hiddenArea = document.getElementById('hiddenArea');
    const coupnArea = document.getElementById('coupnArea');
    hiddenArea.classList.remove('hidden');
    coupnArea.classList.add('hidden');
 }

 function applyMessege(){
    if (usedCoupn.value === firstCoupn){
        Swal.fire({
            title: firstCoupn,
            text: "Successfully applied Coupon!",
            icon: "success"
          });
    }else if(usedCoupn.value === secondCoupn){
        Swal.fire({
            title: secondCoupn,
            text: "Successfully applied Coupon!",
            icon: "success"
          });
    }else{
        Swal.fire({
            icon: "error",
            title: "Wrong",
            text: "Please enter the correct coupon",
          });
    }
 }

function applyCoupn(){
    const dicount = document.getElementById('dicount')
    const dicountPrice = document.getElementById('dicountPrice')
    const totalPrice = document.getElementById('totalPrice');
    const totalAmount = parseFloat(totalPrice.innerText);

    if (usedCoupn.value === firstCoupn){
        const discountAmount = totalAmount * 0.15;
        discountTotalAmount = totalAmount - discountAmount;
        dicount.innerText= parseFloat( discountAmount );
        dicountPrice.innerText= parseFloat(discountTotalAmount);
        unhideArea();
    }else if(usedCoupn.value === secondCoupn){
        const discountAmount = totalAmount * 0.2;
        discountTotalAmount = totalAmount - discountAmount;
        dicount.innerText= parseFloat( discountAmount );
        dicountPrice.innerText= parseFloat( discountTotalAmount );
        unhideArea();
    }else{
        usedCoupn.value= '';
        applyButton.classList.remove('btn');
        applyButton.classList.remove('bg-[#1DD100]');
        applyButton.classList.remove('text-white');
    }
}

usedCoupn.addEventListener('keyup', function(){
    const count =buttonVisible(applyButton , usedCoupn);
    if(count === 1){
        applyButton.addEventListener('click', conditionOfCoupon);
    }else{
        applyButton.removeEventListener('click', conditionOfCoupon);
    }
});
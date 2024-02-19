const usedCoupn = document.getElementById('usedCoupn');
const applyButton = document.getElementById('applyButton');
 
 function unhideArea(){
    const hiddenArea = document.getElementById('hiddenArea');
    const coupnArea = document.getElementById('coupnArea');
    hiddenArea.classList.remove('hidden');
    coupnArea.classList.add('hidden');
    alert("Successfully applied Coupon!");
 }

function applyCoupn(){
    const firstCoupn = document.getElementById('firstCoupn').innerText;
    const secondCoupn = document.getElementById('secondCoupn').innerText;
    const dicount = document.getElementById('dicount')
    const dicountPrice = document.getElementById('dicountPrice')
    const totalPrice = document.getElementById('totalPrice');
    const totalAmount = parseFloat(totalPrice.innerText);

    console.log(firstCoupn, secondCoupn , usedCoupn);
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
        alert("Please apply valid coupon code!");
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
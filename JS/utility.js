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
    const usedCoupn = document.getElementById('usedCoupn');
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
        alert("Please Apply valid Coupn Code!");
        usedCoupn.value= '';
    }
}
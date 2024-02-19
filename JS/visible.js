function buttonVisible(nextButton , inputNumber){
    const count =0;
    if(inputNumber.value !== ''){
         nextButton.classList.add('btn');
         nextButton.classList.add('bg-[#1DD100]');
         nextButton.classList.add('text-white');
         return (count+1)
    }else{
         nextButton.classList.remove('btn');
         nextButton.classList.remove('bg-[#1DD100]');
         nextButton.classList.remove('text-white');
         return count;
    }
 }
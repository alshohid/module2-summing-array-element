const sumValue =(array)=>{
       var sum=0;
       for(let i=0;i<array.length; i++){
          
             sum =sum + array[i];
       }
       return sum;


}
const myArray=[20,30,40];
 const totalSum= sumValue(myArray);
 console.log(totalSum);
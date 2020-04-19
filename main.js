// task6


const run6 = () => {

  const maxVal=50;
  let numberList= {};
  for (i=2; i<=maxVal; i++) {
    // mark all divisible by 2 to false except 2
    
    if ((Number.isInteger(i/2)) && (Math.sqrt(i)<=i) && (i!==2)) {
      numberList[i]=false;
    } else {
      numberList[i]=true;
    }
  }

  for (v=3; v<=maxVal; v++) {
    
    if (numberList[v]==true){
      for (c=v+1; c<=maxVal; c++) {
       
        cVal=c/v;
        if (Number.isInteger(cVal) && (Math.sqrt(i)<=i) && numberList!==true) {
         numberList[c]=false;
        }
      }
    } 
  }
 
  const result=[]
  for (o=2; o<=maxVal; o++) {
    if (numberList[o]==true){
      result.push(o);
    }
  }

    console.log(result);
    document.getElementById("outputResult").innerHTML = result;

}

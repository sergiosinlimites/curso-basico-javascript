function solution(number){
    let multiplesOf3 = [];
    let multiplesOf5 = [];
    let total3 = 0;
    let total5 = 0;
    let finalNumber;
    for(let i = 1; i < number; i++){
      /* console.log(" entre 3 da " + i % 3);
      console.log(" entre 5 da " + i % 5); */
      if(i % 3 == 0){
        if(i % 5 == 0){
          multiplesOf3.push(i);
          multiplesOf5.push(i);
        }
        else{
          multiplesOf3.push(i);
        }
      }
      else if(i % 5 == 0){
        multiplesOf5.push(i);
      }
    }
    console.log(multiplesOf3, multiplesOf5);

    function multiplication3(){
        for(let i=0; i < multiplesOf3.length; i++){
            if(multiplesOf3[i] != 0){
                total3 = multiplesOf3[i] + total3;
            }
        }
        console.log("aqui da " + total3);
        return total3;
    }

    function multiplication5(){
        for(let numeros of multiplesOf5){
            if(numeros != 0){
                total5 = numeros + total5;
            }
        }
        return total5;
    }
    multiplication3();
    multiplication5();

    /* console.log("multiplication3 da " + multiplication3);
    console.log("multiplication5 da " + multiplication5); */

    finalNumber = total3 + total5;
    return finalNumber;
  }

solution(10);
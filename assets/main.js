//EJERCICIO ARRAY 1

//A

let month = ["January", "February", "Marj", "April", "Mei"];
    month[2] = "Mars"
month [4] = "May"
console.log(month)

//B

function month() { 
  let month1 = ["January", "February", "Marj", "April", "Mei"] ;
 
month1[2] = "Mars";
month1[4] = "May";


let newMonths = ["June", "July", "August", "September"];

 return month1.concat(newMonths);

}
console.log(month())

//C

function month() { 
  let month1 = ["January", "February", "Marj", "April", "Mei"] ;
 
month1[2] = "Mars";
month1[4] = "May";


let newMonths = ["June", "July", "August", "September"];
let totalMonths = ["October","November","December"];

let firstmonth = month1.concat(newMonths);
let secondmonth = firstmonth.concat(totalMonths)
    return secondmonth
    

}
console.log(month())

function changeArray(num1, num2, num3) {

    
    if ( num1 > num2 ) {
        
      const totalMonths = ["January", "February", "Mars", "April", "May","June", "July", "August", 
    
    "September","October","November","December"];
        
    
        let aResultado = totalMonths.pop()
   
    return  totalMonths
    }
    
          
           else if (10 > (num2 >num3)) {
          
          
               let bResultado = totalMonths.shift();
          
              return totalMonths
          
          
           }
         
              else if  (num2 > (num3 || num1 )) {
                    
          
                
                    let aResultado = totalMonths.push("october")
                
                return  totalMonths
                }
  
              } console.log(changeArray(8,9,4))
                  
            
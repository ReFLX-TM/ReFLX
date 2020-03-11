function isPrime(num) {
 let divs = 0;
 const prime = [1,2,3,5,7,num];
 if (num <= 1) { 
   return false; 
 } 
 else if (num == 2 || num == 3 || num == 5 || num == 7) {
   return true;
 }
 else {
   for (let i = 0; i < prime.length; i++) {
     num % prime[i] == 0 ? divs += 1 : null;
   }
 }
 return divs > 2 ? false : true;
}

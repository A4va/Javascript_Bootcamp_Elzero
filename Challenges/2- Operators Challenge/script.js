/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);// 100
         //  11 +  20  +  80  -  11 =    100
/*
   Now Values Of Variables have changed to :-
   Now a = 12 |Because :- +Pre Increment | Then Unary Plus | Then +Post Increment
   Now b = 21 |Because :- Unary Plus | Then +Post Increment 
   Now c = 81 |Because :- Unary Plus | Then +Post Increment 
*/console.log(a,b,c)

console.log(++a + -b   + +c++ - -a++ + +a);// 100
         //  13 +(-21) +  81  -(-13) + 14 =   100
         //  13   -21  +  81    +13 +  14 =   100
/*
   Now Values Of Variables have changed to :-
   Now a = 14 |Because :- +Pre Increment | Then Unary- | Then +Post Increment | Then Unary+ 
   Now b = 21 |Because :- Unary-
   Now c = 82 |Because :- Unary+ | Then +Post Increment 
*/console.log(a,b,c)

console.log(--c + +b + --a * +b++ - +b * a  + --a - +true);//100
         //  81 + 21 +  13 * 21   - 22 * 13 +  12 -  1   =   100
/*
   Now Values Of Variables have changed to :-
   Now a = 12 |Because :- -Pre Increment | Then -Pre Increment
   Now b = 22 |Because :- Unary+ | Then Unary+ | Then +Post Increment | Then Unary+
   Now c = 81 |Because :- -Pre Increment
*/console.log(a,b,c)

/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * +e); // 2000
console.log(-d + ++f + ++e * ++g); // 173
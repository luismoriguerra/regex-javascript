const output = (string, regex ) => string.replace(regex, str => `(${str})`);

var str = `cat mat bat Hat ?at 0at`

output(str, /at/g) /*? */             //​​​​​c(at) m(at) b(at) H(at) ?(at) 0(at)​​​​​
output(str, /[cb]at/g) /*? */         //​​​​​(cat) mat (bat) Hat ?at 0at​​​​​
output(str, /[bc]at/g) /*? */         //​​​​​(cat) mat (bat) Hat ?at 0at​​​​​
output(str, /[^bc]at/g) /*? */        //​​​​​cat (mat) bat (Hat) (?at) (0at)​​​​​
output(str, /[a-z]at/g) /*? */        //​​​​​(cat) (mat) (bat) Hat ?at 0at​​​​​
output(str, /[a-zA-Z]at/g) /*? */     //​​​​​(cat) (mat) (bat) (Hat) ?at 0at​​​​​
output(str, /[a-dA-Z]at/g) /*? */     //​​​​​(cat) mat (bat) (Hat) ?at 0at​​​​​
output(str, /[^a-zA-Z]at/g) /*? */    //​​​​​cat mat bat Hat (?at) (0at)​​​​​
output(str, /[a-zA-Z0-9]at/g) /*? */  //​​​​​(cat) (mat) (bat) (Hat) ?at (0at)​​​​​
output(str, /[a-zA-Z0-9?]at/g) /*?*/  //​​​​​(cat) (mat) (bat) (Hat) (?at) (0at)​​​​​


var str = `Aeiou $100 55.5%`;

output(str, /[a-zA-Z0-9]/g) /*? */    //(A)(e)(i)(o)(u) $(1)(0)(0) (5)(5).(5)%​​​​​

output(str, /[\w]/g) /*? */           //​​​​​(A)(e)(i)(o)(u) $(1)(0)(0) (5)(5).(5)%​​​​​
output(str, /[\d]/g) /*? */           //​​​​​Aeiou $(1)(0)(0) (5)(5).(5)%​​​​​
output(str, /[\s]/g) /*? */           //​​​​​Aeiou( )$100( )55.5%​​​​​ 

output(str, /[^]/g) /*? */           //​​​​​(A)(e)(i)(o)(u)( )($)(1)(0)(0)( )(5)(5)(.)(5)(%)

output(str, /[^\w]/g) /*? */          //​​​​​Aeiou( )($)100( )55(.)5(%)​​​​​
output(str, /[\W]/g) /*? */           //​​​​​Aeiou( )($)100( )55(.)5(%)​​​​​

output(str, /[^\d]/g) /*? */          //​​​​​(A)(e)(i)(o)(u)( )($)100( )55(.)5(%)​​​​​
output(str, /[\D]/g) /*? */           //​​​​​(A)(e)(i)(o)(u)( )($)100( )55(.)5(%)​​​​​

output(str, /[^\s]/g) /*? */          //(A)(e)(i)(o)(u) ($)(1)(0)(0) (5)(5)(.)(5)(%)​​​​​
output(str, /[\S]/g) /*? */           //(A)(e)(i)(o)(u) ($)(1)(0)(0) (5)(5)(.)(5)(%)​​​​​

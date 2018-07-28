const output = (string, regex ) => string.replace(regex, str => `(${str})`);

var str = `cat mat bat Hat ?at 0at`

output(str, /at/g) /*? */           
output(str, /[cb]at/g) /*? */       
output(str, /[bc]at/g) /*? */       
output(str, /[^bc]at/g) /*? */      
output(str, /[a-z]at/g) /*? */      
output(str, /[a-zA-Z]at/g) /*? */   
output(str, /[a-dA-Z]at/g) /*? */   
output(str, /[^a-zA-Z]at/g) /*? */  
output(str, /[a-zA-Z0-9]at/g) /*? */
output(str, /[a-zA-Z0-9?]at/g) /*?*/


var str = `Aeiou $100 55.5%`;

output(str, /[a-zA-Z0-9]/g) /*? */  

output(str, /[\w]/g) /*? */         
output(str, /[\d]/g) /*? */         
output(str, /[\s]/g) /*? */         

output(str, /[^]/g) /*? */         

output(str, /[^\w]/g) /*? */        
output(str, /[\W]/g) /*? */         

output(str, /[^\d]/g) /*? */        
output(str, /[\D]/g) /*? */         

output(str, /[^\s]/g) /*? */        
output(str, /[\S]/g) /*? */         

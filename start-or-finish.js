const output = (string, regex ) => string.replace(regex, str => `(${str})`);

var str = `This island is his, it is`

output(str, /is/g) /*? */         //​​​​​Th(is) (is)land (is) h(is), it (is)​​​​​
output(str, /is(?=\s)/g) /*? */   //​​​​​Th(is) island (is) his, it is​​​​​
output(str, /is(?=\s)?/g) /*? */  //​​​​​Th(is) (is)land (is) h(is), it (is)​​​​​
output(str, /\bis/g) /*? */       //​​​​​This (is)land (is) his, it (is)​​​​​
output(str, /\bis\b/g) /*? */     //​​​​​This island (is) his, it (is)​​​​​
output(str, /\Bis/g) /*? */       //​​​​​Th(is) island is h(is), it is​​​​​
output(str, /is\B/g) /*? */       //​​​​​Th(is) island is h(is), it is​​​​​
output(str, /\Bis\B/g) /*? */     //​​​​​This island is his, it is​​​​​

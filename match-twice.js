const output = (string, regex ) => string.replace(regex, str => `(${str})`);

var str = `it was the the thing`

output(str, /(the)\s?/g) /*? */ //​​​​​it was (the )(the )thing​​​​​
output(str, /(the)\s?\1/g) /*? */ //​​​​​it was (the the) thing​​​​​
output(str, /(the)\s?(?=\1)/g) /*? */ //​​​​​it was (the )the thing​​​​​

str.replace(/(the)\s?(?=\1)/g, '') /*? */ //​​​​​it was the thing​​​​​

var str = `it was the the thing thing`

output(str, /(\w+)\s?(?=\1)/g) /*? */ //it was (the )the (thing )thing​​​​​
 

var str = `<b>Bold</b><i>italics</i>`

output(str, /<(\w+)>(.*)<\/\1>/g) /*? */ //​​​​​(<b>Bold</b>)(<i>italics</i>)​​​​​
str.replace(/<(\w+)>(.*)<\/\1>/g , '$2\n') /*? */
// ​​​​​Bold​​​​​
// ​​​​​italics​​​​​

const output = (string, regex ) => string.replace(regex, str => `(${str})`);

var str = `foo
foobar
foobaz
fooboo
`

output(str, /foo/g) /*? */          
// ​​​​​(foo)​​​​​
// ​​​​​(foo)bar​​​​​
// ​​​​​(foo)baz​​​​​
// ​​​​​(foo)boo​​​​​

output(str, /foobar/g) /*? */       
// ​​​​​foo​​​​​
// ​​​​​(foobar)​​​​​
// ​​​​​foobaz​​​​​
// ​​​​​fooboo​​​​​

output(str, /foo(bar)/g) /*? */     
// ​​​​​foo​​​​​
// ​​​​​(foobar)​​​​​
// ​​​​​foobaz​​​​​
// ​​​​​fooboo​​​​​

output(str, /foo(bar|boo)/g) /*? */ 
// ​​​​​foo​​​​​
// ​​​​​(foobar)​​​​​
// ​​​​​foobaz​​​​​
// ​​​​​(fooboo)​​​​​

output(str, /foo(bar|boo)?/g) /*? */
// ​​​​​(foo)​​​​​
// ​​​​​(foobar)​​​​​
// ​​​​​(foo)baz​​​​​
// ​​​​​(fooboo)​​​​​

// Storing reference
str.replace(/foo(bar|boo)/g, '$1') /*? */
// ​​​​​foo​​​​​
// ​​​​​bar​​​​​
// ​​​​​foobaz​​​​​
// ​​​​​boo​​​​​

str.replace(/foo(bar|boo)/g, '**$1**') /*? */
// ​​​​​foo​​​​​
// ​​​​​**bar**​​​​​
// ​​​​​foobaz​​​​​
// ​​​​​**boo**​​​​​

str.replace(/foo(?:bar|boo)/g, '**$1**') /*? */
// ​​​​​foo​​​​​
// ​​​​​**$1**​​​​​
// ​​​​​foobaz​​​​​
// ​​​​​**$1**​​​​​

var str= `800-456-7890
(555) 456-7890
4564567890`;

str.replace(/\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}/g, ' area code $1 ') /*? */
// ​​​​​ area code 800 ​​​​​
// ​​​​​ area code 555 ​​​​​
// ​​​​​ area code 456 ​​​​​

str.replace(/\(?(?:\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}/g, ' area code $1 ') /*? */
//  area code $1 ​​​​​
// ​​​​​ area code $1 ​​​​​
// ​​​​​ area code $1 ​​​​​

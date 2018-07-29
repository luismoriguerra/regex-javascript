const output = (string, regex ) => string.replace(regex, str => `(${str})`);

var str = `foo
foobar
foobaz
fooboo
`

output(str, /foo(bar|boo)/g) /*? */     
// ​​​​​foo​​​​​
// ​​​​​(foobar)​​​​​
// ​​​​​foobaz​​​​​
// ​​​​​(fooboo)​​​​​

output(str, /foo(?:bar|boo)/g) /*? */   
// ​​​​​foo​​​​​
// ​​​​​(foobar)​​​​​
// ​​​​​foobaz​​​​​
// ​​​​​(fooboo)​​​​​

output(str, /foo(?=bar|boo)/g) /*? */   
// ​​​​​foo​​​​​
// ​​​​​(foo)bar​​​​​
// ​​​​​foobaz​​​​​
// ​​​​​(foo)boo​​​​​

output(str, /foo(?!bar|boo)/g) /*? */   
// ​​​​​(foo)​​​​​
// ​​​​​foobar​​​​​
// ​​​​​(foo)baz​​​​​
// ​​​​​fooboo​​​​​

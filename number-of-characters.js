const output = (string, regex ) => string.replace(regex, str => `(${str})`);

var str = `Cat sat on the hat.`
str.replace(/\./g, str => `(${str})`) /*? */ // Cat sat on the hat(.)​​​​​
str.replace(/./g, str => `(${str})`) /*? */ //​​​​​ (C)(a)(t)( )(s)(a)(t)( )(o)(n)( )(t)(h)(e)( )(h)(a)(t)(.)​​​​​
str.replace(/.../g, str => `(${str})`) /*? */ //​​​​​(Cat)( sa)(t o)(n t)(he )(hat).​​​​​
str.replace(/..../g, str => `(${str})`) /*? */ //​​​​​(Cat )(sat )(on t)(he h)at.​​​​​
var str = `Cat
sat on 
the hat.`
str.replace(/..../g, str => `(${str})`) /*? */
// ​​​​​Cat​​​​​
// ​​​​​(sat )on ​​​​​
// ​​​​​(the )(hat.)​​​​​


var str = `aaaaaaaaa`
// NUMBER OF CHARACTERS {N}
output(str, /a{3}/   ) /*? */ //​​​​​(aaa)aaaaaa​​​​​
output(str, /a{3}/g  ) /*? */ // (aaa)(aaa)(aaa)
output(str, /a{5,6}/g) /*? */ // (aaaaaa)aaa
output(str, /a{5,}/g ) /*? */ // (aaaaaaaaa)

// 0 (empty) to Infinity {0,} or (*)
output(str, /a{0,}/g)  /*? */ //(aaaaaaaaa)()
output(str, /aa{0,}/g) /*? */ //(aaaaaaaaa)
output(str, /b{0,}/g)  /*? */ //()a()a()a()a()a()a()a()a()a()
output(str, /bb{0,}/g) /*? */ //aaaaaaaaaa
output(str, /ab{0,}/g) /*? */ //(a)(a)(a)(a)(a)(a)(a)(a)(a)

output(str, /a*/g   )  /*? */ //(aaaaaaaaa)()
output(str, /aa*/g   ) /*? */ //(aaaaaaaaa)
output(str, /b*/g   )  /*? */ //()a()a()a()a()a()a()a()a()a()
output(str, /bb*/g   ) /*? */ //aaaaaaaaaa
output(str, /ab*/g   ) /*? */ //(a)(a)(a)(a)(a)(a)(a)(a)(a)


// FUll CHARACTERS WITHOUT EMPTY {1,} OR (+)
output(str, /a{1,}/g) /*? */ //(aaaaaaaaa)

output(str, /b+/g)   /*? */ //aaaaaaaaa
output(str, /a+/g)   /*? */ //(aaaaaaaaa)
output(str, /aa+/g)  /*? */ //(aaaaaaaaa)
output(str, /aaa+/g) /*? */ //(aaaaaaaaa)
output(str, /aaaa+/g)/*? */ //(aaaaaaaaa)

// OPTIONAL CHARACTER {0,1} OR (?)
output(str, /a{0,1}/g)  /*? */ // (a)(a)(a)(a)(a)(a)(a)(a)(a)()​​​​​
output(str, /a?/g)      /*? */ // (a)(a)(a)(a)(a)(a)(a)(a)(a)()​​​​​

output(str, /aa?/g)      /*? */ //​​​​​(aa)(aa)(aa)(aa)(a)​​​​​
output(str, /aaa?/g)      /*?*/ //(aaa)(aaa)(aaa)
output(str, /aaaa?/g)    /*? */ // (aaaa)(aaaa)a


var str= `https://luismori.pe
not a web address
http:..
https://eggghead.io more`;
output(str, /https{0,1}:\/\/.{1,}/g) /*? */
output(str, /https?:\/\/.+/g)        /*? */
// ​​​​​(https://luismori.pe)​​​​​
// ​​​​​not a web address​​​​​
// ​​​​​http:..​​​​​
// ​​​​​(https://eggghead.io more)​​​​​

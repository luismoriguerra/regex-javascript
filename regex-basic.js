var str = `Is this this?`
//var regex = ner RegExp('is', 'gi)
var regex = /is/ig;

regex.exec(str) /*?*/ //[ 'Is', index: 0, input: 'Is this this?' ]​​​​​
regex.exec(str) /*?*/ //[ 'Is', index: 5, input: 'Is this this?' ]​​​​​
regex.exec(str) /*?*/ //[ 'Is', index: 10, input: 'Is this this?' ]​​​​​
regex.exec(str) /*?*/ //null
regex.exec(str) /*?*/ // ​​​​​[ 'Is', index: 0, input: 'Is this this?' ]​​​​​

regex.test(str) /*?*/ //true
regex.test(str) /*?*/ //true
regex.test(str) /*?*/ //false
regex.test(str) /*?*/ //true


var str = `Is this this?`
str.match(/is/) /*? */ // ​​​​​[ 'is', index: 5, input: 'Is this this?' ]​​​​​
str.match(/is/i) /*? */// [ 'Is', index: 0, input: 'Is this this?' ]​​​​​
str.match(/is/ig) /*? */ //[ 'Is', 'is', 'is' ]​​​​​

var str = `Is this this?`
str.replace(/is/, 'xx') /*? */ // Is thxx this?​​​​​
str.replace(/is/i, 'xx') /*? */ //​​​​​xx this this?​​​​​
str.replace(/is/ig, 'xx') /*? */ //​​​​​xx thxx thxx?​​​​​
str.replace(/is/, str => `(${str})`) /*? */ //​​​​​Is th(is) this?​​​​​
str.replace(/is/i, str => `(${str})`) /*? */ //(Is) this this?​​​​​ 
str.replace(/is/ig, str => `(${str})`) /*? */ //​​​​​(Is) th(is) th(is)?​​​​​ 

var str = `Is this this?`
str.search(/is/) /*? */ // 5
str.search(/is/i) /*? */ // 0
str.search(/is/ig) /*? */ // 0

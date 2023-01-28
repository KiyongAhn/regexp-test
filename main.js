const str = `
010-1234-5678
thesec@email.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과 백두산이 마르도 닳도록
`

// const regexp = new RegExp('the', 'gi')
// const regexp = /the/gi
// console.log(str.match(regexp))
// console.log(str.match(/the/gi))

// const regexp = /fox/gi
// const regexp = /HEROPY/gi
// console.log(regexp.test(str))

// const regexp = /fox/gi
// console.log(str.replace(regexp, 'AAA'))
// console.log(str)


console.log(str.match(/\.$/gi)) 
// null
// 줄바꿈을 인정하지 않고 맨끝까지 하나의 문장
// 시작 부분과 끝부분이 하나만 존재
console.log(str.match(/\.$/gim))
// 줄바꿈마다 하나의 문장으로 보고 여러줄을 다 검색함
// 각각의 줄을 시작과 끝으로 보겠다
 
// 이스케이프 문자(Escape Character)란 \(백슬래쉬) 기호를 통해 
// 본래의 기능에서 벗어나 상태가 바뀌는 문자를 말합니다.
// . 문자는 명령으로 동작이 됨, 명령으로 동작하기 않게 하기 위해 \. 이스케이프 앞에 붙여줌

// console.log(str.match(/https?/gi))

// console.log(str.match(/d{2}/))
// console.log(str.match(/dd{2}/))
// console.log(str.match(/d{2}/g))
// console.log(str.match(/dd{2}/g))
// console.log(str.match(/d{2,}/g))
// console.log(str.match(/d{2,3}/g))
// console.log(str.match(/\w{2,3}/g))  // \w 숫자/문자
// console.log(str.match(/\b\w{2,3}\b/g))   //  \b 경계( 숫자와 문자가 아닌 ) 를 만들어 


// console.log(str.match(/\bf\w{1,}\b/g))  // f로 시작하는 모든 영단어
// console.log(str.match(/\d{1,}/g))  // 숫자 덩어리


// const str2 = ` the hello  world   !

// `
// console.log(str2.replace(/\s/g, ''))

console.log(str.match(/.{1,}(?=@)/g))
console.log(str.match(/(?<=@).{1,}/g))
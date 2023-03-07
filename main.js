// Lesson 1
/*  Variable
// Có thể sử dụng ';' hoặc không có cũng được
var fullName = 'Tran Minh Chien';
var age = 26;
// Sự khác nhau của sử dụng và không sử dụng ';' : 
        // Sử dụng : Không thể viết liền nhau giữa 2 dòng lệnh
        // Không sử dụng : Viết liền cùng dấu ';'
alert(fullName);
alert(age);
*/

// Lesson 2
/*  Built-in
1. Alert
    - Hiển thị thông báo trên thanh hộp thoại
2. Console
    - In ra dòng thông báo bên tab console
 
var name = 'Tran Minh Chien';
console.log('Notice log')
Có thể đưa biến vào trong console

3. Confirm
    -  Xác nhận
confirm('Confirmation of age');

4. Prompt
    - Có ô input xuất hiện trên thanh hộp thoại
prompt('Confirmation of age');

5. Set timeout
    - CHo đoạn code được chạy theo một khoảng thời gian ( Tính theo milisecond )
setTimeout(function() {
    alert('Notice')
}, 1000 )

6. Set interval
    - Cho đoạn code chạy theo định kì ( Theo số second đã cho )
setInterval(function() {
    alert('Notice')
}, 1000 )    

setInterval(function() {
    console.log('Notice' + Math.random())
}, 1000 )
*/

// Lesson 3
/*  Operator
1. Toán tử số học - Arithmetic
var a = 5/2; => 2.5 (Số nguyên)
console.log(a);
var a = 5%2; => 1 (Số dư)
console.log(a);

var age = 20
var nextAge = age
nextAge++
console.log(nextAge)

2. Toán tử gán - Assignment
var fullName = 'Tran Minh Chien';

3. Toán tử so sánh - Comparison
var a = 1;
var b = 3;
    if(a>b) {
        alert("Right");
    } else {
        alert("Wrong")
    }

4. Toán tử logic - Logical
var a = 2;
var b = 3;
    if(a>1 && b>2) {
        alert("Right");
    } else {
        alert("Wrong")
    }

-   && : AND
-   || : OR
-   ! : NOT
-   !! : YES

*/

// Lesson 4
/** Data type
    Function
var myFunction = function(){
    alert("Xin chao!");
} 

    Object
---- Sử dụng (typeof <value>) : để nhìn được giá trị 

- Object types    
var myObject = {
    name: 'Chien', // Key: <Value>
    age: 19
}    
- Object arrays
var myArray = [
    'Javascript',
    'PHP'
]
*/

// Tham số
/* 
1. Tham số
    -   Định nghĩa
    -   Kiểu dữ liệu
    -   Tính private
    -   1 tham số
    -   Nhiều tham số

function wirteLog(message){
    console.log(message) // Tham só (message)
}
wirteLog("test") // Đối số

2. Truyền tham số
    -   1 tham số
    -   Nhiều tham số

3. Arguments
    -   Đối tượng arguments
 function wirteLog(){
    console.log(arguments) // Tham só (message)
}
wirteLog("test") // Đối số

    -   Giới thiệu for of

function wirteLog(){
    var myString = ''
    for(var param of arguments){
         myString += `${param} - ` // Thêm dấu gạch ngang
    }
    console.log(myString)
}
wirteLog("test") // Đối số
*/

// Lesson 5
/*  String
    var myString = 'Dang hoc bai'
1. Length of the string
    console.log(myString.length) // Chiều dài của chuỗi
2. Find index
// IndexOf
    console.log(myString.indexOf('a') // Tìm kí tự trong chuỗi 
    console.log(myString.indexOf('a', 1) // Tìm kí tự trong chuỗi sau kí tự đã thấy đầu tiên
// lastIndexOf    
    console.log(myString.lastIndexOf('a') // Tìm kí tự cuối cùng
// Search
    console.log(myString.search('a') // Tìm kí tự đầu tiên trong chuỗi
3. Cut string (Cắt từ trái sáng phải hoặc từ phải sang trái)
    console.log(myString.slice(4, 6)) // Cắt kí tự từ 4 -> 6
OR  slice(4) // Cắt kí từ từ 4 -> hết 
4. Replace
    console.log(myString.replace('a', 'o') // Đổi kí từ đầu tiên
    console.log(myString.replace(/a/g, 'o') // Đổi tất cả kí tự đó
5. Convert to upper case (Viết hoa)
    console.log(myString.toUpperCase())
6. Convert to lower case (Viết thường)
    console.log(myString.toLowerCase())
7. Trim (Loại bỏ khoảng trắng)
    console.log(myString.trim())
8. Split (Cắt 1 chuỗi thành 1 array)
    var language = 'Javascript, PHP, Rubi'
    console.log(language.split(', ')) // Lấy điểm chung 
9. Get a character by index (Lấy 1 kí tự)
    const myString2 = 'Chien Tran';
    console.log(myString2.charAt(0))
 */

// String
/*
 1. Tạo chuỗi
var fullName = 'Minh Chien'
    or
var fullName = new String('Minh Chien')

 */

// Array
/*
    -   Kiểm tra biến có phải Array
        var languages = [
            'Javascript',
            'Dart', 
            'Ruby'
        ]
        console.log(Array.isArray(languages))
        console.log(languages.length) // Độ dài của mảng
        console.log(languages[0]) // Lấy phần tử theo index

    -   Làm việc với Array
var languages = [
    'Javascript',
    'Dart', 
    'Ruby'
]
var languages2 = [
    'Java',
    'PHP'
]    
        1. To string
            console.log(languages.toString()) // Chuyển Array sang chuỗi 
        2. Join
            console.log(languages.join('-')) // Chuyển Array sang chuỗi có dấu ngăn cách
        3. Pop
            console.log(languages.pop()) // Xóa đi phần tử cuối mảng và trả phần tử đã xóa. Khi xóa đi hết các phần tử mà vẫn xóa tiếp sẽ xuất hiện Undifined
        4. Push
            console.log(languages.push('PHP')) // Thêm phần tử vào cuối mảng
        5. Shift
            console.log(languages.shift()) // Xóa đi phần tử ở đầu mảng và trả về giá trị đó. Khi xóa đi hết các phần tử mà vẫn xóa tiếp sẽ xuất hiện Undifined
        6. unshift
            console.log(languages.unshift('PHP')) // Thêm phần tử vào đầu mảng
        7. Splicing
            languages.splice(1, 2, 'PHP') // Xóa, cắt và chèn phàn tử vào mảng
                 // '1' Đặt con trỏ vào vị trí trong mảng, '2' Xóa đi phần tử từ con trỏ đến số được đánh dấu trong mảng
                 // Muốn không xóa đi sẽ nhâp vào '0'
                 // Chèn thêm phần tử vào vị trí số 1 và xóa đi vị trí từ 1 -> 2. Có thể thêm được nhiều phần tử từ tham số thứ 3
        8. Concat
            console.log(languages.concat(languages2)) // Hợp nhât 2 mảng lại với nhau
        9. Slicing
            console.log(languages.slice(1, 2)) // Cắt các phần tử trong mảng    
                 // Cắt hết mảng chỉ lấy từ số 1
                 // Hoặc cắt theo vị trí bắt đầu và kết thúc
            console.log(languages.slice(-2, -1)) // Có thể lấy ngược lại được

*/

// Object 
/*
    // Create a new object
        var myInfo = {
    name: 'Chien Tran',
    // key: value
    age: 19,
    address: 'Suoi Quyt',
    getName: function() {
        return this.name   // this.name = myInfo.name
    }
} // Cách tạo 1 Object
// Thêm phần tử và xóa
    myInfo.email = 'tranminhchien15052003@gmail.com' // Cách thêm 1 phần tử vào cái Object
    delete myInfo.address // Xóa 
// Lấy biến ngoài object
    var myKey = 'address'
    console.log(myInfo[myKey]) // Cách 2 : Lấy biến ngoài giá trị object sử dụng []
// Sử dụng get
    console.log(myInfo.getName())
// Gọi function trong cái getName và trả về myInfo

// Function --> phương thức / method
// Others --> thuộc tính / property

3. Object prototype - Basic
        User.prototype.className = 'Hoc' // Thêm thuộc tính vào lớp Structor
        User.prototype.className = function(){
            return this.className   /   return `${this.firstName} ${this.lastName}`
            
        }

    4. Date
        var date = new Date() // Thêm new để thành Object'
        var year = date.getFullYear()
        var month = date.getMonth() + 1 // Tính từ 0 -> 11 => +1 
        var day = date.getDay()
        console.log(`${day}/${month}/${year}`)  

    5. Math object // Không phải Constructor
    -   Math.PI
        console.log(Math.PI) // Trả về PI
    -   Math.round()    // Làm tròn số gần nhất
        console.log(Math.round( <value> ))
    -   Math.abs()  // Trị tuyệt đối
        console.log(Math.abs( <value> ))
    -   Math.ceil() // Làm tròn lớn
        console.log(Math.ceil( <value> ))
    -   Math.floor()    // Làm tròn nhỏ
        console.log(Math.floor( <value> ))
    -   Math.random()
        console.log(Math.random() * 100) // 100 số

        var random = Math.floor(Math.random() * 5)
var bonus = [
    '1 dong',
    '2 dong',
    '3 dong',
    '4 dong',
    '5 dong',
]
console.log(bonus[random])
    -   Math.min()  // Số nhỏ nhất
        console.log(Math.min(1,2 ,3 ,4 ))
    -   Math.max()  // Số lớn nhất
        console.log(Math.max(1,2 ,3 ,4 ))
*/

// if else
/*
    var course = {
    name: 'Course',
    coin: 250
}
// if(course.coin > 0){
//     console.log(`${course.coin} Coins`)
// } else {
//     console.log('Free')
// }

// or
    var result = course.coin > 0 ? `${course.coin} Coins` : 'Free'
        // '?': Ngăn cách vế thứ nhất với vế thứ 2, ':' : Ngăn cách vế thứ 2 với thứ 3
    console.log(result)
*/

// Bai tap
/* // Max
function max(){
    let a = 1, b = 2, c = 3
if(a > b && a > c) {
    console.log(`So lon nhat la : ${a}`)
} else if(b > a && b > c) {
    console.log(`So lon nhat la : ${b}`)
} else {
    console.log(`So lon nhat la : ${c}`)
}
}
console.log(max())

// Số chênh lệch, sử dụng abs
function difference() {
    let a = 100, b = 33
    let result = Math.abs(a - b)
     
a > b ?  console.log(`Chenh lech la : ${result}`) : console.log(`Chenh lech la : ${result}`)
}
console.log(difference())

//  Nếu {a=0 && b=0  thì phương trình (1)

//     có vô số nghiệm
    
//     + Nếu {a=0 && b≠0
//       thì phương trình (1) vô nghiệm 
function equation() {
    let a = 14, b = -12;
    if(a == 0 && b == 0) {
        console.log('Vo so nghiem')
    } else if (a != 0 && b == 0) {
        console.log('Phuong trinh co nghiem x = 0')
    } else if (a == 0 && b != 0) {
        console.log('Vo nghiem')
    } else {
        console.log(`Phuong trinh co nghiem x = ${-b/a}`)
    }

}
console.log(equation())

//   Kiem tra nam nhuan
//     Xét 2 trường hợp
//         1. Chia hết cho 400 (Do 400 năm là có 25 năm nhuận)
//         2. Chia hết cho 4 và chia cho 100 có dư (400 năm có 97 năm nhuận != 100 năm nhuận) 
function leapYear(){
    let year = 2023
    year % 400 === 0 && year % 4 === 0 || year % 100 !== 0 && year % 400 !== 0
 ? console.log(`Nam ${year} la nam nhuan`): console.log(`Nam ${year} khong phai la nam nhuan`)

}
console.log(leapYear())

// Dem ngay trong thang, nam
function day() {
    let month = 11
    let year = 2014
    if (month < 1 || month > 12) {
        console.log('Loi')
    } else {
        console.log('Hop le')
    }
    year < 0 ? 'Loi' : 'Hop le'
    
    switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
         	console.log('Co 31 ngay')
            break
        case 4:    
        case 6:          
        case 9:        
        case 11:
            console.log('Co 30 ngay')
        	break
        case 2:
            if(year & 400 == 0 || year % 100 != 0 && year % 4 == 0){
                console.log('Co 29 ngay')
            } else {
                console.log('Co 28 ngay')
            }
               
    }
}
console.log(day())
// Kiểm tra số nguyên tố
function prime(){
    // Tạo biến flag = true : Là số nguyên tố thì true còn không thì false
    let flag = true
    let n = 14
    if (n < 2) {
        flag = false
    } else {
        for(let i = 2; i < n; i++){
            if(n % i == 0){
                flag = false
                break
            }
        }
    }
    if(flag == true) {
        console.log(n +  ' la so nguyen to')
    } else {
        console.log(n + ' khong phai so nguyen to')
    }
}
console.log(prime())

// UCLN
function hcf(){
    let a = 102
    let b = 36
    while(a != b){ // a != b
        if(a > b){
            a -= b // 102 - 36 = 66 - 36(b) = 30 
                   // --> Xét điều kiện 2 vì lúc này a < b (30 < 36)
        } else {
            b -= a // Xét tiếp đk trên
                   // 36 - 30 = 6 --> Kết quả là 6
        }
            // Do vòng loop While chỉ lặp 1 lần câu lệnh if -> là 6
    }
    console.log(`HCF is ${a}`)
}
console.log(hcf())

// Liệt kê các ước số
function UCLN() {
    let n = 8
    if (n == 0) {
        console.log('Loi')
    } else {
        if(n < 0) {
            n *= -1 // Luôn chuyển sang dương
        }
            // Gán giá trị i = n, xét i > 0 và i sẽ giảm dần
        for (let i = n; i > 0; i--){ 
            // Điều kiện ra UCLN : n chia i = dư 0
            // -> Liệt kê được ra các ước số
            if (n % i == 0){
                console.log(`UCLN ${i}`)
            }          
        } 
    }
}
console.log(UCLN())
*/

// Array method
/*  
    let courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 100
    },
    {
        id: 2,
        name: 'Java',
        coin: 200
    },
    {
        id: 3,
        name: 'Dart',
        coin: 300
    }
]
-    forEach() : Sử dụng để duyệt qua từng phần tử của mảng
    courses.forEach(function(course, index){
    console.log(index, course)
}) // call back
-    every() : Giúp kiểm tra các phần tử của mảng phải thỏa mãn gì đó
    let isFree = courses.every(function(course, index){
    return course.coin == 0 
// Kiểm tra từng điều kiện -> đúng thi tiếp còn sai thì trả về false và ngừng kiểm tra
})
console.log(isFree)
-    some() : Chỉ cần 1 điều kiện đúng là dừng kiểm tra
-    find() : Kiểm tra phần tử có hay không và khi thỏa mãn sẽ ngừng, chỉ tìm được 1 đối tương
    let course = courses.find(function(course, index){
    return course.coin == 'Dart' 
})
console.log(courses)
-    filter() : Kiểm tra phần tử giống find, nhưng tìm kiếm qua danh sách và được trùng tên
-    map()
-    reduce()
*/

// Array map() method : Gọi các element trong mảng
/* function courseHadler(course, index){
    // Sử dụng 2 tham số 
   // console.log(course)
    return { // return lại giá trị gì thì map() nó sẽ nhận giá trị đó và in ra
        id: course.id,
        name: `Khoa hoc : ${course.name}`,
        coin: course.coin,
        coinText: ` Gia: ${course.coin}`, 
        // Khi là ký tự thì sử dụng ${}
        index: index,
    }
    // Trả về 1 mảng mới
    return course.name // Hiển thị tên trong mảng

    // Trả về thẻ h2
    return `<h2>${course.name}<h2>`
}
let newCourses = courses.map(courseHadler) 
// Truyền function vào cái map()
// Kiểm tra từng elment và sẽ nhận được tham số
// 
console.log(newCourses) 
// Trả về đúng các phần tử trong mảng nhưng là undifined
console.log(newCourses.join(''))
// Chuyển từ mảng về chuỗi
 */


// Array reduce() method : Muốn nhận về 1 giá trị duy nhất
/* 
let courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 100,
    },
    {
        id: 2,
        name: 'Java',
        coin: 200,
    },
    {
        id: 3,
        name: 'Dart',
        coin: 300
    }
]
let i = 0
function coinHandler(accumulator, currentValue, currentIndex, originArray){
 // accumulator : là biến lưu trữ   
 // currentValue : trả giá trị theo thứ tự
    i++
    let total = accumulator + currentValue.coin
    console.table({
        'Lượt chạy: ' : i,
        'Bien tich tru ': accumulator,
        'Gia khoa hoc ': currentValue,
        'Tich tru duoc ': total
    })
    return total
}

let totalCoin = courses.reduce(coinHandler, 0) // Số 0 là gía trị khởi tạo và là biến lưu trữ đầu tiên
// nhận 2 đối số vào : 1. là function, 2. là số (0;1;2;...;n)
console.log(totalCoin)
// C2
let totalCoin = courses.reduce(function(accumulator, currentValue){
    return accumulator + currentValue.coin
})
console.log(totalCoin) 

let totalCoin = courses.reduce(function(total, course){
    return total + course.coin
}, 0) // initial value : có hay không đều được
// initial value : Sẽ cùng kiểu dữ liệu với tham số
console.log(totalCoin)

            -      Cấu truc reduce
                        let frameWork = variable.reduce(function(call back, initial value, index, Array))
tíc
                    -   Khi reduce không truyền initial value thì biến tích trứ sẽ là phần tử đầu tiên của mảng
    -   Giải thích reduce
        const numbers = [1,2,3,4,5]
        const result = numbers.reduce(function(total, number){
        1.    return total + number   ->  result = 15
        2.   return total + number    -> Cho call back là 10 -> result = 25
        }, 10)
*/




// Ví dụ reduce()
/* 
var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
    }
  ];

function calculateRating(watchList){
    // Sử dụng filter để lấy danh sách phim 
    let filterFilm = watchList.filter(function(director){
        return director.Director == 'Christopher Nolan'
    })
    // Sử dụng reduce() để tính imdbRating 
    let result = filterFilm.reduce(function(imdb, list){
        return imdb + Number(list.imdbRating)
    }, 0) // Nếu trả về mảng thì đổi 0 -> []
    let IMDB = result/filterFilm.length
    return IMDB
}
  // Tính điểm trung bình IMDB của Christopher Nolan
 
  // Expected results
  console.log(calculateRating(watchList)); // Output: 8.675

  


let glass = [
    {
        "name": "LV luxury",
        "color": "brown",
        "size": "medium",
        "price": 100
    },
    {
        "name": "LV luxury",
        "color": "yellow",
        "size": "mini",
        "price": 200
    },
    {
        "name": "DIOR luxury",
        "color": "brown",
        "size": "medium",
        "price": 500
    }
];

const newPrice = glass.reduce((acc, cur) => {
    return acc + cur.price
}, 0)
console.log(newPrice)

const newName = glass.reduce((acc, cur) => {
    return acc.name = "LV"
}, {})
console.log(newName)

const pricestGlass = glass.reduce((acc, cur) => {
    if (cur.price > acc){
        return cur.price;
    } 
    return acc
}, 0)
console.log(pricestGlass)

const newGlass = glass.reduce((acc, cur) => { // acc: accumalator, currentValue
    const Color = cur.color;
    if(acc[Color]){
        acc[Color]++;
    } else {
        acc[Color] = 1;
    }
    return acc;
}, {}) // Do là kí tự nên inital value là {}
console.log(newGlass)

const numbers = [3,4,5,3,2,4];
const sum = numbers.reduce((acc, cur) => {
    return acc + cur
}, 0)
console.log(sum)

const output = glass.reduce((acc, cur, index, arr) => {
    const split = cur.name.split(" ");
    let part = `${split[0][0]}${split[1][0]}`
    // Bắt đầu cắt từ mảng [0] và vị trí giới hạn là [0]

    if(index === arr.length - 1){
        // Cuối mảng thêm dấu "."
        part += ".";
    } else {
        part += ", ";
    }
    return acc + part
}, "")
console.log(output)
 */

// Callback
/* function myFunction(param){
    if(typeof param === 'function'){ // Sử dụng if để chuẩn 
        param('Hoc lap trinh') // Sử dụng callback
    }
   
}
function myCallback(value){
    console.log('Value: ', value)
} 
console.log(myFunction(myCallback)) // Gọi mycallback trong mỳunction 
*/

// forEach, find, filter, some, every, reduce

// forEach : duyệt phần tử của mảng
let courses = [
    'Javascript',
    'PHP',
    'Dart'
]

Array.prototype.forEach2 = function(cb){
    for (let index in this){
        if(this.hasOwnProperty(index)){
            cb(this[index], index, this)
        }
    }
}

courses.push('Ruby', 'Java')

courses.forEach2((course, index, array) => {
    console.log(course, index, array)
})

// Filter() : tìm 
let newCourses = [
    {
        name: 'Java',
        coin: 300,
        isFinish: true
    }, 
    {
        name: 'Ruby',
        coin: 600,
        isFinish: false
    }
]

Array.prototype.filter2 = function(cb){
    let output = []
    for(let index in this){
        if(this.hasOwnProperty(index)){
           let result = cb(this[index], index, this)
            if(result){
                output.push(this[index])
            }
        }
    }
    return output
}

let filterCourse = newCourses.filter2((course, index, array) => {
    return course.coin > 500
})
console.log(filterCourse)

// some() : giá trị boolean
Array.prototype.some2 = function(cb){
    for(let index in this){ // this = array 
        if(this.hasOwnProperty(index)){
            if(cb(this[index], index, this)){
                return true
            }
        }
    }
    return false
}

let someCourses = newCourses.some2((course, index, array) => {
    return course.isFinish
})
console.log(someCourses)

// every() : kiểm tra các phần tử của mảng thỏa mãn gì đó và trả về boolean

Array.prototype.every2 = function(cb){
    let output = true
    for(let index in this){
        if(this.hasOwnProperty(index)){
            let result = cb(this[index], index, this)
            if(!result){
                output = false
                break
            }
        }
    }
    return output
}


let everyCourses = newCourses.every2((course, index, array) => {
    return course.isFinish //  or so sanh === true or === false
    //return course.coin > 299
})
console.log(everyCourses)
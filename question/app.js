// ・・・・・ section 5 ・・・・・

// Q1 変数
let nickname = 'はごっしー';
let age = 28;

console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');


// Q2 配列
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
console.log('私の好きな言語は' + languages[0] + 'です。' + '次は' + languages[3] + 'を勉強してみたいです。');


// Q3 オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);


// Q4 配列 × オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);


// Q5 四則演算
let totalAge = playerList[0].age + playerList[1].age + playerList[2].age; // 26 + 33 + 22 = 81
let averageAge = totalAge / 3; // 81 / 3 = 27
console.log(averageAge);


// Q6 関数
function sayHello() {
  console.log('Hello');
}
sayHello(); // 無名関数 //呼ぶ


// Q7 メソッド
user.birthday = '2000-09-27'; // userという変数に、birthdayというプロパティを追加
console.log(user.birthday); // 出力「2000-09-27」

user.sayHello = function () { //userという変数に、 sayHelloという変数を追加して、無名関数を代入 // 名前のない関数（無名関数）を使用
  console.log('Hello!'); // 出力「Hello!」
};

user.sayHello(); //メソッドを実行する

// Q3
// let user = {
//   name: 'John',
//   age: 26,
//   bloodType: 'A',
//   favorite: 'card',
// };


// Q8 引数
// 「和」は加法 （足し算）の結果
// 「差」は減法 （引き算）の結果
// 「積」は乗法 （掛け算）の結果
// 「商」は除法 （割り算）の結果


let calc = {}; //何も入ってない空のオブジェクト(変数)

calc.add = function (x, y) { // 2. x , y が、3 と 4 を受け取る
  console.log(x + y); // 3 + 4 = 7 答えを出力
}
calc.add(3, 4); // 1. xには3を、yには4を渡す


calc.subtract = function (x, y) {
  console.log(x - y); // 10
}
calc.subtract(15, 5);


calc.multiply = function (x, y) {
  console.log(x * y); // 49
}
calc.multiply(7, 7);


calc.divide = function (x, y) {
  console.log(x / y); // 5
}
calc.divide(25, 5);


// Q9 返り値
function remainder(x, y) {
  let answer = x % y;
  return answer;
}
let answer = remainder(5, 3);

console.log(5 + 'を' + 3 + 'で割った余りは' + answer + 'です')


// Q10 スコープ

let x = 1;
function foo() {
  // let x = 1;
  console.log(foo);
}
console.log(x);

// 回答
// なぜ、x is not definedというエラーが出力されるのかというと、
// 今回、ｘの変数の定義が行われているのは、foo関数の中で定義が行われているので、
// 関数内でしか参照できないローカル変数の処理の書き方をされている。

// そのため、{}の外から値を渡そうとしても、関数外のスコープは有効にならない(渡せない)ため、
// エラーとなってしまう。





// ・・・・・ section 6 ・・・・・

// Q1 標準組み込みオブジェクト
let random = Math.random(); // 0 ～ 9までの乱数の生成(デフォルトで提供する便利なデータ型がランダムな数字を作成している)
console.log(random); // ランダムな数字を表示


// Q2 コールバック関数
function callback() {
  console.log('Hello World!');
}
setTimeout(callback, 3000); //setTimeoutは一定時間後に特定の処理を行うときに使う


// Q3 if
let num = 0;

if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else if (num === 0) {
  console.log('num is 0');
}


// Q4 for
let numbers = [];

for (let i = 0; i <= 99; i++) {
  numbers.push(i); //pushで配列の中に渡す
}
console.log(numbers);


// Q5 for × if
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) { // .lengthは、繰り返す配列の長さを指示している
  let number = mixed[i]; // １つ１つの配列の値をNumberに渡す(mixed[i])
  
  let type = typeof number; //typeofはどのデータ型なのか判断してくれる。今回は文字列かどうか判断してる。

  if (type === 'number') { //もしも、データ型が 数値型なら...
    if (number % 2 === 0) {
      console.log('even'); // 偶数なら「even」
    } else {
      console.log('odd'); // 奇数なら「odd」
    }
  } else { //もしも、数値型ではなかったら...
      console.log('not number')
    }
  }

// Number であり偶数の時は even
// Number であり奇数の時は odd
// Number 以外の時は not number
// ・・・・・ section 5 ・・・・・

// Q1 変数
let nickname = 'ごっしー';
let age = 28;

console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');


// Q2 配列
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go']; // ランゲージに5つの値を持つ配列を代入
console.log('私の好きな言語は' + languages[0] + 'です。' + '次は' + languages[3] + 'を勉強してみたいです。');
// 出力:私の好きな言語はJavaScriptです。次はPythonを勉強してみたいです。


// Q3 オブジェクト
let user = {
  name: 'John', // キー: バリュー
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

// 配列の中にオブジェクトを作ることで、データをわかりやすく整理して保管でき、操作も簡単になります。
// これは、複雑なデータを扱う際にとても役立ちます。


// Q5 四則演算 //q4の配列+オブジェクト
let totalAge = 0; // 初期値を設定(余計な値が入らないようにする。)

playerList.forEach(function(player) {
  totalAge += player.age; // 初期値 + それぞれのオブジェクトの値
});

let averageAge = totalAge / playerList.length; // 81 / 3 平均年齢を計算 .length(レングス)は配列の長さ、3を取得

console.log(averageAge); // 27

// Q6 関数
function sayHello() { // 関数宣言をした (処理は開始しない)
  console.log('Hello');
}
sayHello(); // 関数を呼ぶ → 呼ぶことで関数宣言をした場所の実行


// Q7 メソッド
user.birthday = '2000-09-27'; // user というオブジェクトに、birthdayというプロパティを追加した
console.log(user.birthday); // 出力「2000-09-27」

user.sayHello = function () { // user というオブジェクトに、 sayHelloという関数を追加した // 名前のない関数（無名関数）を使用
  console.log('Hello!'); // sayHello関数は「Hello!」を出力する。
};
user.sayHello(); //メソッドを呼び出して、処理を実行させている。

// Q3
// let user = {
//   name: 'John',
//   age: 26,
//   bloodType: 'A',
//   favorite: 'card',
//   birthday: '2000-09-27'; ※追加
//   sayHello: function () { ※追加
//     console.log('Hello!');
//  }
// };


// Q8 引数
// 「和」は加法 （足し算）の結果
// 「差」は減法 （引き算）の結果
// 「積」は乗法 （掛け算）の結果
// 「商」は除法 （割り算）の結果


let calc = {}; //1. let calc = {}; は calc(カルク) という変数に、空のオブジェクト {} を代入しています。

calc.add = function (x, y) { // 4. x , y が、3 と 4 を受け取る //2. calc オブジェクトに add メソッドを追加する
  console.log(x + y); //5. 3 + 4 = 7 答えを出力
}
calc.add(3, 4); //3. add メソッドを呼び出す //xには3を、yには4を渡す


calc.subtract = function (x, y) { //1
  console.log(x - y); // 10  //3
}
calc.subtract(15, 5); //2


calc.multiply = function (x, y) {
  console.log(x * y); // 49
}
calc.multiply(7, 7);


calc.divide = function (x, y) {
  console.log(x / y); // 5
}
calc.divide(25, 5);

// ※clacという空のオブジェクトの中に、add,subtract(サブストラクト),multiply(マルティプライ),divide(ディバイド)
//   という四則演算の処理が書かれたメソッドを追加して、出力している。


// Q9 返り値
function remainder(x, y) { //2 //関数宣言
  let answer = x % y; //3  A.２
  return answer; //4 //実行もとに返す
}
let answer = remainder(5, 3); //1. remainder関数を呼び出す //5 実行もとに返ってくる

console.log(5 + 'を' + 3 + 'で割った余りは' + answer + 'です') //6. 5を3で割った余りは2です


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
//上で定義した関数ごと、setTimeoutに渡されて、渡されてから3秒後に関数の処理が実行される


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
  let number = mixed[i]; // １つ１つの配列の値をNumberに渡す(mixed[i]) // ミクスト.レングス
  
  let type = typeof number; //typeofはどのデータ型なのか判断してくれる。今回は文字列かどうか判断してる。

  if (type === 'number') { //もしも、データ型が 数値型なら...
    if (number % 2 === 0) {
      console.log('even'); // Number(数値型) であり偶数の時は even
    } else {
      console.log('odd'); // Number(数値型) であり奇数の時は odd
    }
  } else { // Number(数値型) 以外の時は not number
      console.log('not number')
    }
  }

  // typeofの結果は常に文字列だから、
  // type === 'number'のように比較する場合は、クォートを付けて文字列として扱う必要がある。
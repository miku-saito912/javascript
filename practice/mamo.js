console.log('Hello World!');

console.log('1つ目の値', '2つ目の値');

let text = 'JavaScriptの練習';
console.log(text);

text = 'JavaScriptをマスターした';
console.log(text);

let longText ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);

console.log(23);

let age = 23;
console.log(age);

let testText;
console.log(testText);

let again = '定義しました';
again = '再代入はできます';

// let again = '再定義します';(変数は再定義は出来ない)

const constant = 'これは定数です';
console.log(constant);
// constant = '再代入できません。'; (定数は再代入できない)

let string = 'JavaScriptの練習';
console.log(string);



// ・・・・・・ データ型について ・・・・・・

// 文字列型(string 型)(ストリング)
// 数値型(number 型)(アンバー)
// 配列型(array 型)(アレイ)
// オブジェクト型(object 型)(オブジェクト)

// ・・・・

// 文字列型(string 型)(ストリング)
// 名前の通り、文字列を扱うためのデータ型です。

// 文字列型だということを表現するためには、
// ''（シングルクォート）か""（ダブルクォート）で囲ってあげる必要があります。

let single = '文字列型です';
console.log(single);

let double = '英語だとstringといいます。';
console.log(double);

let name = 'ジョニー';
let greet = '私は' + name + '！';
console.log(greet);


let template = 'テンプレートリテラル'; // ※ これは文字列

let templateText = `これが${template}です。
${template}は改行もできます。`; // これはテンプレートリテラル
console.log(templateText);

// 「これがテンプレートリテラルです。
// テンプレートリテラルは改行もできます。」


// ・・・・


// 数値型(number 型)(アンバー)

// 数値型について学んでいきましょう。
// こちらも名前の通り、数字を扱うデータ型となります。

let num = 10;
console.log(num);

let numTen = 10; // (数値型)
let strTen = '10'; // (文字列型)
console.log(numTen, strTen);

// 整数以外に小数やマイナスの値も数値型には含まれます。
let minus = -10;
let decimal = 1.1;
console.log(minus, decimal);


// 加算（足し算）
let num1 = 25;
let num2 = 2;

console.log(num1 + num2);

// 減算（引き算）
let num3 = 25;
let num4 = 2;

console.log(num1 - num2); // - に変更

// 乗算（掛け算）
let num5 = 25;
let num6 = 2;

console.log(num1 * num2); // * に変更

// 除算（割り算）
let num7 = 25;
let num8 = 2;

console.log(num1 / num2); // / に変更

// 上記の四則演算は省略して書くことが出来る
// let number = 5;
// number += 3; // number = number + 3と同じ
// console.log(number);

// number -= 1; // number = number - 1と同じ
// console.log(number);

// number *= 5; // number = number * 5と同じ
// console.log(number);

// number /= 7; // number = number / 7と同じ
// console.log(number);


// インクリメント（1 を足す）
let increment = 0;
console.log(increment); // 0
increment++; // increment += 1と同じ
console.log(increment); // 1

// デクリメント（1 を引く）
let decrement = 10;
console.log(decrement); // 10
decrement--; // decrement -= 1と同じ
console.log(decrement); // 9


// 剰余（割った余り）

let bigNum1 = 25;
let smallNum1 = 2;

console.log(bigNum1 % smallNum1); // 25 / 2 = 12 あまり 1 なので1が表示される


// 累乗

let bigNum2 = 25;
let smallNum2 = 2;

// 以下を変更
console.log(bigNum2 ** smallNum2); // 25の2乗なので、25 * 25となり、625が表示される



// ・・・・


// 配列型(array 型)(アレイ)

// JS を使って複数のユーザーの名前を保持したい場合、下記のようにいくつも変数を定義するのは非常に手間です。

let name1 = 'John';
let name2 = 'Bob';
let name3 = 'Michael';
let name4 = 'Emma';
console.log(name1, name2, name3, name4);

// そんな時に便利なのが配列です(下記)

let names = ['John', 'Bob', 'Michael', 'Emma']; // 0,1,2,3
console.log(names);

// ちなみに、下記のように空の配列を定義することもできます。

let empties = []; // 空の配列が変数emptiesに代入されている



let names2 = ['John', 'Bob', 'Michael', 'Emma'];

console.log('names[0] => ', names2[0]);
console.log('names[1] => ', names2[1]);
console.log('names[2] => ', names2[2]);
console.log('names[3] => ', names2[3]);
console.log('names.length => ', names2.length); //配列の数は length プロパティで取得(今回は0,1,2,3 と合計4なので、4という数が取得できる)
// この配列の順番のことを インデックス と呼びます。


// また、空の配列を定義したあとに、値を追加することもできます(追加と定義を一緒に行ってる)

let emptyNames = [];

emptyNames[0] = 'John';
emptyNames[1] = 'Bob';
emptyNames[2] = 'Michael';
emptyNames[3] = 'Emma';
console.log(emptyNames, emptyNames.length);


// ・・・・


// オブジェクト型(object 型)(オブジェクト)

let John1 = ['John', '26', 'A', 'card'];
console.log(John1);


// オブジェクトというデータ型(配列の中にいろんな種類が入っているときに区別化させたりできるのが、オブジェクトというデータ型)
let John2 = {
  name: 'John', // key（キー）: value（バリュー）
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
// console.log(John2);
console.log(John2.bloodType); // A と表示

// また、空の配列を定義したあとに、値を追加することもできます(追加と定義を一緒に行ってる)
// let Andy = {};

// Andy.name = 'Andy';
// Andy.age = 19;
// Andy.bloodType = 'B';
// Andy.favorite = 'sweets';


// ・・・・


//　配列とオブジェクトの使い分け

// 配列...　同じジャンルのものをまとめる
// オブジェクト...　オブジェクトは同じモノのそれぞれの属性をまとめる

let fruits = ['apple', 'banana', 'grape']; // 配列(果物の種類)

let apple = { // オブジェクト(一つの果物の特徴)
  color: 'red',
  shape: 'round',
  taste: 'wonderful',
};

// 配列の中にオブジェクトを入れることもできます
let vehicles = [
  { name: 'car', color: 'red', speed: 'normal' }, // name, color, speed
  { name: 'train', color: 'green', speed: 'fast' },
  { name: 'airplane', color: 'grey', speed: 'faster' },
];
console.log(vehicles);



// ・・・・


// プログラミングではデータの型によって使用できる操作が異なります。

// 文字列なら、他の文字列と結合して画面に出力できます
// 数値なら、その数値を使って計算ができます。
// 配列なら、[]を使って値を取り出したりすることができます。

// オブジェクトなら、. を使ってプロパティの値（value）を取り出すことができます。
// (例)
// let person = {
// name: 'John',
// age: 30,
// city: 'Tokyo'
// };
// console.log(person.age);


let one = '1';
let two = 2;

console.log('one →', typeof one, one); // one → string 1
console.log('two →', typeof two, two); // one → number 2
// typeof one はデータ型を表示してくれる(string,number)








// ・・・・・・・・　関数(section 3)　・・・・・・・・

let radius = 2;
let circle = radius * radius * 3.14; // 2 * 2 * 3.14 (半径×半径×3.14《円周率》）
console.log('円の面積は' + circle + 'です'); //円の面積は12.56です


// 関数の定義
// function 関数名() {
// 処理の内容
// }

// 関数を定義しただけでは処理は動かないので、
// 使うためには関数を呼び出してあげる必要があります。


function getArea() {
  let radius = 2;
  let circle = radius * radius * 3.14;
  console.log('円の面積は' + circle + 'です');
}

getArea();  // ←これが関数の呼び出し(関数名の直後に()を付けることで関数を呼び出す)
// 円の面積は12.56です

// 処理の順番としては...
// 1. getArea();
// 2. function getArea() {}


function getArea() {
  let radius = 2;
  let circle = radius * radius * 3.14;
  console.log('円の面積は' + circle + 'ですaaaa');
}

getArea(); // 円の面積は12.56です
getArea(); // 上記と同じ処理
getArea(); // 上上記と同じ処理




// ・・・・・・・・　引数(section 3)　・・・・・・・・

function getArea2() {
  let radius = 5;
  let circle = radius * radius * 3.14; // 5 * 5 * 3.14
  console.log('円の面積は' + circle + 'ですiiiii'); // 円の面積は78.5です
}
getArea2();

//値が変わるたびにコードを書き換えるというのは非常に手間がかかりますね。
// そこで次は引数（ひきすう）というものを使って色々な値を計算できるようにしましょう！


// 定義
// function 関数名(引数) { ※引数を受け取る
//   処理の内容
// }

// 呼び出し
// 関数名(引数) ※関数宣言を行った場所に、引数を渡している


function getArea3(radius) {
  let circle = radius * radius * 3.14; 5 * 5 * 3.14
  console.log('円の面積は' + circle + 'ですeeeee');
}
getArea3(5);


function getArea4(radius) { // ⓶ 5,6,10
  let circle = radius * radius * 3.14; // ⓷ 5,6,10
  console.log('円の面積は' + circle + 'です');
}

// ⓵
getArea4(5);
getArea4(6);
getArea4(10);

// ※ 引数は複数渡すことも可能 getArea4(radius1, radius2, radius3){}  getArea4(5, 6, 10);





// ・・・・・・・・ 返り値 ・・・・・・・・
// ※実行もとに返す処理(返り値とは、関数内の値を呼び出した箇所に返すこと)

function getArea5(radius) {
  let circle = radius * radius * 3.14;
  return circle; // 実行もとに返す処理
}

console.log('円の面積は' + getArea5(5) + 'ですqqqq'); // 実行元(5を渡す)
console.log('この円の面積はなんと' + getArea5(10) + 'でござんす'); // 実行元(10を渡す)


// 処理の順番
function getArea(radius) { // ⓶ 5を受け取る
  let circle = radius * radius * 3.14; // ⓷ 5 * 5 * 3.14 // ⓸ 結果を「circle」に代入する
  return circle; // ⓹ circle を 受け取って実行元に返す
}

console.log('円の面積は' + getArea(5) + 'です'); //⓵ 5を渡す // ⓺ 実行元、return から返ってきた値を受け取る


// ※ 一点だけ注意点として、返り値は必ず必要なものではありません。
//    ではどういう時に必要かと言うと、その関数の中で作られた値を呼び出した箇所で使いたいのであれば必要です。
//    逆に関数の中の値はいらないということであれば、特にreturnは使用しなくてもOKです。



// ちなみにreturnの処理を実行すると、関数の処理はそこで終了します。
// 例えば先程使ったgetArea関数の後ろに続けて処理を書きます。

function getArea6(radius) {
  let circle = radius * radius * 3.14;
  return circle;

  console.log('ここはreturnよりも後ろの処理ですuuuu。');
}
// console.log('ここはreturnよりも後ろの処理ですuuuu。');

getArea6(5);



// returnされた時点で関数の中の処理は終了し、コンソールに出力される処理はされない。
// これを利用することで、以下のように特定の条件の場合だけ、処理を終わらせるということができます。（これを早期リターンやガード節と言うので覚えておきましょう）



function devide(x, y) {
  // 数学的に0で割ることはできないので、その条件の時だけ処理を止める
  if (y === 0) { // y が0であるかどうかをチェックしています。
    return; // yが0の場合、ここで関数の実行を終了し、何も返さない
  }
  return x / y; // yが0でない場合、X ÷ Y の結果を返す
}

// 本来であれば0で割ると、エラーが出てプログラムがクラッシュしてしまうのですが、これであれば0で割られる前に処理を止めることができます。
// ここで使用したif (y === 0) {} という構文については、以降のセクションで詳しく解説しますが、簡単に言うと()の中の条件が正しかった時に、{}の中の処理をするものです。



// ・・・・



// 関数の定義方法

// 関数の定義方法
// ここまで説明してきた関数ですが、実は定義するための書き方が2パターンあります。
// 細かい違いはあるものの、ほぼ同じように動かすことができます。

function define1() { // define1という名前の関数
  return 'This is console in showConsole function!';
}

const define2 = function() { // 名前のない関数（無名関数）を変数define2に代入
  return 'This is console in showConsole function!';
}
// 関数を呼び出す時はどちらも同じで、define1();とdefine2();で実行が可能です。
// どちらの書き方もよく見かけるものなので、どちらが来ても驚かないようにしておきましょう。




// ・・・・




// コールバック関数

// 次はコールバック関数について説明します。
// 実は引数には、数値や文字列以外に関数も渡すことができるのですが、
// この引数に渡す関数のことをコールバック関数といいます。


function doFunc(callback) { // 1. 関数 doFunc が宣言される //先に呼び出して後で処理をする(callback)
  console.log('doFuncが呼び出されました'); // 3. doFunc 内の最初の処理
  callback(); // 4. 2の処理が渡されて、実行され、 出力される
}

doFunc(function() { // 2. ここの処理を doFunc(callback) が呼びだす。無名関数(function())が引数として渡される
  console.log('コールバック関数が呼び出されました');
});


// コールバックには「後で呼び出す」という意味があります。
// コードを見てみると、たしかにdoFuncに渡し、その後に処理の中で呼び出していますね。

//名前がついていない関数のことを無名関数と呼ぶ




// ・・・・




// オブジェクトに関数を持たせる

let John5 = {
  name: 'John',  // key（キー）: value（バリュー）
  age: 26,
  bloodType: 'A',
  favorite: 'card',

  sing: function() { // 2 sing プロパティに関数（メソッド）を設定、設定した関数が呼び出された
    console.log('LA~LA~LA~~~♪'); // 3 出力
  }

};

John5.sing(); // 1 「John5 オブジェクト」の 「sing メソッド」を呼び出し


// オブジェクトには、文字列や数値などのデータ以外に、関数を持たせることができます。
// オブジェクトに持たせた関数のことをメソッドという

// John はオブジェクトです。

// このオブジェクトにのプロパティがあります:
// name: 値は 'John'
// age: 値は 26
// bloodType: 値は 'A'
// favorite: 値は 'card'
// sing: 関数（メソッド）

// John.sing(); → ここで、John オブジェクトの sing メソッドを呼び出し // 'Johnが歌っています: LA~LA~LA~~~♪' がコンソールに表示される

// ----------
// let John = {
//   sing: function() {
//     John.sing();
//   }
// };

// John.sing();

// 上記のような書き方をすると無限ループしてしまいプログラムがクラッシュしてしまう。
// ----------



// 自分で流れをまとめた

// John5 という変数の中に、オブジェクトが格納されています。
// このオブジェクトには sing というキーがあり、その値として関数が設定されています。
// John5.sing(); と書くことで、John5 オブジェクトの sing メソッド（関数）を呼び出しています。
// その結果、console.log('LA~LA~LA~~~♪'); が実行され、コンソールに LA~LA~LA~~~♪ が出力されます。






// ・・・・





// 標準組み込みオブジェクト


let round = Math.round(2.86); // 四捨五入
console.log('round => ', round); // 3

let ceil = Math.ceil(7.05);   // 切り上げ
console.log('ceil => ', ceil); // 8

let floor = Math.floor(7.98); // 切り下げ
console.log('floor => ', floor); // 7

let random = Math.random(); // 0~1までの乱数の生成
console.log('random => ', random); // 0.283559646427493





// ・・・・





// スコープ

// スコープとは簡単に言うと、変数の有効範囲のこと
// {}の内側から、参照することをローカル変数
// {}の外側から、参照することをグローバル変数


// let userAge = 0;  // 変数の定義を関数の外で行う
// myFunc();

// function myFunc() {
//   userAge = 27;  // ここは再代入するように変更
//   console.log(userAge); // => 27がConsoleに表示される
// }

// console.log(userAge); // => 27がConsoleに表示される




let userAge7 = 1000; // グローバル変数 (関数の外で定義した変数は関数の中からでも参照することができます。)
myFunc(); // 621の処理を呼び出す

function myFunc() {
  console.log(userAge7); //グローバル変数で定義した値を出力
  userAge7 = 27; // ローカル変数
  console.log(userAge7); // 出力 27
}

console.log(userAge7); // グローバル変数の値を表示 //再度実行 出力 27

// ※ グローバル変数は一見便利そうですが、どこからでも値が書き換えられるという特徴から、
//    予想外の書き換えが起きて、バグになることもよくあるので基本的には使用しない






// ・・・・



// JSの基礎的なJavaSctiptの構文である制御構文


// if文
// if文はプログラムの中で条件分岐を行いたい時に使用する構文

// if (条件式) {
//   // 条件式がtrue（真）のときの処理
// }

// let value1 = true; (真)
// let value2 = false; (偽)


if (true) {
  console.log('trueです！');
}
console.log('処理が終わりました');


if (false) {
  console.log('trueです！'); // falseなので処理は行われず、出力しない
}
console.log('処理が終わりました');




// 比較演算子
// 比較演算子と呼ばれる記号を使用すると、もっと動的に真偽値を作ることができます。

let tall = 185;
if (tall >= 180) {
  console.log('高身長です');
}


let val = 26;
console.log(val >= 20); // 20は26より大きいか？(true)
console.log(val === '26'); //26なのか???データ型まで一緒なのか???(違うので(false))
console.log(val == '26'); // 26なのか???(true)
console.log('hello' === 'world');




// 複雑な条件分岐

let signal = 'red';
if (signal === 'red') {
  console.log('赤信号です。止まりましょう');
} else if (signal === 'blue') {
  console.log('青信号です。進みましょう');
} else if (signal === 'yellow') {
  console.log('黄色信号です。空気を読みましょう');
}

// ※else ifは何個でも書くことができます。


let myAge = 60;
if (myAge >= 35) {
  console.log('健康診断でバリウムを飲みます'); // ここだけ出力
} else if (myAge >= 20) {
  console.log('お酒が飲めます');
} else if (myAge >= 18) {
  console.log('選挙権があります');
}
// この場合、すべての条件式がtrueになりますが、
// コンソールには「健康診断でバリウムを飲みます」の文字だけが表示されました。
// これは、if文が上から順番にチェックしていき、最初にtrueになった条件の処理だけが動くようになっているからです。



// また、else という条件もあり、これはすべての条件式がtrueにならなかった時に動く条件になります。
// では先程の条件にelseの式を追加してみましょう。

let myAge1 = 12; // 数字を12に変更
if (myAge1 >= 35) {
  console.log('健康診断でバリウムを飲みます');
} else if (myAge1 >= 20) {
  console.log('お酒が飲めます');
} else if (myAge1 >= 18) {
  console.log('選挙権があります');
} else {
  console.log('子供です');
}

// どの条件式もtrueにならなかったので、elseの処理が動きます。





// ・・・・




// 論理演算子
// QR

let loto = 8;

if (loto === 7 || loto === 8) { // 右は条件に当てはまるので、true
  console.log('当たり'); // 「当たり」と出力
} else {
  console.log('ハズレ');
}
// 「または」を表現するためには、|| を使用します。
// || の両側のどちらか一方、もしくは両方がtrueだった場合に、trueになります。


let numVal = 8;
let strVal = 'text'

console.log(numVal === 7 || strVal === 'text'); // 「true」と出力



// &&

let userA = '到着';
let userB = '不在';

if (userA === '到着' && userB === '到着') { //左が違うので、false
  console.log('全員揃ったので出発します。');
} else {
  console.log('揃っていないため、出発できません。'); //こっちが出力
}
// && の場合は、両側がどちらもtrue だったときに、true になります。

console.log(userA === '到着' && userB === '到着'); // false




// 三項演算子

// 三項演算子はif文の代替として、一行で記述できる書き方で、
// if文の書き方がもう一つあると思ってください。

// 条件式 ? trueの時の処理 : falseの時の処理

let errMsg = '';

// if 文を使った書き方
if (errMsg === '') {
    console.log('ない！'); //ないと出力
} else {
    console.log('ある！');
}

// 三項演算子を使った書き方
errMsg === '' ? console.log('ない！') : console.log('ある！');


// -----


let number = 1;

// numberを2で割った時
// 割り切れたら「偶数です」、割り切れなかったら「奇数です」
// という文字列をtextに代入する
let text2 = number % 2 === 0 ? '偶数です' : '奇数です';
console.log(text2); // 奇数です





// Truthy (真値/トゥルーシー) と Falsy (偽値/フォルシー)

if (1) {
  console.log('hoge');
}

if (0) {
  console.log('piyo');
}

// if文の()の中で、暗黙的にtrueかfalseに型変換（キャスト）が行われている。
// number型である1をboolean型にキャストするとtrueになり、
// number型である0をboolean型にキャストするとfalseになります。

// つまり、number型の1はTruthyと言えますし、number型の0はFalsyと言えます。

// まとめると、型変換をしてtrueになるような値をTruthyな値といい、
// 型変換をしてfalseになるような値をFalsyな値といいます。


// 【Falsyな値】... false , undefind , null , 0 , ''（空文字）





// for文
// 次はfor文についてです。for文というのは繰り返し処理をするためのものです。


// for (初期値; 繰り返しの条件式; 処理の後にされる式) {
//   // ここに繰り返す処理を書きます。
// }

// (1) まず、初期値というのは繰り返す条件式や処理で使うために最初に定義するものです。
// (2) 繰り返しの条件式とは、if文の条件式と同じように繰り返すかどうかの条件です。
// (3) 処理の後にされる式とはfor文の{}の中に書いてある処理が終わるごとに計算される式です。


for (let i = 0; i < 10; i++) {   // 初期値(1), 条件式(2), 後処理(3)
  console.log(i + '回目のコンソール');  // 繰り返す処理(4)
}



let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // すべての要素を足し合わせると、合計が 55
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);


// for ループを使って配列の各要素を順に加算していきます。

// 1 回目のループ: sum = 0 + 1 = 1
// 2 回目のループ: sum = 1 + 2 = 3
// 3 回目のループ: sum = 3 + 3 = 6
// 4 回目のループ: sum = 6 + 4 = 10
// 5 回目のループ: sum = 10 + 5 = 15
// 6 回目のループ: sum = 15 + 6 = 21
// 7 回目のループ: sum = 21 + 7 = 28
// 8 回目のループ: sum = 28 + 8 = 36
// 9 回目のループ: sum = 36 + 9 = 45
// 10 回目のループ: sum = 45 + 10 = 55
// 各ステップでの sum の値は次のように変わります：

// 0 → 1 → 3 → 6 → 10 → 15 → 21 → 28 → 36 → 45 → 55






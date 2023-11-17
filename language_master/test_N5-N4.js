
// スライドショー
const slides = $("#js-slide").find("img");
const slideLength = slides.length;

let now = 0;
let next = 1;

const fade = 0;
const show = 100000;

slides.hide();
slides.eq(0).show();

const slidesshow = () => {

  slides.eq(now % slideLength).fadeOut(fade).removeClass("zoom");
  slides.eq(next % slideLength).fadeIn(fade).addClass("zoom");

  now++;
  next++;
};

setInterval(slidesshow, show);
// スライドショー

let question =[
    [
        "新しい くるまですね。",
        "1.あたらしい",
        "2.あだらしい",
        "3.あらたしい",
        "1"

    ],

    [
        "弟は へや（　）掃除をしました。",
        "1.が",
        "2.を",
        "3.に",
        "2"
    ],

    [
        "これは きょねん わたし（　）（？）（　）とった しゃしんです。",
        "1.が",
        "2.で",
        "3.海",
        "3"

    ],

    [
        "わたしは ことし 山（？）に行きます。",
        "1.まや",
        "2.かわ",
        "3.やま",
        "3"

    ],

    [
        "わたしは テストで いい点（？）をとった。",
        "1.えん",
        "2.てん",
        "3.けん",
        "2"

    ]


];

// console.log(question[0][0]);

var quize = document.getElementById("question");//データを持ってきて変数に代入
var ans1 = document.getElementById("ans1");
var ans2 = document.getElementById("ans2");
var ans3 = document.getElementById("ans3");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");


let correct = 0;
let quizCnt = 0;//カウント用の変数を作成

function quizeSet(){ //ファンクション作成
    quize.textContent = question[quizCnt][0];//クイズのクイズカウントの0番目を呼び出す
    ans1.textContent = question[quizCnt][1];
    ans2.textContent = question[quizCnt][2];
    ans3.textContent = question[quizCnt][3];
}

quizeSet();

function answerCheck(ans){ //いんすうはans
    if(ans == question[quizCnt][4]){
        alert("せいかい！！");
        var music = new Audio("sound/correct001.mp3");
        music.play();
        const key = "せいかい";
        const value = question[quizCnt][ans];
        const ttt = question[quizCnt][0];
        localStorage.setItem(key, value);
        correct++;

        const html = `
      
      <li>
        <p class="font-bold text-red-500">${key}</p>
        <p>もんだい： ${ttt}</p>
        <p>あなたの答え 「${value}」</p><br>
      </li>

      `;
      
      $("#list").append(html);
    }else{
        alert("ふせいかい");
        const key = "ふせいかい";
        var music = new Audio("sound/bell20.mp3");
        music.play(); 
        const value = question[quizCnt][ans];
        const vv = question[quizCnt][4];
        const vv_1 = question[quizCnt][vv];
        const ttt = question[quizCnt][0];
        console.log(vv_1);
        localStorage.setItem(key, value);

        const html = `
      
      <li>
        <p class="font-bold text-blue-500">${key}</p>
        <p>もんだい： ${ttt}</p>
        <p>あなたの答え 「${value}」</p>
        <p>答え 「${vv_1}」</p><br>        
      </li>

      `;
      
      $("#list").append(html);
    }

    quizCnt++;

    if(quizCnt == question.length){
        quize.textContent = `正解数は ${correct}/${quizCnt} でした！`;
        ans1.textContent = "";
        ans2.textContent = "";
        ans3.textContent = "";
        $("#btn-box").hide();
        $("#return").show();

    }else{
        quizeSet();
    }

}




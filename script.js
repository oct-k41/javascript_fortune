// JavaScript
console.log('Hello world!');

const drawButton = document.querySelector('#drawButton');
const resultDisplay = document.querySelector('#resultDisplay');

// ボタンがクリックされたら、動作させる
drawButton.addEventListener('click', () => {

    // 0から1未満のランダムな数字を生成する
    const randomNumber = Math.random();
    console.log(randomNumber); // コンソールに表示（確認用）
    document.body.classList.remove('daikyou','daikichi', 'chukichi', 'kichi');

    // 0.1 未満だったら
    if (randomNumber < 0.1) {
        resultDisplay.textContent = '大凶';
        document.body.classList.add('daikyou');

    // 0.3 未満だったら
    } else if (randomNumber < 0.3) {
        resultDisplay.textContent = '大吉';
        document.body.classList.add('daikichi');
        
    // 0.5 未満だったら
    } else if (randomNumber < 0.5) {
        resultDisplay.textContent = '中吉';
        document.body.classList.add('chukichi');

    // どちらでもない場合
    } else {
        resultDisplay.textContent = '吉';
        document.body.classList.add('kichi');
    }
});

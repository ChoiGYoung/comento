let input = document.getElementById('enter');
let historyElement = document.getElementById('history');
let historyData = ''; // 계산 내역을 저장할 변수

function add(value) {
  if (value === '=') {
    compute();
  } else if (value === 'C') {
    clearDisplay();
  } else {
    input.value += value;
  }
}

function compute() {
  try {
    const expression = input.value;
    const result = eval(expression);

    // 계산 결과 입력창에 표시
    input.value = result;

    // 계산 내역 기록에 추가
    historyData += `${expression} = ${result}<br>`;
    historyElement.innerHTML = historyData;
  } catch (error) {
    input.value = 'Error';
  }
}

function clearDisplay() {
  input.value = '';
}

function clearHistory() {
  // 계산 내역 초기화
  historyData = '';
  historyElement.innerHTML = '';
}
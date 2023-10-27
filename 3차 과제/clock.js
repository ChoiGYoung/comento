let batteryLevel = 100;


function updateBatteryLevel() {
    if (batteryLevel > 0) {
        batteryLevel -= 1;
        document.querySelector('.battery-level').textContent = `배터리: ${batteryLevel}%`;
    } else {
        document.querySelector('.battery-level').textContent = '배터리: 0%';
        document.querySelector('.current-time').style.backgroundColor = 'black';
    }
}


setInterval(updateBatteryLevel, 1000);

const alarmList = [];


document.getElementById('add-alarm').addEventListener('click', () => {
    const hour = document.getElementById('hour').value;
    const minute = document.getElementById('minute').value;
    const second = document.getElementById('second').value;

    if (hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59 && second >= 0 && second <= 59) {
        const alarmTime = `${hour}시 ${minute}분 ${second}초`;
        if (alarmList.length < 3) {
            alarmList.push(alarmTime);
            updateAlarmList();
        } else {
            alert('알람은 최대 3개까지 설정할 수 있습니다.');
        }
    } else {
        alert('올바른 시간을 입력하세요.');
    }
});

// 알람 목록을 업데이트
function updateAlarmList() {
    const alarmListElement = document.getElementById('alarm-list');
    const li = document.createElement('li');
    const lastAddedAlarm = alarmList[alarmList.length - 1];
    li.textContent = lastAddedAlarm;
    alarmListElement.appendChild(li);
}

// 현재 시간을 업데이트
function updateCurrentTime() {
    const currentTimeElement = document.getElementById('time-display');
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 +1 해줍니다.
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    currentTimeElement.textContent = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    const currentTime = `${hours}시 ${minutes}분 ${seconds}초`;

    
    let isAlarmTime = false;
    alarmList.forEach((alarmTime) => {
        if (alarmTime === currentTime) {
            isAlarmTime = true;
        }
    });

    if (isAlarmTime) {
        currentTimeElement.style.color = 'red';
    } else {
        currentTimeElement.style.color = 'black';
    }
}


updateCurrentTime();
setInterval(updateCurrentTime, 1000);
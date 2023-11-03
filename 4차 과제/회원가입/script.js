// 회원 정보를 저장할 배열
const users = [];

function checkUsername() {
    const username = document.getElementById("username").value;
    const usernameError = document.getElementById("usernameError");
    const registrationForm = document.getElementById("registrationForm");

   
    if (users.some(user => user.username === username)) {
        usernameError.innerHTML = "이미 사용중인 아이디입니다.";
        registrationForm.reset(); // 아이디 입력창과 중복 검사 버튼 초기화
    } else {
        usernameError.innerHTML = "사용 가능한 아이디입니다.";
        document.getElementById("username").disabled = true;
        document.querySelector("button[onclick='checkUsername()']").disabled = true;
    }
}

function registerUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("passwordError");

    // 비밀번호 조건 체크
    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    if (!passwordPattern.test(password)) {
        passwordError.innerHTML = "8~16자 영문, 숫자, 특수문자를 사용하세요.";
        return; // 회원가입 중단
    }

    // 비밀번호 조건에 맞으면 회원 정보를 배열에 추가
    users.push({
        username,
        password
    });

    // 회원 정보 배열에 추가 후 리셋
    document.getElementById("username").disabled = false;
    document.querySelector("button[onclick='checkUsername()']").disabled = false;
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

    alert("회원가입이 완료되었습니다.");
}

document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // 페이지 리로드 방지
});
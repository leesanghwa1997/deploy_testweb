// 회원가입 버튼
function signIn() {
    const userId = document.getElementById('userId');
    const userPassword = document.getElementById('userPassword');
    const userEmail = document.getElementById('userEmail');

    let valid = true; // 유효성 검사 플래그

    // ID 입력 필드 검사
    if (userId.value.trim() === '') {
        userId.style.borderColor = 'red'; // 비어 있으면 빨간색 테두리
        valid = false; // 유효성 플래그를 false로 설정
    } else {
        userId.style.borderColor = '#14ae5c'; // 입력이 있으면 기본 테두리로 복원
    }

    // 비밀번호 입력 필드 검사
    if (userPassword.value.trim() === '') {
        userPassword.style.borderColor = 'red';
        valid = false;
    } else {
        userPassword.style.borderColor = '#14ae5c';
    }

    // 이메일 입력 필드 검사
    if (userEmail.value.trim() === '') {
        userEmail.style.borderColor = 'red';
        valid = false;
    } else {
        userEmail.style.borderColor = '#14ae5c';
    }

    // 모든 필드가 유효할 경우의 처리
    if (valid) {
        alert('회원가입 되었습니다.');
        // 여기에 추가적인 로그인 처리 로직을 추가할 수 있습니다.
    }
}

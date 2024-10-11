
// 로그인 버튼 클릭 시 login.html로 이동
function goToLogin() {
    window.location.href = "login.html";
}

// 회원가입 버튼 클릭 시 signup.html로 이동
function goToSignup() {
    window.location.href = "sign_up.html";
}

// 사용자 메뉴를 토글하는 함수
function toggleUserMenu() {
    const userMenu = document.getElementById('user-menu');
    
    if (userMenu.style.display === "none" || userMenu.style.display === "") {
        userMenu.style.display = "block"; // 창을 열기
    } else {
        userMenu.style.display = "none";  // 창을 닫기
    }
}

// 페이지의 다른 부분을 클릭하면 메뉴가 닫히도록 이벤트 추가
document.addEventListener('click', function(event) {
    const userIcon = document.getElementById('user-icon');
    const userMenu = document.getElementById('user-menu');
    
    // 클릭한 요소가 사용자 아이콘이 아니고, 메뉴 내부도 아닐 경우 메뉴를 닫음
    if (!userIcon.contains(event.target) && !userMenu.contains(event.target)) {
        userMenu.style.display = "none"; // 메뉴 닫기
    }
});


// 하위 메뉴 클릭시 색변경
function setActive(element) {
    var items = document.querySelectorAll('.submenu li');
    items.forEach(function (item) {
        item.classList.remove('active');
    });

    // 클릭한 항목에 'active' 클래스 추가
    element.classList.add('active');
}

// 하위 메뉴 열고 닫기
function toggleSubMenu(subMenuId) {
    const subMenu = document.getElementById(subMenuId);
    if (subMenu.style.display === 'block') {
        subMenu.style.display = 'none';
    } else {
        subMenu.style.display = 'block';
    }
}

function loadScript(scriptUrl) {
    const script = document.createElement('script');
    script.src = scriptUrl;
    script.async = false;  // 순차적으로 실행되도록 설정
    document.body.appendChild(script);
}

// 하위 메뉴 클릭시 화면 로드
function loadPage(page, scriptUrl = null) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('mainContent').innerHTML = data;

            // 스크립트 URL이 있으면 로드
            if (scriptUrl) {
                loadScript(scriptUrl);
            }
        })
        .catch(error => console.log('Error loading page:', error));
}

// 메뉴1 열고 닫기 기능
function toggleMenu() {
    const mainContent = document.getElementById('mainContent');
    const sideMenu = document.getElementById('sideMenu');
    if (sideMenu.style.left === '0px') {
        sideMenu.style.left = '-250px';
        mainContent.style.paddingLeft = '0px';
    } else {
        sideMenu.style.left = '0px';
        mainContent.style.paddingLeft = '250px';
    }
}

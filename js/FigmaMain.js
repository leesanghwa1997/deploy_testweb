// 로그인
function login() {
    window.location.href = 'FigmaLogin.html';
}
//회원가입
function signin() {
    window.location.href = 'FigmaSignIn.html';
}

const internationalImages = [
    { image: 'img/travel1.jpg', nameKr: '튀르키예', nameEn: 'Turkey' },
    { image: 'img/travel2.jpg', nameKr: '보라카이', nameEn: 'Boracay' },
    { image: 'img/travel3.png', nameKr: '규슈', nameEn: 'Kyushu' },
    { image: 'img/travel4.jpg', nameKr: '대만', nameEn: 'Taiwan' },
    { image: 'img/travel5.jpg', nameKr: '시드니', nameEn: 'Sydney' },
    { image: 'img/travel6.jpg', nameKr: '뉴질랜드', nameEn: 'New Zealand' }
];

const domesticImages = [
    { image: 'img/domestic1.jpg', nameKr: '제주도', nameEn: 'Jeju Island' },
    { image: 'img/domestic2.jpg', nameKr: '부산', nameEn: 'Busan' },
    { image: 'img/domestic3.png', nameKr: '경주', nameEn: 'Gyeongju' },
    { image: 'img/domestic4.jpg', nameKr: '서울', nameEn: 'Seoul' },
    { image: 'img/domestic5.jpg', nameKr: '강릉', nameEn: 'Gangneung' },
    { image: 'img/domestic6.jpg', nameKr: '전주', nameEn: 'Jeonju' }
];

function changeBackgroundImage1() {
    const randomIndex = Math.floor(Math.random() * internationalImages.length);
    const section = document.getElementById('sectionBackColor');

    section.style.backgroundImage = `url(${internationalImages[randomIndex].image})`;
    section.style.backgroundSize = 'cover';
    section.style.backgroundPosition = 'center';

    document.getElementById('travelNameKR').textContent = internationalImages[randomIndex].nameKr;
    document.getElementById('travelNameEn').textContent = internationalImages[randomIndex].nameEn;
}

function changeBackgroundImage2() {
    const randomIndex = Math.floor(Math.random() * domesticImages.length);
    const section = document.getElementById('sectionBackColor');

    section.style.backgroundImage = `url(${domesticImages[randomIndex].image})`;
    section.style.backgroundSize = 'cover';
    section.style.backgroundPosition = 'center';

    document.getElementById('travelNameKR').textContent = domesticImages[randomIndex].nameKr;
    document.getElementById('travelNameEn').textContent = domesticImages[randomIndex].nameEn;
}


let currentSelected = null;

function changeImage(imageSrc, selectedId) {
    // 이미지 변경
    const section2Img = document.getElementById('section2Img');
    section2Img.src = imageSrc;

    // 이전 선택된 div가 있으면 스타일 제거
    if (currentSelected) {
        document.getElementById(currentSelected).style.backgroundColor = 'white';
    }

    // 선택한 div에 스타일 추가
    const selectedDiv = document.getElementById(selectedId);
    selectedDiv.style.backgroundColor = 'grey';

    // 현재 선택된 div 업데이트
    currentSelected = selectedId;
}
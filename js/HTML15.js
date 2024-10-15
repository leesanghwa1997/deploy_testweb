//초기 스타일
function defaultstyle() {
    document.getElementById('randomButton').style.display = 'none';
    document.getElementById('randomName').style.display = 'none';
    document.getElementById('randomPrice').style.display = 'none';
    document.getElementById('randomImage').style.display = 'none';
    document.getElementById('menuAddButton').style.display = 'none';
    document.getElementById('menuDeleteButton').style.display = 'none';
}

// 메뉴 객체 배열
const menuItems1 = [
    { image: 'img/buger1.png', name: '1955 버거', price: '1,000' },
    { image: 'img/buger2.png', name: '더블 불고기', price: '2,000' },
    { image: 'img/buger3.png', name: '빅맥', price: '3,000' },
    { image: 'img/buger4.png', name: '베이컨 토마토 디럭스', price: '4,000' },
    { image: 'img/buger5.png', name: '슈비 버거', price: '5,000' }
];

const menuItems2 = [
    { image: 'img/bugerking1.png', name: '와퍼', price: '2,000' },
    { image: 'img/bugerking2.png', name: '트리플 머쉬룸', price: '3,000' },
    { image: 'img/bugerking3.png', name: '몬스터 와퍼', price: '4,000' },
    { image: 'img/bugerking4.png', name: '두툼버거', price: '5,000' },
    { image: 'img/bugerking5.png', name: '통새우 와퍼', price: '6,000' }
];

// 아이콘을 클릭했을 때 이미지 변경 및 h1 업데이트
function selectMenu(icon, menuType) {
    const randomImage = document.getElementById('randomImage');
    const h1 = document.querySelector('h1');

    // 클릭한 아이콘의 src와 alt 값을 가져옴
    const newSrc = icon.src;
    const altText = icon.alt;

    // 이미지 src 업데이트
    randomImage.src = newSrc;

    // h1 내용 업데이트
    h1.textContent = `${altText} 메뉴 추천`;

    //음식 타입
    selectMenuType = menuType;

    // 이름과 가격을 사라지게 함
    document.getElementById('randomName').style.display = 'none';
    document.getElementById('randomPrice').style.display = 'none';
    document.getElementById('menuDeleteButton').style.display = 'none';

    //가게사진과 메뉴 추가버튼을 보이게 함
    document.getElementById('randomButton').style.display = 'block';
    document.getElementById('randomImage').style.display = 'block';
    document.getElementById('menuAddButton').style.display = 'block';
}

// 랜덤 이미지를 출력하는 함수 (기존)
function RandomLunchImage() {
    let menuItems;
    switch (selectMenuType) {
        case "a": menuItems = menuItems1;
            break;
        case "b": menuItems = menuItems2;
            break;
        case "p": menuItems = null;
            break;
        // default: menuItems = menuItems1;
        //     break;
    }

    console.log(menuItems.length);

    if (menuItems.length === 0) {
        alert('메뉴가 없습니다.');
        defaultstyle();
    }

    const randomIndex = Math.floor(Math.random() * menuItems.length);
    const randomMenu = menuItems[randomIndex];

    document.getElementById('randomImage').src = randomMenu.image;
    document.getElementById('randomName').textContent = `이름: ${randomMenu.name}`;
    document.getElementById('randomPrice').textContent = `가격: ${randomMenu.price}원`;

    document.getElementById('randomName').style.display = 'block';
    document.getElementById('randomPrice').style.display = 'block';
    document.getElementById('menuDeleteButton').style.display = 'block';
}
//메뉴 추가
function MenuAdd() {
    if (document.getElementById('menuAddDiv').style.display === 'none') {
        document.getElementById('menuAddDiv').style.display = 'block';
        document.getElementById('menuAddButton').style.backgroundColor = 'blue';
    }
    else {
        document.getElementById('menuAddDiv').style.display = 'none';
        document.getElementById('menuAddButton').style.backgroundColor = 'white';
    }

}

function MenuDelete() {
    // 현재 표시된 이미지의 src 가져오기
    const currentImageSrc = document.getElementById('randomImage').src;
    console.log("현재 이미지 src:", currentImageSrc); // 현재 이미지 src 콘솔 출력

    // 이미지 경로에서 파일명만 추출 (예: 'buger1.png')
    const currentImageFileName = currentImageSrc.split('/').pop();
    console.log("현재 이미지 파일명:", currentImageFileName); // 파일명만 콘솔 출력

    // 삭제할 메뉴가 있는 배열 선택
    let menuItems;
    switch (selectMenuType) {
        case "a":
            menuItems = menuItems1;
            break;
        case "b":
            menuItems = menuItems2;
            break;
        default:
            return; // 메뉴가 선택되지 않은 경우 함수 종료
    }

    // 배열에서 파일명으로 비교하여 해당 메뉴의 인덱스 찾기
    const index = menuItems.findIndex(menu => menu.image.split('/').pop() === currentImageFileName);
    console.log("삭제할 메뉴의 인덱스:", index); // 찾은 인덱스 콘솔 출력

    if (index !== -1) {
        console.log("삭제 전 메뉴 배열:", menuItems); // 삭제 전 배열 상태 콘솔 출력
        menuItems.splice(index, 1); // 메뉴 삭제
        console.log("삭제 후 메뉴 배열:", menuItems); // 삭제 후 배열 상태 콘솔 출력
        alert('메뉴가 삭제되었습니다.');

        RandomLunchImage();
    } else {
        console.log("삭제할 메뉴를 찾을 수 없음");
        alert('삭제할 메뉴가 없습니다.');
    }
}



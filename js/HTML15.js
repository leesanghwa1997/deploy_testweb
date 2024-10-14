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
        default: menuItems = menuItems1;
            break;
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

function MenuAdd() {
    if (document.getElementById('menuAddDiv').style.display === 'none') {
        document.getElementById('menuAddDiv').style.display = 'block';
        document.getElementById('menuAddButton').style.backgroundColor = 'blue';
    }
    else{
        document.getElementById('menuAddDiv').style.display = 'none';
        document.getElementById('menuAddButton').style.backgroundColor = 'white';
    }

}

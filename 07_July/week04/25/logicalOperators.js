alert ( null || 2 || undefined );

alert ( alert(1) || 2 || alert(3) ); // 1,2 신기!

alert ( 1 && null && 2 );

alert ( alert(1) && alert(2) ); // 1,undefined

alert ( alert(1) && alert(2) ); // 1,2,undefined

alert ( null || 2 && 3 || 4 ); // 3

let age = prompt ("춘추를 입력하라 :");

if ( age >= 14 && age <= 90 ) {
    alert ("공짜 점심은 없다. 일하라.");
} else {
    alert ("공짜 점심을 드셔라.");
};

let age2 = prompt ("춘추를 입력하라 :");

if ( age2 < 14 || age2 > 90 ) {
    alert ("공짜 점심이 제일로 맛나다.");
} else {
    alert ("공짜 점심 먹을 나이가 아니다.");
};


let age3 = prompt ("춘추를 입력하라 :");

if ( !( age3 >= 14 && age3 <= 90 ) ) {
    alert ("공짜 점심 많이 잡수셔요.");
} else {
    alert ("공짜 점심을 바라다니 염치도 없는 것.");
};


if ( -1 || 0 ) alert ( 'first' ); // first
if ( -1 && 0 ) alert ( 'second' );
if ( null || -1 && 1 ) alert ( 'third' ); // third






// login

let id = prompt ("Knock Knock Who's there? :");

if ( id == "Admin" ) {
    let pw = prompt ("암호를 대시오 :");

    if ( pw == "TheMaster" ) {
        alert ("환영합니다, 주인님 ^^. 좋은 시간 보내십시오 ^^.");
    } else if ( pw == ""  || pw == null ) {
        alert ("뭐야? 썩 꺼지도록 하렴.");
    } else {
        alert ("감히 주인장을 사칭하다니, 죽음으로 갚아라!");
    }
} else if ( id == "" || id == null ) {
    alert ("귀찮게 하지마..");
} else {
    alert ("평민은 저리가라.");
};
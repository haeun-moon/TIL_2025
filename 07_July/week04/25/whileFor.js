let i = 3;

while (i) {
    alert ( i-- );
}; // 3,2,1



let i2 = 0;
while ( ++i2 < 5 ) alert ( i2 ); // 1 ~ 4 출력


let i3 = 0;
while ( i3++ < 5 ) alert ( i3 ); // 1 ~ 5 출력 < 신기



for ( let i4 = 0; i4 < 5; i4++ ) alert ( i4 ); // 0 ~ 4
for ( let i5 = 0; i5 < 5; ++i5 ) alert ( i5 ); // 0 ~ 4



for ( let i6 = 1; i6 < 11; i6++ ) {
    if ( i6 % 2 == 0 ) alert ( i6 );
};

for ( let i6 = 1; i6 < 11; i6++ ) {
    if ( !(i6 % 2) ) alert ( i6 );
};


let i7 = 0;

while ( i7 < 3 ) {
    alert ( `number ${i7}!` );
    i7++;
};





let num = prompt ('춘추입력ㄱ');

while ( !num || num > 100 ) {
    num = prompt ('장난말고 다시 입력ㄱ');
};





// prime number

let n = prompt ("Give me Number: ");

Prime:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++){
        if ( i % j == 0 ) continue Prime;
    };

    alert ("The Prime Number:" + i);
};
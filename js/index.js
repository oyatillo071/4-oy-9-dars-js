//1-mashq Massivdagi birinchi va ohirgi elementni chiqarish
document.getElementById('first--btn').addEventListener('click', function () {
    let firstAnswer = " ";

    let car = ["Nissan",
        '3.8L',
        '1,785 kg',
        'grey',
        'R35'
    ];

    let arrEnd = car[car.length - 1];
    firstAnswer += car[0] + "<br>" + arrEnd;

    document.getElementById('first--answer').innerHTML = firstAnswer;
    document.getElementById('first--close').addEventListener('click', function () {
        document.getElementById('first--answer').innerHTML = " ";
    });
});





// 2-mashq. Berilgan massivdan ma'lum 4-indeksdagi elementni “salom”
//  so’ziga almashtiring va elementlarni ekranga chiqaring.
document.getElementById('second--btn').addEventListener('click', function () {
    let secondAnswer = " ";

    let car = ["Nissan",
        '3.8L ',
        '1,785 kg ',
        'grey ',
        'R35 ',
        ' olam '

    ];

    car[4] = "salom";
    secondAnswer = car;

    document.getElementById('second--answer').innerHTML = secondAnswer;
    document.getElementById('second--close').addEventListener('click', function () {
        document.getElementById('second--answer').innerHTML = " ";
    });
});





// 3-mashq. Bo'sh massiv yarating va unga
//  3 xil meva nomini qo'shing. Natijaviy massivni ekranga chiqaring.
document.getElementById('third--btn').addEventListener('click', function () {
    let thirdAnswer = " ";

    let fruits = [];

    fruits.push("Shaftoli ");
    fruits.push(" Xurmo ");
    fruits.push(" O'rik ");
    thirdAnswer = fruits;

    document.getElementById('third--answer').innerHTML = thirdAnswer;
    document.getElementById('third--close').addEventListener('click', function () {
        document.getElementById('third--answer').innerHTML = " ";
    });
});




// 4-mashq Massivning uzunligini aniqlang va uni ekranga chiqaring.
document.getElementById('four--btn').addEventListener('click', function () {
    let fourAnswer = " ";

    let fruits = [];

    fruits.push("Shaftoli ");
    fruits.push(" Xurmo ");
    fruits.push(" O'rik ");
    fourAnswer += "Uzunligi : " + fruits.length;

    document.getElementById('four--answer').innerHTML = fourAnswer;
    document.getElementById('four--close').addEventListener('click', function () {
        document.getElementById('four--answer').innerHTML = " ";
    });
});





// 5-mashq Massivga yangi element qo'shing va oxirgi holatdagi massivni ekranga chiqaring.
document.getElementById('five--btn').addEventListener('click', function () {
    let fiveAnswer = " ";

    let cars = ["Nissan", "R35", 'Toyota', "Supra"];
    fiveAnswer += "Eski xolati: " + "<br>" + cars + "<br>";

    cars.push("Porche ");
    cars.push(911);
    fiveAnswer += "<br>" + "Yangi xolati:" + "<br>" + cars;

    document.getElementById('five--answer').innerHTML = fiveAnswer;
    document.getElementById('five--close').addEventListener('click', function () {
        document.getElementById('five--answer').innerHTML = " ";
    });
});








//  6-mashq. Massivdan oxirgi elementni o'chiring va qolgan
//  elementlarni ekranga chiqaring.
document.getElementById('six--btn').addEventListener('click', function () {
    let sixAnswer = " ";

    let cars = ["Nissan", "R35", 'Toyota', "Supra"];
    sixAnswer += "Eski xolati: " + "<br>" + cars + "<br>";

    cars.pop();
    sixAnswer += "<br>" + "Yangi xolati:" + "<br>" + cars;

    document.getElementById('six--answer').innerHTML = sixAnswer;
    document.getElementById('six--close').addEventListener('click', function () {
        document.getElementById('six--answer').innerHTML = " ";
    });
});








// 7-mashq. Massivning boshiga yangi element qo'shing 
// va yangilangan massivni ekranga chiqaring.

document.getElementById('seven--btn').addEventListener('click', function () {
    let sevenAnswer = " ";

    let cars = ["Nissan", "R35", 'Toyota', "Supra"];
    sevenAnswer += "Eski xolati: " + "<br>" + cars + "<br>";

    cars.unshift("911");
    cars.unshift("Porche");
    sevenAnswer += "<br>" + "Yangi xolati:" + "<br>" + cars;

    document.getElementById('seven--answer').innerHTML = sevenAnswer;
    document.getElementById('seven--close').addEventListener('click', function () {
        document.getElementById('seven--answer').innerHTML = " ";
    });
});








// 8. Massivdan birinchi elementni o'chiring va qolgan elementlarni
//  ekranga chiqaring.
document.getElementById('eight--btn').addEventListener('click', function () {
    let eightAnswer = " ";

    let cars = ["Nissan", "R35", 'Toyota', "Supra"];
    eightAnswer += "Eski xolati: " + "<br>" + cars + "<br>";

    cars.shift();
    eightAnswer += "<br>" + "Yangi xolati:" + "<br>" + cars;

    document.getElementById('eight--answer').innerHTML = eightAnswer;
    document.getElementById('eight--close').addEventListener('click', function () {
        document.getElementById('eight--answer').innerHTML = " ";
    });
});





// 9-mashq . 5 ta raqamdan iborat massiv yarating va 
// massivdagi barcha elementlarni ekranga chiqaruvchi sikl yozing.


document.getElementById('nine--btn').addEventListener('click', function () {
    let nineAnswer = "Massivdagi mavjud qiymatlar :" + "<br>";

    let numbers = [];

    for (let i = 0; i <= 4; i++) {
        numbers.unshift(Math.trunc(Math.random() * 100));
    }

    for (let i = 0; i < numbers.length; i++) {
        nineAnswer += "<br>" + numbers[i];
    }

    document.getElementById('nine--answer').innerHTML = nineAnswer;
    document.getElementById('nine--close').addEventListener('click', function () {
        document.getElementById('nine--answer').innerHTML = " ";
    });
});





// 10-mashq. Massivda berilgan qiymat mavjudligini tekshiring 
// va natijani (mavjud yoki mavjud emasligini) ekranga chiqaring.

document.getElementById('ten--btn').addEventListener('click', function () {
    let searchValue = +prompt("Qidirish uchun raqam kiriting");
    let tenAnswer = " ";
    let tenCounter = 0;
    let numbers = [];

    for (let i = 0; i <= 4; i++) {
        numbers.push(Math.trunc(Math.random() * 100));
    }
    for (let i = 0; i < numbers.length; i++) {
        if (searchValue == numbers[i]) {
            tenCounter++;
        }
    }

    tenAnswer += tenCounter != 0 ? "Mavjud" : "Mavjud emas";

    tenAnswer += "<br>" + "Massivdagi mavjud qiymatlar :" + "<br>" + numbers;
    document.getElementById('ten--answer').innerHTML = tenAnswer;
    document.getElementById('ten--close').addEventListener('click', function () {
        document.getElementById('ten--answer').innerHTML = " ";
    });
});







//  11-mashq 10 ta raqamdan iborat massiv yarating va
//  massivdagi barcha elementlarni ekranga chiqaring.

document.getElementById('eleven--btn').addEventListener('click', function () {
    let elevenAnswer = "Massivdagi mavjud qiymatlar :" + "<br>";
    let numbers = [];

    for (let i = 0; i < 10; i++) {
        numbers.unshift(Math.trunc(Math.random() * 100));
    }
    for (let i = 0; i < numbers.length; i++) {
        elevenAnswer += " " + numbers[i];

    }

    document.getElementById('eleven--answer').innerHTML = elevenAnswer;
    document.getElementById('eleven--close').addEventListener('click', function () {
        document.getElementById('eleven--answer').innerHTML = " ";
    });
});









// 12-mashq. 5 ta meva nomidan iborat massiv yarating va
//  har bir elementni yangi qatorda ekranga chiqaring.

document.getElementById('twelve--btn').addEventListener('click', function () {
    let twelveAnswer = "Massivda mavjud mevalar:" + "<br>";
    let fruits = [" Olma ", " Xurmo ", "Shaftoli ", " Olcha ", " O'rik "];

    for (let i = 1; i < fruits.length + 1; i++) {
        twelveAnswer += "<br>" + i + " - " + fruits[i - 1];
    }

    document.getElementById('twelve--answer').innerHTML = twelveAnswer;
    document.getElementById('twelve--close').addEventListener('click', function () {
        document.getElementById('twelve--answer').innerHTML = " ";
    });
});





//  13-mashq   Massivdagi barcha juft sonlarni ekranga chiqaring.
document.getElementById('thirteen--btn').addEventListener('click', function () {
    let thirteenAnswer = "Massivdagi juft sonlar :" + "<br>";
    let numbers = [];

    for (let i = 0; i < 10; i++) {
        numbers.push(Math.trunc(Math.random() * 1000));
    }

    for (let i = 0; i < numbers.length; i++) {

        (numbers[i] % 2 == 0) ? thirteenAnswer += numbers[i] + " " : " ";
    }

    thirteenAnswer += "<br>" + "Massivdagi mavjud qiymatlar :" + "<br>" + numbers;

    document.getElementById('thirteen--answer').innerHTML = thirteenAnswer;
    document.getElementById('thirteen--close').addEventListener('click', function () {
        document.getElementById('thirteen--answer').innerHTML = " ";
    });
});






//  14-mashq   Massivdagi barcha toq sonlarni ekranga chiqaring.
document.getElementById('fourteen--btn').addEventListener('click', function () {
    let fourteenAnswer = "Massivdagi toq sonlar :" + "<br>";
    let numbers = [];

    for (let i = 0; i < 10; i++) {
        numbers.push(Math.trunc(Math.random() * 1000));
    }

    for (let i = 0; i < numbers.length; i++) {

        (numbers[i] % 2 != 0) ? fourteenAnswer += numbers[i] + " " : " ";
    }

    fourteenAnswer += "<br>" + "Massivdagi mavjud qiymatlar :" + "<br>" + numbers;

    document.getElementById('fourteen--answer').innerHTML = fourteenAnswer;
    document.getElementById('fourteen--close').addEventListener('click', function () {
        document.getElementById('fourteen--answer').innerHTML = " ";
    });
});



// 15-mashq Massivdagi musbat sonlarni ekranga chiqaring.
document.getElementById('fiveteen--btn').addEventListener('click', function () {
    let fiveteenAnswer = "Massivdagi mavjud sonlar:" + "<br>";
    let numbers = [];
    let fiveteenRandom = 0;
    for (let i = 0; i < 10; i++) {

        if (Math.random() > 0.7) {
            fiveteenRandom = (Math.trunc(Math.random() * 1000));
            fiveteenRandom *= -1;
            numbers.push(fiveteenRandom);
            continue;
        }
        numbers.push(Math.trunc(Math.random() * 1000));
    }
    for (let i = 0; i < numbers.length; i++) {
        fiveteenAnswer += " " + numbers[i] + " ";

    }


    fiveteenAnswer += `<br><br>Massivdagi musbat qiymatlar:<br>`;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            fiveteenAnswer += " " + numbers[i] + " ";
        }

    }


    document.getElementById('fiveteen--answer').innerHTML = fiveteenAnswer;
    document.getElementById('fiveteen--close').addEventListener('click', function () {
        document.getElementById('fiveteen--answer').innerHTML = " ";
    });
});





// 16-mashq 10 ta raqamdan iborat massivdagi barcha sonlarni teskari tartibda ekranga chiqaring.
document.getElementById('sixteen--btn').addEventListener('click', function () {
    let sixteenAnswer = "Massivdagi mavjud sonlar:" + "<br>";
    let numbers = [];
    for (let i = 0; i < 10; i++) {
        numbers.push(Math.trunc(Math.random() * 1000));
    }
    for (let i = 0; i < numbers.length; i++) {
        sixteenAnswer += " " + numbers[i] + " ";
    }
    sixteenAnswer += "<br><br>Massivdagi qiymatlarni teskari tartibi:<br>";

    for (let i = numbers.length - 1; i >= 0; i--) {
        sixteenAnswer += " " + numbers[i] + " ";
    }

    document.getElementById('sixteen--answer').innerHTML = sixteenAnswer;
    document.getElementById('sixteen--close').addEventListener('click', function () {
        document.getElementById('sixteen--answer').innerHTML = " ";
    });
});





// 17-mashq Berilgan massivdagi barcha elementlarning yig'indisini hisoblang.
document.getElementById('seventeen--btn').addEventListener('click', function () {
    let seventeenAnswer = "Massivdagi mavjud sonlar:" + "<br>";
    let numbers = [];
    let seventeenSum = 0;

    for (let i = 0; i < 10; i++) {
        numbers.push(Math.trunc(Math.random() * 1000));
    }
    for (let i = 0; i < numbers.length; i++) {
        seventeenAnswer += " " + numbers[i] + " ";
    }

    seventeenAnswer += "<br><br>Massivdagi qiymatlarining yig'indisi:<br>";

    for (let i = 0; i < numbers.length; i++) {
        seventeenSum += numbers[i];
    }

    seventeenAnswer += seventeenSum;
    document.getElementById('seventeen--answer').innerHTML = seventeenAnswer;
    document.getElementById('seventeen--close').addEventListener('click', function () {
        document.getElementById('seventeen--answer').innerHTML = " ";
    });
});





// 18-mashq Massivdagi barcha sonlarni 2 barobar oshirib, yangilangan massivni ekranga chiqaring.
document.getElementById('eightteen--btn').addEventListener('click', function () {
    let eightteenAnswer = "Massivdagi mavjud sonlar:" + "<br>";
    let numbers = [];

    for (let i = 0; i < 10; i++) {
        numbers.push(Math.trunc(Math.random() * 1000));
    }

    for (let i = 0; i < numbers.length; i++) {
        eightteenAnswer += " " + numbers[i] + " ";
    }
    eightteenAnswer += "<br><br>Yangillangan qiymatlar:<br>";

    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = numbers[i] * 2;
    }

    for (let i = 0; i < numbers.length; i++) {
        eightteenAnswer += " " + numbers[i] + " ";
    }

    document.getElementById('eightteen--answer').innerHTML = eightteenAnswer;
    document.getElementById('eightteen--close').addEventListener('click', function () {
        document.getElementById('eightteen--answer').innerHTML = " ";
    });
});


// 19-mashq Berilgan massivdagi eng katta elementni toping va ekranga chiqaring.

document.getElementById('nineteen--btn').addEventListener('click', function () {
    let nineteenAnswer = "Massivdagi mavjud sonlar:" + "<br>";
    let numbers = [];
    let nineteenIndex = 0;

    for (let i = 0; i < 10; i++) {
        numbers.push(Math.trunc(Math.random() * 1000));
    }

    for (let i = 0; i < numbers.length; i++) {
        nineteenAnswer += " " + numbers[i] + " ";
    }

    nineteenAnswer += "<br><br>Yeng katta element:<br>";

    let nineteenCheck = Math.max(...numbers);


    for (let i = 0; i < numbers.length; i++) {
        if (nineteenCheck == numbers[i]) {
            nineteenIndex = i;
        }
    }

    nineteenAnswer += nineteenIndex + " <br> Uning qiymati: " + nineteenCheck;

    document.getElementById('nineteen--answer').innerHTML = nineteenAnswer;
    document.getElementById('nineteen--close').addEventListener('click', function () {
        document.getElementById('nineteen--answer').innerHTML = " ";
    });
});




// 20-mashq Berilgan massivdagi eng kichik elementni toping va ekranga chiqaring.
document.getElementById('twenty--btn').addEventListener('click', function () {
    let twentyAnswer = "Massivdagi mavjud sonlar:" + "<br>";
    let numbers = [];
    let twentyIndex = 0;
    for (let i = 0; i < 10; i++) {
        numbers.push(Math.trunc(Math.random() * 1000));
    }

    for (let i = 0; i < numbers.length; i++) {
        twentyAnswer += " " + numbers[i] + " ";
    }

    twentyAnswer += "<br><br>Yeng kichik element:<br>";
    let twentyCheck = Math.min(...numbers);


    for (let i = 0; i < numbers.length; i++) {
        if (twentyCheck == numbers[i]) {
            twentyIndex = i;
        }
    }

    twentyAnswer += twentyIndex + " <br> Uning qiymati: " + twentyCheck;

    document.getElementById('twenty--answer').innerHTML = twentyAnswer;
    document.getElementById('twenty--close').addEventListener('click', function () {
        document.getElementById('twenty--answer').innerHTML = " ";
    });
});


// 11-mashq Massivdagi barcha manfiy sonlarni ekranga chiqaring.
document.getElementById('twentyone--btn').addEventListener('click', function () {
    let twentyoneAnswer = "Massivdagi mavjud sonlar:" + "<br>";
    let numbers = [];
    let twentyoneRandom = 0;
    for (let i = 0; i < 10; i++) {

        if (Math.random() > 0.5) {
            twentyoneRandom = (Math.trunc(Math.random() * 1000));
            twentyoneRandom *= -1;
            numbers.push(twentyoneRandom);
            continue;
        }
        numbers.push(Math.trunc(Math.random() * 1000));
    }
    for (let i = 0; i < numbers.length; i++) {
        twentyoneAnswer += " " + numbers[i] + " ";

    }


    twentyoneAnswer += `<br><br>Massivdagi manfiy qiymatlar:<br>`;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            twentyoneAnswer += " " + numbers[i] + " ";
        }

    }


    document.getElementById('twentyone--answer').innerHTML = twentyoneAnswer;
    document.getElementById('twentyone--close').addEventListener('click', function () {
        document.getElementById('twentyone--answer').innerHTML = " ";
    });
});





// 12-mashq Massivdagi barcha sonlarni yig'indisini ekranga chiqaring, faqat manfiy sonlarni qo'shmang.
document.getElementById('twentytwo--btn').addEventListener('click', function () {
    let twentytwoAnswer = "Massivdagi mavjud sonlar:" + "<br>";
    let numbers = [];
    let twentytwoRandom = 0;
    let twentytwoSum = 0;
    for (let i = 0; i < 10; i++) {

        if (Math.random() > 0.5) {
            twentytwoRandom = (Math.trunc(Math.random() * 1000));
            twentytwoRandom *= -1;
            numbers.push(twentytwoRandom);
            continue;
        }
        numbers.push(Math.trunc(Math.random() * 1000));
    }
    for (let i = 0; i < numbers.length; i++) {
        twentytwoAnswer += " " + numbers[i] + " ";
    }

    twentytwoAnswer += `<br><br>Massivdagi musbat qiymatlar yig'indisi:<br>`;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            twentytwoSum += numbers[i];
        }
    }
    twentytwoAnswer += twentytwoSum;

    document.getElementById('twentytwo--answer').innerHTML = twentytwoAnswer;
    document.getElementById('twentytwo--close').addEventListener('click', function () {
        document.getElementById('twentytwo--answer').innerHTML = " ";
    });
});


// 23-mashq Massivning har bir elementini indekslari bilan birgalikda ekranga chiqaring.
document.getElementById('twentythree--btn').addEventListener('click', function () {
    let twentythreeAnswer = "Massivdagi mavjud elementlar:" + "<br>";
    let numbers = [];

    for (let i = 0; i < 10; i++) {
        numbers.push(Math.trunc(Math.random() * 1000));
    }

    for (let i = 0; i < numbers.length; i++) {
        twentythreeAnswer += i + "-element: " + numbers[i] + "<br>";
    }



    document.getElementById('twentythree--answer').innerHTML = twentythreeAnswer;
    document.getElementById('twentythree--close').addEventListener('click', function () {
        document.getElementById('twentythree--answer').innerHTML = " ";
    });
});





// 24-mashq  ta elementdan iborat massiv yarating va ularni indekslari teskari tartibda ekranga chiqaring.
document.getElementById('twentyfour--btn').addEventListener('click', function () {
    let twentyfourAnswer = "Massivdagi mavjud elementlar:" + "<br>";
    let numbers = [];

    for (let i = 0; i < 7; i++) {
        numbers.push(Math.trunc(Math.random() * 1000));
    }
    twentyfourAnswer+=numbers+"<br><br>";

    for (let i = numbers.length-1; i >= 0; i--) {
        twentyfourAnswer += i + "-indeks qiymati: " + numbers[i] + "<br>";
    }



    document.getElementById('twentyfour--answer').innerHTML = twentyfourAnswer;
    document.getElementById('twentyfour--close').addEventListener('click', function () {
        document.getElementById('twentyfour--answer').innerHTML = " ";
    });
});




// 25-mashq Berilgan massivdagi har bir elementni ikkinchi elementidan boshlab ekranga chiqaring

document.getElementById('twentyfive--btn').addEventListener('click', function () {
    let twentyfiveAnswer = "Massivdagi mavjud elementlar:" + "<br>";
    let numbers = [];

    for (let i = 0; i < 10; i++) {
        numbers.push(Math.trunc(Math.random() * 1000));
    }
    twentyfiveAnswer+=numbers+"<br><br>";

    for (let i = 1 ; i < numbers.length; i++) {
        twentyfiveAnswer += i + "-indeks qiymati: " + numbers[i] + "<br>";
    }



    document.getElementById('twentyfive--answer').innerHTML = twentyfiveAnswer;
    document.getElementById('twentyfive--close').addEventListener('click', function () {
        document.getElementById('twentyfive--answer').innerHTML = " ";
    });
});

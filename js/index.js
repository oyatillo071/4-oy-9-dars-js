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
    })
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
    })
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
    })
});
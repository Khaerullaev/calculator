// document.getElementById("hh").addEventListener("click", function() {
//     // alert("You have pressed  the button");
//     let imgc = document.querySelector(".li");
//     imgc.setAttribute("style", "color: red;");
// });

// document.getElementById("hh").addEventListener("click", function() {
//     // alert("You have pressed  the button");
//     let imgc = document.querySelector(".kj");
//     imgc.setAttribute("style", "color: red;");
// });

// document.getElementById("hh").addEventListener("click", function() {
//     // alert("You have pressed  the button");
//     let imgc = document.querySelector(".ol");
//     imgc.setAttribute("style", "color: yellow;");
// });

// document.getElementById("hh").addEventListener("click", function() {
//     // alert("You have pressed  the button");
//     let imgc = document.querySelector(".fj");
//     imgc.setAttribute("style", "color: yellow;");
// });

// document.getElementById("df").addEventListener("click", function() {
//     // alert("You have pressed  the button");
//     document.querySelector(".li").textContent = "ДОМ"
// });

// document.getElementById("df").addEventListener("click", function() {
//     // alert("You have pressed  the button");
//     document.querySelector(".ol").textContent = "ФОТОПРИЛОЖЕНИЕ"
// });

// document.getElementById("df").addEventListener("click", function() {
//     // alert("You have pressed  the button");
//     document.querySelector(".fj").textContent = "ДИЗАЙН"
// });

// document.getElementById("df").addEventListener("click", function() {
//     // alert("You have pressed  the button");
//     document.querySelector(".kj").textContent = "СКАЧАТЬ"
// });

// document.getElementById("df").addEventListener("click", function() {
//     // alert("You have pressed  the button");
//     document.querySelector(".gl").textContent = "ВАША ЖИЗНЬ, ФОТОГРАФИЯ"
// });
// let imc = document.getElementById("hh").addEventListener("click", function() {
//     let imgc = document.querySelector(".hl");
//     imgc.setAttribute("style", "color: red;");
// });


// document.getElementById("df").addEventListener("click", function() {
//     // alert("You have pressed  the button");
//     document.querySelector(".hl").textContent = "Запечатлейте свою жизнь на простой фотографии"
// });
//     let imgc = document.getElementById("hh").addEventListener("click", function() {
//     let imgc = document.querySelector(".gl");
//     imgc.setAttribute("style", "color: yellow;");
// });


// let numbers = [30, 20, 50, 40];
// let strings = ["Computer", "John", "Alina"];
// let random_obj = [true, false, "John", 45, 34.5]

// let list_in_list = [false, "Alina", [45, [60, 23], "John"], true];

// console.log(numbers);
// console.log(strings);
// console.log(random_obj);

// console.log(list_in_list);


// dlina  = numbers.length

// for (let i = 0; i < dlina; i++) {
//     console.log(numbers[i]);
// }

// let numbers = [30, 20, 50, 40];
// let strings = ["Computer", "Oleg", "Dianka"];
// let random_obj = [true, false, "Oleg", 21, 34.5]

// let list_in_list = [false, "Dianka", ["Loser", [40, ["Maceap", "Lutaman"]  ,21] ,"Deppsmaster"] ,"Oleg" ,true];

// console.log(numbers);
// console.log(strings);
// console.log(random_obj);

// console.log(list_in_list);
// //

// console.log(list_in_list[0]);

// // Создание массива

// let city = new Array("78", "Tashkent", 89, true);

// console.log(city);

// //Изменение элемента

// city[0] = "Samarkand";

// console.log(city);

// //Добавление

// city.push("New-York");

// console.log(city);

// // Удаление последнего элемента

// city.pop()

// console.log(city);

// // 

// city.shift(34);
// city.unshift()





// function toggleText() {
//     const heading = document.getElementById("myHeading");
//     const leading = document.getElementById("myLeading");
//     const aeading = document.getElementById("myAeading");
//     const beading = document.getElementById("myBeading");
//     const veading = document.getElementById("myVeading");
//     const geading = document.getElementById("myGeading");
    
//     if (heading.textContent === "ВАША ЖИЗНЬ, ФОТОГРАФИЯ") {
//         heading.textContent = "YOUR LIFE, A PHOTO";
//         leading.textContent = "print your life in a simple photo";
//         aeading.textContent = "HOME";
//         beading.textContent = "PHOTOAPP";
//         veading.textContent = "DESIGN";
//         geading.textContent = "DOWNLOAD";

//     } else {
//         heading.textContent = "ВАША ЖИЗНЬ, ФОТОГРАФИЯ";
//         leading.textContent = "напечатайте свою жизнь на простой фотографии";
//         aeading.textContent = "ДОМ";
//         beading.textContent = "ФОТОПРИЛОЖЕНИЕ";
//         veading.textContent = "ДИЗАЙН";
//         geading.textContent = "СКАЧАТЬ";
//     }
// }


let position = 0;

function moveBox() {
  position += 50; // Если + то каждый раз по 50 пикселей в правую сторону
  document.getElementById("box").style.left = position + "px";
}

let nosition = 0;

function noveBox() {
  nosition += 150; // Если + то каждый раз по 50 пикселей в правую сторону
  document.getElementById("nox").style.left = nosition + "px";
}

let losition = 0;

function loveBox() {
  losition += 140; // Если + то каждый раз по 50 пикселей в правую сторону
  document.getElementById("lox").style.left = losition + "px";
}


let position1 = 0;

function poveBox() {
  position1 += 120; // Если + то каждый раз по 50 пикселей в правую сторону
  document.querySelector(".moveImg").style.left = position1 + "px";
}

function poveBox() {
  position1 += 120; // Если + то каждый раз по 50 пикселей в правую сторону
  document.querySelector(".moveImg").style.left = position1 + "px";
}

let position2 = 0;

function noveBox() {
  position2 += 120; // Если + то каждый раз по 50 пикселей в правую сторону
  document.querySelector(".noveImg").style.left = position2 + "px";
}

    //     function toggleText() {
    //   const heading = document.getElementById("myLeading");
    //   const beading = document.getElementById("myBeading");

    //   if (heading.textContent === "напечатайте свою жизнь на простой фотографии") {
    //     heading.textContent = "print your life in a simple photo";
    //   } else {
    //     heading.textContent = "напечатайте свою жизнь на простой фотографии";
    //   }
    // }
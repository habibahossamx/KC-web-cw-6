alert("مرحبا بك في موقعي الذي سيحسب درجتك!!  ");

let g = prompt("اكتب درجتك هنا");

console.log(g );

if (g >=90) {
    console.log(" %cقد حصلت على امتياز 🥳" ,"background: green" ) ;
} else if (g>=80){
    console.log(" %c قد حصلت على جيد جداً🤩","background: orang" );
} else if (g>=70){
    console.log("%c  قد حصلت على جيد🙂" ,"background: blue");
} else if (g>=60){
    console.log(" %c قد حصلت على مقبول😕","background: brown" );
} else if (g>=50){
    console.log(" %c قد حصلت على ضعيف☹️","background: red" );
} else {
    console.log("راسب");
} 



//جافاسكريبت ليست جافا
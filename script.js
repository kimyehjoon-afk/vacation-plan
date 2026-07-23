// GlowUp Script

const todos = document.querySelectorAll(".todo input");
const progress = document.getElementById("progress");
const progressText = document.getElementById("progressText");

const level = document.getElementById("level");
const dday = document.getElementById("dday");


// 체크 상태 불러오기
todos.forEach((todo, index)=>{

    const saved = localStorage.getItem("todo_" + index);

    if(saved === "true"){
        todo.checked = true;
    }

    todo.addEventListener("change",()=>{

        localStorage.setItem(
            "todo_" + index,
            todo.checked
        );

        update();

    });

});


// 업데이트 함수

function update(){

    let complete = 0;


    todos.forEach((todo)=>{

        const box = todo.closest(".todo");
        const text = box.querySelector("span");


        if(todo.checked){

            complete++;

            text.style.textDecoration="line-through";
            text.style.opacity="0.5";
            box.style.background="#ede9fe";

        }

        else{

            text.style.textDecoration="none";
            text.style.opacity="1";
            box.style.background="#f8fafc";

        }

    });



    let percent = Math.round(
        complete / todos.length * 100
    );


    progress.style.width = percent + "%";
    progress.style.transition="0.5s";


    progressText.innerHTML =
    percent + "% 완료";


    updateLevel(complete);

}



// 레벨 시스템

function updateLevel(count){

    if(count >= 13){

        level.innerHTML =
        "Lv.4 갓생 마스터 🔥";

    }

    else if(count >= 9){

        level.innerHTML =
        "Lv.3 성장러 💪";

    }

    else if(count >= 5){

        level.innerHTML =
        "Lv.2 노력중 ✨";

    }

    else{

        level.innerHTML =
        "Lv.1 방학생 🌱";

    }

}



// D-Day

const openDate =
new Date("2026-08-12");


function updateDday(){

    const today = new Date();

    const gap =
    openDate - today;


    const day =
    Math.ceil(
        gap / (1000*60*60*24)
    );


    if(day >= 0){

        dday.innerHTML =
        "D-" + day;

    }
    else{

        dday.innerHTML =
        "개학 완료 🎉";

    }

}


updateDday();



// 기분 저장

const moods =
document.querySelectorAll(".mood button");


moods.forEach(button=>{

    button.addEventListener("click",()=>{

        moods.forEach(b=>{
            b.style.opacity="0.5";
        });


        button.style.opacity="1";


        localStorage.setItem(
            "todayMood",
            button.innerHTML
        );

    });

});



// 시작 실행

update();
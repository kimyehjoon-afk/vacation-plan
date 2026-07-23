// GlowUp Workout Script


const exercises = document.querySelectorAll(".todo input");


const progress =
document.getElementById("workProgress");


const doneText =
document.getElementById("done");




// 저장된 기록 불러오기

exercises.forEach((exercise,index)=>{


    const saved =
    localStorage.getItem(
        "exercise"+index
    );


    if(saved==="true"){

        exercise.checked=true;

    }




    exercise.addEventListener(
    "change",
    ()=>{


        localStorage.setItem(

            "exercise"+index,

            exercise.checked

        );


        updateWorkout();


    });


});





// 진행률 업데이트

function updateWorkout(){


    let complete=0;



    exercises.forEach(exercise=>{


        const box =
        exercise.closest(".todo");


        const text =
        box.querySelector("span");



        if(exercise.checked){


            complete++;


            text.style.textDecoration=
            "line-through";


            text.style.opacity=
            "0.5";


            box.style.background=
            "#ede9fe";


        }

        else{


            text.style.textDecoration=
            "none";


            text.style.opacity=
            "1";


            box.style.background=
            "#f8fafc";


        }



    });



    const percent =

    Math.round(

        complete / exercises.length * 100

    );



    progress.innerHTML =
    percent+"%";



    doneText.innerHTML =
    complete+"개";



}



updateWorkout();
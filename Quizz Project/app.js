const question = [{
        'que': 'Who is maker of this website  ',
        'a': 'krank',
        'b': 'Ravishek',
        'c': 'abhi',
        'd': 'both a and b',
        'correct': 'd'
    },
    {
        'que': 'Area 51 where exist',
        'a': 'Japan',
        'b': 'America',
        'c': 'Germany',
        'd': 'Russia',
        'correct': 'b'
    },
    {
        'que': 'Who is little coder',
        'a': 'Ravsihek',
        'b': 'Krank',
        'c': 'lalit',
        'd': 'both a and b',
        'correct': 'd'
    },

    {
        'que': 'Which language easy',
        'a': 'C',
        'b': 'C++',
        'c': 'Java',
        'd': 'None of above this ',
        'correct': 'a'
    },
    {
        'que': 'Which language is Hard',
        'a': 'C',
        'b': 'JavaScript',
        'c': 'pta ni ',
        'd': 'Java ',
        'correct': 'c'
    }
]
let index = 0;
let total = question.length;
let right = 0,
    wrong = 0
const qeuebox = document.getElementById("qeuebox")
const optionInputs = document.querySelectorAll('.option')

function loadQuestion() {
    if (index === total) {
        return end()
    }
    reset()
    const data = question[index]
    qeuebox.innerText = data.que;
    optionInputs[0].nextElementSibling.innerText = data.a
    optionInputs[1].nextElementSibling.innerText = data.b
    optionInputs[2].nextElementSibling.innerText = data.c
    optionInputs[3].nextElementSibling.innerText = data.d
    optionInputs[4].nextElementSibling.innerText = data.e
    optionInputs[5].nextElementSibling.innerText = data.f

}


function submitAns() {
    const data = question[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        right++;

    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

function getAnswer() {
    let answer;
    optionInputs.forEach(
        (input) =>

        {
            if (input.checked) {


                answer = input.value;

            }
        }
    )
    return answer;
}



function reset() {
    optionInputs.forEach(
        (input) =>

        {
            input.checked = false;
        }
    )
}

function end() {
    // <div style = "text=align:center" >
    document.getElementById("box").innerHTML = `<h3>thanks for playing</h3>
    <h2>${right}/${total} are correct</h2> `


    // 

}


loadQuestion();
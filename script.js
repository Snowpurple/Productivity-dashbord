function openFeatures() {
    var allElems = document.querySelectorAll('.elem')
    var fullElemPage = document.querySelectorAll('.fullElem')
    var fullElemPageBackBtn = document.querySelectorAll('.fullElem .back')

    allElems.forEach(function(elem) {
        elem.addEventListener('click', function() {
            var index = parseInt(elem.id);
            fullElemPage[index].style.display = 'block'
        })
    })

    fullElemPageBackBtn.forEach(function(back) {
        back.addEventListener('click', function() {
            fullElemPage[back.id].style.display = 'none'
        })
    })
}

openFeatures();
let form = document.querySelector('.addTask form')
let taskInput = document.querySelector('.addTask  form input')
let taskDetailsInput = document.querySelector('.addTask  form textarea')

let taskCheckBox = document.querySelector('.addTask form #check')


let currentTask = [{
        task: 'Mandir jao',
        details: 'Har din mandir jao',
        imp: true
    },
    {
        task: 'Recording karo',
        details: 'cohort ki',
        imp: true
    }, {
        task: 'Lunch at 2pm',
        details: 'nhi to mammi marengi',
        imp: false
    },
]

form.addEventListener('submit', function(e) {
    e.preventDefault()

    console.log(taskInput.value);
    console.log(taskDetailsInput.value);
    console.log(taskCheckBox.checked);
})

function renderTask() {
    var allTask = document.querySelector('.allTask')

    var sum = ''

    currentTask.forEach(function(elem) {
        sum += `
        <div class="task">
            <h5>${elem.task}
            <span class="${elem.imp ? 'imp' : ''}"></span>
            </h5>
            <button>Completed</button>
        </div>`

    })
    allTask.innerHTML = sum
}

renderTask();
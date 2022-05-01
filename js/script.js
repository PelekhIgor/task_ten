const inputE = document.getElementById('input')
const btnE = document.getElementById('btn')          // метод поиска по id
const contE = document.getElementById('container')

btnE.addEventListener('click', onAddTodo)
contE.addEventListener('click', onTodoClick)

function onAddTodo (e){
    const element = `<div name ='todo' class = "item">
    <span name = 'delete' style="cursor: pointer" class = "delete">x</span>
${inputE.value}
</div>`;
    contE.innerHTML += element;     // Свойство innerHTML позволяет получить HTML-содержимое элемента в виде строки.
}


function onTodoClick(e){
    [...e.target.attributes].forEach((el) => {    //  возвращает массив атрибутов, с помощью метода forEach перебираем их.
        if(el.value === 'delete'){
            deleteTodo(e.target)
        }
        if(el.value === 'todo'){
            completeTodo(e.target)
        }
    })

}

function deleteTodo(el){
    el.closest('.item').remove()  // closest() возвращает ближайший родительский элемент (или сам элемент)
}
function completeTodo(el){
    el.classList.toggle('complete') // toggle, видимый элемент скрывает, а невидимый - показывает
}








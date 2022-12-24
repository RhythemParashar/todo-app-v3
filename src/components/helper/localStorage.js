const checkItem = (itemName) => {
    return localStorage.getItem(itemName) ? true : false;
}

const createItem = (itemName) => {
    
    if (!checkItem(itemName)) {
        localStorage.setItem(itemName, JSON.stringify([]));
    }
}

const generateId = (arr) => {
    if (arr.length === 0) {
        return 1;
    }
    return arr[arr.length - 1].id + 1
}

const dispatchItem = (todoItem) => {
    if (checkItem('todoList')) {
        let arr = JSON.parse(localStorage.todoList);
        todoItem = {
            id: generateId(arr),
            ...todoItem
        }
        arr.push(todoItem);
        localStorage.todoList = JSON.stringify(arr);
    }
    else {
        createItem('todoList');
        let arr = JSON.parse(localStorage.todoList);
        todoItem = {
            id: generateId(arr),
            ...todoItem
        }
        arr.push(todoItem);
        localStorage.todoList = JSON.stringify(arr);
    }
}

const getItems = () => {
    if (checkItem('todoList')) {
        return JSON.parse(localStorage.todoList);
    }
    else {
        createItem('todoList');
        return JSON.parse(localStorage.todoList);
    }
    
}

const removeItemById = (id) => {
    if (checkItem('todoList')) {
        let arr = JSON.parse(localStorage.todoList);
        let arr1 = arr.filter((item) => item.id !== id)
        localStorage.todoList = JSON.stringify(arr1);
    }
}

const updateCompletedFlag = (id) => {
    if (checkItem('todoList')) {
        let arr = JSON.parse(localStorage.todoList);
        let arr1 = arr.map((item) => {
            if (item.id === id) {
                item = {
                    ...item,
                    isCompleted: !item.isCompleted
                }
            }

            return item;
        })
        localStorage.todoList = JSON.stringify(arr1);
    }
}

const removeAllCompleted = () => {

    if (checkItem('todoList')) {
        let arr = JSON.parse(localStorage.todoList);
        let arr1 = arr.filter((item) => item.isCompleted === false)
        localStorage.todoList = JSON.stringify(arr1);
    }

}

export {createItem, dispatchItem, getItems, removeItemById, updateCompletedFlag, removeAllCompleted}
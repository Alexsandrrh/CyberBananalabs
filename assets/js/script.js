$(document).ready(function () {

    let authParent = $('.js-authParent'),
        inputAuth = $('.js-authInput'),
        btnAuth = $('.js-authBtn'),
        authPanel = $('.js-authPanel');

    let currentUser = null;
    let userLoggedIn = false;


    let newUserName = null;
    let newUserId = null;

    let userPost = null;
    let userList = [
        {
            password: 7589,
            type: 'Админ',
            name: 'Александр',
            age: 16
        },
        {
            password: 3589,
            type: 'Юзер',
            name: 'Юра',
            age: 17
        },
        {
            password: '0589',
            type: 'Хакер',
            name: 'Агент Кокс',
            age: undefined
        }
    ];


    btnAuth.on('click', function () {
        checkPass(inputAuth.val());
    });

    inputAuth.focus(function () {
       authParent.removeClass('-error');
    });

    $('.auth-form').on('submit', function (e) {
        e.preventDefault();
       checkPass(inputAuth.val());
    });


    function checkPass(userPass) {
        for (let i = 0; i < userList.length; i++) {
            if (userPass == userList[i].password) {
                userLoggedIn = true;
                currentUser = userList[i];
                console.log(currentUser);
            }
        }

        if (!userLoggedIn) {
            authParent.addClass('-error');
        } else {
            interfaceBuilder.showMessage(`Welcome on board, ${currentUser.name}`);
        }
    }

    // interfaceBuilder.build(interfaceBuilder.parent, 'login');

    function setUserActions() {
        if (currentUser.type == 'Админ') {
            createNewUser();
        } else if (currentUser.type == 'Юзер') {
            createPost();
        } else if (currentUser.type == 'Хакер') {
            downloadTheInternet();
        }
    }

    function createNewUser() {
        if (confirm('Добавить нового пользователя?')) {
            newUserName = prompt('Введите имя нового пользователя:');
            newUserId = (Math.random() * 100).toFixed();
            alert(newUserId + ' === ' + newUserName);
        }
    }

    function createPost() {
        userPost = prompt('Напишите что-то прекрасное');
        if (userPost == '') {
            alert('Вы нечего не написали');
            createPost();
        } else {
            alert(userPost);
        }

    }

    function downloadTheInternet() {
        confirm('Скачать интернет?')
    }

});

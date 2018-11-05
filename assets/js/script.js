$(document).ready(function () {

    let authParent = $('.js-authParent');

    let currentUser = null;
    let userLoggedIn = false;

    let userList = [
        {
            password: 7589,
            avatar : 'https://images.unsplash.com/photo-1539545880148-642b8c315b4d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3419b28d098f1f62085c5f4da888ab05&auto=format&fit=crop&w=334&q=80',
            type: 'Админ',
            name: 'Александр',
            age: 16
        },
        {
            password: 3589,
            avatar : 'https://images.unsplash.com/photo-1539553139747-e2ae5159d2e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=89e76f2a8cf3a81c8dba40f5dd01bb0f&auto=format&fit=crop&w=1500&q=80',
            type: 'Юзер',
            name: 'Юра',
            age: 17
        },
        {
            password: '0589',
            avatar : 'https://images.unsplash.com/photo-1536821571242-75b70c679796?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3de7bb2ee5e90d9bbcbadbcb7066e055&auto=format&fit=crop&w=772&q=80',
            type: 'Хакер',
            name: 'Агент Кокс',
            age: undefined
        }
    ];

    interfaceBuilder.buildAdminInterface(userList);

    $('body').on('click', '.js-addUser',function () {
        modalService.openModal('newUser');
    });

    $('body').on('click', '.modal__bg',function () {
        $('.modal').remove();
    });

    $('body').on('click', '.js-newUserBtn', () => {
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        let newUser = {};
        newUser.password = getRandomInt(1000, 9999);
        newUser.name = $('.js-newNameInput').val();
        newUser.age = $('.js-newAgeInput').val();
        newUser.type = $('.js-newTypeInput').val();
        userList.push(newUser);
        console.log(userList);
    });


    $('.js-authBtn').on('click', function () {
        checkPass($('.js-authInput').val());
    });

    $('.js-authInput').focus(function () {
       authParent.removeClass('-error');
    });

    $('.auth-form').on('submit', function (e) {
        e.preventDefault();
        checkPass($('.js-authInput').val());
    });


    function checkPass(userPass) {
        userList.forEach(function (user) {
            if (userPass == user.password) {
                userLoggedIn = true;
                currentUser = user;
                console.log(currentUser);
            }
        });

        if (!userLoggedIn) {
            authParent.addClass('-error');
        } else {
            interfaceBuilder.showMessage(`Welcome on board, ${currentUser.name}`);
        }
    }

});

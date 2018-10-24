let interfaceBuilder = {};

interfaceBuilder.parent = $('.js-mainParent');
interfaceBuilder.interfaces = {
    login : '<div class="auth-panel js-authPanel">\n' +
        '        <h1>CyberBanana Labs</h1>\n' +
        '        <div class="card">\n' +
        '            <form class="auth-form">\n' +
        '                <fieldset class="input js-authParent">\n' +
        '                    <label for="userPass">Insert User Pass</label>\n' +
        '                    <div class="input__container">\n' +
        '                        <input id="userPass" type="text" class="input__field -with-btn js-authInput" autocomplete="off">\n' +
        '                        <div class="input__btn js-authBtn">></div>\n' +
        '                    </div>\n' +
        '                    <div class="input__error">\n' +
        '                        <span>No such user</span>\n' +
        '                    </div>\n' +
        '                </fieldset>\n' +
        '            </form>\n' +
        '        </div>\n' +
        '    </div>',

    base : '<div class="panel">\n' +
        '        <div class="card">\n' +
        '            <div class="card__header js-cardHeader">\n' +
        '                <h2></h2>\n' +
        '            </div>\n' +
        '            <div class="card__body js-cardBody">\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>'
};

interfaceBuilder.build = function (interface) {
    $('.js-mainParent').html(interfaceBuilder.interfaces[interface]);
};

interfaceBuilder.showMessage = function (message) {
    interfaceBuilder.hideCurrent();
    setTimeout(function () {
        interfaceBuilder.parent.html(`<h1>${message}</h1>`);
    }, 500);
};

interfaceBuilder.hideCurrent = function () {
    interfaceBuilder.parent.find('div').fadeOut(500);
};

interfaceBuilder.hideMessage = setTimeout(function () {

});

interfaceBuilder.prepareUserList = function (userList) {
    let result = '<div class="user-list">';
    userList.forEach(function (user) {
        result += '<div class="user-list__item card">\n' +
            '                        <div class="user-list__avatar" style="background-image: url(' + user.avatar + ');"></div>\n' +
            '                        <div class="user-list__info">\n' +
            '                            <p class="user-list__type">' + user.type + '</p>\n' +
            '                            <p class="user-list__name">' + user.name + '</p>\n' +
            '                            <p class="user-list__id">ID:<span>' + user.password + '</span></p>\n' +
            '                        </div>\n' +
            '                    </div>';
    });

    return result += '<div class="user-list__item  js-addUser card">' +
                    '<svg class="icon-add">' +
                        '<use xlink:href="assets/add.svg#icon"></use>' +
                    '</svg>' +
            '</div>' +
        '</div>';
};

interfaceBuilder.buildAdminInterface = function (userList) {
    interfaceBuilder.build('base');
    interfaceBuilder.parent.find('.js-cardHeader h2').text('Admin Interface');
    interfaceBuilder.parent.find('.js-cardBody').html(interfaceBuilder.prepareUserList(userList));
};
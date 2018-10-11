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
        '                        <input id="userPass" type="text" class="input__field js-authInput" autocomplete="off">\n' +
        '                        <div class="input__btn js-authBtn">></div>\n' +
        '                    </div>\n' +
        '                    <div class="input__error">\n' +
        '                        <span>No such user</span>\n' +
        '                    </div>\n' +
        '                </fieldset>\n' +
        '            </form>\n' +
        '        </div>\n' +
        '    </div>'
};

interfaceBuilder.build = function (parent, interface) {
    parent.html(interfaceBuilder.interfaces[interface]);
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

let modalService = {};

modalService.modals = {
    base : '<div class="modal">' +
                '<div class="modal__bg"></div>' +
                '<div class="modal__body js-createModal card"></div>' +
            '</div>',

    newUser : '<h4 class="modal__title">Create user</h4>\n' +
        '                <form class="new-user-form">\n' +
        '                    <div class="row">\n' +
        '                        <!-- -->\n' +
        '                        <fieldset class="input js-authParent">\n' +
        '                            <label for="userName">Name</label>\n' +
        '                            <div class="input__container">\n' +
        '                                <input id="userName" type="text" class="input__field js-newNameInput" autocomplete="off">\n' +
        '                            </div>\n' +
        '                            <div class="input__error">\n' +
        '                                <span>No such user</span>\n' +
        '                            </div>\n' +
        '                        </fieldset>\n' +
        '\n' +
        '                        <fieldset class="input js-authParent">\n' +
        '                            <label for="userAge">Age</label>\n' +
        '                            <div class="input__container">\n' +
        '                                <input id="userAge" type="text" class="input__field js-newAgeInput" autocomplete="off">\n' +
        '                            </div>\n' +
        '                            <div class="input__error">\n' +
        '                                <span>No such user</span>\n' +
        '                            </div>\n' +
        '                        </fieldset>\n' +
        '                    </div>\n' +
        '\n' +
        '                    <fieldset class="input js-authParent">\n' +
        '                        <label for="userType">Type</label>\n' +
        '                        <div class="input__container">\n' +
        '                            <input id="userType" type="text" class="input__field -with-btn js-newTypeInput" autocomplete="off">\n' +
        '                            <div class="input__btn js-newUserBtn">></div>\n' +
        '                        </div>\n' +
        '                        <div class="input__error">\n' +
        '                            <span>No such user</span>\n' +
        '                        </div>\n' +
        '                    </fieldset>\n' +
        '                </form>'
};

modalService.openModal = (modal) => {
    $('.js-createModal').html(modal);
};



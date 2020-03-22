(function () {
    'use strict';

    $("#btnLogin").on('click', function () {
        if ($("#loginForm").parsley().validate()) {
            window.location.href = "../index.html";
        }
    })
});
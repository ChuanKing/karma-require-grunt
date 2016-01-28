requirejs.config({
    paths: {
        'jquery': '../node_modules/jquery/dist/jquery',
        'underscore': '../node_modules/jquery/dist/underscore'
    },

    shim: {
        'underscore': {
            exports: '_'
        }
    }
});

define(['app', 'jquery'], function (App, $) {
    var app = new App($('body'));
    app.render();
});

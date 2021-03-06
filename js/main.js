(function () {
    'use strict';
    require.config({
        baseUrl: './js/',
        path: {
            'util': 'util'
        },
        urlArgs: 'bust=' + (new Date()).getTime()
    });

    Function.prototype.method = function (name, func) {
        this.prototype[name] = func;
        return this;
    };

    require([
        'app',
        'util'
    ], function (App, Util) {
        var canvas = document.getElementById('canvas');
        canvas.width = 1000;
        canvas.height = 1400;
        canvas.style.width = canvas.width / 2 + 'px';
        canvas.style.height = canvas.height / 2 + 'px';
        canvas.getContext('2d').scale(2, 2);
        var app = new App(canvas);
        app.reset();
        requestAnimationFrame(function () {
            app.main();
        });

        var rect = canvas.getBoundingClientRect();
        var getPositionInCanvas = function (e) {
            return {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            }
        };
        canvas.addEventListener('click', function (e) {
            app.click(getPositionInCanvas(e))
        });

        canvas.addEventListener('mousemove', function (e) {
            app.move(getPositionInCanvas(e));
        });
    });
}());

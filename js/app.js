(function () {
    "use strict";
    define([
        'util',
        'chess',
        'model/constants',
        'map'
    ], function (Util, Chess, Constants, Map) {
        var App = function (canvas) {
            this.canvas = canvas;
            this.ctx = canvas.getContext('2d');
            this.chesses = [];
            this.selectedChess = null;
            this.input = {
                click: null,
                hover: null
            };
        };

        App.method('reset', function start() {
            var i, chessID = 0,
                mapPosition = {
                    x: 50,
                    y: 150
                };
            this.mapPosition = mapPosition;

            this.map = new Map(this.ctx, {
                x: mapPosition.x,
                y: mapPosition.y,
                block: 100
            });

            for (i = 0; i < 5; i++) {
                var chess = new Chess({
                    x: mapPosition.x,
                    y: mapPosition.y,
                    block: 100
                }, 0, i, 25, Constants.ChessType.white, ++chessID);
                this.chesses.push(chess);
            }

            for (i = 0; i < 5; i++) {
                var chess = new Chess({
                    x: mapPosition.x,
                    y: mapPosition.y,
                    block: 100
                }, 4, i, 25, Constants.ChessType.black, ++chessID);
                this.chesses.push(chess);
            }
        });

        App.method('update', function () {
            var chess;
            if (this.input.click) {
                chess = this._getChessByPosition(this.input.click);
                if (chess) {
                    if (this.selectedChess) {
                        this.selectedChess.reset();
                    }
                    chess.select();
                    this.selectedChess = chess;
                }
            }
        });

        App.method('render', function () {
            var i, length;
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.map = new Map(this.ctx, {
                x: this.mapPosition.x,
                y: this.mapPosition.y,
                block: 100
            });

            for (var i = 0, length = this.chesses.length; i < length; i++) {
                Util.drawChess(this.ctx, this.chesses[i]);
            }
        });

        App.method('main', function () {
            this.update();
            this.render();
            var self = this;
            requestAnimationFrame(function () {
                self.main();
            });
        });

        App.method('_getChessByPosition', function (position) {
            var i, length, chess;
            for (i = 0, length = this.chesses.length; i < length; i++) {
                chess = this.chesses[i];
                if (chess.contain(position)) {
                    return chess;
                }
            }
        });

        App.method('click', function (position) {
            this.input.click = position;
        });

        App.method('move', function (position) {
            this.input.hover = position;
        });

        return App;
    });
}());

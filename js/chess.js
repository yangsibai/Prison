(function () {
    "use strict";
    define([
        'model/constants'
    ], function (Constants) {
        /**
         * chess
         * @param ctx canvas 2d context
         * @param map map information
         * @param map.x map start x
         * @param map.y map start y
         * @param map.block map block width
         * @param row row index
         * @param column column index
         * @constructor
         */
        var Chess = function (map, row, column, radius, chessType, id) {
            this.map = map;
            this.x = map.x + map.block * row;
            this.y = map.y + map.block * column;
            this.radius = radius;
            this.id = id;
            this.chessType = chessType;
            this.reset();
        };

        Chess.method('contain', function (position) {
            var dx = position.x - this.x,
                dy = position.y - this.y;
            return dx * dx + dy * dy <= this.radius * this.radius;
        });

        /**
         * selected
         */
        Chess.method('select', function () {
            if (this.chessType === Constants.ChessType.white) {
                this.style.stroke = '#ff0000';
                this.style.fill = '#ddd';
            } else {
                this.style.stroke = '#00ff00';
                this.style.fill = '#333';
            }
        });

        Chess.method('reset', function () {
            if (this.chessType === Constants.ChessType.white) {
                this.style = {
                    lineWidth: 2,
                    fill: 'white',
                    stroke: 'blue'
                };
            } else {
                this.style = {
                    lineWidth: 2,
                    fill: 'black',
                    stroke: 'red'
                };
            }
        });

        return Chess;
    });

}());

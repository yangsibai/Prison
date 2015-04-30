(function () {
    "use strict";
    define([
        'util'
    ], function (Util) {
        var App = function (canvas) {
            this.ctx = canvas.getContext('2d');
        };

        App.method('start', function start() {
            this.map({
                x: 50,
                y: 50,
                block: 100
            });
        });


        App.method('map', function (options) {
            this.ctx.beginPath();
            this.ctx.lineWidth = 1;
            this.ctx.strokeStyle = 'red';
            this.drawPrison({
                x: options.x + 2 * options.block,
                y: options.y,
                block: options.block
            });
            this.ctx.stroke();
            this.ctx.strokeStyle = '#333';
            this.drawMap({
                x: options.x,
                y: options.y + options.block * 2,
                block: options.block
            });
            this.ctx.stroke();
        });

        App.method('drawPrison', function (options) {
            Util.drawLinesFromSamplePoint(this.ctx, {
                x: options.x,
                y: options.y
            }, [
                {
                    x: options.x - options.block,
                    y: options.y + options.block
                },
                {
                    x: options.x,
                    y: options.y + options.block * 2
                },
                {
                    x: options.x + options.block,
                    y: options.y + options.block
                }
            ]);

            Util.drawLinesFromSamplePoint(this.ctx, {
                x: options.x,
                y: options.y + options.block * 2
            }, [
                {
                    x: options.x - options.block,
                    y: options.y + options.block
                },
                {
                    x: options.x + options.block,
                    y: options.y + options.block
                }
            ]);

            Util.drawLine(this.ctx, {
                x: options.x - options.block,
                y: options.y + options.block
            }, {
                x: options.x + options.block,
                y: options.y + options.block
            })
        });

        /**
         * 绘制地图
         * @param {Object} options 设置
         * @param {number} options.x x 坐标
         * @param {number} options.y y 坐标
         */
        App.method('drawMap', function (options) {
            var width = options.block * 4,
                half = options.block * 2;

            this.ctx.rect(options.x, options.y, width, width);

            // horizontal middle line
            Util.drawLine(this.ctx, {
                x: options.x,
                y: options.y + half
            }, {
                x: options.x + width,
                y: options.y + half
            });

            this.ctx.rect(options.x + options.block, options.y, half, width);
            this.ctx.rect(options.x, options.y + options.block, width, half);

            Util.drawLine(this.ctx, {
                x: options.x,
                y: options.y
            }, {
                x: options.x + width,
                y: options.y + width
            });

            Util.drawLine(this.ctx, {
                x: options.x,
                y: options.y + width
            }, {
                x: options.x + width,
                y: options.y
            });


            Util.drawLinesFromSamplePoint(this.ctx, {
                x: options.x + half,
                y: options.y
            }, [
                {
                    x: options.x,
                    y: options.y + half
                },
                {
                    x: options.x + width,
                    y: options.y + half
                },
                {
                    x: options.x + half,
                    y: options.y + width
                }
            ]);

            Util.drawLinesFromSamplePoint(this.ctx, {
                x: options.x + half,
                y: options.y + width
            }, [
                {
                    x: options.x,
                    y: options.y + half
                },
                {
                    x: options.x + width,
                    y: options.y + half
                }
            ]);
        });

        return App;
    });
}());

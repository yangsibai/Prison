(function () {
    "use strict";
    define([
        'util'
    ], function (Util) {
        var Map = function (ctx, options) {
            this.ctx = ctx;
            this.x = options.x;
            this.y = options.y;

            var width = options.block * 4,
                half = options.block * 2;

            this.ctx.strokeStyle = '#333';
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

            this.ctx.stroke();
        };

        return Map;
    });
}());

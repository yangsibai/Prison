(function () {
    "use strict";
    define([], function () {
        function drawLine (context, from, to) {
            context.moveTo(from.x, from.y);
            context.lineTo(to.x, to.y);
        }

        /**
         * draw multi lines from same point
         * @param context
         * @param from
         * @param toArray
         */
        function drawLinesFromSamePoint (context, from, toArray) {
            var i, length;
            for(i = 0, length = toArray.length; i < length; i ++) {
                drawLine(context, from, toArray[i]);
            }
        }

        /**
         * get backing scale
         * @returns {*}
         */
        function backingScale() {
            if ('devicePixelRatio' in window) {
                if (window.devicePixelRatio > 1) {
                    return window.devicePixelRatio;
                }
            }
            return 1;
        }

        function drawChess(ctx, chess) {
            ctx.beginPath();
            ctx.arc(chess.x, chess.y, chess.radius, 0, 2 * Math.PI);

            ctx.fillStyle = chess.style.fill;
            ctx.lineWidth = chess.style.lineWidth;
            ctx.strokeStyle = chess.style.stroke;
            ctx.fill();
            ctx.stroke();
        }

        return {
            drawLine: drawLine,
            backingScale: backingScale,
            drawLinesFromSamplePoint: drawLinesFromSamePoint,
            drawChess: drawChess
        }
    });
}());

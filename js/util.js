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

        function backingScale() {
            if ('devicePixelRatio' in window) {
                if (window.devicePixelRatio > 1) {
                    return window.devicePixelRatio;
                }
            }
            return 1;
        }

        return {
            drawLine: drawLine,
            backingScale: backingScale,
            drawLinesFromSamplePoint: drawLinesFromSamePoint
        }
    });
}());

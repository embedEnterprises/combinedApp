var ctx;
var canvas = {
  width:325,
  height:125,
  w : 50,
  h : 50,
  x : 27,
  y : 35
};
offsetXVal = 500;
offsetYVal = 350;
iconSize = 17.5;
iconSizeP = 2;


/**3
 * Converts angle in degrees to radians.
 * @param {number} deg Angle in degrees.
 * @returns Angle in radians.
 */
function deg2Rad(deg) {
    return deg * (Math.PI / 180);
}

/**
 * Converts angle in radians to degrees.
 * @param {number} rad Angle in radians.
 * @returns Angle in degrees.
 */
function rad2Deg(rad) {
    return rad * (180 / Math.PI);
}

/** Class representing a circle (speedometer, tachometer, etc.) */
class Circle {
    /**
     * Creating a circle with the given params.
     * @param {Object} options Parameters of the circle and contained elements.
     * @param {number} options.circleBorderWidth Circle border width in pixels.
     * @param {string} options.circleBorderColor Circle border color.
     * @param {string} options.circleFillColor Circle fill color.
     * @param {string} options.markFillColor Color fill of mark.
     * @param {string} options.markStrokeColor Color fill of mark border.
     * @param {string} options.markFontColor Color of text mark.
     * @param {number} options.markFontSize Font size of text mark in pixels.
     * @param {string} options.markFontStyle Font style of text mark.
     * @param {string} options.markFontFamily Font family of text mark.
     * @param {string} options.arrowBodyFillColor Color fill of arrow circle in center.
     * @param {string} options.arrowBodyStrokeColor Border color of arrow circle in center.
     * @param {string} options.arrowColor Color of arrow (speedometer, etc).
     * @param {number} options.arrowBaseWidth Arrow base width.
     * @param {number} options.arrowBorderWidth Arrow border width.
     * @param {string} options.dangerColor Color of danger.
     * @param {number} options.dangerZoneWidth Width of danger zone.
     * @param {string} options.turnSignalColor Color of enabled turn signal.
     * @param {string} options.speedUnit Speed unit (km, etc).
     * @param {Object} options.icons Dictionary with icons names as key and icons objects as value.
     * @param {Object} options.turnSignal Dictionary with side of turn signal as key and turn signal object as value.
     */
    constructor(options) {
        this.circleBorderWidth = options.circleBorderWidth;
        this.circleBorderColor = options.circleBorderColor;
        this.circleFillColor = options.circleFillColor;

        this.markFillColor = options.markFillColor;
        this.markStrokeColor = options.markStrokeColor;
        this.markFontColor = options.markFontColor;
        this.markFontSize = options.markFontSize;
        this.markFontStyle = options.markFontStyle;
        this.markFontFamily = options.markFontFamily;

        this.arrowBodyFillColor = options.arrowBodyFillColor;
        this.arrowBodyStrokeColor = options.arrowBodyStrokeColor;

        this.arrowColor = options.arrowColor;
        this.arrowBaseWidth = options.arrowBaseWidth;
        this.arrowBorderWidth = options.arrowBorderWidth;

        this.dangerColor = options.dangerColor;
        this.dangerZoneWidth = options.dangerZoneWidth;

        this.turnSignalColor = options.turnSignalColor;

        this.speedUnit = options.speedUnit;

        this.icons = options.icons;

        this.turnSignal = options.turnSignal;

        this.startAngle = 0;
        this.endAngle = Math.PI * 2;

        this.radius = canvas.height * 0.35;
    }

    /**
     * Helper method. Draws coordinate lines in the center of coordinates.
     */
    drawSupport() {
        ctx.beginPath();
        ctx.moveTo(this.x, 0);
        ctx.lineTo(this.x, canvas.height);
        ctx.moveTo(0, this.y);
        ctx.lineTo(canvas.width, this.y);
        ctx.closePath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = this.supportColor;
        ctx.stroke();
    }

    /**
     * Draws circles and their stroke.
     */
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.beginPath();
        ctx.arc(0, 0, this.radius, this.startAngle, this.endAngle);
        ctx.closePath();
        ctx.fillStyle = this.circleFillColor;
        ctx.lineWidth = this.circleBorderWidth;
        ctx.strokeStyle = this.circleBorderColor;
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }

    /**
     * Calculate angles to indicate location of marks.
     * @param {number} count The number of marks for which you need to calculate the angle.
     * @param {number} degAngle Maximum angle (in degrees) for which angle of marks are calculated.
     * @param {number} [startAngle=0] The angle (in degrees) from which to start the calculation.
     * @returns {number[]} Array of calculated angles.
     */
    calcMarksAngles(count, degAngle, startAngle=0) {
        const addAngle = deg2Rad((degAngle - 180) / 2);
        const radAngle = deg2Rad(degAngle);
        let angles = [];

        for (let i = 0; i < count; i++) {
            const angle = ((i * radAngle / (count - 1)) - addAngle - deg2Rad(startAngle)) * (-1);
            angles.push(angle);
        }

        return angles;
    }

    /**
     * Draws danger zone on circles.
     * @param {number[]} angles Array of marks angles.
     * @param {number} offset Offset from edge of circle.
     * @param {number} [firstNMarks=0] Number of first marks to fill in danger zone.
     * @param {number} [lastNMarks=0] Number of last marks to fill in danger zone.
     */
    drawDangerZone(angles, offset, firstNMarks=0, lastNMarks=0) {
        const radius = this.radius - this.circleBorderWidth - offset;

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.beginPath();

        if (lastNMarks > 0) {
            ctx.arc(0, 0, radius, angles[lastNMarks - 1], angles[0], false);
        } else if (firstNMarks > 0) {
            ctx.arc(0, 0, radius, angles[firstNMarks - 1], angles[0], false);
        }

        ctx.lineWidth = this.dangerZoneWidth;
        ctx.strokeStyle = this.dangerColor;
        ctx.stroke();
        ctx.restore();
    }

    /**
     * Draws specific mark.
     * @param {number} x1 x-coordinate where to start drawing.
     * @param {number} y1 y-coordinate where to start drawing.
     * @param {number} x2 x-coordinate where to finish drawing.
     * @param {number} y2 y-coordinate where to finish drawing.
     * @param {number} lineWidth Width of line.
     * @param {string} strokeStyle Color of line.
     */
    drawMark(x1, y1, x2, y2, lineWidth, strokeStyle) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.closePath();
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = strokeStyle;
        ctx.stroke();
    }

    /**
     * Draws marks on circles.
     * @param {number[]} angles Array of marks angles.
     * @param {number} length Length of marks. Calculated from center of circle, lower value = bigger mark length.
     * @param {number} lineWidth Width of marks.
     * @param {boolean} border Draws border to mark or not.
     * @param {number} [offset=0] Offset from edge of circle.
     * @param {number} [firstNMarks=0] Number of first marks to fill in danger color.
     * @param {number} [lastNMarks=0] Number of last marks to fill in danger color.
     * @param {'even'|'odd'|'all'} [skip=null] 'even' to skip even marks, 'odd' to skip odd marks, 'all' to skip all marks.
     * @param {number} [skipFrom=0] Skip from mark. Use only if param 'skip' is not null. If 'skip' is 'all', it leave marks from.
     * @param {number} [skipTo=0] Skip to mark. Use only if param 'skip' is not null. If 'skip' is 'all', it leave marks from.
     */
    drawMarks(angles, length, lineWidth, border=true, offset=0, firstNMarks=0, lastNMarks=0, skip=null, skipFrom=0, skipTo=0) {
        const count = angles.length - 1;
        const s = count - firstNMarks;
        const e = count - (count - lastNMarks);
        const sf = count - skipFrom;
        const st = count - skipTo;
        const radius = this.radius - this.circleBorderWidth - offset;

        ctx.save();
        ctx.translate(this.x, this.y);

        for (let angle in angles) {
            if (((skip === 'even') && (angle % 2 === 1)) ||
                ((skip === 'odd') && (angle % 2 === 0)) ||
                (skip === 'all')) {
                if ((sf >= angle) && (angle >= st)) {
                    continue;
                }
            }

            const x1 = Math.cos(angles[angle]) * radius;
            const y1 = Math.sin(angles[angle]) * radius;
            const x2 = Math.cos(angles[angle]) * (radius - (radius / length));
            const y2 = Math.sin(angles[angle]) * (radius - (radius / length));

            // draws "border" for main mark
            if (border) {
                this.drawMark(x1, y1, x2, y2, lineWidth + 1, this.markStrokeColor);
            }

            // draws main mark
            if ((lastNMarks > 0 && angle < e) || (firstNMarks > 0 && angle > s)) {
                this.drawMark(x1, y1, x2, y2, lineWidth, this.dangerColor);
            } else {
                this.drawMark(x1, y1, x2, y2, lineWidth, this.markFillColor);
            }
        }

        ctx.restore();
    }

    /**
     * Calculate angles to indicate location of text marks.
     * @param {number} count The number of marks for which you need to calculate the angle.
     * @param {number} degAngle Maximum angle (in degrees) for which angle of marks are calculated.
     * @param {number} innerOffset Additional increase / decrease (in degrees) of the maximum angle for adjusting the display.
     * @param {number} [startAngle=0] The angle (in degrees) from which to start the calculation.
     * @returns {number[]} Array of calculated angles.
     */
    calcTextMarksAngles(count, degAngle, innerOffset, startAngle=0) {
        const addAngle = deg2Rad((degAngle + innerOffset - 180) / 2);
        const radAngle = deg2Rad(degAngle + innerOffset);
        let angles = [];

        for (let i = -count + 1; i <= 0; i++) {
            const angle = (i * radAngle / (count - 1)) + addAngle + deg2Rad(startAngle);
            angles.push(angle);
        }

        return angles;
    }

    /**
     * Draws specific text mark.
     * @param {number} value Value to display in mark.
     * @param {number} x x-coordinate of mark.
     * @param {number} y y-coordinate of mark.
     */
    drawTextMark(value, x, y) {
        ctx.font = `${this.markFontStyle} ${this.markFontSize}px ${this.markFontFamily}`;
        ctx.fillStyle = this.markFontColor;
        ctx.fillText(value, x, y);
        ctx.fill();
    }

    /**
     * Draws all text marks.
     * @param {number[]} angles Array of angles. Used to indicate location of marks.
     * @param {number} step Sets the increment number.
     * @param {number} offset Offset from parent circle (in px).
     * @param {boolean} [fractions=false] Convert numbers to fractions and display as fractions.
     * @param {boolean} [reverse=false] Show text marks in reverse order.
     */
    drawTextMarks(angles, step, offset, fractions=false, reverse=false) {
        let value = 0;
        let res = value;
        const radius = this.radius - this.circleBorderWidth - offset;

        if (reverse) {
            angles = angles.reverse();
        }

        ctx.save();
        ctx.translate(this.x, this.y);

        for (let angle in angles) {
            const x = Math.cos(angles[angle]) * (radius - (radius / length)) - this.textMarksOffsetX;
            const y = Math.sin(angles[angle]) * (radius - (radius / length)) + this.textMarksOffsetY;

            if (value !== 0 && fractions) {
                let f = new Fraction(value);
                res = `${f.n}/${f.d}`;
                this.drawTextMark(res, x, y);
            } else {
                this.drawTextMark(value, x, y);
            }

            value += step;
        }

        ctx.restore();
    }

    /**
     * Draws speedometer arrow body (circle)
     */
    drawArrowBody() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.beginPath();
        ctx.arc(0, 0, this.radius / 7.5, 0, Math.PI * 2);
        ctx.closePath();
        ctx.lineWidth = this.radius / 7.5 / 2.5;
        ctx.strokeStyle = this.arrowBodyStrokeColor;
        ctx.fillStyle = this.arrowBodyFillColor;
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }

    /**
     * Draws speedometer arrow.
     * @param {number} value Value of speed. Minimum speed is 0, maximum speed is 1.
     * @param {number} degAngle Maximum angle (in degrees) for which arrow can be turn.
     * @param {number} [offset=0] Offset from edge of circle. Length of arrow.
     * @param {number} [startAngle=0] The angle (in degrees) from which to start the calculation.
     */
    drawArrow(value, degAngle, offset=0, startAngle=0) {
        const addAngle = deg2Rad((degAngle * (-1) - 180) / 2);
        const radAngle = deg2Rad(degAngle * (-1));

        const angle = ((value * radAngle) - addAngle - deg2Rad(startAngle)) * (-1);
        const radius = this.radius - this.circleBorderWidth - offset;

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(0, -this.arrowBaseWidth);
        ctx.lineTo(radius, 0);
        ctx.lineTo(0, this.arrowBaseWidth);
        ctx.fillStyle = this.arrowColor;
        ctx.strokeStyle = this.arrowColor;
        ctx.lineWidth = this.arrowBorderWidth;
        ctx.fill();
        ctx.stroke();
        ctx.rotate(-angle);
        ctx.translate(-this.x, -this.y);
        ctx.restore();
    }

    /**
     * Draws icon on circle.
     * @param {string} icon Icon name.
     * @param {0|1|2} [state=0] State of icon.
     */
    drawIcon(icon, state=0) {
        // const img = document.getElementById('sprite');
        const img = new Image();
        img.src = "assets/icons.svg";
        if (state > this.icons[icon][state]) {
            throw `${this.icons[icon]} has unknown icon state.`;
        }

        if (state === 1 && this.icons[icon].states === 2) {
            state += 1;
        }
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.drawImage(
            img,
            this.icons[icon].position.x + 150 * state + 10 * state,
            this.icons[icon].position.y,
            150,
            150,
            -this.icons[icon].dimensions.width / 2 + this.icons[icon].offset.x,
            -this.icons[icon].dimensions.height / 2 + this.icons[icon].offset.y,
            this.icons[icon].dimensions.width,
            this.icons[icon].dimensions.height
        );
        ctx.restore();
    }

    /**
     * Draws turn signal.
     * @param {number} offsetX Offset in px from center of circle by x-coordinate.
     * @param {number} offsetY Offset in px from center of circle by y-coordinate.
     * @param {number} width Width in px of turn signal icon.
     * @param {number} height Height in px of turn signal icon.
     * @param {boolean} [enabled=false] Enable or disable turn signal.
     */
    drawTurnSignal(offsetX, offsetY, width, height, enabled=false) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY - height + height * 0.25);
        ctx.lineTo(offsetX + width - width / 1.35, offsetY - height + height * 0.25);
        ctx.lineTo(offsetX + width - width / 1.35, offsetY - height);
        ctx.lineTo(offsetX + width - width / 2.5, offsetY - height / 2);
        ctx.lineTo(offsetX + width - width / 1.35, offsetY);
        ctx.lineTo(offsetX + width - width / 1.35, offsetY - height + height * 0.75);
        ctx.lineTo(offsetX, offsetY - height + height * 0.75);
        ctx.closePath();
        ctx.fillStyle = '#161616';
        if (enabled) {
            ctx.fillStyle = this.turnSignalColor;
        }
        ctx.fill();
        ctx.restore();
    }

    /**
     * Draws mileage rectangle and value.
     * @param {number} value Value of mileage.
     * @param {number} offsetX Offset in px from center of circle by x-coordinate.
     * @param {number} offsetY Offset in px from center of circle by y-coordinate.
     * @param {number} width Width in px of mileage rectangle.
     * @param {number} height Height in px of mileage rectangle.
     * @param {number} radius Border radius in px of mileage rectangle.
     */
    drawMileage(value, offsetX, offsetY, width, height, radius) {
        const halfWidth = width / 2;
        const halfRadius = radius / 2;

        const xPhw = offsetX + halfWidth;
        const xMhw = offsetX - halfWidth;

        const xMhwPr = xMhw + radius;
        const xPhwMr = xPhw - radius;

        const xPhwMhr = xPhw - halfRadius;
        const xMhwPhr = xMhw + halfRadius;

        const yPh = offsetY + height;

        const yPr = offsetY + radius;

        const yPhr = offsetY + halfRadius;

        const yPhMhr = yPh - halfRadius;

        const yPhMr = yPh - radius;

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.beginPath();
        ctx.moveTo(offsetX, yPh);
        ctx.lineTo(xPhwMr, yPh);
        ctx.bezierCurveTo(xPhwMr, yPh, xPhwMhr, yPhMhr, xPhw, yPhMr);
        ctx.lineTo(xPhw, yPr);
        ctx.bezierCurveTo(xPhw, yPr, xPhwMhr, yPhr, xPhwMr, offsetY);
        ctx.lineTo(xMhwPr, offsetY);
        ctx.bezierCurveTo(xMhwPr, offsetY, xMhwPhr, yPhr, xMhw, yPr);
        ctx.lineTo(xMhw, yPhMr);
        ctx.bezierCurveTo(xMhw, yPhMr, xMhwPhr, yPhMhr, xMhwPr, yPh);
        ctx.closePath();
        ctx.fillStyle="#2b2b2b";
        ctx.fill();

        value = `${value} ${this.speedUnit}`;

        ctx.font = `normal ${height - 6}px ${this.markFontFamily}`;
        ctx.fillStyle = this.markFontColor;
        ctx.fillText(value, halfWidth - ctx.measureText(value).width - 4, yPh - 5);
        ctx.restore();
    }

    /**
     * Draws unit on circle.
     * @param {number} offsetY Offset in px from center of circle by y-coordinate.
     */
    drawUnit(offsetY) {
        const value = `${this.speedUnit}/h`;

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.font = `${this.markFontStyle} ${this.markFontSize}px ${this.markFontFamily}`;
        ctx.fillStyle = this.markFontColor;
        ctx.fillText(value, -ctx.measureText(value).width / 2, offsetY - 2);
        ctx.restore();
    }

    /**
     * Draws multiplier of tachometer.
     * @param {number} multiplier Multiply by number. 100 * multiplier.
     * @param {number} offsetY Offset in px from center of circle by y-coordinate.
     */
    drawMultiplier(multiplier, offsetY) {
        const value = `x${100 * multiplier} rpm`

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.font = `${this.markFontStyle} ${this.markFontSize / 1.75}px ${this.markFontFamily}`;
        ctx.fillStyle = this.markFontColor;
        ctx.fillText(value, -ctx.measureText(value).width / 2 - 6, offsetY - 2);
        ctx.restore();
    }
}

/** Class representing a main circle that are bigger than others and positioned in center.
 * In the current and standard case it is a speedometer.
 */
class MainCircle extends Circle {
    /**
     * Creating a main circle with the given params.
     * @param {Object} options Parameters of the circle and contained elements. Same as in parent class.
     */
    constructor(options) {
        super(options);
        this.startAngle = deg2Rad(130);
        this.endAngle = deg2Rad(50);
        let cw = canvas.width;
        let ch = canvas.height;
        this.radius = (ch / 2 +
            (ch / 2 - ch / 2 * Math.sin(deg2Rad(50))) / 2 -
            this.circleBorderWidth);
        this.x = cw / 2;
        this.y = (ch / 2 +
            (ch / 2 - this.radius * Math.sin(deg2Rad(50))) -
            this.circleBorderWidth);

        this.textMarksOffsetX = 12;
        this.textMarksOffsetY = 0;

        this.supportColor = 'red';
        this.x += offsetXVal;
        this.y += offsetYVal;
    }
}


/** Class representing icon. */
class Icon {
    /**
     * Creating a icon with the given params.
     * @param {number} offsetX Offset in px from center of circle by x-coordinate.
     * @param {number} offsetY Offset in px from center of circle by y-coordinate.
     * @param {number} spritePosX Position of icon in px in icons sprite by x-coordinate.
     * @param {number} spritePosY Position of icon in px in icons sprite by y-coordinate.
     * @param {number} width Width of icon.
     * @param {number} height Height of icon.
     * @param {2|3} states States of icon. There are only 3: 1 - Off, 2 - warning, 3 - critical/on. If 2, then only off and on.
     */
    constructor(offsetX, offsetY, spritePosX, spritePosY, width, height, states) {
        this.offset = {
            'x': offsetX,
            'y': offsetY
        }
        this.position = {
            'x': spritePosX,
            'y': spritePosY
        }
        this.dimensions = {
            'width': width,
            'height': height
        }
        this.states = states;
    }
}

/** Class representing turn signal icon. */
class TurnSignal {
    /**
     * Creating a turn signal icon with the given params.
     * @param {number} offsetX Offset in px from center of circle by x-coordinate.
     * @param {number} offsetY Offset in px from center of circle by y-coordinate.
     * @param {number} width Width of icon.
     * @param {number} height Height of icon.
     */
    constructor(offsetX, offsetY, width, height) {
        this.offset = {
            'x': offsetX,
            'y': offsetY
        }
        this.dimensions = {
            'width': width,
            'height': height
        }
    }
}

/**
 * Draws all circles.
 * @param {number} speedometerValue Current speed.
 * @param {number} tachometerValue Curent engine revs.
 * @param {number} gasValue Current gas tank fullness.
 * @param {number} mileage Current mileage.
 * @param {Object} turnSignals Current state of turn signals.
 * @param {Object} iconStates Current state of icons.
 */
function drawHello(speedometerValue, tachometerValue, gasValue, mileage, turnSignals, iconStates) {
    const mCircle = new MainCircle(options);
    mCircle.draw();
    const addMarksAngles = mCircle.calcMarksAngles(
        count=10,
        degAngle=180
    );
    const mainMarksAngles = mCircle.calcMarksAngles(
        count=11,
        degAngle=200
    );
    mCircle.drawMarks(
        angles=addMarksAngles,
        length=7.5,
        lineWidth=2,
        border=true,
        offset=4,
        firstNMarks=0,
        lastNMarks=0
    );
    mCircle.drawMarks(
        angles=mainMarksAngles,
        length=7,
        lineWidth=3,
        border=true,
        offset=3
    );
    const textMarksAngles = mCircle.calcTextMarksAngles(
        count=11,
        degAngle=200,
        innerOffset=7.5
    );
    mCircle.drawTextMarks(
        angles=textMarksAngles,
        step=20,
        offset=22.5
    );
    mCircle.drawTurnSignal(35, -25, 25, 15, turnSignals['right']);
    mCircle.drawTurnSignal(-35, -25, -25, 15, turnSignals['left']);
    mCircle.drawIcon('dippedBeam', iconStates['dippedBeam']);
    mCircle.drawIcon('brake', iconStates['brake']);
    mCircle.drawIcon('drift', iconStates['drift']);
    mCircle.drawIcon('highBeam', iconStates['highBeam']);
    mCircle.drawIcon('lock', iconStates['lock']);
    mCircle.drawIcon('seatBelt', iconStates['seatBelt']);
    mCircle.drawIcon('engineTemp', iconStates['engineTemp']);
    mCircle.drawIcon('stab', iconStates['stab']);
    mCircle.drawIcon('abs', iconStates['abs']);
    mCircle.drawMileage(mileage, 0, mileagePos, (100/1260)*canvas.width/100 , (20/560)*canvas.height/100, 2);
    mCircle.drawUnit(-25);
    mCircle.drawArrow(
        value=speedometerValue,
        degAngle=200,
        offset=10
    );
    mCircle.drawArrowBody();
}

var icons = {
    // main circle
    'dippedBeam': new Icon(-22.5, 47.5, 10, 150 * 0 + 10 * 1, iconSize, iconSize, 2),
    'brake':      new Icon(-80, 47.5, 10, 150 * 1 + 10 * 2, iconSize, iconSize, 2),
    'drift':      new Icon(0, 47.5, 10, 150 * 2 + 10 * 3, iconSize, iconSize, 2),
    'highBeam':   new Icon(-45, 47.5, 10, 150 * 4 + 10 * 5, iconSize, iconSize, 2),
    'lock':       new Icon(80, 47.5, 10, 150 * 6 + 10 * 7, iconSize, iconSize, 2),
    'seatBelt':   new Icon(45, 47.5, 10, 150 * 8 + 10 * 9, iconSize, iconSize, 2),
    'engineTemp': new Icon(62.5, 70, 10, 150 * 10 + 10 * 11, iconSize, iconSize, 3),
    'stab':       new Icon(22.5, 47.5, 10, 150 * 12 + 10 * 13, iconSize, iconSize, 2),
    'abs':        new Icon(-62.5, 70, 10, 150 * 14 + 10 * 15, iconSize, iconSize, 2),
    // right circle
    'gas':        new Icon(5, 55, 10, 150 * 3 + 10 * 4, iconSize, iconSize, 3),
    'trunk':      new Icon(22.5, 25, 10, 150 * 7 + 10 * 8, iconSize, iconSize, 2),
    'bonnet':     new Icon(-5, 25, 10, 150 * 11 + 10 * 12, iconSize, iconSize, 2),
    'doors':      new Icon(-17.5, 47.5, 10, 150 * 15 + 10 * 16, iconSize, iconSize, 2),
    // left circle
    'battery':    new Icon(17.5, 50, 10, 150 * 5 + 10 * 6, iconSize, iconSize, 3),
    'oil':        new Icon(5, 32.5, 10, 150 * 9 + 10 * 10,iconSize, iconSize, 3),
    'engineFail': new Icon(-10, 50, 10, 150 * 13 + 10 * 14, iconSize, iconSize, 3)
}

var turnSignals = {
    'left':  new TurnSignal(-17.5, -40, 20, 15),
    'right': new TurnSignal(17.5, -40, 20, 15)
}

var mileageP = 10.7;
var mileagePos = 60;
var options = {
    'circleBorderWidth': 4,
    'circleBorderColor': '#8b8b8b',
    'circleFillColor': '#000000',
    'markFillColor': '#ffffff',
    'markStrokeColor': '#000000',
    'markFontColor': '#ffffff',
    'markFontSize': '14',
    'markFontStyle': 'italic',
    'markFontFamily': 'Arial, sans-serif',
    'arrowBodyFillColor': '#0d0d0d',
    'arrowBodyStrokeColor': '#212121',
    'arrowColor': '#ff0000',
    'arrowBaseWidth': 2.5,
    'arrowBorderWidth': 3,
    'dangerColor': '#c1272d',
    'dangerZoneWidth': 5,
    'turnSignalColor': '#57d53f',
    'speedUnit': 'km',
    'icons': icons,
    'turnSignal': turnSignals
}

function resizeSpeedometer(ct ,w , h){
  ctx = ct;
  canvas.width = w*canvas.w /100;
  canvas.height = h*canvas.h/100;
  offsetXVal = canvas.x * w /100;
  offsetYVal = canvas.y * h /100;
  iconSize = iconSizeP * w / 100;
  var wq = w/100;
  var hq = h/100;
  icons = {
    // main circle
    'dippedBeam': new Icon(-1.81*wq, 8.46*hq, 10, 150 * 0 + 10 * 1, iconSize, iconSize, 2),
    'brake':      new Icon(-6.45*wq, 8.46*hq, 10, 150 * 1 + 10 * 2, iconSize, iconSize, 2),
    'drift':      new Icon(0, 8.46*hq, 1.78*hq, 150 * 2 + 10 * 3, iconSize, iconSize, 2),
    'highBeam':   new Icon(-3.6*wq, 8.46*hq, 10, 150 * 4 + 10 * 5, iconSize, iconSize, 2),
    'lock':       new Icon(6.45*wq, 8.46*hq, 10, 150 * 6 + 10 * 7, iconSize, iconSize, 2),
    'seatBelt':   new Icon(3.6*wq, 8.46*hq, 10, 150 * 8 + 10 * 9, iconSize, iconSize, 2),
    'engineTemp': new Icon(5.04*wq, 12.47*hq, 10, 150 * 10 + 10 * 11, iconSize, iconSize, 3),
    'stab':       new Icon(1.81*wq, 8.46*hq, 10, 150 * 12 + 10 * 13, iconSize, iconSize, 2),
    'abs':        new Icon(-5.04*wq, 5.64*hq, 10, 150 * 14 + 10 * 15, iconSize, iconSize, 2),
    // right circle
    'gas':        new Icon(0.4*wq, 9.8*hq, 10, 150 * 3 + 10 * 4, iconSize, iconSize, 3),
    'trunk':      new Icon(1.81*wq, 4.46*hq, 10, 150 * 7 + 10 * 8, iconSize, iconSize, 2),
    'bonnet':     new Icon(-0.4*wq, 4.46*hq, 10, 150 * 11 + 10 * 12, iconSize, iconSize, 2),
    'doors':      new Icon(-1.4*wq, 8.48*hq, 10, 150 * 15 + 10 * 16, iconSize, iconSize, 2),
    // left circle
    'battery':    new Icon(1.4*wq, 8.92*hq, 10, 150 * 5 + 10 * 6, iconSize, iconSize, 3),
    'oil':        new Icon(0.4*wq, 5.8*hq, 10, 150 * 9 + 10 * 10,iconSize, iconSize, 3),
    'engineFail': new Icon(-0.8*wq, 8.92*hq, 10, 150 * 13 + 10 * 14, iconSize, iconSize, 3)
}

 turnSignals = {
  'left':  new TurnSignal(-1.4*wq, -7.14*hq, iconSize, iconSize),
  'right': new TurnSignal(1.4*wq, -7.14*hq, iconSize, iconSize)
}

options.icons = icons;
options.turnSignal = turnSignals;
options.markFontSize = 1.4*wq;
mileagePos = mileageP * hq;
// if (mCircle != undefined) {
//   mCircle.icons = icons;
// }

}

;/*
Fraction.js v4.0.12 09/09/2015
http://www.xarg.org/2014/03/rational-numbers-in-javascript/

Copyright (c) 2015, Robert Eisele (robert@xarg.org)
Dual licensed under the MIT or GPL Version 2 licenses.
*/
(function(x){function l(a,b){var c=0,k=1,h=1,e=0,u=0,l=0,p=1,r=1,f=0,g=1,t=1,q=1;if(void 0!==a&&null!==a)if(void 0!==b)c=a,k=b,h=c*k;else switch(typeof a){case "object":"d"in a&&"n"in a?(c=a.n,k=a.d,"s"in a&&(c*=a.s)):0 in a?(c=a[0],1 in a&&(k=a[1])):v();h=c*k;break;case "number":0>a&&(h=a,a=-a);if(0===a%1)c=a;else if(0<a){1<=a&&(r=Math.pow(10,Math.floor(1+Math.log(a)/Math.LN10)),a/=r);for(;1E7>=g&&1E7>=q;)if(c=(f+t)/(g+q),a===c){1E7>=g+q?(c=f+t,k=g+q):q>g?(c=t,k=q):(c=f,k=g);break}else a>c?(f+=t,
g+=q):(t+=f,q+=g),1E7<g?(c=t,k=q):(c=f,k=g);c*=r}else if(isNaN(a)||isNaN(b))k=c=NaN;break;case "string":g=a.match(/\d+|./g);null===g&&v();"-"===g[f]?(h=-1,f++):"+"===g[f]&&f++;if(g.length===f+1)u=n(g[f++],h);else if("."===g[f+1]||"."===g[f]){"."!==g[f]&&(e=n(g[f++],h));f++;if(f+1===g.length||"("===g[f+1]&&")"===g[f+3]||"'"===g[f+1]&&"'"===g[f+3])u=n(g[f],h),p=Math.pow(10,g[f].length),f++;if("("===g[f]&&")"===g[f+2]||"'"===g[f]&&"'"===g[f+2])l=n(g[f+1],h),r=Math.pow(10,g[f+1].length)-1,f+=3}else"/"===
g[f+1]||":"===g[f+1]?(u=n(g[f],h),p=n(g[f+2],1),f+=3):"/"===g[f+3]&&" "===g[f+1]&&(e=n(g[f],h),u=n(g[f+2],h),p=n(g[f+4],1),f+=5);if(g.length<=f){k=p*r;h=c=l+k*e+r*u;break}default:v()}if(0===k)throw new y;d.s=0>h?-1:1;d.n=Math.abs(c);d.d=Math.abs(k)}function w(a){function b(){var b=Error.apply(this,arguments);b.name=this.name=a;this.stack=b.stack;this.message=b.message}function c(){}c.prototype=Error.prototype;b.prototype=new c;return b}function n(a,b){isNaN(a=parseInt(a,10))&&v();return a*b}function v(){throw new z;
}function p(a,b){if(!a)return b;if(!b)return a;for(;;){a%=b;if(!a)return b;b%=a;if(!b)return a}}function e(a,b){if(!(this instanceof e))return new e(a,b);l(a,b);a=e.REDUCE?p(d.d,d.n):1;this.s=d.s;this.n=d.n/a;this.d=d.d/a}var d={s:1,n:0,d:1},y=e.DivisionByZero=w("DivisionByZero"),z=e.InvalidParameter=w("InvalidParameter");e.REDUCE=1;e.prototype={s:1,n:0,d:1,abs:function(){return new e(this.n,this.d)},neg:function(){return new e(-this.s*this.n,this.d)},add:function(a,b){l(a,b);return new e(this.s*
this.n*d.d+d.s*this.d*d.n,this.d*d.d)},sub:function(a,b){l(a,b);return new e(this.s*this.n*d.d-d.s*this.d*d.n,this.d*d.d)},mul:function(a,b){l(a,b);return new e(this.s*d.s*this.n*d.n,this.d*d.d)},div:function(a,b){l(a,b);return new e(this.s*d.s*this.n*d.d,this.d*d.n)},clone:function(){return new e(this)},mod:function(a,b){if(isNaN(this.n)||isNaN(this.d))return new e(NaN);if(void 0===a)return new e(this.s*this.n%this.d,1);l(a,b);0===d.n&&0===this.d&&e(0,0);return new e(this.s*d.d*this.n%(d.n*this.d),
d.d*this.d)},gcd:function(a,b){l(a,b);return new e(p(d.n,this.n)*p(d.d,this.d),d.d*this.d)},lcm:function(a,b){l(a,b);return 0===d.n&&0===this.n?new e:new e(d.n*this.n,p(d.n,this.n)*p(d.d,this.d))},ceil:function(a){a=Math.pow(10,a||0);return isNaN(this.n)||isNaN(this.d)?new e(NaN):new e(Math.ceil(a*this.s*this.n/this.d),a)},floor:function(a){a=Math.pow(10,a||0);return isNaN(this.n)||isNaN(this.d)?new e(NaN):new e(Math.floor(a*this.s*this.n/this.d),a)},round:function(a){a=Math.pow(10,a||0);return isNaN(this.n)||
isNaN(this.d)?new e(NaN):new e(Math.round(a*this.s*this.n/this.d),a)},inverse:function(){return new e(this.s*this.d,this.n)},pow:function(a){return 0>a?new e(Math.pow(this.s*this.d,-a),Math.pow(this.n,-a)):new e(Math.pow(this.s*this.n,a),Math.pow(this.d,a))},equals:function(a,b){l(a,b);return this.s*this.n*d.d===d.s*d.n*this.d},compare:function(a,b){l(a,b);var c=this.s*this.n*d.d-d.s*d.n*this.d;return(0<c)-(0>c)},simplify:function(a){function b(a){return 1===a.length?new e(a[0]):b(a.slice(1)).inverse().add(a[0])}
if(isNaN(this.n)||isNaN(this.d))return this;var c=this.abs().toContinued();a=a||.001;for(var k=0;k<c.length;k++){var h=b(c.slice(0,k+1));if(h.sub(this.abs()).abs().valueOf()<a)return h.mul(this.s)}return this},divisible:function(a,b){l(a,b);return!(!(d.n*this.d)||this.n*d.d%(d.n*this.d))},valueOf:function(){return this.s*this.n/this.d},toFraction:function(a){var b,c="",k=this.n,e=this.d;0>this.s&&(c+="-");1===e?c+=k:(a&&0<(b=Math.floor(k/e))&&(c=c+b+" ",k%=e),c=c+k+"/",c+=e);return c},toLatex:function(a){var b,
c="",e=this.n,d=this.d;0>this.s&&(c+="-");1===d?c+=e:(a&&0<(b=Math.floor(e/d))&&(c+=b,e%=d),c=c+"\\frac{"+e+"}{"+d,c+="}");return c},toContinued:function(){var a=this.n,b=this.d,c=[];if(isNaN(this.n)||isNaN(this.d))return c;do{c.push(Math.floor(a/b));var e=a%b;a=b;b=e}while(1!==a);return c},toString:function(a){var b=this.n,c=this.d;if(isNaN(b)||isNaN(c))return"NaN";if(!e.REDUCE){var d=p(b,c);b/=d;c/=d}a:{for(d=c;0===d%2;d/=2);for(;0===d%5;d/=5);if(1===d)d=0;else{for(var h=10%d,m=1;1!==h;m++)if(h=
10*h%d,2E3<m){d=0;break a}d=m}}a:{h=1;m=10;for(var l=d,n=1;0<l;m=m*m%c,l>>=1)l&1&&(n=n*m%c);m=n;for(l=0;300>l;l++){if(h===m){m=l;break a}h=10*h%c;m=10*m%c}m=0}h=-1===this.s?"-":"";h+=b/c|0;(b=b%c*10)&&(h+=".");if(d){for(a=m;a--;)h+=b/c|0,b%=c,b*=10;h+="(";for(a=d;a--;)h+=b/c|0,b%=c,b*=10;h+=")"}else for(a=a||15;b&&a--;)h+=b/c|0,b%=c,b*=10;return h}};"function"===typeof define&&define.amd?define([],function(){return e}):"object"===typeof exports?(Object.defineProperty(exports,"__esModule",{value:!0}),
e["default"]=e,e.Fraction=e,module.exports=e):x.Fraction=e})(this);

;
//# sourceMappingURL=scripts.js.map
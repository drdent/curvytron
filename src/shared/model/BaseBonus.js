/**
 * BaseBonus
 *
 * @param name
 * @param color
 * @param radius
 */
function BaseBonus(name, color, radius)
{
    EventEmitter.call(this);
    this.id              = this.generateUUID();
    this.name            = name || this.defaultName;
    this.color           = color || this.defaultColor;
    this.radius          = radius || this.defaultRadius;
    this.active          = false;
    this.positive        = true;

    this.position        = [this.radius, this.radius];

    this.printing        = false;
    this.printingTimeout = null;
    this.mask            = 0;
}

BaseBonus.prototype = Object.create(EventEmitter.prototype);

BaseBonus.prototype.precision      = 1;
BaseBonus.prototype.noPrintingTime = 200;
BaseBonus.prototype.printingTime   = 3000;
BaseBonus.prototype.defaultName    = 'Bonus';
BaseBonus.prototype.defaultColor   = '#7CFC00';
BaseBonus.prototype.defaultRadius  = 1.2;

/**
 * Set Point
 *
 * @param {Array} point
 */
BaseBonus.prototype.setPosition = function(point)
{
    this.position[0] = point[0];
    this.position[1] = point[1];
};

/**
 * Get distance
 *
 * @param {Array} from
 * @param {Array} to
 *
 * @return {Number}
 */
BaseBonus.prototype.getDistance = function(from, to)
{
    return Math.sqrt(Math.pow(from[0] - to[0], 2) + Math.pow(from[1] - to[1], 2));
};

/**
 * Pop
 */
BaseBonus.prototype.pop = function() {
    this.active = true;
};

/**
 * Clear
 *
 * @param {Array} point
 */
BaseBonus.prototype.clear = function()
{
    this.active = false;
};

/**
 * Update
 */
BaseBonus.prototype.update = function() {};

/**
 * http://www.broofa.com/Tools/Math.uuid.htm
 * @returns {Function}
 */
BaseBonus.prototype.generateUUID = function () {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = new Array(36), rnd = 0, r;

    for ( var i = 0; i < 36; i ++ ) {
        if ( i == 8 || i == 13 || i == 18 || i == 23 ) {
            uuid[ i ] = '-';
        } else if ( i == 14 ) {
            uuid[ i ] = '4';
        } else {
            if (rnd <= 0x02) rnd = 0x2000000 + (Math.random()*0x1000000)|0;
            r = rnd & 0xf;
            rnd = rnd >> 4;
            uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
        }
    }

    return uuid.join('');
};

BaseBonus.prototype.serialize = function () {
    return {
        id: this.id,
        name: this.name,
        color: this.color,
        radius: this.radius,
        active: this.active,
        position: this.position
    };
};

BaseBonus.prototype.unserialize = function (bonus) {
    _.extend(this, bonus);
};
/**
 * Default Preset
 */
function DefaultPreset ()
{
    Preset.call(this);
}

DefaultPreset.prototype = Object.create(Preset.prototype);
DefaultPreset.prototype.constructor = DefaultPreset;

/**
 * Name
 *
 * @type {String}
 */
DefaultPreset.prototype.name = 'All';

/**
 * Bonuses
 *
 * @type {Array}
 */
DefaultPreset.prototype.bonuses = [
    'BonusSelfSmall',
    'BonusSelfSlow',
    'BonusSelfFast',
    'BonusEnemyBig',
    'BonusEnemyFast',
    'BonusEnemyInverse',
    'BonusEnemySlow',
    'BonusEnemyStraightAngle'
];

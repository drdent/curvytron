/**
 * Multiplayer Preset
 */
function MultiplayerPreset ()
{
    Preset.call(this);
}

MultiplayerPreset.prototype = Object.create(Preset.prototype);
MultiplayerPreset.prototype.constructor = MultiplayerPreset;

/**
 * Name
 *
 * @type {String}
 */
MultiplayerPreset.prototype.name = 'Multiplayer';

/**
 * Bonuses
 *
 * @type {Array}
 */
MultiplayerPreset.prototype.bonuses = [
    'BonusSelfSmall',
    'BonusSelfSlow',
    'BonusSelfFast',
    'BonusSelfMaster',
    'BonusEnemyBig',
    'BonusEnemyFast',
    'BonusEnemyInverse',
    'BonusEnemySlow',
    'BonusEnemyStraightAngle'
];


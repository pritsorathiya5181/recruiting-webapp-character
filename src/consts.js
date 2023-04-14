export const ATTRIBUTE_LIST = [
    'Strength',
    'Dexterity',
    'Constitution',
    'Intelligence',
    'Wisdom',
    'Charisma',
];

export const CLASS_LIST = {
    'Barbarian': {
        'Strength': 14,
        'Dexterity': 9,
        'Constitution': 9,
        'Intelligence': 9,
        'Wisdom': 9,
        'Charisma': 9,
    },
    'Wizard': {
        'Strength': 9,
        'Dexterity': 9,
        'Constitution': 9,
        'Intelligence': 14,
        'Wisdom': 9,
        'Charisma': 9,
    },
    'Bard': {
        'Strength': 9,
        'Dexterity': 9,
        'Constitution': 9,
        'Intelligence': 9,
        'Wisdom': 9,
        'Charisma': 14,
    },
}

export const SKILL_LIST = [
    { name: 'Acrobatics', attributeModifier: 'Dexterity' },
    { name: 'Animal Handling', attributeModifier: 'Wisdom' },
    { name: 'Arcana', attributeModifier: 'Intelligence' },
    { name: 'Athletics', attributeModifier: 'Strength' },
    { name: 'Deception', attributeModifier: 'Charisma' },
    { name: 'History', attributeModifier: 'Intelligence' },
    { name: 'Insight', attributeModifier: 'Wisdom' },
    { name: 'Intimidation', attributeModifier: 'Charisma' },
    { name: 'Investigation', attributeModifier: 'Intelligence' },
    { name: 'Medicine', attributeModifier: 'Wisdom' },
    { name: 'Nature', attributeModifier: 'Intelligence' },
    { name: 'Perception', attributeModifier: 'Wisdom' },
    { name: 'Performance', attributeModifier: 'Charisma' },
    { name: 'Persuasion', attributeModifier: 'Charisma' },
    { name: 'Religion', attributeModifier: 'Intelligence' },
    { name: 'Sleight of Hand', attributeModifier: 'Dexterity' },
    { name: 'Stealth', attributeModifier: 'Dexterity' },
    { name: 'Survival', attributeModifier: 'Wisdom' },

]

export const defaultCharacter = {
    title: "Character 1",
    attributes: {
        'Strength': 10,
        'Dexterity': 10,
        'Constitution': 10,
        'Intelligence': 10,
        'Wisdom': 10,
        'Charisma': 10,
    },
    classes: {
        'Barbarian': false,
        'Wizard': false,
        'Bard': false,
    },
    skillSet: {
        totalAvailablePoints: 10,
        skills: [{ name: 'Acrobatics', attributeModifier: 'Dexterity', points: 0, modifierPoints: 0, totalPoints: 0 },
        { name: 'Animal Handling', attributeModifier: 'Wisdom', points: 0, modifierPoints: 0, totalPoints: 0 },
        { name: 'Arcana', attributeModifier: 'Intelligence', points: 0, modifierPoints: 0, totalPoints: 0 },
        { name: 'Athletics', attributeModifier: 'Strength', points: 0, modifierPoints: 0, totalPoints: 0 },
        { name: 'Deception', attributeModifier: 'Charisma', points: 0, modifierPoints: 0, totalPoints: 0 },
        { name: 'History', attributeModifier: 'Intelligence', points: 0, modifierPoints: 0, totalPoints: 0 },
        { name: 'Insight', attributeModifier: 'Wisdom', points: 0, modifierPoints: 0, totalPoints: 0 },
        { name: 'Intimidation', attributeModifier: 'Charisma', points: 0, modifierPoints: 0, totalPoints: 0 },
        { name: 'Investigation', attributeModifier: 'Intelligence', points: 0, modifierPoints: 0, totalPoints: 0 },
        { name: 'Medicine', attributeModifier: 'Wisdom', points: 0, modifierPoints: 0, totalPoints: 0 },
        { name: 'Nature', attributeModifier: 'Intelligence', points: 0, modifierPoints: 0, totalPoints: 0 },
        { name: 'Perception', attributeModifier: 'Wisdom', points: 0, modifierPoints: 0, totalPoints: 0 },
        { name: 'Performance', attributeModifier: 'Charisma', points: 0, modifierPoints: 0, totalPoints: 0 },
        { name: 'Persuasion', attributeModifier: 'Charisma', points: 0, modifierPoints: 0, totalPoints: 0 },
        { name: 'Religion', attributeModifier: 'Intelligence', points: 0, modifierPoints: 0, totalPoints: 0 },
        { name: 'Sleight of Hand', attributeModifier: 'Dexterity', points: 0, modifierPoints: 0, totalPoints: 0 },
        { name: 'Stealth', attributeModifier: 'Dexterity', points: 0, modifierPoints: 0, totalPoints: 0 },
        { name: 'Survival', attributeModifier: 'Wisdom', points: 0, modifierPoints: 0, totalPoints: 0 },]
    }
};
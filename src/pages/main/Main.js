import React, { useEffect, useState } from 'react';
import Character from '../../components/Character/Character';
import './Main.css'
import { defaultCharacter } from '../../consts';

function Main() {
    const [charactersData, setCharactersData] = useState([defaultCharacter]);

    useEffect(() => {
        setCharactersData([
            ...charactersData,
            {
                title: "Character 2",
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
            }
        ]);
    }, [])

    return (
        <div className='Main'>
            {
                charactersData.map((item, index) => {
                    return (
                        <Character key={index.toString()} data={item} />
                    )
                })
            }
        </div>
    );
}

export default Main;
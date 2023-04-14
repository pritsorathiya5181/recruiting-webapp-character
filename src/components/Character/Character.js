import React, { useState } from 'react';
import './Character.css';
import { CLASS_LIST } from '../../consts';

function Character(props) {
    const [character, setCharacter] = useState(props.data);

    return (
        <div className='Character'>
            <h1>{character.title}</h1>
            <div className='Character-table'>
                <div className='Character-atr-col'>
                    <h3>Attributes</h3>
                    {Object.entries(character.attributes)
                        .map(([attribute, value]) => {
                            return (
                                <div key={attribute}>
                                    {attribute}:
                                    {value}
                                    (modifer: {Math.floor((value - 10) / 2)}){" "}
                                    <button>+</button>
                                    <button>-</button>
                                </div>
                            )
                        })}
                </div>
                <div className='Character-cls-col'>
                    <h3>Classes</h3>
                    {Object.entries(character.classes)
                        .map(([classItem, value]) => {
                            return (
                                <div key={classItem}>
                                    {classItem}
                                </div>
                            )
                        })}
                </div>
                <div className='Character-req-col'>
                    <h3>Bard Minimum Requirements</h3>
                    {Object.entries(CLASS_LIST['Barbarian'])
                        .map(([requirement, value]) => {
                            return (
                                <div key={requirement}>
                                    {requirement}: {value}
                                </div>
                            )
                        })}
                    <button>Close Requirement View</button>
                </div>
                <div className='Character-skl-col'>
                    <h3>Skills</h3>
                    <p>Total skill points available: {character.skillSet.totalAvailablePoints}</p>
                    {character.skillSet.skills.map((skill, index) => {
                        return (
                            <div key={index.toString()}>
                                {skill.name}:
                                {skill.points}
                                (Modifier: {skill.attributeModifier}):
                                {skill.modifierPoints}{" "}
                                <button>+</button>
                                <button>-</button>
                                {" "}total:
                                {skill.totalPoints}
                            </div>
                        )
                    })}
                </div>
            </div >
        </div >
    );
}

export default Character;
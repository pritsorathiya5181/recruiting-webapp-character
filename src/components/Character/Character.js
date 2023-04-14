import React, { useState } from 'react';
import './Character.css';
import { CLASS_LIST } from '../../consts';

function Character(props) {
    const [character, setCharacter] = useState(props.data);
    const [selectedClass, setSelectedClass] = useState("");

    const selectClass = (name) => {
        setSelectedClass(name);
    }

    const updateAttributeScore = (attributeName, value, action) => {
        var updatedAttributeValue;
        if (action === "plus") {
            if (totalAttributeScore() >= 70) {
                alert("A Character can have up to 70 Delegated Attribute Points");
                updatedAttributeValue = value;
            }
            else
                updatedAttributeValue = value + 1;
        } else {
            updatedAttributeValue = value - 1;
        }

        var updatedTotalAvailablePoints = character.skillSet.totalAvailablePoints;
        if (attributeName == "Intelligence") {
            updatedTotalAvailablePoints = 10 + (4 * Math.floor((updatedAttributeValue - 10) / 2));
        }

        const updatedSkills = character.skillSet.skills.map((skill) => {
            if (skill.attributeModifier === attributeName) {
                const modifierPoints = Math.floor((updatedAttributeValue - 10) / 2);
                return {
                    ...skill,
                    modifierPoints: modifierPoints,
                    totalPoints: skill.points + modifierPoints
                }
            } else {
                return skill
            }
        })

        const updatedCharacter = {
            ...character,
            attributes: {
                ...character.attributes,
                [attributeName]: updatedAttributeValue
            },
            skillSet: {
                ...character.skillSet,
                totalAvailablePoints: updatedTotalAvailablePoints,
                skills: updatedSkills
            }
        };

        checkClassRequirements(updatedCharacter);
    }

    const totalAttributeScore = () => {
        let total = 0;

        for (const key in character.attributes) {
            total += character.attributes[key];
        }

        return total;
    }

    const totalIntelligencePoint = () => {
        let total = 0;

        character.skillSet.skills.forEach((skill) => {
            if (skill.attributeModifier == "Intelligence") {
                total += skill.totalPoints
            }
        })

        return total;
    }

    const updateSkills = (skill, action) => {
        var updatedSkillPoints;
        if (action === "plus") {
            if (skill.attributeModifier === "Intelligence"
                && totalIntelligencePoint() >= character.skillSet.totalAvailablePoints) {
                alert("You need more skill points! Upgrade intelligence to get more");
                updatedSkillPoints = skill.points;
            }
            else {
                updatedSkillPoints = skill.points + 1;
            }
        } else {
            updatedSkillPoints = skill.points - 1;
        }

        const updatedSkills = character.skillSet.skills.map((skillItem) => {
            if (skillItem === skill) {
                return {
                    ...skillItem,
                    points: updatedSkillPoints,
                    totalPoints: updatedSkillPoints + skillItem.modifierPoints
                }
            } else {
                return skillItem
            }
        })

        const updatedCharacter = {
            ...character,
            skillSet: {
                ...character.skillSet,
                skills: updatedSkills
            }
        };

        setCharacter(updatedCharacter);
    }

    const checkClassRequirements = (updatedCharacter) => {
        const attributesScore = Object.values(updatedCharacter.attributes);
        const acceptedScores = Object.values(CLASS_LIST).map(obj => Object.values(obj));
        const characterClasses = Object.keys(CLASS_LIST);

        const satisfyClasses = [];

        for (let i = 0; i < acceptedScores.length; i++) {
            const element = acceptedScores[i];
            let match = true;
            for (let j = 0; j < acceptedScores[i].length; j++) {
                if (element[j] > attributesScore[j]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                satisfyClasses.push(characterClasses[i]);
            }
        }

        const updatedClasses = Object.fromEntries(
            Object.entries(updatedCharacter.classes).map(([key, value]) => {
                if (satisfyClasses.includes(key)) {
                    return [key, true];
                } else {
                    return [key, false];
                }
            })
        );

        const newCharacter = {
            ...updatedCharacter,
            classes: updatedClasses
        };

        setCharacter(newCharacter);
    }

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
                                    <button onClick={() => updateAttributeScore(attribute, value, "plus")}>+</button>
                                    <button onClick={() => updateAttributeScore(attribute, value, "minus")}>-</button>
                                </div>
                            )
                        })}
                </div>
                <div className='Character-cls-col'>
                    <h3>Classes</h3>
                    {Object.entries(character.classes)
                        .map(([classItem, value]) => {
                            return (
                                <div key={classItem}
                                    className={value ? 'Character-cls-satisfy' : ''}
                                    onClick={() => selectClass(classItem)}>
                                    {classItem}
                                </div>
                            )
                        })}
                </div>
                {selectedClass && <div className='Character-req-col'>
                    <h3>Bard Minimum Requirements</h3>
                    {Object.entries(CLASS_LIST[selectedClass])
                        .map(([requirement, value]) => {
                            return (
                                <div key={requirement}>
                                    {requirement}: {value}
                                </div>
                            )
                        })}
                    <button onClick={() => selectClass("")}>Close Requirement View</button>
                </div>}
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
                                <button onClick={() => updateSkills(skill, "plus")}>+</button>
                                <button onClick={() => updateSkills(skill, "minus")}>-</button>
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
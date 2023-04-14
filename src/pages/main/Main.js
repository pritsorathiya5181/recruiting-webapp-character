import React, { useEffect, useState } from 'react';
import Character from '../../components/Character/Character';
import './Main.css'
import { defaultCharacter } from '../../consts';

function Main() {
    const [charactersData, setCharactersData] = useState([]);

    useEffect(() => {
        fetchCharacters().then(data => {
            if (data.length > 0) {
                setCharactersData(data)
            }
        });
    }, [])

    const fetchCharacters = async () => {
        return new Promise(async (resolve, rejects) => {
            try {

                var requestOptions = {
                    method: 'GET',
                    redirect: 'follow'
                };

                await fetch("https://recruiting.verylongdomaintotestwith.ca/api/{pritsorathiya5181}/character", requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        resolve(result.body)
                    })
                    .catch(error => console.log('error', error));
            } catch (error) {
                rejects(error)
            }
        })
    }

    const saveCharacters = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(charactersData);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://recruiting.verylongdomaintotestwith.ca/api/{pritsorathiya5181}/character", requestOptions)
            .then(response => response.json())
            .then(result => alert("Saved characters successfully"))
            .catch(error => console.log('error', error));
    }

    const doUpdateCharactersData = (updatedCharacterData) => {
        const updatedData = charactersData.map((characters, index) => {
            if (characters.title === updatedCharacterData.title) {
                return updatedCharacterData
            } else {
                return characters;
            }
        });

        setCharactersData(updatedData);
    }

    const addNewCharacter = () => {
        const newCharacter = {
            ...defaultCharacter,
            title: `Character ${charactersData.length + 1}`
        }
        setCharactersData([...charactersData, newCharacter])
    }

    return (
        <div className='Main'>
            <div className='Main-actions'>
                <button onClick={() => addNewCharacter()}>Add New Characters</button>
                <button onClick={() => saveCharacters()}>Save All Characters</button>
            </div>
            {
                charactersData.map((item, index) => {
                    return (
                        <Character key={index.toString()} data={item}
                            setCharactersData={(updatedCharacterData) => doUpdateCharactersData(updatedCharacterData)} />
                    )
                })
            }
        </div>
    );
}

export default Main;
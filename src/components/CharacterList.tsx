import React, { useEffect, useState } from 'react'
import { loadCharacters } from '../repository/repository'
import { type Character } from '../types/entity'

function CharacterList(): JSX.Element {
  const [characters, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    setCharacters(loadCharacters())
  }, [])

  return (
    <>
      {characters.map((chara) => {
        return <div key={chara.id}>{chara.name.firstName.ja}</div>
      })}
    </>
  )
}

export default CharacterList

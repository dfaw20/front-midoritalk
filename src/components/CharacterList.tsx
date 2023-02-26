import React, { useEffect, useState } from 'react'
import { loadCharacters } from '../repository/Repository'
import { type Character } from '../types/entity'
import styled from 'styled-components'
import {characterImg, emblemImg, firstIcon, fullName, translate} from '../helper/ViewHelper'

const StyledUl = styled.ul`
  background-color: rgb(243, 247, 248);
`

function CharacterList(): JSX.Element {
  const [characters, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    setCharacters(loadCharacters())
  }, [])

  return (
    <StyledUl>
      {characters.map((chara) => {
        return (
          <li key={chara.id}>
            <input type="checkbox" name="character" id={chara.id} />
            <label htmlFor={chara.id}>
              <div>
                <div>
                  <button type="button"></button>
                </div>
                <div>
                  <div>
                    <img key={firstIcon(chara.icons).imageName}
                         src={characterImg(firstIcon(chara.icons))}
                         alt={firstIcon(chara.icons).imageName} />
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <span className="text">{fullName(chara, 'ja')}</span>
                </div>
                <div>
                  {chara.clubs?.map((club) => {
                    return (
                      <span key={club.id} className="text">
                        {club.name.ja}
                      </span>
                    )
                  })}
                </div>
              </div>
              <div>
                {chara.school === undefined || chara.school === null ? null : (
                  <img src={emblemImg(chara.school)} alt={translate(chara.school?.name, 'ja')} />
                )}
              </div>
              <div>
                {chara.icons.map((icon) => {
                  return (
                    <button key={icon.imageName}>
                      <img src={characterImg(icon)} alt={icon.imageName} />
                    </button>
                  )
                })}
              </div>
            </label>
          </li>
        )
      })}
    </StyledUl>
  )
}

export default CharacterList

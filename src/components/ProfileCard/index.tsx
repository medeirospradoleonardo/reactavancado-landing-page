import React from 'react'

import { GrGithub } from 'react-icons/gr'
import { FaDribbble, FaTwitter } from 'react-icons/fa'

import * as S from './styles'
import { Author } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const icons = {
  Twitter: <FaTwitter />,
  Github: <GrGithub />,
  Dribbble: <FaDribbble />
}


const ProfileCard: React.FC<Author> = ({
  attributes
}) => (
  <S.Card key={attributes.name}>
    <S.Image src={getImageUrl(attributes.photo.data.attributes.url)} alt={attributes.photo.data.attributes.alternativeText} />
    <S.Name>{attributes.name}</S.Name>
    <S.Role>{attributes.role}</S.Role>
    <S.SocialLinks>
      {attributes.socialLinks.map((item) => (
        <S.Link key={item.title}>
          <a href={item.url} title={item.title}>
            {icons[item.title]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>
    <S.Description>{attributes.description}</S.Description>
  </S.Card>
)

export default ProfileCard

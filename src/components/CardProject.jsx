import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.a`
  display: flex;
  flex-direction: row;
  gap: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
`

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 40%;
`

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  width: 100%;
`

const ProjectImage = styled.img`
  height: 15rem;
  border-radius: 8px;
  object-fit: cover;
`

const TagsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 8px;
`

const Tag = styled.span`
  background-color: #f0f0f0;
  color: #333;
  font-size: 1rem;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 4px;
`

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 60%;
`

const ProjectTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 800;
  line-height: 100%;
  margin: 0;
`

const ProjectDescription = styled.p`
  font-size: 1.2rem;
  color: #808080;
  margin: 0;
`

function CardProject({ image, tags, title, description, link }) {
  return (
    <CardContainer href={link} target="_blank">
      <LeftSection>
        <ImageContainer>
          <ProjectImage src={image} alt={title} />
          <TagsContainer>
            {tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </TagsContainer>
        </ImageContainer>
      </LeftSection>
      <RightSection>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
      </RightSection>
    </CardContainer>
  )
}

export default CardProject

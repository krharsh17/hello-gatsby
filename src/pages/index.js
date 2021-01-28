import React from "react"
import useSiteData from '../hooks/useSiteData';
import useArticles from '../hooks/useArticles';
import styled from 'styled-components';


const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 24px;
  color: ${props => props.color}
`

export default function Home() {
  const meta = useSiteData()
  const articles = useArticles()
  return (
    <div>
      <Title color="#000">{meta.title}</Title>
      <div>Articles:</div>
      <ul></ul>
      {articles.map(article => {
      return <li>
        <a href={`/articles/${article.frontmatter.location}`}>{article.frontmatter.title}</a>
      </li>
      })}
    </div>
  )
}



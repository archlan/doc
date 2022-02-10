import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Link from '@docusaurus/Link'
import { DocSearch } from '@docsearch/react'

import styles from './styles.module.css'

const products = [
  {
    title: 'Documentation - ArchLan',
    description: 'Everything you need to know in order to use ArchLan. You can also get support and find ways to solve potential issues you might face.',
    link: '/intro',
  },
]

const gettingStarted = [
  {
    title: 'Docs - Intro',
    description: 'Welcome to the ArchLan Linux documentation, the information contained in this documentation only covers ArchLan Linux. For anything related to Arch Linux itself, see Archwiki.',
    link: '/intro',
  },
]

const featuredArticles = [
  {
    title: 'Latest News - ArchLan',
    description: 'Latest blog posts about ArchLan and its new release. Get updated about everything by following our social medias.',
    link: 'https://archlan.github.io/blog',
  },
]

const Product = ( { title, description, link } ) => (
  <div className={clsx( 'col col--12', styles.feature )}>
    <Link to={link} className="product_card">
      <div className="card_content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="svg-icon chevron-rounded-icon" viewBox="0 0 14 25"><path data-v-a76e93d8="" d="M1,24.4a.9.9,0,0,0,.7-.3L13.4,13a1,1,0,0,0,0-1.6L1.7.3A.9.9,0,0,0,1,0,.9.9,0,0,0,0,1a.9.9,0,0,0,.3.7l11,10.5L.3,22.7a.9.9,0,0,0-.3.7A.9.9,0,0,0,1,24.4Z" /></svg>
    </Link>
  </div>
)

const ArticlesList = ( { title, description, link } ) => (
  <div>
    <p>
      {description}
      <br />
      <Link to={link}>
        {title}
        {' >'}
      </Link>
    </p>
  </div>
)

const Home = () => {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  return (
    <Layout
      title="Products"
      description="User guides, quick-reference guides, developer/contributor best practices for ShabadOS"
    >
      <header className={clsx( 'hero hero--primary', styles.heroBanner )}>
        <div className="home container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div>
            <DocSearch apiKey="1" indexName="archlan" />
          </div>
        </div>
      </header>

      <main>
        <div className="home container padding-vert--lg">
          <h1>Docs Directory</h1>
          <p className="lead">Explore ArchLan guides and tutorials.</p>
          <div className="row">
            {products.map( props => <Product key={props.title} {...props} /> ) }
          </div>
          <div className="row padding-vert--lg">
            <div className="col col--6">
              <h2>Getting Started</h2>
              {gettingStarted.map( props => <ArticlesList key={props.title} {...props} /> ) }
            </div>
            <div className="col col--6">
              <h2>Featured Articles</h2>
              {featuredArticles.map( props => <ArticlesList key={props.title} {...props} /> ) }
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Home

import Head from 'next/head'
import React from 'react'

const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Head>
      <title>Oponion - {title}</title>
      <meta property="og:title" content={title} />
      <meta property="twitter:title" content={title} />
      <meta
        name="description"
        content="Oponion is a fast, easy, and simple way to create and share polls with people."
      />
      <meta
        property="og:description"
        content="Oponion is a fast, easy, and simple way to create and share polls with people."
      />
      <meta
        property="twitter:description"
        content="Oponion is a fast, easy, and simple way to create and share polls with people."
      />
      <meta property="og:type" content="website" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0da7ee" />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📈</text></svg>"
      />
    </Head>
  )
}

export default Header

export default {
  github: 'https://github.com/sol-save',
  docsRepositoryBase: 'https://github.com/sol-save/docs',
  titleSuffix: ' – GitSol',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">GitSol</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        an onchain version control on Solana and filecoin/ipfs.
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="GitSol: onchain version control on Solana and filecoin/ipfs"
      />
      <meta
        name="og:description"
        content="GitSol: onchain version control on Solana and filecoin/ipfs"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="./public/logo.png" />
      <meta name="twitter:site:domain" content="gitsol.xyz" />
      <meta name="twitter:url" content="https://gitsol.xyz" />
      <meta name="og:title" content="GitSol:an onchain version control " />
      <meta name="og:image" content="./public/logo.png" />
      <meta name="apple-mobile-web-app-title" content="GitSol" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © GitSol.</>,
  unstable_faviconGlyph: '👋',
}

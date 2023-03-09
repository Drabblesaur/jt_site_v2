import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link 
      rel="preconnect" 
      href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Rubik+Mono+One&family=Rubik:wght@400;600&display=swap" rel="stylesheet"></link>
      <body className='bg-cream dark:bg-cocoa md:bg-idx bg-no-repeat bg-right-bottom'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

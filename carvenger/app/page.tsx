import Link from 'next/link'
import Header from './components/Header'

export default function Home() {
  return (
    <main>
      <Header/>
      <h1>Hello World</h1>
      <Link href= "create-listing">Users</Link> {/* Link comp instead of 'a' to not waste resources */}
    </main>
    
  )
}

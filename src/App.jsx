import { useState } from 'react'
import { Header } from './BaiTapLayoutComponent/Header'
import { Footer } from './BaiTapLayoutComponent/Footer'
import { Body } from './BaiTapLayoutComponent/Body';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Body/>
      <Footer />
    </div>
  );
}

export default App

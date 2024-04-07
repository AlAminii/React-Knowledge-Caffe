

import { useState } from "react"
import Blogs from "./Components/Blogs"

import Header from "./Components/Header/Header"
import BookMarks from "./Components/BookMarks"

function App() {

  const [bookMarks, setbookMark] = useState([])

  const [readTime, setReadingTime] = useState(0)
  
  const handaleAddtoBookmark = blog =>{
  const newBookMarks = [...bookMarks, blog]
  setbookMark(newBookMarks)
  }


  const hanaleMarkAsRead = time =>{

    const newReadingTime = readTime+ time
    setReadingTime(newReadingTime)
  
  } 

  return (
    <div>
    <Header></Header>

   <div className="md:flex max-w-7xl mx-auto">
   
    <Blogs hanaleMarkAsRead={hanaleMarkAsRead} handaleAddtoBookmark={handaleAddtoBookmark}></Blogs>
    <BookMarks bookMarks={bookMarks} readTime={readTime}></BookMarks>
   </div>
    <div/>
    </div>
  )
}

export default App

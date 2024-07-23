import React from 'react'
import Navbar from './components/Navbar'
import NewsList from './components/NewsList'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

export default function App() {

  const d = new Date();
  let ms = d.getMilliseconds();

  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route  exact path="/" element={<NewsList key="/" category="business"></NewsList>} />
          <Route  exact path="/general" element={<NewsList key="general" category="general"></NewsList>} />
          <Route  exact path="/sports" element={<NewsList key="sports" category="sports"></NewsList>} />
          <Route exact path="/business" element={<NewsList  key="business" category="business"></NewsList>} />
          <Route  exact path="/health" element={<NewsList key="health" category="health"></NewsList>} />
          <Route  exact path="/science" element={<NewsList key="science"  category="science"></NewsList>} />
          <Route  exact path="/technology" element={<NewsList key="technology" category="technology"></NewsList>} />
          <Route  exact path="/entertainment" element={<NewsList key="entertainment" category="entertainment"></NewsList>} />


        </Routes>
        

      </BrowserRouter>

    </div>
  )

}

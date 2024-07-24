import React, { useState } from 'react'
import Navbar from './components/Navbar'
import NewsList from './components/NewsList'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default function App() {

  const [progress, setProgress] = useState(10)


  return (
    <div>
     <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(progress)}
      />
      <BrowserRouter>
      <Navbar progress={progress}></Navbar>
        <Routes>
          <Route  exact path="/" element={<NewsList progress={setProgress} key="/" category="business"></NewsList>} />
          <Route  exact path="/general" element={<NewsList progress={setProgress} key="general" category="general"></NewsList>} />
          <Route  exact path="/sports" element={<NewsList progress={setProgress} key="sports" category="sports"></NewsList>} />
          <Route exact path="/business" element={<NewsList progress={setProgress}  key="business" category="business"></NewsList>} />
          <Route  exact path="/health" element={<NewsList progress={setProgress} key="health" category="health"></NewsList>} />
          <Route  exact path="/science" element={<NewsList progress={setProgress} key="science"  category="science"></NewsList>} />
          <Route  exact path="/technology" element={<NewsList progress={setProgress} key="technology" category="technology"></NewsList>} />
          <Route  exact path="/entertainment" element={<NewsList progress={setProgress} key="entertainment" category="entertainment"></NewsList>} />


        </Routes>
        

      </BrowserRouter>

    </div>
  )

}

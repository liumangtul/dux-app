import './App.css'
import Counter from './features/counter/counter'
import ArticleList from './features/article/ArticleList'
import AddArticleForm from './features/article/AddArticleForm'

function App() {

  return (
    <>
      <Counter />
      ----------------------------<br />
      __________________________________
      <AddArticleForm />
      <ArticleList />
    </>
  )
}

export default App

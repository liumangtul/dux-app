import './App.css'
import Counter from './features/counter/counter'
import ArticleList from './features/article/ArticleList'
import AddArticleForm from './features/article/AddArticleForm'
import EditArticleForm from './features/article/EditArticleForm'

function App() {

  return (
    <>
      <Counter />
      ----------------------------<br />
      __________________________________
      <AddArticleForm />
      <ArticleList />
      ----------------------------<br />
      __________________________________
      <EditArticleForm />
    </>
  )
}

export default App

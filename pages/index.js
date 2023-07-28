import SiteNav from '@/components/sitenav'
import Header from '@/components/header'
import Main from '@/components/main'

function IndexPage() {
  return (
    <>
      <SiteNav/>
      <Header/>
      <Main image='/src/assets/mainlogo.png'/>
    </>
  )
}

export default IndexPage
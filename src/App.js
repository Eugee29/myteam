import { AppHeader } from './cmps/app-header'
import { FindTalent } from './cmps/find-talent'
import { SuccessStories } from './cmps/success-stories'

export const App = () => {
  return (
    <div className="App">
      <div className="container-layout">
        <AppHeader />
        <FindTalent />
        <SuccessStories />
      </div>
    </div>
  )
}

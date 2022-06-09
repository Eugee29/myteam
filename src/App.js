import { AppHeader } from './cmps/app-header'
import { FindTalent } from './cmps/find-talent'
import { SuccessStories } from './cmps/sucess-sotories'

export const App = () => {
  return (
    <div className="App">
      <div className="main-layout">
        <AppHeader />
        <FindTalent />
        <SuccessStories />
      </div>
    </div>
  )
}

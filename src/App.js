import { AppHeader } from './cmps/app-header'
import { BuildManage } from './cmps/build-manage'
import { CallToAction } from './cmps/call-to-action'
import { FindTalent } from './cmps/find-talent'
import { SuccessStories } from './cmps/success-stories'

export const App = () => {
  return (
    <div className="App">
      <div className="container-layout">
        <AppHeader />
        <FindTalent />
        <BuildManage />
        <SuccessStories />
        <CallToAction />
      </div>
    </div>
  )
}

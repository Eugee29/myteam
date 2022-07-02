import { StrictMode } from 'react'
import { AppFooter } from './cmps/app-footer'
import { AppHeader } from './cmps/app-header'
import { BuildManage } from './cmps/build-manage'
import { CallToAction } from './cmps/call-to-action'
import { FindTalent } from './cmps/find-talent'
import { SuccessStories } from './cmps/success-stories'

export const App = () => {
  return (
    <StrictMode>
      <div className="App">
        <div className="container-layout">
          <AppHeader />
          <FindTalent />
          <BuildManage />
          <SuccessStories />
          <CallToAction />
          <AppFooter />
        </div>
      </div>
    </StrictMode>
  )
}

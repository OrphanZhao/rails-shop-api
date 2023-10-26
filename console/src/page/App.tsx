import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RouteItems from './Router'
import { useFavicon, UseErrorBoundary } from '@/page/utils/index'
import zhCN from 'antd/locale/zh_CN'
import { ConfigProvider } from 'antd'

export default function App() {
  useFavicon()

  return (
    <ConfigProvider
      theme={{ token: { colorPrimary: '#a717ff', colorInfo: '#a717ff' } }}
      locale={zhCN}
    >
      <UseErrorBoundary>
        <BrowserRouter>
          <Routes>
            {Array.isArray(RouteItems) &&
              RouteItems.map((v) => (
                <Route
                  key={v.path}
                  path={v.path}
                  element={
                    <Suspense fallback={<div>努力加载中 ...</div>}>
                      <v.component />
                    </Suspense>
                  }
                />
              ))}
          </Routes>
        </BrowserRouter>
      </UseErrorBoundary>
    </ConfigProvider>
  )
}

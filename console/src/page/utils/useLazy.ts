import { lazy } from 'react'

const useLazy = (componentImport: any) => {
  return lazy(async () => {
    const ForceRefreshed = JSON.parse(
      globalThis.sessionStorage.getItem('force-refreshed') || 'false'
    )
    try {
      const component = await componentImport()
      globalThis.sessionStorage.setItem('force-refreshed', 'false')
      return component
    } catch (error) {
      if (!ForceRefreshed) {
        globalThis.sessionStorage.setItem('force-refreshed', 'true')
        return globalThis.location.reload()
      }
      throw error
    }
  })
}

export default useLazy

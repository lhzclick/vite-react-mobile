// meta
export interface IMetaProps {
  keepAlive?: boolean
  requiresAuth?: boolean
  title: string
  key?: string
}

// 路由
export interface IRouteObject {
  caseSensitive?: boolean
  children?: IRouteObject[]
  element?: React.ReactNode
  title?: string
  index?: boolean
  path?: string
  meta?: IMetaProps
  isLink?: string
}
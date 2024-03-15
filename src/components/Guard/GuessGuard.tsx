import { IRoutesState } from 'src/modules/router/route.model'

interface GuestGuardProps {
  children: React.ReactNode
  routes: IRoutesState[]
  path: string
}

const GuestGuard = ({ children, path }: GuestGuardProps) => {

  return <>{children}</>
}

export default GuestGuard

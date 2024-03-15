import { lazy } from 'react';
import GuestGuard from "src/components/Guard/GuessGuard";
import { IRoutesState } from "./route.model";

const routes: IRoutesState[] = [
    {
        guard: GuestGuard,
        exact: true,
        path: '/*',
        component: lazy(() => import('src/pages/dashboard'))
    }
]

export default routes
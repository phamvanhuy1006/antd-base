import { Component as ReactComponent, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LinearProgress from "src/components/LinearProgress";
import { IRoutesState } from "./route.model";

const renderScreens = (routes: IRoutesState[]) => (
  <Suspense fallback={<LinearProgress />}>
    <Routes>
      {routes.map((route, i) => {
        const Guard = route.guard || ReactComponent;
        const Layout = route.layout || ReactComponent;
        const Component = route.component;
        return (
          <Route
            key={i}
            path={route.path}
            element={
              <Guard routes={routes} path={route.path || ""}>
                <Layout type={route?.type}>
                  {route.routes ? (
                    renderScreens(route.routes)
                  ) : (
                    <Component screenName={route.role} />
                  )}
                </Layout>
              </Guard>
            }
          />
        );
      })}
    </Routes>
  </Suspense>
);

export default renderScreens;

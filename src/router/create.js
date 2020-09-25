import React from 'react'
import { Route, Redirect } from 'react-router-dom'


export const RouteWithSubRoutes = (route, i) => {
    return (
        <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => {
                if (!route.auth || authed || route.path === authPath) {
                    // pass the sub-routes down to keep nesting
                    return <route.component {...props} routes={route.routes} />
                }
                return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />
            }}
        />
    )
}
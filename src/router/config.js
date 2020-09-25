import React from 'react'
import { useHistory } from 'react-router-dom';
import { RouteWithSubRoutes } from '../router/create.js'


// 异步按需加载component
function asyncComponent(getComponent) {
    return class AsyncComponent extends React.Component {
        Component = null;
        state = { Component: AsyncComponent.Component };

        componentWillMount() {
            if (!this.state.Component) {
                getComponent().then(({ default: Component }) => {
                    AsyncComponent.Component = Component
                    this.setState({ Component })
                })
            }
        }
        render() {
            const { Component } = this.state
            if (Component) {
                return <Component {...this.props} />
            }
            return null
        }
    }
}

const Home = () => {
    const history = useHistory()
    const routerChaner = () => {
        history.push('/Product')

    }
    return (
        <div>
            <h2>Home</h2>
            <div onClick={routerChaner}>routerChaner</div>
        </div>
    )
}
const Product = () => (
    <div>
        <h2>Product</h2>
    </div>
)
export const mainRouter = [
    {
        path: '/',
        exact: true,
        name: 'home',
        component: Home,
        routes: []
    },
    {
        path: '/About',
        name: 'about',
        component: asyncComponent(() => import(`../view/about`)),
        routes: []
    },
    {
        path: '/Product',
        name: 'product',
        component: Product,
        routes: []
    }
]
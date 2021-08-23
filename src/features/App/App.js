import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ResizeObserver } from "@juggle/resize-observer";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../../components/HomePage/HomePage';
import Layout from '../../components/Layout/Layout';
import PlanetArmy from '../../components/PlanetArmy/PlanetArmy';
import Shop from '../../components/Shop/Shop';
import Galaxy from '../../components/Galaxy/Galaxy';
import Attack from '../../components/Attack/Attack';

export default function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/planetArmy">
                        <Layout><PlanetArmy /></Layout>
                    </Route>
                    <Route path="/shop">
                        <Layout><Shop /></Layout>
                    </Route>
                    <Route path="/galaxy">
                        <Layout><Galaxy /></Layout>
                    </Route>
                    <Route path="/attack">
                        <Layout><Attack /></Layout>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

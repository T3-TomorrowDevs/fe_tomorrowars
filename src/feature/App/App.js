import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ResizeObserver } from "@juggle/resize-observer";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../../components/HomePage/HomePage';
import Layout from '../../components/Layout/Layout';
import PlanetArmy from '../../components/PlanetArmy/PlanetArmy';

export default function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    {/* <Route path="/planetArmy">
                        <Layout><PlanetArmy /></Layout>
                    </Route> */}
                </Switch>
            </BrowserRouter>
        </div>
    )
}

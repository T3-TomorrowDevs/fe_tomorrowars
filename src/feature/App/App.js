import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ResizeObserver } from "@juggle/resize-observer";
import HomePage from '../../components/HomePage/HomePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';

export default function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/gameHome">
                        <Layout />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

yar - Yet Another Router for React Native
===

(c) 2017 Gatlin Johnson <gatlin@niltag.net>

Synopsis
---

```jsx

/**
 * src/App.js
 */
import React from 'react';
import {
    View,
    Text
} from 'react-native';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, routerReducer } from 'yar';

import { yourReducer } from './reducers';
import { Main, OtherComponentA, OtherComponentB } from './components';

// Create a redux store with the router reducer in it. This should be
// middleware but isn't for now.
const store = createStore(combineReducers({
    yourState: yourReducer,
    routing: routerReducer
}));

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
              <Router>
                <Route
                  component={Main}
                  props={{ someProp: 'foo' }}
                  initial />
                <Route path={'other'}>
                  <Route
                    component={OtherComponentA}
                    path={'view-a'} />>
                  <Route
                    component={OtherComponentB}
                    props={{ reallyImportantThing: true }}
                    path={'view-b'} />
                </Route>
              </Router>
            </Provider>
        );
    }
}

// ./components/Main.jsx

// ... imports ...
export class Main extends React.Component {
    render() {
        return (
            <View>
                <Button
                    title='Go to View A'
                    onClick={() => this.props.routing.push('/other/view-a')} />
                <Button
                    title='Go to View B'
                    onClick={() => this.props.routing.push('/other/view-b', {
                        reallyImportantProp: false
                    })} />
            </View>
        );
    }
}

// ./components/OtherComponentA.jsx

// ... imports ...

export class OtherComponentA extends React.Component {
    render() {
        return (
            <View>
                <Button
                    title='Back'
                    onClick={() => this.props.routing.pop()} />
            </View>
        );
    }
}
```

Features
---

- Routing actions: `pop`, `push`, and `popAndPush`. The latter two take a path
  and an optional property object that will be merged in.
- Declarative routing.
- Components aren't instantiated until needed.
- Components don't need to know anything about the router. Routing actions are
  added under the key `routing`.

TODO
---

- Redux integration should be 1) optional and 2) done via middleware.
- Animated transitions
- Some means of basic layout management.
- *sigh* Tests, as always.

Why Another Router?
---

Honestly? My own edification. I wanted to see why other routers I've tried are
slow and also get to know more about how React and React Native work.

Questions / Comments / Bugs / Vast Wealth You Want To Give Me
---

You can reach me at <gatlin@niltag.net> or use the GitHub Issues feature.

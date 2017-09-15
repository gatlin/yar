import {
    ADD_SCENE,
    PUSH_SCENE,
    POP_SCENE,
    POP_AND_PUSH_SCENE
} from '../actions';

const initialState = {
    path: '/',
    history: [],
    scenes: {} // path -> { component / props }
};

const addScene = (state, { path, component, initial, props }) => {
    let newState = { ...state };
    newState.scenes[path] = { component, props };
    if (initial) {
        newState.path = path;
    }
    return newState;
};

const pushScene = (state, { path, props }) => {
    let newState = { ...state };
    newState.scenes[path].props = { ...newState.scenes[path].props, ...props};
    newState.history.push(state.path);
    newState.path = path;
    return newState;
};

const popScene = (state) => {
    let newState = { ...state };
    const path = newState.history.pop() || '/';
    newState.path = path;
    return newState;
};

const popAndPushScene = (state, { path, props }) => {
    let newState = { ...state };
    newState.scenes[path].props = props;
    newState.history.pop();
    newState.path = path;
    return newState;
};

export const routerReducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_SCENE:
        return addScene(state, action.data);
    case PUSH_SCENE:
        return pushScene(state, action.data);
    case POP_SCENE:
        return popScene(state);
    case POP_AND_PUSH_SCENE:
        return popAndPushScene(state, action.data);
    default:
        return state;
    }
};

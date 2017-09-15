export const ADD_SCENE = 'ADD_SCENE';
export const addScene = (path, component, initial, props = {}) => ({
    type: ADD_SCENE,
    data: { path, component, initial, props }
});

export const PUSH_SCENE = 'PUSH_SCENE';
export const push = (path, props = {}) => ({
    type: PUSH_SCENE,
    data: { path, props }
});

export const POP_SCENE = 'POP_SCENE';
export const pop = () => ({
    type: POP_SCENE,
    data: null
});

export const POP_AND_PUSH_SCENE = 'POP_AND_PUSH_SCENE';
export const popAndPush = (path, props = {}) => ({
    type: POP_AND_PUSH_SCENE,
    data: { path, props }
});

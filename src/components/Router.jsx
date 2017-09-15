import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { addScene, push, pop, popAndPush } from '../actions';
import { connect } from 'react-redux';
import Route from './Route';

class Router extends PureComponent {
    componentWillMount() {
        if (React.Children.count(this.props.children) === 0) {
            console.error('Router must have at least one child!');
            return;
        }
    }

    render() {
        const { routing: { path, scenes } } = this.props;
        if (typeof scenes[path] === 'undefined') {
            // allow the children to mount and register themselves since they
            // render null.
            return (
                <View>
                  {
                      React.Children.map(this.props.children,
                          child => React.cloneElement(child, {
                              addScene: this.props.addScene,
                              parentPath: ''
                          })
                      )
                  }
                </View>
            );
        }
        // the scenes are registered so render the chosen component
        const { component, props } = scenes[path];
        return React.createElement(component, {
            ...props,
            routing: {
                pop: this.props.pop,
                push: this.props.push,
                popAndPush: this.props.popAndPush
            }
        });
    }
}

const mapStateToProps = ({ routing }) => ({ routing });
const mapDispatchToProps = dispatch => ({
    addScene: (p,c,i,ps = {}) => dispatch(addScene(p,c,i,ps)),
    push: (a, b = {}) => dispatch(push(a, b)),
    pop: () => dispatch(pop()),
    popAndPush: (a, b = {}) => dispatch(popAndPush(a,b))
});

const router = connect(mapStateToProps,mapDispatchToProps)(Router);

export { router as Router };

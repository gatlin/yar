import React, { PureComponent } from 'react';
import { View } from 'react-native';

/**
 * A route nests scenes and other routes into a hierarchy.
 */
export class Route extends PureComponent {
    componentWillMount() {

        if (!this.props.path) {
            console.error('Route must have a path');
            return;
        }

        if (this.props.component) {
            const initial = this.props.initial || false;
            const path = this.getPath();
            this.props.addScene(
                path,
                this.props.component,
                initial,
                this.props.props || {}
            );
        }
    }

    getPath = () => {
        return this.props.parentPath + '/' + (this.props.path || '');
    };

    render() {
        const has_children = React.Children.count(this.props.children) > 0;
        return !has_children ? null : (
            <View>
              {
                  React.Children.map(
                      this.props.children,
                      child => React.cloneElement(child, {
                          addScene: this.props.addScene,
                          parentPath: this.getPath()
                      })
                  )
              }
            </View>
        );
    }
}

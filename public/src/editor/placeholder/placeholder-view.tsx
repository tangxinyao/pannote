import { observer } from 'mobx-react';
import * as React from 'react';
import { Placeholder } from './placeholder';

export interface IPlaceholderProps {
    placeholder: Placeholder;
}

export const PlaceholderView = observer((props: IPlaceholderProps) => {
    const { height, left, top, width } = props.placeholder;
    return (
        <div style={{ backgroundColor: '#f1aaa6', boxSizing: 'border-box', height, left, position: 'absolute', top, width, zIndex: 0}}></div>
    );
});

import { inject, observer } from 'mobx-react';
import * as React from 'react';

import { Store } from '../store';
import { canvasViewFactory } from './canvas-view-factory';
import { PlaceholderView } from './placeholder-view';

interface ICanvasProps {
    store?: Store;
}

export const CanvasView = inject('store')(
    observer(
        (props: ICanvasProps) => {
            const { store } = props;
            const placeholder = store.placeholder.get();
            return (
                <article style={{ position: 'relative', float: 'left', width: 'calc(100% - 3rem)', height: '100%' }}>
                    {
                        store.boxes.map(canvasViewFactory(store))
                    }
                    {
                        store.containers.map(canvasViewFactory(store))
                    }
                    {
                        placeholder && <PlaceholderView placeholder={placeholder} />
                    }
                </article>
            );
        }
    )
);

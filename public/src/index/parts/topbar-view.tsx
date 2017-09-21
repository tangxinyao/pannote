import { inject, observer } from 'mobx-react';
import * as React from 'react';

import { Store } from '../store';
import { topbarViewFactory } from './topbar-view-factory';

export interface ITopbarProps {
    store?: Store;
}

export const TopbarView = inject('store')(
    observer((props: ITopbarProps) => {
        const widget = props.store.selection.get();
        return (
            <header style={{ position: 'relative', height: '3rem', backgroundColor: '#fff', boxShadow: '0 0 0.5rem #c9cabb' }}>
                <div style={{ float: 'left', width: '3rem' }}>&nbsp;</div>
                {
                    topbarViewFactory(widget)
                }
            </header>
        );
    }));

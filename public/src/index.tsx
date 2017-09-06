import { Provider } from 'mobx-react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { widgetFactory } from './editor/widget-factory';
import { AsideView, CanvasView, TopbarView } from './parts';
import { Store } from './store';

const store = new Store();

export class App extends React.Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context);
    }

    public render() {
        return (
            <Provider store={store}>
                <div style={{ width: '100%', height: '100%', backgroundColor: '#eff0dc' }}>
                    <TopbarView />
                    <div style={{ width: '100%', height: 'calc(100% - 3rem)' }}>
                        <AsideView onStop={this.handleIconStop} />
                        <CanvasView />
                    </div>
                </div>
            </Provider >
        );
    }

    private handleIconStop = (type: string, offsetX: number, offsetY: number) => {
        store.addWidget(widgetFactory(type, offsetX, offsetY));
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

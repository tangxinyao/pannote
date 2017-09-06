import * as React from 'react';

import { IconView } from './icon-view';

export interface IAsideProps {
    onStop: (type: string, offsetX: number, offsetY: number) => void;
}

export class AsideView extends React.Component<IAsideProps, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        const { onStop } = this.props;
        return (
            <aside className="aside">
                <IconView type="note" className="fa fa-file-o" onStop={onStop} />
                <IconView type="picture" className="fa fa-file-image-o" onStop={onStop} />
                <IconView type="column" className="fa fa-columns" onStop={onStop} />
                <IconView type="board" className="fa fa-folder-o" onStop={onStop} />
                <IconView type="arrow" className="fa fa-arrows-h" onStop={onStop} />
                <span className="aside-icon">
                    <i className="fa fa-trash" />
                </span>
            </aside>
        );
    }
}

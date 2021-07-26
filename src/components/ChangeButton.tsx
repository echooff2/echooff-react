import React from 'react';

interface ChangeButtonProps {
    innerClass: string,
    children: string,
    onInnerClick: () => void
}

class ChangeButton extends React.Component<ChangeButtonProps> {
    render() {
        return (
            <button
                onClick={this.props.onInnerClick}
                className={this.props.innerClass}
            >
                {this.props.children}
            </button>
        );
    }
}

export default ChangeButton;
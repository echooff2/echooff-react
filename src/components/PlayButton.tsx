import React from "react";

interface PropsType {
    gameHref: string
}

class PlayButton extends React.Component<PropsType> {
    render() {
        return (
            <a 
                id="playlink" 
                href={this.props.gameHref}
            >
                <button
                    className="bt1"
                >
                    PLAY
                </button>
            </a>
        );
    }
}

export default PlayButton;
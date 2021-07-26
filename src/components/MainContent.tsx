import React from "react";
import ChangeButton from "./ChangeButton";

import PlayButton from "./PlayButton";

import kolko from '../img/kolko.png';
import platform from '../img/platform.png';

interface StateType {
    gameTitle: string,
    gameDescription: string,
    gameHref: string
}

class MainContent extends React.Component<{}, StateType> {
    constructor(props: {}) {
        super(props);
        this.change1 = this.change1.bind(this);
        this.change2 = this.change2.bind(this);

        this.state = {
            gameTitle: "Platformówka",
            gameDescription: "Komputerowa gra platformowa (potocznie: platformówka) – gra zręcznościowa polegająca głównie na poruszaniu bohatera po wielu mniej lub bardziej urozmaiconych poziomach, często po wielopoziomowych platformach (stąd nazwa gatunku), unikaniu pułapek i likwidacji bądź unikaniu przeciwników, a także zbieraniu różnych nagród i dodatków – takich jak pieniążków, kamieni szlachetnych, dodatkowych żyć czy power-upów.",
            gameHref: "/platformer/index.html"
        };
    }

    change1() {
        this.setState({
            gameTitle: "Kółko i krzyżyk",
            gameDescription: "Kółko i krzyżyk – gra strategiczna rozgrywana przez dwóch graczy, najczęściej na kartce papieru w kratkę. Gracze obejmują pola na przemian dążąc do objęcia trzech pól w jednej linii, przy jednoczesnym uniemożliwieniu tego samego przeciwnikowi. Pole może być objęte przez jednego gracza i nie zmienia swego właściciela przez cały przebieg gry. W najbardziej popularnej w Polsce wersji gra odbywa się na polu o wymiarach 3x3.",
            gameHref: "/ticTacToe"
        });
    }

    change2() {
        this.setState({
            gameTitle: "Platformówka",
            gameDescription: "Komputerowa gra platformowa (potocznie: platformówka) – gra zręcznościowa polegająca głównie na poruszaniu bohatera po wielu mniej lub bardziej urozmaiconych poziomach, często po wielopoziomowych platformach (stąd nazwa gatunku), unikaniu pułapek i likwidacji bądź unikaniu przeciwników, a także zbieraniu różnych nagród i dodatków – takich jak pieniążków, kamieni szlachetnych, dodatkowych żyć czy power-upów.",
            gameHref: "/platformer/index.html"
        });
    }

    render() {
        return (
            <div>
                <div id="c1">
                    <div id="dbt1">
                        <PlayButton gameHref={this.state.gameHref}/>
                    </div>
                    <div id="dbt2">
                        <ChangeButton 
                            onInnerClick={this.change1}
                            innerClass="bt2" 
                        >
                            Kółko i krzyżyk
                        </ChangeButton>
                    </div>
                    <div id="dbt3">
                        <ChangeButton
                            onInnerClick={this.change2}
                            innerClass="bt3"
                        >
                            Platformówka
                        </ChangeButton>
                    </div>
                </div>
                <div id="c2">
                    <h1 id="h1">
                        {this.state.gameTitle}
                    </h1>
                    <h4 id="h4">
                        {this.state.gameDescription}
                    </h4>
                </div>
                <img
                    id="kolko"
                    src={kolko}
                    alt="screenshot from ticTacToe game"
                />
                <img 
                    id="platform"
                    src={platform}
                    alt="screenshot from platformer game"
                />
            </div>
        );
    }
}

export default MainContent;
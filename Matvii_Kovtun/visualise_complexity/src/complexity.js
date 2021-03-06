//TODO: rename entry point

import MyNumber from "./Number";
import {getRandom} from "./utils";
import GoodAlgo from './GoodAlgo';
import {K, MARGINFROMSIDES, NUMBEROFNUMBERS} from './consts';
import BadAlgo from "./BadAlgo";


class Complexity {
    // TODO: rename Complexity
    // TODO: pass DOM node, instead of selector
    constructor(document) {
        this.algorithms = [
            new GoodAlgo(document.querySelector(".page__content"), document.querySelector(".result"), "good"),
            new BadAlgo(document.querySelector(".page__content"), document.querySelector(".result"), "bad"),
        ];
    }

    clearArea() {
        this.algorithms.map((el) => {
            el.prepareAreas();
        });
        return this;

    }

    generatePoints() {
        this.numbers = new Array(NUMBEROFNUMBERS)
            .fill()
            .map((el, i) =>
                new MyNumber(getRandom(MARGINFROMSIDES, this.algorithms[0].width - MARGINFROMSIDES), getRandom(MARGINFROMSIDES, this.algorithms[0].height - MARGINFROMSIDES), getRandom(1, NUMBEROFNUMBERS + 1)));
        this.numbers.map((el) => {
            this.algorithms.map((elem) => {
                console.log(elem.context);
                el.draw(elem.context);
            })
        });
        return this;
    };

    renderNumber(number, modifier) {
        let nd = document.createElement("span");
        nd.textContent = number;
        nd.classList.add("result__missing-numbers");
        nd.classList.add(modifier);
        return nd;
    }

    async action() {
        let elem = document.querySelector(".result__good");
        await Promise
            .all(this.algorithms.map(el => el.perform(this.numbers)
                .then(value =>
                    value
                        .map(el => this.renderNumber(el, "result__missing-numbers_good"))
                        .map(el => elem.appendChild(el))
                )))
    }
}


const gameOrder = () => {
    let resetButton = document.querySelector(".start-button");
    let game = new Complexity(document);
    resetButton.addEventListener("click", () => {
        resetButton.classList.add("start-button_disabled");
        game.clearArea()
            .generatePoints()
            .action()
            .then(() => resetButton.classList.remove("start-button_disabled"));
    }, false);

};

gameOrder();
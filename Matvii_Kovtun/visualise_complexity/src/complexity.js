//TODO: add good delay between deleting symbols

import MyNumber from "./Number";
import {getRandom} from "./utils";
import GoodAlgo from './GoodAlgo';
import {K, MARGINFROMSIDES, NUMBEROFNUMBERS} from './consts';
import BadAlgo from "./BadAlgo";


const good = new GoodAlgo(document);
const bad = new BadAlgo(document);

const numbers = new Array(NUMBEROFNUMBERS - 1)
    .fill()
    .map((el, i) =>
        new MyNumber(getRandom(MARGINFROMSIDES, good.width - MARGINFROMSIDES), getRandom(MARGINFROMSIDES, good.height - MARGINFROMSIDES), i + 1));


const generatePoints = () => {
    numbers.map((el) => {
        el.draw(good.context);
        el.draw(bad.context);
    });

};



generatePoints();
good.goodAlgorithm(numbers);
bad.badAlgorithm(numbers);

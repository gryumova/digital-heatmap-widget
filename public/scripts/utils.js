import {colors} from './variables.js'

export function getColor(value) {
    var number = Number(value.innerHTML.slice(0, -1));
    if (number > 0 && number <= 0.25 && number !== isNaN) return colors.green;
    if (number >= 0.25 && number !== isNaN) return colors.moreGreen;
    if (number < 0 && number >= -0.25 && number !== isNaN) return colors.red;
    if (number <= -0.25 && number !== isNaN) return colors.moreRed;
    if (value.innerHTML !== "") return colors.grey;

    return colors.undefined;
};

export function getImg(name) {
    return `<img 
                src="/images/${name.trim()}.png"
                alt=""
            />`
};

export function getNumberPercent(val) {
    if (val !== "" && val !== undefined) return val+"%";
    if (val === undefined) return "0%";
    return "";
}

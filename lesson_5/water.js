var height = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];

Array.prototype.max = function () {
    return Math.max.apply(Math, this);
};

Array.prototype.min = function () {
    return Math.min.apply(Math, this);
};

var water = waterValume(height);
console.log('Water valume (1):' + water.water);
document.getElementById('arr').innerHTML += height.toString();
document.getElementById('result').innerHTML += water.water;

function waterValume(height) {
    let max = height.max();
    let min = height.min() + 1;
    let water = 0;
    let waterArr = [];

    for (let i = min; i <= max; i++) {
        let start = height.length - 1;
        let finish = 0;
        let kol = 0;
        for (let k = 0; k < height.length; k++) {
            if (height[k] >= i) {
                kol++;
                if (start > k) start = k;
                if (finish < k) finish = k;
            }
        }
        if (kol > 0) {
            water += finish - start - kol + 1;
            for (let w=start;w<finish;w++) {
                waterArr[w] = i;
            }
        }
    }
    return {"water":water, "waterArr":waterArr};
}

let svgEl = document.getElementById('mySvg');
let maxheight = height.max()*30;
svgEl.setAttribute("height",maxheight);

for(let i=0;i<water.waterArr.length-1;i++){
    let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x",i*30);
    rect.setAttribute("y",maxheight-water.waterArr[i]*30);
    rect.setAttribute("width","30");
    rect.setAttribute("height",water.waterArr[i]*30);
    rect.setAttribute("stroke","brown");
    rect.setAttribute("fill","blue");

    svgEl.appendChild(rect);
}

for(let i=0;i<height.length-1;i++){
 let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
 rect.setAttribute("x",i*30);
 rect.setAttribute("y",maxheight-height[i]*30);
 rect.setAttribute("width","30");
 rect.setAttribute("height",height[i]*30);
 rect.setAttribute("stroke","blue");
 rect.setAttribute("fill","brown");

 svgEl.appendChild(rect);
 }
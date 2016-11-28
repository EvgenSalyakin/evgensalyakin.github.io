var height = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];
//var height = [2,9,8,4,2,2,5,8,9,7,4];

Array.prototype.max = function () {
    return Math.max.apply(Math, this);
};

Array.prototype.min = function () {
    return Math.min.apply(Math, this);
};

let result = waterValume(height);
//console.log('Water valume (1):' + result.water);
showResult(result);

function generate() {
    let svgEl = document.getElementById('mySvg');
    svgEl.innerHTML = '';
    height = [];
    let kol = getRandom(5,20);
    for (let i=0;i<kol-1;i++) {
        height[i]=getRandom(0,10);
    }
    result = waterValume(height);
    showResult(result);
}

function waterValume(height) {
    let max = height.max();
    let min = height.min() + 1;
    let water = 0;
    let waterArr = [];
    for (let i=0;i<height.length;i++) waterArr[i]=0;

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

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showResult(result) {
    document.getElementById('arr').innerHTML = height.toString();
    document.getElementById('result').innerHTML = result.water;

    let svgEl = document.getElementById('mySvg');
    let maxheight = (height.max()+1)*30;
    let maxwidth = (height.length+1)*30;
    svgEl.setAttribute("height",maxheight);
    svgEl.setAttribute("width",maxwidth);

    for(let i=0;i<result.waterArr.length;i++){
        let rw = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rw.setAttribute("x",i*30);
        rw.setAttribute("y",maxheight-result.waterArr[i]*30);
        rw.setAttribute("width","30");
        rw.setAttribute("height",result.waterArr[i]*30);
        rw.setAttribute("stroke","gray");
        rw.setAttribute("fill","blue");

        svgEl.appendChild(rw);
    }

    for(let i=0;i<height.length;i++){
        let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x",i*30);
        rect.setAttribute("y",maxheight-height[i]*30);
        rect.setAttribute("width","30");
        rect.setAttribute("height",height[i]*30);
        rect.setAttribute("stroke","blue");
        rect.setAttribute("fill","gray");

        svgEl.appendChild(rect);
    }

    for(let i=0;i<=maxheight;i+=30) {
        let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1",0);
        line.setAttribute("y1",i);
        line.setAttribute("x2",maxwidth);
        line.setAttribute("y2",i);
        line.setAttribute("style","stroke:gray;stroke-width:2");

        svgEl.appendChild(line);
        //<line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" />
    }
}
var train = true;

function setup() {
    createCanvas(500, 500);
    background(255);
    nn = new RedeNeural(2, 3, 1);
    dataset = {
        inputs:
            [[1, 1],
            [1, 0],
            [0, 1],
            [0, 0]],
        outputs:
            [[0],
            [1],
            [1],
            [0]]
    }
}

function draw() {
    if (train) {
        for (var i = 0; i < 10000; i++) {
            var index = floor(random(4));
            nn.train(dataset.inputs[index], dataset.outputs[index]);
        }
        var1 = nn.predict([0, 0])[0];
        var2 = nn.predict([0, 1])[0];
        if (var1 < 0.04 &&  var2 > 0.98) {
            train = false;
            console.log("terminou");
            console.log(var1);
            console.log(var2);
        }
    }
}


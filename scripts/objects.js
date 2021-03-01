

function Fruit(clr){
    this.hasSeeds = true;
    this.color = clr;
    this.crispiness;
    this.name = "nothing";
    //alert(name);

    this.eatIt = function(){
        return "Eat this " + this.color + " fruit.";// + crispiness;
    }

}


var apple = new Fruit("red");
//apple.hasSeeds = false;
apple.crispiness = 8;
apple.name = 'Apple';
alert(apple.crispiness);


var pear = new Fruit("Green");
alert(pear.color);

alert(apple.eatIt())

var fruits = [];
fruits.push(apple);
fruits.push(pear);


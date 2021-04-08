var myNum: number;
var myStr: string;
var numArr: number[] = [];

//myNum = 5;
////myNum = "five";
////myNum = true;
////myNum = "adflkajsdf";
//myNum = 13;
//myStr = "235";

numArr.push(23);
numArr.push(3254);

for (let val of numArr) {
  //  alert(typeof val);
}

function fun(apple:string):string {
    alert(apple);
    return "ehllo";
}

//fun("green")
//fun(true)

function fvan(va1, va2, va3) {}

function fun2(val1: string, 
    val2: number = 2,
    val3: boolean = false): void {
    if (typeof val3 === "undefined") {
        alert("no third argument");
    }
    alert(val1 + val2);
}

//fun2("apples",34);

class Student {
    private _Name;

    constructor(name: string) {
        this._Name = name;
    }

    get Name() :string {
        return this._Name;
    }

    set Name(newName: string) {
        this._Name = newName;
    }

}

class Assistant extends Student{
    constructor(nm: string) {
        super(nm);
    }
}

var bob:Student = new Student("Bob");
//alert(bob.Name);
//bob.Name = "Frank";

var sally: Assistant;
sally = new Assistant("Sally");
//alert(sally.Name);

//alert(bob.Name);

//alert((bob instanceof Assistant) + " | " +
//    (bob instanceof Student))

//alert((sally instanceof Assistant) + " | " +
//    (sally instanceof Student))

interface IMagical {
    castSpell():void;
    sayMagicWords():string;
}

class Wizard implements IMagical {
    public hatColor;

    spin() {
        return "cycle it";
    };

    castSpell():void { this.hatColor = "green" }
    sayMagicWords():string { return "1234";}
}

class Witch implements IMagical {
    public broom = "straw";

    castSpell(): void { this.broom = "hay" }
    sayMagicWords(): string {
        return "ShaZam!";
    }
}


var harry = new Wizard();
harry.spin();
//alert(harry.hatColor);
//harry.castSpell();
////alert(harry.hatColor);
//alert(harry.sayMagicWords());

var harrietta = new Witch();

var magicArr: IMagical[] = [];
magicArr.push(harry);
magicArr.push(harrietta);
magicArr.push(new Wizard());

//for (var mUser of magicArr){
//    alert(mUser.sayMagicWords());
//}

var fruit: string = "Apple";
var number: number = 5;

var saying = `a
I like to eat ${fruit}.
I like to "eat" ${number} of them.
e`;

//alert(saying);

//enum Attitudes {
//        Fiesty = 6,
//        Lazy = 3,
//        Onery = 7,
//        Sleepy
//}

//class Cat {
//    public attitude: Attitudes;
//    public name: string;

//    constructor(nm: string, att: Attitudes) {
//        this.name = nm;
//        this.attitude = att;
//    }
//}

//var felix = new Cat("Felix", Attitudes.Onery);

enum SwitchState {
    Off = 0,
    On = 100,
    Dimmed = 50,
    MostlyDimmed = 30
}


class Switch {
    private name: string;
    /// States: 
    /// 0 : off
    /// 1 : on
    private state: SwitchState;
    constructor(nm:string,state:SwitchState) {
        this.name = nm;
        this.state = state;
    }

    getLevel() {
        return this.state;
    }

}


var swArr: Switch[] = [];
swArr.push(new Switch("Front Room",SwitchState.On));
swArr.push(new Switch("Living Room", SwitchState.Off));
swArr.push(new Switch("Kitchen", SwitchState.Dimmed));
swArr.push(new Switch("Bedroom", SwitchState.MostlyDimmed));
swArr.push(new Switch("Bathroom", SwitchState.Off));

//alert(swArr[0].getLevel());
for (var sw of swArr) {
    if (sw.getLevel() == SwitchState.On) {
        document.getElementById("").innerText += sw.getLevel();
    }
}

var myOtherNum: number = 67;


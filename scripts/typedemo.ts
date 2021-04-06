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
alert(sally.Name);

alert(bob.Name);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myNum;
var myStr;
var numArr = [];
//myNum = 5;
////myNum = "five";
////myNum = true;
////myNum = "adflkajsdf";
//myNum = 13;
//myStr = "235";
numArr.push(23);
numArr.push(3254);
for (var _i = 0, numArr_1 = numArr; _i < numArr_1.length; _i++) {
    var val = numArr_1[_i];
    //  alert(typeof val);
}
function fun(apple) {
    alert(apple);
    return "ehllo";
}
//fun("green")
//fun(true)
function fvan(va1, va2, va3) { }
function fun2(val1, val2, val3) {
    if (val2 === void 0) { val2 = 2; }
    if (val3 === void 0) { val3 = false; }
    if (typeof val3 === "undefined") {
        alert("no third argument");
    }
    alert(val1 + val2);
}
//fun2("apples",34);
var Student = /** @class */ (function () {
    function Student(name) {
        this._Name = name;
    }
    Object.defineProperty(Student.prototype, "Name", {
        get: function () {
            return this._Name;
        },
        set: function (newName) {
            this._Name = newName;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var Assistant = /** @class */ (function (_super) {
    __extends(Assistant, _super);
    function Assistant(nm) {
        return _super.call(this, nm) || this;
    }
    return Assistant;
}(Student));
var bob = new Student("Bob");
//alert(bob.Name);
//bob.Name = "Frank";
var sally;
sally = new Assistant("Sally");
var Wizard = /** @class */ (function () {
    function Wizard() {
    }
    Wizard.prototype.spin = function () {
        return "cycle it";
    };
    ;
    Wizard.prototype.castSpell = function () { this.hatColor = "green"; };
    Wizard.prototype.sayMagicWords = function () { return "1234"; };
    return Wizard;
}());
var Witch = /** @class */ (function () {
    function Witch() {
        this.broom = "straw";
    }
    Witch.prototype.castSpell = function () { this.broom = "hay"; };
    Witch.prototype.sayMagicWords = function () {
        return "ShaZam!";
    };
    return Witch;
}());
var harry = new Wizard();
harry.spin();
//alert(harry.hatColor);
//harry.castSpell();
////alert(harry.hatColor);
//alert(harry.sayMagicWords());
var harrietta = new Witch();
var magicArr = [];
magicArr.push(harry);
magicArr.push(harrietta);
magicArr.push(new Wizard());
//for (var mUser of magicArr){
//    alert(mUser.sayMagicWords());
//}
var fruit = "Apple";
var number = 5;
var saying = "a\nI like to eat " + fruit + ".\nI like to \"eat\" " + number + " of them.\ne";
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
var SwitchState;
(function (SwitchState) {
    SwitchState[SwitchState["Off"] = 0] = "Off";
    SwitchState[SwitchState["On"] = 100] = "On";
    SwitchState[SwitchState["Dimmed"] = 50] = "Dimmed";
    SwitchState[SwitchState["MostlyDimmed"] = 30] = "MostlyDimmed";
})(SwitchState || (SwitchState = {}));
var Switch = /** @class */ (function () {
    function Switch(nm, state) {
        this.name = nm;
        this.state = state;
    }
    Switch.prototype.getLevel = function () {
        return this.state;
    };
    return Switch;
}());
var swArr = [];
swArr.push(new Switch("Front Room", SwitchState.On));
swArr.push(new Switch("Living Room", SwitchState.Off));
swArr.push(new Switch("Kitchen", SwitchState.Dimmed));
swArr.push(new Switch("Bedroom", SwitchState.MostlyDimmed));
swArr.push(new Switch("Bathroom", SwitchState.Off));
//alert(swArr[0].getLevel());
for (var _a = 0, swArr_1 = swArr; _a < swArr_1.length; _a++) {
    var sw = swArr_1[_a];
    if (sw.getLevel() == SwitchState.On) {
        document.getElementById("").innerText += sw.getLevel();
    }
}
var myOtherNum = 67;
//# sourceMappingURL=typedemo.js.map
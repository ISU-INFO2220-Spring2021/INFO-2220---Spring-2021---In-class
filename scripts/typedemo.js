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
alert(sally.Name);
alert(bob.Name);
//# sourceMappingURL=typedemo.js.map
var cl = console.log;
// + operator can not be applied in combine type
function add(n1, n2, resultOf) {
    if (typeof n1 === "number" && typeof n2 === "number") {
        return n1 + n2;
    }
    else {
        return n1.toString() + n2.toString;
    }
}
cl(add(10, 20, "as-number"));

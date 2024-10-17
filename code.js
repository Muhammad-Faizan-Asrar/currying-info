function chooseBread(breadType) {
    return function(filling) {
        return function(sauce) {
            return `Your sandwich with ${breadType},${filling},and ${sauce} is ready!`;
        };
    };
}
const sandwichOrder = chooseBread('white bread')('chicken')('mayo');
console.log(sandwichOrder);
currying-info<br>
Currying is a way to break down a function that takes multiple arguments into a series of smaller functions, each taking one argument at a time.
<br>

Daily life Example:-<br>
The function 'chooseBread' takes one argument, 'breadType', and returns another function that takes 'filling'. <br>
That second function returns a third function that takes 'sauce'. <br>
Finally, it combines all three inputs ('breadType', 'filling', and 'sauce') to create a sandwich order message. <br>
When you call 'chooseBread('white bread')('chicken')('mayo')', it produces the message: "Your sandwich with white bread, chicken, and mayo is ready!"

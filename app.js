//Add your reasons after the caption 'comment'.
//You can use code to explain your reasoning.

/**
 * 1. What is a potential pitfall with using typeof bar === "object" to determine if bar is an object? How can this pitfall be avoided?
 *    (In respect to null & array)
 * Comments: 
 * 
 */


 /**
  * 2. What will the code below output to the console and why?

        (function(){
        var a = b = 3;
        })();

        console.log("a defined? " + (typeof a !== 'undefined'));
        console.log("b defined? " + (typeof b !== 'undefined'));

    Comments: 

  */


/**
 * 3. What will the code below output to the console and why?

        var myObject = {
            foo: "bar",
            func: function() {
                var self = this;
                console.log("outer func:  this.foo = " + this.foo);
                console.log("outer func:  self.foo = " + self.foo);
                (function() {
                    console.log("inner func:  this.foo = " + this.foo);
                    console.log("inner func:  self.foo = " + self.foo);
                }());
            }
        };
        myObject.func();
    
    Comments:  

*/


/** 
 * 4. Discuss possible ways to write a function isInteger(x) that determines if x is an integer.
 *    And write a function using one of your discussed approach.
 * 
 * Comments:
*/  

/**
 * 5. In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?

        (function() {
            console.log(1); 
            setTimeout(function(){console.log(2)}, 1000); 
            setTimeout(function(){console.log(3)}, 0); 
            console.log(4);
        })(); 

   Comments:      
*/

/**
 * 6. Write a simple function that returns a boolean indicating whether or not a string is a palindrome.  
*/


/**
 * 7.What will the code below output to the console and why?

        var arr1 = "john".split('');
        var arr2 = arr1.reverse();
        var arr3 = "jones".split('');
        arr2.push(arr3);
        console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
        console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

    Answer: 

*/

 /**
  * 8.What will the code below output to the console and why ?

        console.log(1 +  "2" + "2");
        console.log(1 +  +"2" + "2");
        console.log(1 +  -"1" + "2");
        console.log(+"1" +  "1" + "2");
        console.log( "A" - "B" + "2");
        console.log( "A" - "B" + 2);  
    
    Answer:    
*/

/**
 * 9. What would the following lines of code output to the console?

        console.log("0 || 1 = "+(0 || 1));
        console.log("1 || 2 = "+(1 || 2));
        console.log("0 && 1 = "+(0 && 1));
        console.log("1 && 2 = "+(1 && 2));
        Explain your answer. 
    
    Comments:     
*/

/**
 * 10. What will be the output when the following code is executed? Explain.

        console.log(false == '0')
        console.log(false === '0')

    Comments:    
 */
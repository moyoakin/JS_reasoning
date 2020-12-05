//Add your reasons after the caption 'comment'.
//You can use code to explain your reasoning.

/**
 * 1. What is a potential pitfall with using typeof bar === "object" to determine if bar is an object? How can this pitfall be avoided?
 *    (In respect to null & array)
 * Comments: 
 * typeof is not sufficient for checking Refrence types but Ok for value types.
 * an efficient way of performing such operation is by using Object.prototype.toString.call();
 * 
 */


 /**
  * 2. What will the code below output to the console and why?

        (function(){
        var a = b = 3;
        })();

        console.log("a defined? " + (typeof a !== 'undefined')); false;
        console.log("b defined? " + (typeof b !== 'undefined')); true;

    Comments: Variable "a" was initialized but not assigned;

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
    
    Comments:  the code will output all the values of the object property func. it will logout all the lines we call the console.log();

*/


/** 
 * 4. Discuss possible ways to write a function isInteger(x) that determines if x is an integer.
 *    And write a function using one of your discussed approach.
 * function isInteger(x) {
    if(typeof x !== "number"){
        return "not a valid entry";
    }
    if (Number.isInteger(x)) {
      return true;
    }
    return false;
  }
  
  isInteger();
 * 
 * Comments: the function can be written using the Number.isInyeger function an example is the function above
*/  



/**
 * 5. In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?

        (function() {
            console.log(1); this line logs out first based on position
            setTimeout(function(){console.log(2)}, 1000); this comes out last after the settimeout runs
            setTimeout(function(){console.log(3)}, 0); this line follows because the time out is set to 0
            console.log(4); this line follows because it is a straight console.log function call
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

    Answer:  both will output j,o,n,e,s
    the split function was used to split the characters in the string

*/

 /**
  * 8.What will the code below output to the console and why ?

        console.log(1 +  "2" + "2"); 122
        console.log(1 +  +"2" + "2"); 32 (the string 2 was converted into a number)
        console.log(1 +  -"1" + "2"); 02 (1-1 = 0 + "2")
        console.log(+"1" +  "1" + "2");112
        console.log( "A" - "B" + "2");NaN2
        console.log( "A" - "B" + 2);  NAN
    
    Answer:    
*/

/**
 * 9. What would the following lines of code output to the console?

        console.log("0 || 1 = "+(0 || 1)); 1
        console.log("1 || 2 = "+(1 || 2));1
        console.log("0 && 1 = "+(0 && 1));0
        console.log("1 && 2 = "+(1 && 2));2
        Explain your answer. 
    
    Comments: Or returns the first truthy value while AND check if both values are truty otherwise returns false
*/

/**
 * 10. What will be the output when the following code is executed? Explain.

        console.log(false == '0') true this is a weak check
        console.log(false === '0')false this is a strict check

    Comments:    
 */
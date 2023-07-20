'use strict'

// console.log("Namaste");

// console.log(this);

// function displayThis(){
//      console.log(this);
//     }
//     displayThis();
    
    // let insideObjThis = {
    //     name : 'krishna',
    //     age : 20,
    //     fn : function(){
    //         console.log(this);
    //         console.log(this.age);
    //     }
    // }
    
    // insideObjThis.fn();
    
    let insideObjThis = {
        name: 'krishna',
        age: 20,
        fn: function () {
            // console.log(this);
            function myfn() {
                console.log(this);
            }
            myfn();
        }
    }
    
    insideObjThis.fn();
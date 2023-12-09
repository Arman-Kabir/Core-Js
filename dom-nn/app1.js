// #9 -- Events 
/**
 target is a property on the event object.


 */
// var h2 = document.querySelector('#book-list h2');
// h2.addEventListener('click', function (e) {
//     console.log(e.target);
//     console.log(e);
// })
// console.log(h2);

var btns = document.querySelector('#book-list .delete');

Array.from(btns).forEach(function (btn) {
    btn.addEventListener('click', function (e) {

        const li = e.target.parentElement;
        console.log(li);
        li.parentNode.removeChild(li)
    });
});

// console.log(btns);
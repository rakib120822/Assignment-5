###  What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?


1. getElementById -> select of element through it's id , which return that element;
2. getElementByClassName -> select all the elements that have same class name and return a array type object;

3. querySelector -> select the first element which match with className or id provide as parameter;

4. querySelectorAll -> select all the element that have className or id provide as parameter  and return a array type object;



### How do you create and insert a new element into the DOM?

document.createElement("tagName");

**for insert**
1. select the parentNode (const parent = document.getElementById("parent") ) 
2. create new element (const child =  document.createElement("tagName");)
3. use appendChild function to insert  (parent.appendChild(child))





### What is Event Bubbling and how does it work?
when user interact with any element  , the event is first triggered on that element . the is bubbles up through its ancestors.

Suppose  a button inside a div( class = parent) . The parent div is inside a div(class = grandParent).
when user clicked on the button then first execute the button click event then it bubble up and execute parent div click event and then it execute the grandParent click event. Similar like bubble it goes up and finally reach at document.




### What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a JavaScript technique where instead of attaching event listeners to multiple child elements individually, you attach a single event listener to a common parent and use event bubbling to handle events for the children.

In my project I use call-btn class for each card call button. then instead of attaching event to each button  i select all element  and using bubble up concept add event for each button.


**const callBtns = document.getElementsByClassName("call-btn");
for (const btn of callBtns) {
  btn.addEventListener("click", function () {
    const title = btn.parentNode.parentNode.children[1].children[0].innerText;
    const number = btn.parentNode.parentNode.children[2].children[0].innerText;
    const coinAmount = Number(
      document.getElementById("coin-counter").innerText
    );

    const time = new Date().toLocaleTimeString();
    if (coinAmount < 20) {
      alert("You don't have sufficient coin");
      return;
    } else {
      alert(title + " " + number + "...");
      document.getElementById("coin-counter").innerText = coinAmount - 20;
      addHistory(title, number, time);
    }
  });
}


**Usefullness**
1.to increase performance.
2. handles dynamic elements.
3. readable and cleaner code.
4. less memory usage.


### What is the difference between preventDefault() and stopPropagation() methods?

1. preventDefault() function prevent element default behavior . like a button inside a form tag behave like a submit button. whenever user click the button the form will submit it.to prevent this default behavior preventDefault function is used.


2.stopPropagation() function stop the event from bubbling up.
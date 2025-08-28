<!-- Emergency Hotline Project -->

This project is a web application for emergency hotline services. Users can like services, copy numbers, and make calls while managing coins. All calls are tracked in a call history and built with HTML, Tailwind CSS, and vanilla JavaScript.



 <!-- Features -->

1. Navbar showing Heart count, Coins (default 100), Copy count
2. Hero section with gradient background, logo, title.
3. Emergency hotline cards containing:
  1. Icon / Image  
  2. Service Name   
  3. Hotline Number  
  4. Category Badge  
  5.  Heart button, Copy button, Call button
4. Call History section (initially empty, updates dynamically)
5. Clear History button
6. Fully responsive for mobile devices


 <!-- Function -->

1. Clicking  heart icon increases the Heart count in the navbar.  
2. Clicking Copy button  copies the number and increases Copy count.  
3. Clicking Call button:
   1. Shows an alert with service name, number, and call time.  
   2. Decrease 10 coins per call.  
   3. If coins < 10, shows alert and stops the action.  
   4. Adds service to Call History section.



 <!-- Questions  -->

1. Difference between `getElementById`, `getElementsByClassName`, and `querySelector / querySelectorAll`
   1. `getElementById`: Selects a single element by ID.  
   2. `getElementsByClassName`: Selects all elements with a class.  
   3. `querySelector`: Selects the first element that matches a CSS selector.  
   4. `querySelectorAll`: Selects all elements that match a CSS selector.

2. How to create and insert a new element into the DOM  
   1. Use document.createElement("tagName").  
   2. Set its properties or innerHTML.  
   3. Insert it using appendChild(parent) or insertBefore(reference).

3. Event Bubbling 
   1. Events start at the target element and bubble up to parent elements.  
   2. Example: Clicking a button triggers the click event of its parent too.

4. Event Delegation in JavaScript  
   1. Attach one event listener to a parent element to handle events for all its children.  
   2. Useful for dynamic elements or reducing multiple listeners.

5. Difference between `preventDefault()` and `stopPropagation()` 
   1. `preventDefault()`: Stops default browser behavior .  
   2. `stopPropagation()`: Stops event from bubbling to parent elements.
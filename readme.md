<!-- Emergency Hotline Project -->

This project is a web application for emergency hotline services. Users can like services, copy numbers, and make calls while managing coins. All calls are tracked in a call history and built with HTML, Tailwind CSS, and vanilla JavaScript.



 <!-- Features -->

- Navbar showing Heart count, Coins (default 100), Copy count
- Hero section with gradient background, logo, title.
- Emergency hotline cards containing:
  - Icon / Image  
  - Service Name   
  - Hotline Number  
  - Category Badge  
  -  Heart button, Copy button, Call button
- Call History section (initially empty, updates dynamically)
- Clear History button
- Fully responsive for mobile devices


 <!-- Function -->

1. Clicking  heart icon increases the Heart count in the navbar.  
2. Clicking Copy button  copies the number and increases Copy count.  
3. Clicking Call button:
   - Shows an alert with service name, number, and call time.  
   - Deducts 20 coins per call.  
   - If coins < 20, shows alert and stops the action.  
   - Adds service to Call History section.



 <!-- Questions  -->

1. Difference between `getElementById`, `getElementsByClassName`, and `querySelector / querySelectorAll`
   - `getElementById`: Selects a single element by ID.  
   - `getElementsByClassName`: Selects all elements with a class.  
   - `querySelector`: Selects the first element that matches a CSS selector.  
   - `querySelectorAll`: Selects all elements that match a CSS selector.

2. How to create and insert a new element into the DOM  
   - Use document.createElement("tagName").  
   - Set its properties or innerHTML.  
   - Insert it using appendChild(parent) or insertBefore(reference).

3. Event Bubbling 
   - Events start at the target element and bubble up to parent elements.  
   - Example: Clicking a button triggers the click event of its parent too.

4. Event Delegation in JavaScript  
   - Attach one event listener to a parent element to handle events for all its children.  
   - Useful for dynamic elements or reducing multiple listeners.

5. Difference between `preventDefault()` and `stopPropagation()` 
   - `preventDefault()`: Stops default browser behavior .  
   - `stopPropagation()`: Stops event from bubbling to parent elements.
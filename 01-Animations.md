# Animations

* Already had a base css and html project to start with
  * Index.html has the jQuery script
  * Our code changes will go inside script.js
* If you're calling two animations on the same object, the first one finishes and then the next one is called
* Fade In, Fade Out and Fade To
  * Fade Out sets the element to have css style of "display: none"
  * All other elements adjust such that the faded out element never existed on the layout
  * fadeTo with 0 opacity leaves the element on the layout, but just makes it invisible
* Showing and Hiding Elements
  * Can show, hide or toggle an element
  * jQuery sets its display to true or none accordingly
  * Can we used to hide or show elements on user clicks
  * Can pass in time to use them as animations
* Sliding Elements Up and Down
  * Can be used for Read More
  * Also has a slideToggle
* Custom Animations
  * Instead of using strings, you can use javascript objects, replace - with capitalizing the second e.g. "margin-left" becomes marginLeft
 * Can't use colors in the animate functions
 * Can use callbacks and chaining for custom anomations, and built in ones like fadeOut etc

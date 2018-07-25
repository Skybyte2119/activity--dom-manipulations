//--------------------------------------------------------
//TASK 1: Add the text 'List of Friends' to .title element
//--------------------------------------------------------

var originalTitle = document.querySelector('#app-container .title');

originalTitle.innerHTML = '<h3 class="title">List of Friends</h3>'






//--------------------------------------------------------
//TASK 2: Put this array of strings as <li> elements
//        onto the friends list
//
//     BONUS: do it in reverse order.
//--------------------------------------------------------

var friendsList = ['Jimmy G.', 'Scotty M.', 'Patty L.', 'Kelly F.', 'Kitty S.']
var reversedFriendsList = friendsList.reverse();
var readUl = document.querySelector('#app-container .friends-list');
// console.log(readUl)

reversedFriendsList.forEach (function(amigo) {
  var newLi =document.createElement("li");
  newLi.textContent = amigo;
  readUl.appendChild(newLi)
})





//--------------------------------------------------------
//TASK 3: Make all of the text capitalized in the <li> elements with a
//        class of 'urgent'
//
//        BONUS: Capitalize AND make bold the elements with
//               a class of 'urgent'
//--------------------------------------------------------

var liList = document.querySelectorAll("li");
var urgentList = document.querySelectorAll(".urgent");

li = [...liList];

liList.forEach(function (element) {
   var liHtml = element.textContent.toUpperCase();
   element.innerHTML = liHtml;
});

urgentList = [...urgentList];

var urgBegin = "<b>";
var urgLast = "</b>"
urgentList.forEach(function (elem) {
   html = urgBegin+ elem.textContent + urgLast;
   elem.innerHTML = html;
});

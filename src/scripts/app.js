 let arrow = document.querySelectorAll(".arrow");
 let subArrow = document.querySelectorAll(".subArrow");
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
   let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
   arrowParent.classList.toggle("showMenu");
    });
  }
   for (var i = 0; i < subArrow.length; i++) {
    subArrow[i].addEventListener("click", (e)=>{
   let subArrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
   subArrowParent.classList.toggle("showSubSubMenu");
    });
  }
  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".bx-menu");
  console.log(sidebarBtn);
  sidebarBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");
  });

document.addEventListener("DOMContentLoaded", function () {
    let snowflakesContainer = document.querySelector(".snowflakes-container");
  
    document.addEventListener("mousemove", function (e) {
      createSnowflake(e.clientX, e.clientY);
    });
  
    function createSnowflake(x, y) {
      let snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");
  
      snowflake.style.left = x + "px";
      snowflake.style.top = y + "px";
  
      snowflakesContainer.appendChild(snowflake);
  
    
      snowflake.style.animation = "fall 5s linear"; 
  
      snowflake.addEventListener("animationend", function () {
        snowflake.remove();
      });
    }
  
    setInterval(function () {
      let x = Math.random() * window.innerWidth;
      let y = -20;
  
      createSnowflake(x, y);
    }, 500);
  });
  
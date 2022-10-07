const currentDate = document.querySelector(".current-date"),
daysTag = document.querySelector(".days"),
prevNextIcon = document.querySelectorAll(".icons span");

let date = new Date(),
currentYear = date.getFullYear(),
currentMonth = date.getMonth();

const months = [
    "January","February","March","April","May","June","July","August","September","October","November","December"
]

const renderCalendar = () => {
    let firstDayofMonth = new Date(currentYear,currentMonth,1).getDay(),//getting 1st day of a month
     lastDateofMonth = new Date(currentYear,currentMonth+1,0).getDate(), //getting last day of a month
     lastDayofMonth = new Date(currentYear,currentMonth,lastDateofMonth).getDay(), //getting last day of a month
     lastDateofLastMonth = new Date(currentYear,currentMonth,0).getDate(); //getting last date of previous month
    let liTag = "";

    for (let i = firstDayofMonth; i >0; i--) { //creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth -i +1}</li>`;
        
    }
    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        let isToday =  i ===date.getDate() && currentMonth=== new Date().getMonth()
                            && currentYear===new Date().getFullYear() ? "active" :""
        liTag +=`<li class="${isToday}">${i}</li>`
        
    }
    for (let i = lastDateofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth +1}</li>`
        
    }
    
    currentDate.innerText = `${months[currentMonth]} ${currentYear}`;
    daysTag.innerHTML=liTag;
}

renderCalendar();
prevNextIcon.forEach(icon=> {
    icon.addEventListener("click", ()=>{
      currentMonth = icon.id ==="prev"?currentMonth-1:currentMonth+1;
      if(currentMonth <0 || currentMonth> 11) {
        date=new Date(currentYear,currentMonth);
        currentYear=date.getFullYear();
        currentMonth=date.getMonth();
      } else {
        date=new Date();
      }
      renderCalendar();
    });
});
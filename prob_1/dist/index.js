"use strict";
// DOM elements
const dailyElement = document.querySelector(".daily");
const weeklyElement = document.querySelector(".weekly");
const monthlyElement = document.querySelector(".monthly");
const fetchData = async () => {
    const req = await fetch("https://gist.githubusercontent.com/carmandomx/b27e23332eda1d061feb3cdada26afc0/raw/438d33407442d2abbf605e87336f48a83ccff3f5/data.json");
    const data = await req.json();
    return data;
};
const setData = async (index, timePeriod) => {
    // Get the data
    const data = await fetchData();
    // DOM elements
    const title = document.querySelector(`.title-${index}`);
    const currentHours = document.querySelector(`.current-hours-${index}`);
    const previousHours = document.querySelector(`.previous-hours-${index}`);
    // Set title
    title.textContent = data[index].title;
    switch (timePeriod) {
        // Check if time period is daily
        case "daily":
            currentHours.textContent = `${data[index].timeframes.daily.current.toString()}hrs`;
            previousHours.textContent = `Last week - ${data[index].timeframes.daily.previous.toString()}`;
            break;
        // Check if time period is weekly
        case "weekly":
            currentHours.textContent = `${data[index].timeframes.weekly.current.toString()}hrs`;
            previousHours.textContent = `Last week - ${data[index].timeframes.weekly.previous.toString()}`;
            break;
        // Check if time period is monthly
        case "monthly":
            currentHours.textContent = `${data[index].timeframes.monthly.current.toString()}hrs`;
            previousHours.textContent = `Last week - ${data[index].timeframes.monthly.previous.toString()}`;
            break;
    }
};
// Function to place all the cards using a for loop
const placeCards = (timePeriod) => {
    for (let i = 0; i <= 5; i++) {
        setData(i, timePeriod);
    }
};
// Set the default values on page load to weekly data
placeCards("weekly");
// Function to remove or add active class as needed
const setActive = (activeElement) => {
    [dailyElement, weeklyElement, monthlyElement].forEach((element) => {
        if (element === activeElement) {
            element.classList.add("active");
        }
        else {
            element.classList.remove("active");
        }
    });
};
// Add event listeners
dailyElement.addEventListener("click", () => {
    placeCards("daily");
    setActive(dailyElement);
});
weeklyElement.addEventListener("click", () => {
    placeCards("weekly");
    setActive(weeklyElement);
});
monthlyElement.addEventListener("click", () => {
    placeCards("monthly");
    setActive(monthlyElement);
});

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    const req = yield fetch("https://gist.githubusercontent.com/carmandomx/b27e23332eda1d061feb3cdada26afc0/raw/438d33407442d2abbf605e87336f48a83ccff3f5/data.json");
    const data = yield req.json();
    return data;
});
const setData = (index, timePeriod) => __awaiter(void 0, void 0, void 0, function* () {
    // Get the data
    const data = yield fetchData();
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
});
// Function to place all the cards using a for loop
const placeCards = () => {
    for (let i = 0; i <= 5; i++) {
        setData(i, "daily");
    }
};
placeCards();
// setData(0, "daily");
// Link: https://gist.githubusercontent.com/carmandomx/b27e23332eda1d061feb3cdada26afc0/raw/438d33407442d2abbf605e87336f48a83ccff3f5/data.json

const selday = document.querySelector("#selday");
const selmonth = document.querySelector("#selmonth");
const selyear = document.querySelector("#selyear");
const result = document.querySelector("#result");
const btn = document.querySelector("button");

const currDate = document.querySelector("#currDate");
const currday = document.querySelector("#currday");
const currmonth = document.querySelector("#currmonth");
const curryear = document.querySelector("#curryear");


const date = new Date();
currday.value = date.getDate();
currmonth.value = date.getMonth() + 1;
curryear.value = date.getFullYear();

currDate.innerHTML = `Today's Date: ${currday.value}-${currmonth.value}-${curryear.value}`;

function isValidDate(day, month, year) {
  if (month < 1 || month > 12) return false;

  
  const maxDays = new Date(year, month, 0).getDate(); 
  if (day < 1 || day > maxDays) return false;

  
  if (year > date.getFullYear()) return false;

  return true;
}

btn.addEventListener("click", () => {
  const birthDay = parseInt(selday.value);
  const birthMonth = parseInt(selmonth.value);
  const birthYear = parseInt(selyear.value);

  const todayDay = parseInt(currday.value);
  const todayMonth = parseInt(currmonth.value);
  const todayYear = parseInt(curryear.value);

  
  if (isNaN(birthDay) || isNaN(birthMonth) || isNaN(birthYear)) {
    result.innerHTML = "Please enter complete date of birth.";
    return;
  }

  if (!isValidDate(birthDay, birthMonth, birthYear)) {
    result.innerHTML =
      "Invalid date of birth. Please check the day, month, and year.";
    return;
  }

  let age = todayYear - birthYear;
  if (
    todayMonth < birthMonth ||
    (todayMonth === birthMonth && todayDay < birthDay)
  ) {
    age--;
  }

  if (age < 0) {
    result.innerHTML = "Birthdate cannot be in the future!";
  } else {
    result.innerHTML = "Your age is " + age + " years";
  }
});

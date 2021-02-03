const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const today = new Date();
const sec = today.getSeconds();
const min = today.getMinutes();
const hour = today.getHours();
const year = Math.floor(today.getYear() + 1900);
const monthNumber = today.getMonth();
const month = monthNames[monthNumber];
const dayOfWeekNumber = today.getDay();
const dayOfWeek = dayNames[dayOfWeekNumber];
const dayOfMonth = today.getDate();

const addZero = (n) => {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
};

const time = `${addZero(hour)}:${addZero(min)}:${addZero(sec)}`;

const content = document.querySelector('.content');

content.textContent = `Last login: ${dayOfWeek} ${month}  ${dayOfMonth} ${time} on ttys000
You have new mail.
MacBook-Air:~ ideveloper$ `

const getTextContent = (text) => {
	let i = 0
	let getText = setInterval(function () {
		if (i < text.length) {
			content.textContent += text[i];
			i++;
		} else {
			 clearInterval(getText)
			 setTimeout(function () {
			  content.textContent += `
MacBook-Air:~ ideveloper$ `;
			 }, 500);
		}
	}, 28)
}
const text = `npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! webpack-template@1.0.0 dev: 'webpack-dev-server --open --node development'
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the webpack-template@1.0.0 dev script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/ideveloper/.npm/_logs/${year}-${month}-${dayOfMonth}T00_${addZero(hour)}_${addZero(min)}_${addZero(sec)}4Z-debug.log
MacBook-Air:webpack-template ideveloper$ `;

getTextContent(text);

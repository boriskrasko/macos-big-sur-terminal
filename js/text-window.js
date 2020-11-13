const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


const today = new Date();
const sec = today.getSeconds();
const min = today.getMinutes();
const hour = today.getHours();
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
			 }, 500)
		}
	}, 70)
}
const text = `defaults write com.apple.finder AppleShowAllFiles TRUE`;

getTextContent(text);





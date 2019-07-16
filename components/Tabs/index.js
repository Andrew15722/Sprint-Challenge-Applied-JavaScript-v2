// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics');
const topicArr = [ 'javascript', 'bootstrap', 'technology', 'jquery', 'node.js' ];

topicArr.forEach((topic) => {
	topics.appendChild(tabs(topic));
});

axios
	.get('https://lambda-times-backend.herokuapp.com/topics')
	.then((data) => {
		// console.log('works', data.data);
		// const tabData = tabs(data.data);
		// topics.append(tabData);
	})
	.catch((error) => {
		console.log('Failed', error);
	});

function tabs(tabData) {
	//create elements, styling and setting content in that order.
	const tab = document.createElement('div');
	tab.classList.add('tab');
	tab.textContent = tabData;

	// DON'T FORGET TO RETURN ):<
	return tab;
}

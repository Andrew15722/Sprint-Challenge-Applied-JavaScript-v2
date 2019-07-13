// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
	.get('https://lambda-times-backend.herokuapp.com/articles')
	.then((data) => {
		// each article topic
		console.log(data.data.articles);
		console.log(Object.keys(data.data.articles));
		//article content
		console.log(data.data.articles.javascript);

		const jsArticleData = data.data.articles.javascript;
		const bootstrapArticleData = data.data.articles.bootstrap;
		const technologyArticleData = data.data.articles.technology;
		const jqueryArticleData = data.data.articles.jquery;
		const nodeArticleData = data.data.articles.node;

		jsArticleData.forEach((topic) => {
			cards.append(createArticle(topic));
		});

		bootstrapArticleData.forEach((topic) => {
			cards.append(createArticle(topic));
		});

		technologyArticleData.forEach((topic) => {
			cards.append(createArticle(topic));
		});

		jqueryArticleData.forEach((topic) => {
			cards.append(createArticle(topic));
		});

		nodeArticleData.forEach((topic) => {
			cards.append(createArticle(topic));
		});
	})
	.catch((error) => {
		console.log('Failed', error);
	});

const cards = document.querySelector('.cards-container');

function createArticle(data) {
	// create elements
	const card = document.createElement('div');
	const headline = document.createElement('div');
	const author = document.createElement('div');
	const imgContainer = document.createElement('div');
	const img = document.createElement('img');
	const authorName = document.createElement('span');

	//element structure
	card.appendChild(headline);
	card.appendChild(author);
	author.appendChild(imgContainer);
	imgContainer.appendChild(img);
	author.appendChild(authorName);

	// set element styles
	card.classList.add('card');
	headline.classList.add('headline');
	author.classList.add('author');
	imgContainer.classList.add('img-container');

	//set content
	headline.textContent = data.headline;
	img.src = data.authorPhoto;
	authorName.textContent = data.authorName;

	return card;
}

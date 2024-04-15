document.getElementById('fetchButton').addEventListener('click', fetchRandomQuote);

function fetchRandomQuote() {
  const apiUrl = 'https://api.breakingbadquotes.xyz/v1/quotes';
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const quoteData = data[0]; 
      const quoteElement = document.querySelector('.quote');
      const authorElement = document.querySelector('.author');
      quoteElement.textContent = `"${quoteData.quote}"`;
      authorElement.textContent = `- ${quoteData.author}`;
      document.getElementById('quoteContainer').style.display = 'block';
    })
    .catch(error => {
      console.error('Error fetching quote:', error);
      document.getElementById('quoteContainer').textContent = 'Oops! Something went wrong.';
    });
}
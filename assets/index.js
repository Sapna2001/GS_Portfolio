const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
url ="https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

generate = () => {
	$.getJSON(url)
	.done(update)
	.fail(handleError);
};

update = (response) => {
	quote.innerHTML=`${response.quoteText}`;
	author.innerHTML=`- ${response.quoteAuthor}`;
}

handleError = (jqxhr, textStatus, err) => {
	console.log("Request Failed: " + textStatus + ", " + err);
}

generate();




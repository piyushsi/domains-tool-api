var button = document.querySelector('button');
var input = document.querySelector('input');
button.addEventListener('click', generate);
function generate() {
	if (input.value == '') {
		input.classList.add("red_font")
	} else {
		var meta = document.createElement('h2');
		meta.innerText = 'metaData Link';
		var metaLink = document.createElement('a');
		metaLink.innerText = `https://domains-tools.herokuapp.com/api/meta/${input.value}`;
		metaLink.href = `https://domains-tools.herokuapp.com/api/meta/${input.value}`;
		var txt = document.createElement('h2');
		txt.innerText = 'DNStxt Link';
		var txtLink = document.createElement('a');
		txtLink.innerText = `https://domains-tools.herokuapp.com/api/dnstxt/${input.value}`;
		txtLink.href = `https://domains-tools.herokuapp.com/api/dnstxt/${input.value}`;
        var parent = document.querySelector('.middle_1');
        parent.innerHTML='';
		parent.append(meta, metaLink, txt, txtLink);
	}
}

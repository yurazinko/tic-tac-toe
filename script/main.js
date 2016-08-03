$(function(){
	var cellsArray = [
		cell01,
		cell02,
		cell03,
		cell04,
		cell05,
		cell06,
		cell07,
		cell08,
		cell09
	];
	$('.cell').click(function() {
		this.innerHTML = '<p>X</p>';
		setTimeout(function(){
			for (var i = 0; i < cellsArray.length; i++) {
				if (cellsArray[i].innerHTML !== '<p>X</p>' && cellsArray[i] !== '<p>0</p>') {
					cellsArray[Math.floor((Math.random() * 8) + 1)].innerHTML = '<p>0</p>';
					break;
				} else {
					i++; 
				}
			}	
		}, 2000);
	})
})


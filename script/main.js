$(function() {
    
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

    var addCount = (function() {
        var count = 0;
        return function() {
            if (count < 5) {
                return count += 1;
            } else {
                count = 0;
            }
        }
    })();

    function clearCells() {
        for (var i = 0; i < cellsArray.length; i++) {
            cellsArray[i].innerHTML = '';
        }
    }

    function checkCombination() {
        if (cell01.innerHTML == '<p>X</p>' && cell02.innerHTML == '<p>X</p>' && cell03.innerHTML == '<p>X</p>') { // X
            alert('x wins');
            clearCells();
        } else if (cell01.innerHTML == '<p>X</p>' && cell05.innerHTML == '<p>X</p>' && cell09.innerHTML == '<p>X</p>') {
            alert('x wins');
            clearCells();
        } else if (cell01.innerHTML == '<p>X</p>' && cell04.innerHTML == '<p>X</p>' && cell07.innerHTML == '<p>X</p>') {
            alert('x wins');
            clearCells();
        } else if (cell02.innerHTML == '<p>X</p>' && cell05.innerHTML == '<p>X</p>' && cell08.innerHTML == '<p>X</p>') {
            alert('x wins');
            clearCells();
        } else if (cell03.innerHTML == '<p>X</p>' && cell05.innerHTML == '<p>X</p>' && cell07.innerHTML == '<p>X</p>') {
            alert('x wins');
            clearCells();
        } else if (cell03.innerHTML == '<p>X</p>' && cell06.innerHTML == '<p>X</p>' && cell09.innerHTML == '<p>X</p>') {
            alert('x wins');
            clearCells();
        } else if (cell04.innerHTML == '<p>X</p>' && cell05.innerHTML == '<p>X</p>' && cell06.innerHTML == '<p>X</p>') {
            alert('x wins');
            clearCells();
        } else if (cell07.innerHTML == '<p>X</p>' && cell08.innerHTML == '<p>X</p>' && cell09.innerHTML == '<p>X</p>') {
            alert('x wins');
            clearCells();
        } else if (cell01.innerHTML == '<p>0</p>' && cell05.innerHTML == '<p>0</p>' && cell09.innerHTML == '<p>0</p>') { // 0
            alert('0 wins');
            clearCells();
        } else if (cell01.innerHTML == '<p>0</p>' && cell04.innerHTML == '<p>0</p>' && cell07.innerHTML == '<p>0</p>') {
            alert('0 wins');
            clearCells();
        } else if (cell02.innerHTML == '<p>0</p>' && cell05.innerHTML == '<p>0</p>' && cell08.innerHTML == '<p>0</p>') {
            alert('0 wins');
            clearCells();
        } else if (cell03.innerHTML == '<p>0</p>' && cell05.innerHTML == '<p>0</p>' && cell07.innerHTML == '<p>0</p>') {
            alert('0 wins');
            clearCells();
        } else if (cell03.innerHTML == '<p>0</p>' && cell06.innerHTML == '<p>0</p>' && cell09.innerHTML == '<p>0</p>') {
            alert('0 wins');
            clearCells();
        } else if (cell04.innerHTML == '<p>0</p>' && cell05.innerHTML == '<p>0</p>' && cell06.innerHTML == '<p>0</p>') {
            alert('0 wins');
            clearCells();
        } else if (cell07.innerHTML == '<p>0</p>' && cell08.innerHTML == '<p>0</p>' && cell09.innerHTML == '<p>0</p>') {
            alert('0 wins');
            clearCells();
        }
    }

    $('.cell').click(function() {
        function compTurn() {

            var random = (function() {
                if (count < 5) {
                    return Math.floor((Math.random() * 8) + 1);
                } else {
                    return false;
                }
            })();

            console.log('Random: ' + random);


            if (cellsArray[random].innerHTML == '<p>X</p>' || cellsArray[random].innerHTML == '<p>0</p>') {
                compTurn();
            } else {
                cellsArray[random].innerHTML = '<p>0</p>';
            }

            checkCombination();
        }

        if (this.innerHTML == '<p>X</p>' || this.innerHTML == '<p>0</p>') {
            return false;
        } else {
            this.innerHTML = '<p>X</p>';
            count = addCount();
            console.log(count);
            if (count < 5) {
                setTimeout(compTurn, 500);
            } else {
                clearCells();
            }

        }
    })
})

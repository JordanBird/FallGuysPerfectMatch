var tiles = [
    { emjoi: "", color: "#7C79EF", highlight: "#CC5BBF" },
    { emjoi: "🍎", color: "#1EC0C8", highlight: "#16E2E6" },
    { emjoi: "🍌", color: "#542076", highlight: "#BB27D4" },
    { emjoi: "🍒", color: "#98A33D", highlight: "#CFCF4E" },
    { emjoi: "🍇", color: "#66CD4F", highlight: "#46FB4E" },
    { emjoi: "🍊", color: "#2292E0", highlight: "#49A7F1" },
    { emjoi: "🍉", color: "#F6C741", highlight: "#FCFD41" }
];

$(document).ready(function () {
    $('.grid-cell').on('click', function () {
        var index = $(this).data('index');
        if (!index) {
            index = 0;
        }

        index++;

        if (index >= tiles.length) {
            index = 0;
        }

        setCell($(this), index);
    });

    $('.reset').on('click', function () {
        var cells = $('.grid-cell');
        for (var i = 0; i < cells.length; i++) {
            setCell($(cells[i]), 0);
        }
    });
});

function setCell(cell, index) {
    $(cell).html(tiles[index].emjoi);
    $(cell).css('background-color', tiles[index].color);
    $(cell).css('border-color', tiles[index].highlight);

    $(cell).data('index', index);
}
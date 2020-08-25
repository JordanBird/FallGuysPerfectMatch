var tiles = [
    { emjoi: "", color: "#7C79EF", highlight: "#CC5BBF" },
    { emjoi: "🍎", color: "#1EC0C8", highlight: "#16E2E6" },
    { emjoi: "🍌", color: "#542076", highlight: "#BB27D4" },
    { emjoi: "🍒", color: "#98A33D", highlight: "#CFCF4E" },
    { emjoi: "🍇", color: "#66CD4F", highlight: "#46FB4E" },
    { emjoi: "🍊", color: "#2292E0", highlight: "#49A7F1" },
    { emjoi: "🍉", color: "#F6C741", highlight: "#FCFD41" }
];

var pickerMode = "PICKER";
var toggleMode = "TOGGLE";

var mode = toggleMode;

var currentPickerIndex = 0;

function main() {
    initEvents();
    initPickerMode();
    initAnimations();
}

function initEvents() {
    $('.grid-cell').on('click', onGridCellClicked);
    $('.toggle-mode').on('click', onToggleModeClicked);
    $('.reset').on('click', onResetClicked);
}

function initPickerMode() {
    for (var i = 1; i < tiles.length; i++) {
        $('.picker-selection').append('<a class="btn btn-sm btn-primary btn-picker ml-1" href="#" data-index="' + i +'" style="background-color: ' + tiles[i].color + ';border-color: ' + tiles[i].highlight + '">' + tiles[i].emjoi + '</a>');
    }

    $('.btn-picker').on('click', onPickerTileClicked);
}

function initAnimations() {
    let deg = 0;
    setInterval(function() {
      deg < 360 ? deg++ : deg = 0;
    }, 5);
}

function onGridCellClicked() {
    if (mode == toggleMode) {
        onGridCellClickedToggle($(this));
    }
    else if (mode == pickerMode) {
        onGridCellClickedPicker($(this));
    }
    else {
        console.log("Mode not configured.");
    }
}

function onGridCellClickedToggle(cell) {
    var index = $(cell).data('index');
    if (!index) {
        index = 0;
    }

    index++;

    if (index >= tiles.length) {
        index = 0;
    }

    setCell($(cell), index);
}

function onGridCellClickedPicker(cell) {
    setCell($(cell), currentPickerIndex);
}

function onToggleModeClicked() {
    if (mode == pickerMode) {
        mode = toggleMode;
    }
    else {
        mode = pickerMode;
    }

    if (mode == pickerMode) {
        $('.picker-selection').show();
        $('.toggle-mode').html('Toggle Mode');
    }
    else {
        $('.picker-selection').hide();
        $('.toggle-mode').html('Picker Mode');
    }
}

function onResetClicked() {
    var cells = $('.grid-cell');
    for (var i = 0; i < cells.length; i++) {
        setCell($(cells[i]), 0);
    }
}

function onPickerTileClicked() {
    currentPickerIndex = $(this).data('index');

    $('.btn-picker').removeClass('btn-picker-selected');
    $(this).addClass('btn-picker-selected');
}

function setCell(cell, index) {
    $(cell).html(tiles[index].emjoi);
    $(cell).css('background-color', tiles[index].color);
    $(cell).css('border-color', tiles[index].highlight);

    $(cell).data('index', index);
}

$(document).ready(function () {
    main();
});
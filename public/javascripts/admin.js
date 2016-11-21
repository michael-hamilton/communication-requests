function addDate() {
    var newDateId = parseInt($('.series-date-field').last().attr('data-date'))+1 || 1,
        html = '<div id="add-series-form-dates"><div class="form-row series-date-field" data-date="'+ newDateId +'"><label class="block-label">Date</label><a class="align-right" href="javascript:;" onclick="deleteDate(event); return false;">Delete</a><input class="form-input" type="text" placeholder="Enter Date" name="dates['+ newDateId +']")>';

        $('#add-series-form-dates').append(html);
}

function deleteDate(event) {
    $(event.target).closest('.series-date-field').remove();
}


function calcscore() {
  score = 0;
  $('.calc:checked').each(function () {
    score += Number($(this).val());
  });
  $('#totalScore').text(score.toFixed(2));
  $('#sum').val(score);
}
$().ready(() => {
  $('.calc').change(() => {
    calcscore();
  });
});

$(document).ready(function () {
  console.log('ready');
  $('#button-calculate').click(function () {
    //CALCULATE
    var val_HBMI = $('#switch-HBMI').is('.is-checked') ? 2.3933047235 : -2.393304724;
    var val_ASAGT3 = $('#switch-ASAGT3').is('.is-checked') ? 1.5938845396 : -1.59388454;
    var val_UPT = $('#switch-UPT').is('.is-checked') ? 1.6900660558 : -1.690066056;
    var val_HAFSMA = $('#switch-HAFSMA').is('.is-checked') ? 1.4312802108 : -1.431280211;
    var val_DSLT4 = $('#switch-DSLT4').is('.is-checked') ? 1.5898228944 : -1.589822894;
    var val_BRT = $('#switch-BRT').is('.is-checked') ? 1.9795579382 : -1.979557938;
    
    var start_value = 12.319933924;
    
    var result = start_value + val_HBMI + val_ASAGT3 + val_UPT + val_HAFSMA + val_DSLT4 + val_BRT;

    var groupResult = 'no-data';
    var color = 'green';
    
    if (result <= 4.8297866408) {
      groupResult = 'LOW DIFFICULTY';
      color = 'green';
    } else if (result >=4.8297866408 && result <=8.7889025173) {
      groupResult = 'INTERMEDIATE DIFFICULTY';
      color = 'orange';      
    } else {
      groupResult = 'HIGH DIFFICULTY';
      color = 'red';      
    }
    
    $('#result-box').css({ 'font-size': '16px', color: color });
    $('#result-box').text(groupResult);
    
    $('#score-box-title').css({ 'font-size': '16px' });
    
    $('#score-box-value').css({ 'font-size': '16px', color: color });
    var roundedResult = Math.round(result * 10) / 10;
    $('#score-box-value').text(roundedResult);
  });
});

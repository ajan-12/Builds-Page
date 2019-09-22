function populate() {
  $.getJSON( "https://ajan-12.github.io/config/repos.json", function ( data ) {
  var insides = '<caption style="font-size: 20px; font-weight: bold;>MC Spigot Plugins</caption><tr><th style="width:83%">Repository</th><th style="width:12%">Supported MC Versions</th><th style="width:5%">Build Status</th></tr>';

  for (var i = 0; i < data.length; i++) {
    insides += '<tr><td class="repository"><img src="icons/repository.svg" alt="" class="icon"><a href="https://github.com/';
    insides += data[i].link;
    insides += '">';
    insides += data[i].name;
    insides += '</a></td><td class="version">';
    insides += data[i].versions;
    insides += '</td><td class="buildIcon"><img src="';
    if (data[i].status == 'success') {
      insides += 'icons/tick.svg';
    } else {
      insides += 'icons/cross.svg';
    }
    insides += '" alt="" class="icon"></td></tr>';
  }
  
  $("#populate").html(insides);
  } );
}

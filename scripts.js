function populateTable() {
  $.getJSON( "https://ajan-12.github.io/config/repos.json", function ( data ) {
  var insides = '<caption style="font-size: 20px; font-weight: bold;">MC Spigot Plugins</caption><tr><th style="width:83%">Repository</th><th style="width:12%">Supported MC Versions</th><th style="width:5%">Build Status</th></tr>';

  for (var i = 0; i < data.length; i++) {
    insides += '<tr><td class="repository"><img src="icons/repository.svg" alt="" class="icon"><button class="repo" onclick="populatePopup(\'';
    insides += data[i].name;
    insides += '\');">';
    insides += data[i].name;
    insides += '</button></td><td class="version">';
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

function populatePopup( repo ) {
  $.getJSON("https://ajan-12.github.io/config/repos.json", function ( data ) {
    var popup = document.getElementById("popup");
    showPopup();
    
	for (var i = 0; i < data.length; i++) {
	  if (data[i].name == repo) {
		var body = "<p>" + data[i].description + "</p>";
		break;
	  }
	}
	
	$("#popupHeader").html(repo);
	$("#popupBody").html(body);
  });
}

function hidePopup() {
  document.getElementById("popup").style.display = "none";
}

function showPopup() {
  document.getElementById("popup").style.display = "block";
}
function populateTable() {
  $.getJSON( "https://linox.host/config/repos.json", function ( data ) {
  var insides = '<caption>MC Spigot Plugins</caption><tr><th>Repository</th><th>Supported MC Versions</th><th>Build Status</th></tr>';

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
  $.getJSON("https://linox.host/config/repos.json", function ( data ) {
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

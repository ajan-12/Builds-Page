function populate() {
  var myRepos = JSON.parse(repos);
  var insides = '<table style="width:100%" id="populate"><tr><th style="width:83%">Repository</th><th style="width:12%">Supported MC Versions</th><th style="width:5%">Build Status</th></tr>';

  for (var i = 0; i < myRepos.length; i++) {
    insides += '<tr><td class="repository"><img src="icons/repository.svg" alt="" class="icon"><a href="https://github.com/';
    insides += myRepos[i].link;
    insides += '">';
    insides += myRepos[i].name;
    insides += '</a></td><td class="version">';
    insides += myRepos[i].versions;
    insides += '</td><td class="buildIcon"><img src="';
    if (myRepos[i].status == 'success') {
      insides += 'icons/tick.svg';
    } else {
      insides += 'icons/cross.svg';
    }
    insides += '" alt="" class="icon"></td></tr>';
  }
}

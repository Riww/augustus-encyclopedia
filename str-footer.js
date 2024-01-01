var other = new Array("housing","clear","road");
var randomNum = Math.floor(Math.random()*other.length);
document.write('\
<a href="water.html"><img class="nom" src="img/water.png" title="water"></a> &bull; \
<a href="health.html"><img class="nom" src="img/health.png" title="health"></a> &bull; \
<a href="religion.html"><img class="nom" src="img/religious.png" title="religion"></a> &bull; \
<a href="education.html"><img class="nom" src="img/education.png" title="education"></a> &bull; \
<a href="entert.html"><img class="nom" src="img/entert.png" title="entertainment"></a> &bull; \
<a href="admin.html"><img class="nom" src="img/admin.png" title="administration/government"></a> &bull; \
<a href="engineer.html"><img class="nom" src="img/engineering.png" title="engineering"></a> &bull; \
<a href="security.html"><img class="nom" src="img/security.png" title="security"></a> &bull; \
<a href="industry.html"><img class="nom" src="img/industrial.png" title="industry"></a> &bull; \
<a href="other2.html"><img class="nom" src="img/'+other[randomNum]+'.png" title="other"></a> &bull; \
<a href="structures2.html"><b class="nom" style="color:black" title="everything">ALL</b></a>\
');

var text='{"ciudad":[' + 
'{"name" : "Alfreds Futterkiste", "City" : "Berlin", "Country" : "Germany" },' + 
'{"name" : "Berglunds snabbköp", "City" : "Luleå", "Country" : "Sweden" },' + 
'{"name" : "Centro comercial Moctezuma", "City" : "México D.F.", "Country" : "Mexico" },' + 
'{"name" : "Ernst Handel", "City" : "Graz", "Country" : "Austria" },' + 
'{"name" : "FISSA Fabrica Inter. Salchichas S.A.", "City" : "Madrid", "Country" : "Spain" },' + 
'{"name" : "Galería del gastrónomo", "City" : "Barcelona", "Country" : "Spain" },' + 
'{"name" : "Island Trading", "City" : "Cowes", "Country" : "UK" },' + 
'{"name" : "Königlich Essen", "City" : "Brandenburg", "Country" : "Germany" },' + 
'{"name" : "Laughing Bacchus Wine Cellars", "City" : "Vancouver", "Country" : "Canada" },' + 
'{"name" : "Magazzini Alimentari Riuniti", "City" : "Bergamo", "Country" : "Italy" },' + 
'{"name" : "North/South", "City" : "London", "Country" : "UK" },' + 
'{"name" : "Paris spécialités", "City" : "Paris", "Country" : "France" },' + 
'{"name" : "Rattlesnake Canyon Grocery", "City" : "Albuquerque", "Country" : "USA" },' + 
'{"name" : "Simons bistro", "City" : "København", "Country" : "Denmark" },' + 
'{"name" : "The Big Cheese", "City" : "Portland", "Country" : "USA" },' + 
'{"name" : "Vaffeljernet", "City" : "Århus", "Country" : "Denmark" },' + 
'{"name" : "Wolski Zajazd", "City" : "Warszawa", "Country" : "Poland" }]}';

var obj = JSON.parse(text);

for (var i = obj.ciudad.length - 1; i >= 0; i--) {
  obj.ciudad.sort((a,b) => a.Country - b.Country);
}
    var tabla=document.getElementById("myTable");
    for(var i=0;i<obj.ciudad.length;i++){
     var row=tabla.insertRow(1);

     var cell1=row.insertCell(0);
     var cell2=row.insertCell(1);
     var cell3=row.insertCell(2);

      cell1.innerHTML=obj.ciudad[i].name;
       console.log(obj.ciudad[i].name);
      cell2.innerHTML=obj.ciudad[i].City;
       console.log(obj.ciudad[i].City);
      cell3.innerHTML=obj.ciudad[i].Country;
       console.log(obj.ciudad[i].Country);  
    }
sortTable();

function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  dir = "asc"; 
  while (switching) {
    switching = false;
    rows = table.getElementsByTagName("TR");
    for (i = 1; i < (rows.length - 1); i++) {
    shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[2];
      y = rows[i + 1].getElementsByTagName("TD")[2];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;      
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
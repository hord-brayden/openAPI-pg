const csvData = `OrderDate,Region,Rep,Item,Units,UnitCost,Total
1/6/20,East,Jones,Pencil,95,1.99,189.05
1/23/20,Central,Kivell,Binder,50,19.99,999.5
2/9/20,Central,Jardine,Pencil,36,4.99,179.64
2/26/20,Central,Gill,Pen,27,19.99,539.73
3/15/20,West,Sorvino,Pencil,56,2.99,167.44
4/1/20,East,Jones,Binder,60,4.99,299.4
4/18/20,Central,Andrews,Pencil,75,1.99,149.25
5/5/20,Central,Jardine,Pencil,90,4.99,449.1
5/22/20,West,Thompson,Pencil,32,1.99,63.68
6/8/20,East,Jones,Binder,60,8.99,539.4
6/25/20,Central,Morgan,Pencil,90,4.99,449.1
7/12/20,East,Howard,Binder,29,1.99,57.71
7/29/20,East,Parent,Binder,81,19.99,"1,619.19"
8/15/20,East,Jones,Pencil,35,4.99,174.65
9/1/20,Central,Smith,Desk,2,125,250
9/18/20,East,Jones,Pen Set,16,15.99,255.84
10/5/20,Central,Morgan,Binder,28,8.99,251.72
10/22/20,East,Jones,Pen,64,8.99,575.36
11/8/20,East,Parent,Pen,15,19.99,299.85
11/25/20,Central,Kivell,Pen Set,96,4.99,479.04
12/12/20,Central,Smith,Pencil,67,1.29,86.43
12/29/20,East,Parent,Pen Set,74,15.99,"1,183.26"
1/15/21,Central,Gill,Binder,46,8.99,413.54
2/1/21,Central,Smith,Binder,87,15,"1,305.00"
2/18/21,East,Jones,Binder,4,4.99,19.96
3/7/21,West,Sorvino,Binder,7,19.99,139.93
3/24/21,Central,Jardine,Pen Set,50,4.99,249.5
4/10/21,Central,Andrews,Pencil,66,1.99,131.34
4/27/21,East,Howard,Pen,96,4.99,479.04
5/14/21,Central,Gill,Pencil,53,1.29,68.37
5/31/21,Central,Gill,Binder,80,8.99,719.2
6/17/21,Central,Kivell,Desk,5,125,625
7/4/21,East,Jones,Pen Set,62,4.99,309.38
7/21/21,Central,Morgan,Pen Set,55,12.49,686.95
8/7/21,Central,Kivell,Pen Set,42,23.95,"1,005.90"
8/24/21,West,Sorvino,Desk,3,275,825
9/10/21,Central,Gill,Pencil,7,1.29,9.03
9/27/21,West,Sorvino,Pen,76,1.99,151.24
10/14/21,West,Thompson,Binder,57,19.99,"1,139.43"
10/31/21,Central,Andrews,Pencil,14,1.29,18.06
11/17/21,Central,Jardine,Binder,11,4.99,54.89
12/4/21,Central,Jardine,Binder,94,19.99,"1,879.06"
12/21/21,Central,Andrews,Binder,28,4.99,139.72`;

function csvToJsonl(csv, promptColumn, completionColumn) {
    const lines = csv.split('\n');
    const headers = lines[0].split(',');
    const jsonlData = [];
  
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].split(',');
      const jsonObject = {};
  
      for (let j = 0; j < headers.length; j++) {
        jsonObject[headers[j]] = line[j].replace(/"/g, '');
      }
  
      jsonlData.push(JSON.stringify({ prompt: jsonObject[promptColumn], completion: jsonObject[completionColumn] }));
    }
  
    return jsonlData.join('\n');
  }
  

const promptColumn = "OrderDate";
const completionColumn = "Total";
const jsonlData = csvToJsonl(csvData, promptColumn, completionColumn);
  
console.log(jsonlData);

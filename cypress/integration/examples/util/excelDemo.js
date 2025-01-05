// import the interface that will allow you to work with exceljs
import Excel from 'exceljs';

  var myvars = {
    // Creating a new workbook instance
    workbook: new Excel.Workbook(),

    // File location of the xlsx file
    filepath: '/Users/user/Desktop/cypress/cypress/downloads/download.xlsx',
    // Text to look for in the worksheet
    searchText: 'Apple',
    searchTextLocation: {x:0,y:0},
    newCellValue: 'bubbles_updated',
  } 

class excelDemo {



  async writeExcel(filepath) {
    // read from a file
    await myvars.workbook.xlsx.readFile(filepath)

    // fetch sheet by name
    var worksheet = myvars.workbook.getWorksheet('Sheet1');
    const cell = worksheet.getCell(3, 2); // Row 3, Column 2
    await readExcel(worksheet,myvars.searchText)

    const mySearchedCell = worksheet.getCell(myvars.searchTextLocation.x,myvars.searchTextLocation.y)
    mySearchedCell.value = myvars.newCellValue
    await myvars.workbook.xlsx.writeFile(filepath)

  } 
}

async function readExcel(worksheet,searchText){
    worksheet.eachRow((row, rowNumber) => {
      row.eachCell((cell, colNumber)=>{
        if (cell.value === searchText){
          myvars.searchTextLocation = { x: rowNumber, y: colNumber }
        }
      })
    })
}

module.exports = excelDemo; 
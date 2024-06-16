export function objectToCsv(arr) {
  const csvRows = [];

  // Get the headers of the CSV file
  const headers = Object.keys(arr[0]);
  csvRows.push(headers.join(","));

  // Loop through each object in the array and convert it to a CSV row
  for (const row of arr) {
    const values = headers.map((header) => {
      const cellValue = row[header];
      const escapedCellValue = cellValue.toString().replace(/"/g, '\\"');
      return `"${escapedCellValue}"`;
    });
    csvRows.push(values.join(","));
  }

  // Join all the CSV rows with a newline character
  return csvRows.join("\n");
}

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayData(data) {
    var dataTable = $('#table_data').DataTable({
                  keys: true,
                  data: data,
                  columns: [
                      { data: 'type'},
                      { data: 'breeds.primary'},
                      { data: 'colors.primary'},
                      { data: 'age'},
                      { data: 'gender'},
                      { data: 'status'}
                  ]
              }); // close DataTable()
              console.log(dataTable)
}
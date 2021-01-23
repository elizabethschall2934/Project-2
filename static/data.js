function displayData(data) {
    var dataTable = $('#table_id').DataTable({
                  keys: true,
                  data: data,
                  columns: [
                      { data: 'id'},
                      { data: 'type'},
                      { data: 'breeds.primary'},
                      { data: 'colors.primary'},
                      { data: 'age'},
                      { data: 'gender'},
                      { data: 'status'},
                  ]
              });
    console.log(data)
}

function createMap(mapData) {
    //code here for Map
}
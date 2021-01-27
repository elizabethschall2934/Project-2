function displayData(data) {
    var dataTable = $('#table_data').DataTable({
                  keys: true,
                  data: data,
                  columns: [
                      { data: 'id'},
                      { data: 'type'},
                      { data: 'breeds.primary'},
                      { data: 'colors.primary'},
                      { data: 'age'},
                      { data: 'gender'},
                      { data: 'status'}
                  ]
              });
    console.log(data)
}

function createMap(data) {
    //code here for Map
    var dataTable = $('#table_loc').DataTable({
        keys: true,
        data: data,
        columns: [
            { data: 'street'},
            { data: 'city'},
            { data: 'state'},
            { data: 'lnglat'}
        ]
    });
console.log(data)
}
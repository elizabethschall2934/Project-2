
$.getJSON("ca_data.json", function(data) {
    var table = $('#table_id').DataTable({
        keys: true,
        data: data.animals,
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

});
// $(document).ready(function () {
//     var table = $('#amir').DataTable({
//         'select': 'api'
//     });
//
//     $('#amir').on('click', 'tbody td', function(){
//        // If this column is selected
//        if(table.column(this, { selected: true }).length){
//           table.column(this).deselect();
//
//        // Otherwise, if this column is not selected
//        } else {
//           table.column(this).select();
//        }
//     });
//     // table.on('select', function (e, dt, type, indexes) {
//     //     var data = table.columns(col).data().pluck('id');
//     //     console.log(data)
//     //     // }
//     // });
// })
// ;



$(document).ready(function () {

    category = {
        'categorical': '<select> <option value = "categorical" selected> Categorical </option> <option value = "numerical"> Numerical </option>',
        'numerical': '<select> <option value = "categorical" > Categorical </option> <option value = "numerical" selected> Numerical </option>'
    };


    $('#amir').DataTable({
        "columnDefs": [
            {
                "render": function (data, type, row) {
                    return category[data];
                },
                "targets": 1
            }
        ],
        'ordering': false
    });


    // var table = $('#amir').DataTable({
    //     'select': 'row'
    // });

    // table.on('select', function (e, dt, type, indexes) {
    //     var data = table.columns(col).data().pluck('id');
    //     console.log(data)
    //     // }
    // });
})
;

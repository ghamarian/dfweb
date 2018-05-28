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


    table = $('#amir').DataTable({
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

    $('#send').click(function (event) {
        event.preventDefault();
        var cat_column = table.columns(1).data()[0]
        console.log(cat_column);
        console.log(typeof(cat_column));

        $.ajax('/cat_col', {
            data: {'cat_column': JSON.stringify(cat_column)},
            dataType: 'json',
            type: "POST",
            // contentType: "application/json; charset=utf-8",
            cache: false,
            // data: {"a": "b"},
            success: function (data) {
                console.log("hello");
            }
        });
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

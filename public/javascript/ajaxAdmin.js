let id;
//Catching an object id when opening a modal window
$('a').on('click', function () {
    id = $(this).data('id');
});
$(document).on('click',".btn", function () {    
    console.log($(this).data('id'));
    if(typeof($($(this)[0]).data('id')) == undefined)
        $("#idQuestion").attr("value" , $(this).data('id'));
    else 
        $("#idQuestion").attr("value" , $($(this)[0]).data('id'));
    console.log($("#idQuestion").attr("value"));
});
//Adding a test
$('#formAddTest').submit(function(){
    let thisUpd = $('#thisUpd');
    $.ajax({
        type: "POST",
        url: "/admin/tests/add",
        cache: "false",
        data: $(this).serialize(),
        dataType: 'json',
        success: function (data) {
            if (!data.error) {
                $("#addTestModal").modal('toggle');
                document.getElementById("formAddTest").reset();
                $(thisUpd).append(
                `<li class='list-group-item' id=${data.idTest}>
                    <div class="row">
                        <div class="col-9">
                            <h4 class="mb-0 align-middle"><span class="badge">${data.testName}</span></h4>
                        </div>
                        <div class="col-3">
                            <span class="badge text-right w-100">
                                <a data-toggle="modal" data-target="#editTestModal" data-id=${data.idTest}>
                                    <img src="https://img.icons8.com/wired/25/000000/edit.png">
                                </a>
                                <a class="pl-2"data-toggle="modal" data-target="#deleteTestModal" data-id=${data.idTest}>
                                    <img src="https://img.icons8.com/wired/25/000000/delete.png">
                                </a>
                                <a class="pl-2" href="http://localhost:3000/admin/tests/${data.idTest}">
                                    <img src="https://img.icons8.com/wired/25/000000/menu.png">
                                </a>
                            </span>
                        </div>
                    </div>
                </li>`);
            } else {
                alert('error!');
            }
        }
      });
    return false;
})  
//Delete test
$('#formDeleteTest').submit(function(){
    let thisUpd = $('#thisUpd');
    $.ajax({
        type: "POST",
        url: "/admin/tests/delete/" + id,
        cache: "false",
        data: $(this).serialize(),
        dataType: 'json',
        success: function (data) {
            if (!data.error) {
                console.log(data);
                
                $("#deleteTestModal").modal('toggle');
                document.getElementById("formAddTest").reset();
                $("li#"+data).remove();
            } else {
                alert('error!');
            }
        }
      });
    return false;
}) 
//Test change
$('#formEditTest').submit(function(){
    console.log("submit");
    let thisUpd = $('#thisUpd');
    $.ajax({
        type: "POST",
        url: "/admin/tests/edit/" + id,
        cache: "false",
        data: $(this).serialize(),
        dataType: 'json',
        success: function (data) {
            if (!data.error) {
                $("#editTestModal").modal('toggle');
                document.getElementById("formAddTest").reset();
                let val1 = $(`li#${data.idTest} span`);
                let val2 = $("li#"+data.idTest);
                console.log($(val1[0]).text());
                console.log(val2);
                
                $($(`li#${data.idTest} span`)[0]).text(data.testName);
            } else {
                alert('error!');
            }
        }
      });
    return false;
})
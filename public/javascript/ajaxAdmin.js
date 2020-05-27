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

//Adding a subject
$('#formAddSubject').submit(function(){
    let thisUpd = $('#thisUpd');
    $.ajax({
        type: "POST",
        url: "/admin/subjects/add",
        cache: "false",
        data: $(this).serialize(),
        dataType: 'json',
        success: function (data) {
            if (!data.error) {
                $("#addSubjectModal").modal('toggle');
                document.getElementById("formAddSubject").reset();
                $(thisUpd).append(
                `<li class='list-group-item' id=${data.idSubject}>
                    <div class="row">
                        <div class="col-9">
                            <h4 class="mb-0 align-middle"><span class="badge">${data.subjectName}</span></h4>
                        </div>
                        <div class="col-3">
                            <span class="badge text-right w-100">
                                <a data-toggle="modal" data-target="#editSubjectModal" data-id=${data.idSubject}>
                                    <img src="https://img.icons8.com/wired/25/000000/edit.png">
                                </a>
                                <a class="pl-2"data-toggle="modal" data-target="#deleteSubjectModal" data-id=${data.idSubject}>
                                    <img src="https://img.icons8.com/wired/25/000000/delete.png">
                                </a>
                                <a class="pl-2" href="http://localhost:3000/admin/subjects/${data.idSubject}">
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
//Delete subject
$('#formDeleteSubject').submit(function(){
    $.ajax({
        type: "POST",
        url: "/admin/subjects/delete/" + id,
        cache: "false",
        data: $(this).serialize(),
        dataType: 'json',
        success: function (data) {
            if (!data.error) {
                console.log(data);
                $("#deleteSubjectModal").modal('toggle');
                $("li#"+data).remove();
            } else {
                alert('error!');
            }
        }
      });
    return false;
}) 
//Subject edit
$('#formEditSubject').submit(function(){
    console.log("submit");
    let thisUpd = $('#thisUpd');
    $.ajax({
        type: "POST",
        url: "/admin/subjects/edit/" + id,
        cache: "false",
        data: $(this).serialize(),
        dataType: 'json',
        success: function (data) {
            if (!data.error) {
                console.log(data);
                
                $("#editSubjectModal").modal('toggle');
                document.getElementById("formEditSubject").reset();              
                $($(`li#${data.idSubject} span`)[0]).text(data.subjectName);
            } else {
                alert('error!');
            }
        }
      });
    return false;
});

//Adding a question
$('#formAddQuestion').submit(function(){
    let thisUpd = $('#thisUpd');
    $.ajax({
        type: "POST",
        url: "/admin/questions/add",
        cache: "false",
        data: $(this).serialize(),
        dataType: 'json',
        success: function (data) {
            if (!data.error) {
                $("#addQuestionModal").modal('toggle');
                document.getElementById("formAddQuestion").reset();
                $(thisUpd).append(
                `
                <ul class="list-group list-group-horizontal" id=${data.idQuestion}>
                    <li class="list-group-item w-100">
                        <h4 class="mb-0 align-middle">
                            <span class="badge">${data.textQuestion}</span>
                        </h4>
                    </li>
                    <li class="list-group-item">
                        <span class="badge text-right w-100">
                            <a class="btn btn-light" href="#" data-toggle="modal" data-target="#editQuestionModal" data-id=${data.idQuestion}>
                                <img src="https://img.icons8.com/wired/25/000000/edit.png">
                            </a>
                            <a class="btn btn-light" href="#" data-toggle="modal" data-target="#deleteQuestionModal" data-id=${data.idQuestion}>
                                <img src="https://img.icons8.com/wired/25/000000/delete.png">
                            </a>
                            <a class="btn btn-light collapsed" data-toggle="collapse" data-target="#collapse-${data.idQuestion}" aria-expanded="false">
                                <img src="https://img.icons8.com/wired/25/000000/menu.png">
                            </a>
                        </span>
                    </li>
                </ul>
                <li class="list-group-item collapse" id="collapse-${data.idQuestion}">
                    <table class="table table-dark" id="thisUpdAns">
                        <thead>
                            <tr>
                                <th scope="col">Answer</th>
                                <th scope="col">Correct</th>
                                <th class="tools" scope="col">
                                    <button class="ml-auto p-0 btn btn-dark btn-plus-dark" type="button" data-toggle="modal" data-target="#addAnswerModal" data-id=${data.idQuestion}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-square">
                                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                            <line x1="12" y1="8" x2="12" y2="16"></line>
                                            <line x1="8" y1="12" x2="16" y2="12"></line>
                                        </svg>    
                                    </button>
                                </th>
                            </tr>
                        </thead>
                    </table>
                </li>
                `);
            } else {
                alert('error!');
            }
        }
      });
    return false;
})  
//Delete question
$('#formDeleteQuestion').submit(function(){
    $.ajax({
        type: "POST",
        url: "/admin/questions/delete/" + id,
        cache: "false",
        data: $(this).serialize(),
        dataType: 'json',
        success: function (data) {
            if (!data.error) {
                console.log(data);
                $("#deleteQuestionModal").modal('toggle');
                $("ul#"+data).remove();
                $("li#collapse-"+data).remove();
            } else {
                alert('error!');
            }
        }
      });
    return false;
}) 
//Question edit
$('#formEditQuestion').submit(function(){
    $.ajax({
        type: "POST",
        url: "/admin/questions/edit/" + id,
        cache: "false",
        data: $(this).serialize(),
        dataType: 'json',
        success: function (data) {
            if (!data.error) {
                console.log(data);
                $("#editQuestionModal").modal('toggle');
                document.getElementById("formEditQuestion").reset();              
                $($(`li#${data.idQuestion} span`)[0]).text(data.textQuestion);
            } else {
                alert('error!');
            }
        }
      });
    return false;
});

//Adding a answer
$('#formAddAnswer').submit(function(){
    let thisUpd = $('#thisUpdAns');
    console.log($(this).serialize());
    
    $.ajax({
        type: "POST",
        url: "/admin/answers/add",
        cache: "false",
        data: $(this).serialize(),
        dataType: 'json',
        success: function (data) {
            if (!data.error) {
                let current;
                $("#addAnswerModal").modal('toggle');
                document.getElementById("formAddAnswer").reset();
                if(data.currentAnswer == 0)
                    current = "false"
                else current = "true";
                $(`#collapse-${data.idQuestion} #thisUpdAns`).append(
                `<tbody id=${data.idAnswer}>
                    <tr>
                        <td class="textAnswer">${data.textAnswer}</td>
                        <td class="currentAnswer">${current}</td>
                    </tr>
                </tbody>`);
            } else {
                alert('error!');
            }
        }
      });
    return false;
});
//Answer edit
$('#formEditAnswer').submit(function(){
    console.log("submit");
    let thisUpd = $('#thisUpd');
    $.ajax({
        type: "POST",
        url: "/admin/answers/edit/" + id,
        cache: "false",
        data: $(this).serialize(),
        dataType: 'json',
        success: function (data) {
            if (!data.error) {
                let current;
                $("#editAnswerModal").modal('toggle');
                document.getElementById("formEditAnswer").reset();
                console.log($(`tbody#${data.idAnswer} td.textAnswer`));
                
                if(data.currentAnswer == 0)
                    current = "false"
                else current = "true";           
                $($(`tbody#${data.idAnswer} td.textAnswer`)[0]).text(data.textAnswer);
            } else {
                alert('error!');
            }
        }
      });
    return false;
});

$('#formDeleteAnswer').submit(function(){
    $.ajax({
        type: "POST",
        url: "/admin/answers/delete/" + id,
        cache: "false",
        data: $(this).serialize(),
        dataType: 'json',
        success: function (data) {
            if (!data.error) {
                console.log(data);
                $("#deleteAnswerModal").modal('toggle');
                $($(`tbody#${data}`)[0]).remove();
                $("li#collapse-"+data).remove();
            } else {
                alert('error!');
            }
        }
      });
    return false;
}) 
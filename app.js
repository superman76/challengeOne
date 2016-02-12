console.log("Hello World");

var personOne = {firstName: "john", lastName: "johnson", phoneNumber: '404-333-3232'};
var personTwo = {firstName: "sally", lastName: "johnson", phoneNumber: '404-334-2323'};
var personThree = {firstName: "sue", lastName: "johnson", phoneNumber: '404-335-3223'};

var people = [personOne, personTwo, personThree];

var $list = $('#toDoTable');
toDos.forEach(function(toDo){
	addRowToTable($list, toDo);
})

function addToDo(event) {
	var toDo = {};
	toDo.name = $('#taskName').val();
	toDo.date = $('#dueDate').val();

	if(toDo.name && toDo.date) {
		var $list = $('#toDoTable');
		addRowToTable($list, toDo);
	}
	console.log('Submitted with ', taskName, 'and', dueDate);
	return false;
}

function addRowToTable($list, toDo) {
	$list.append('<tr><td>' + toDo.name + '</td><td>' + toDo.date + '</td><td><button type="button"class="btn btn-primary deleteToDo">Delete</button></td></tr>');
}

function deleteToDo(event) {
	var $button = $(event.target);
	$button.closest('tr').remove();

}

$('#submit-button').on('click', addToDo);
$('.deleteToDo').on('click', deleteToDo);
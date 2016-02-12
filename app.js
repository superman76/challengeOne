console.log("Hello World");

var personOne = {firstName: "john", lastName: "johnson", phoneNumber: '404-333-3232'};
var personTwo = {firstName: "sally", lastName: "johnson", phoneNumber: '404-334-2323'};
var personThree = {firstName: "sue", lastName: "johnson", phoneNumber: '404-335-3223'};

var people = [personOne, personTwo, personThree];

var $list = $('#addPersonTable');
addPersons.forEach(function(addPerson){
	addRowToTable($list, addPerson);
})

function addaddPerson(event) {
	var addPerson = {};
	addPerson.firstName = $('#taskName').val();
	addPerson.lastName = $('#taskName').val();
	addPerson.phoneNumber = $('#dueDate').val();

	if(addPerson.firstName && addPerson.lastName && addPerson.phoneNumber) {
		var $list = $('#addPersonTable');
		addRowToTable($list, addPerson);
	}
	console.log('Submitted with ', taskName, 'and', dueDate);
	return false;
}

function addRowToTable($list, addPerson) {
	$list.append('<tr><td>' + addPerson.firstName + '</td> \
		<td>' + addPerson.lastName + '</td><td>' + addPerson.date + '</td> \
		<td><button type="button"class="btn btn-primary deleteaddPerson">Delete</button></td></tr>');
}

function deleteaddPerson(event) {
	var $button = $(event.target);
	$button.closest('tr').remove();

}

$('#submit-button').on('click', addPerson);
$('.deleteaddPerson').on('click', deletePerson);
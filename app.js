var personOne = {firstName: "john", lastName: "johnson", phoneNumber: '404-333-3232'};
var personTwo = {firstName: "sally", lastName: "johnson", phoneNumber: '404-334-2323'};
var personThree = {firstName: "sue", lastName: "johnson", phoneNumber: '404-335-3223'};

var people = [personOne, personTwo, personThree];

console.log(people);

var addPersonToList = function(p)

var $list = $('#personList');

	var firstName = $('#firstName').val();
	var lastName = $('#lastName').val();
	var firstName = $('#firstName').val();

	alert("First: " + firstName + "Last: " + lastName + "phoneNumber: ")


	people.forEach(function(p){
		$list.append(
					'<tr> \
					<td>' + p.firstName + '</td> \
					<td>' + p.lastName + '</td> \
					<td>' + p.phoneNumber + '</td> \
					</tr>'

			)

		firstName = $('firstName').val('');
		lastName = $('lastName').val('');
		phoneNumber = $('phoneNumber').val('');
	})

	$('#submitButton').on('click', addPersonToList);

// 6) Loop through the array in the javascript file and spit the items 
// out on to the page.

// 7) Give the form functionality - when the user clicks submit - an 
// alert pops up that contains the information in the fields. (BONUS: 
// 	Append the content to the page)
// basic table, no buttons, try to get the data from the app.js to render

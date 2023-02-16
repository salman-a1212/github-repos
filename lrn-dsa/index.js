

// JavaScript program to demonstrate
// working of LIFO


// Pushing element on the top of the stack
function stack_push(stack)
{
	for (var i = 0; i < 5; i++)
	{
		stack.push(i);
	}
	return stack;
}

// Popping element from the top of the stack
function stack_pop(stack)
{
	document.write( "Pop :<br>");

	for (var i = 0; i < 5; i++)
	{
		var y = parseInt(stack[stack.length-1]);
		stack.pop();
		document.write( y + "<br>");
	}
	return stack;
}

// Displaying element on the top of the stack
function stack_peek(stack)
{
	var element = parseInt(stack[stack.length-1]);
	document.write( "Element on stack top : " + element +
	"<br>");
}

// Searching element in the stack
function stack_search( stack, element)
{
	var pos = -1,co = 0;
	while(stack.length > 0)
	{
		co++;
		if(stack[stack.length-1] == element)
		{
			pos = co;
			break;
		}
		stack.pop();
	}

	if (pos == -1)
		document.write( "Element not found" + "<br>");
	else
		document.write("Element is found at position "
		+ pos + "<br>");
}

	stack=[] ;

	stack = stack_push(stack);
	stack = stack_pop(stack);
	stack = stack_push(stack);
	stack_peek(stack);
	stack_search(stack, 2);
	stack_search(stack, 6);

	
// This code is contributed by SoumikMondal


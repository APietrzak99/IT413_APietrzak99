function validateForm()
{
    var return_value = true;
    var error_string = "";

    if(document.forms["my_form"].firstname.value == "")
    {
        error_string += "First Name cannot be blank\n";
        return_value = false;
    }
    if(document.forms["my_form"].firstname.value != "" && document.forms["my_form"].firstname.value.length < 3)
    {
        error_string += "First Name must be three or more characters in length."
        return_value = false;
    }
    if(document.forms["my_form"].firstname.value.length > 10)
    {
        error_string += "First Name must be less than ten characters in length."
        return_value = false;
    }
    if(document.forms["my_form"].lastname.value == "")
    {
        error_string += "Last Name cannot be blank\n";
        return_value = false;
    }
    if(document.forms["my_form"].lastname.value != "" && document.forms["my_form"].lastname.value.length < 2)
    {
        error_string += "Last Name must be two or more characters in length."
        return_value = false;
    }
    if(document.forms["my_form"].lastname.value.length > 15)
    {
        error_string += "Last Name must be less than fifteen characters in length."
        return_value = false;
    }
    if(document.forms["my_form"].address.value != "" && document.forms["my_form"].address.value.length < 8)
    {
        error_string += "Address must be eight or more characters in length."
        return_value = false;
    }
    if(document.forms["my_form"].lastname.value.length > 25)
    {
        error_string += "Address must be less than twenty-five characters in length."
        return_value = false;
    }
    if(error_string)
}    
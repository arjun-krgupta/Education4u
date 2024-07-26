

//////// loader   ////////////
 function loading()
 {
    document.getElementById("loader").style.display="none"
 }


// /////// toggle  /////////

$(function()
{
    $('.togle').click(function()
    {
        $(this).toggleClass('fa-xmark')
        $('.menu').toggleClass('active')
    })

    $(window).scroll(function()
    {
        $('.togle').removeClass('fa-xmark')
        $('.menu').removeClass('active')
    })
})







///////  form validation  ////////
function validate() {


    var alphaExp = /^[a-zA-Z\s]+$/
    var passExp = /^([a-zA-Z0-9@*#]{8,15})$/
    var numExp = /^[0-9]*$/
    var emailExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    var alphaAddExp = /^[a-zA-Z0-9\s,.'-]{3,}$/

    //  name validation
    let x = document.getElementById("name").value
    if (x == "") {
        document.getElementById("name-error").innerHTML = "Please enter Your Name"
        document.getElementById("name-error").style="color:red;font-style:italic; margin-left:40px;font-size:14px;"
        document.getElementById("name").focus()
        return false
    }
    else if (!x.match(alphaExp)) {
        document.getElementById("name-error").innerHTML = "Name should be Valid"
        document.getElementById("name-error").style="color:red;font-style:italic;margin-left:40px;font-size:14px;"
        document.getElementById("name").focus()
        return false
    }
    else if (x.length < 6 || x.length > 15) {
        document.getElementById("name-error").innerHTML = "Name Should be 6 to 15 character only"
        document.getElementById("name-error").style="color:red;font-style:italic;margin-left:40px;font-size:14px;"
        document.getElementById("name").focus()
        return false
    }
    else {
        document.getElementById("name-error").innerHTML = ""
    }
    //    Email validation
    let y = document.getElementById("mail").value
    if (y == "") {
        document.getElementById("mail-error").innerHTML = "Please enter Your Email id"
        document.getElementById("mail-error").style="color:red;font-style:italic;margin-left:40px;font-size:14px;"
        document.getElementById("mail").focus()
        return false
    }
    else if (!y.match(emailExp)) {
        document.getElementById("mail-error").innerHTML = "Your Email should be valid"
        document.getElementById("mail-error").style="color:red;font-style:italic;margin-left:40px;font-size:14px;"
        document.getElementById("mail").focus()
        return false
    }
    else {
        document.getElementById("mail-error").innerHTML = ""
    }

    // numer validation

    let z = document.getElementById("num").value
    if (z == "") {
        document.getElementById("num-error").innerHTML = "please enter your number"
        document.getElementById("num-error").style="color:red;font-style:italic;margin-left:40px;font-size:14px;"
        document.getElementById("num").focus()
        return false
    }
    else if (!z.match(numExp)) {
        document.getElementById("num-error").innerHTML = "Number should be Numeric only"
        document.getElementById("num-error").style="color:red;font-style:italic;margin-left:40px;font-size:14px;"
        document.getElementById("num").focus()
        return false
    }
    else if (z.length < 10 || z.length > 10) {
        document.getElementById("num-error").innerHTML = "Number should be 10 digit"
        document.getElementById("num-error").style="color:red;font-style:italic;margin-left:40px;font-size:14px;"
        document.getElementById("num").focus()
        return false
    }
    else {
        document.getElementById("num-error").innerHTML = ""
    }

    // password validation
    let a = document.getElementById("pass").value
    if (a == "") {
        document.getElementById("pass-error").innerHTML = "Please enter your password"
        document.getElementById("pass-error").style="color:red;font-style:italic;margin-left:40px;font-size:14px;"
        document.getElementById("pass").focus()
        return false
    }
    else if (!a.match(passExp)) {
        document.getElementById("pass-error").innerHTML = "Password Should be Valid"
        document.getElementById("pass-error").style="color:red;font-style:italic;margin-left:40px;font-size:14px;"
        document.getElementById("pass").focus()
        return false
    }
    else if (a.length < 8 || a.length > 8) {
        document.getElementById("pass-error").innerHTML = "Password Should be 8 character only"
        document.getElementById("pass-error").style="color:red;font-style:italic;margin-left:40px;font-size:14px;"
        document.getElementById("pass").focus()
        return false
    }
    else {
        document.getElementById("pass-error").innerHTML = ""
    }

    // confirm password validation

    let b=document.getElementById("cnf").value
    if(b=="")
    {
        document.getElementById("cnf-error").innerHTML="Please enter confirm passsword"
        document.getElementById("cnf-error").style="color:red;font-style:italic;margin-left:40px;font-size:14px;"
        document.getElementById("cnf").focus()
        return false
    }
    else if(!(a==b))
    {
        document.getElementById("cnf-error").innerHTML="Password does not Match "
        document.getElementById("cnf-error").style="color:red;font-style:italic;margin-left:40px;font-size:14px;"
        document.getElementById("cnf").focus()
        return false
    }
    else{
        document.getElementById("cnf-error").innerHTML=""
    }

    // gender validation

    let c=document.forms['myform']['gender']
    if(!(c[0].checked || c[1].checked))
    {
        alert("Please Select Your Gender")
        // document.forms['myform']['gender'].focus()
        return false
    }
    else{
        document.forms['myform']['gender'].innerHTML=""
    }
    // address validation
    let d=document.getElementById("address").value
    if(d=="")
    {
        document.getElementById("address-error").innerHTML="Please enter your address"
      document.getElementById("address").focus()
      return false
    }
    else if(!d.match(alphaAddExp))
    {
        document.getElementById("address-error").innerHTML="enter valid address"
        document.getElementById("address").focus()
        return false
    }
    else{
        document.getElementById("address-error").innerHTML=""
    }

    // selection validation
    let s=document.forms["myform"]["select"]
    if(s=="")
    {
        alert("Please Select Your Country")
        return false
    }
    else{
        document.forms['myform']['select'].innerHTML=""
    }
}
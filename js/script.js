function loginValidation() {

    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    if (email == "") {
        alert("يرجى إدخال البريد الإلكتروني");
        return false;
    }

    if (password == "") {
        alert("يرجى إدخال كلمة المرور");
        return false;
    }

    alert("تم تسجيل الدخول بنجاح");
    return false;
}


function registerValidation() {

    var name = document.getElementById("registerName").value;
    var email = document.getElementById("registerEmail").value;
    var password = document.getElementById("registerPassword").value;

    if (name == "") {
        alert("يرجى إدخال الاسم");
        return false;
    }

    if (email == "") {
        alert("يرجى إدخال البريد الإلكتروني");
        return false;
    }

    if (password == "") {
        alert("يرجى إدخال كلمة المرور");
        return false;
    }

    alert("تم إنشاء الحساب بنجاح");
    return false;
}


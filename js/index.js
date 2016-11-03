$(document).ready(function () {
    $("#txtCode").codeScanner({
        onScan: function ($element, code) {
            console.log(code);
            $("#txtCode").val(code);
        }
    });
});
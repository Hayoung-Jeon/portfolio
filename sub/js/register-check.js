// register-check.js

var email = $("#signup_email");
var user = $("#signup_name");
var pass = $("#signup_pass");
var passCheck = $("#signup_confirm");
var ph = $("#signup_ph");
var year = $("#signup_year");
var month = $("#signup_month");
var date = $("#signup_date");

var regEmail = /^[0-9a-zA-Z]([-\w\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-\w\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
var regName = /^[가-힣]{2,7}$/;
var regPh = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-([0-9]{3,4})-([0-9]{4})$/;
var regYear = /^(19[0-9]{2}|20[0-1]{1}[0-9]{1})$/;
var regMonth = /^(0[1-9]{1}|1[0-2]{1})$/;
var regMonth31 = /^(0[1,3,5,7,8]{1}|1[0,2]{1})$/;
var regDate31 = /^(0[1-9]{1}|[1,2]{1}[0-9]{1}|3[0,1]{1})$/;
var regDate30 = /^(0[1-9]{1}|[1,2]{1}[0-9]{1}|30)$/;
var regDate29 = /^(0[1-9]{1}|[1,2]{1}[0-9]{1})$/;
var regDate28 = /^(0[1-9]{1}|1[0-9]{1}|2[0-8]{1})$/;

$(email).keyup(function() {
	if(regEmail.test(email.val())) {
		$(this).removeClass("is-invalid");
		$(this).addClass("is-valid");
		$(this).siblings("i").removeClass("fa-times");
		$(this).siblings("i").addClass("fa-check");
	} else {
		$(this).removeClass("is-valid");
		$(this).addClass("is-invalid");
		$(this).siblings("i").removeClass("fa-check");
		$(this).siblings("i").addClass("fa-times");
	}
});

$(email).blur(function() {
	if(!email.val()) {
		$(this).removeClass("is-valid");
		$(this).addClass("is-invalid");
		$(this).siblings("i").removeClass("fa-check");
		$(this).siblings("i").addClass("fa-times");
	}
});

$(user).keyup(function() {
	if(regName.test(user.val())) {
		$(this).removeClass("is-invalid");
		$(this).addClass("is-valid");
		$(this).siblings("i").removeClass("fa-times");
		$(this).siblings("i").addClass("fa-check");
	} else {
		$(this).removeClass("is-valid");
		$(this).addClass("is-invalid");
		$(this).siblings("i").removeClass("fa-check");
		$(this).siblings("i").addClass("fa-times");
	}
});

$(user).blur(function() {
	if(!user.val()) {
		$(this).removeClass("is-valid");
		$(this).addClass("is-invalid");
		$(this).siblings("i").removeClass("fa-check");
		$(this).siblings("i").addClass("fa-times");
	}
});

$(pass).keyup(function() {
	if(pass.val() < 10 || pass.val() > 20) {
		$(this).removeClass("is-valid");
		$(this).addClass("is-invalid");
		$(this).siblings("i").removeClass("fa-check");
		$(this).siblings("i").addClass("fa-times");
	} else {
		var nbspCheck = pass.val().search(/\s/);
		var upperCheck = pass.val().search(/[A-Z]/);
		var numCheck =  pass.val().search(/[0-9]/);
		var spCheck = pass.val().search(/[^(가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9\s)]/i);

		if(nbspCheck != -1) {
			$(this).removeClass("is-valid");
			$(this).addClass("is-invalid");
			$(this).siblings("i").removeClass("fa-check");
			$(this).siblings("i").addClass("fa-times");
		} else {
			if(((upperCheck != -1) && (numCheck != -1)) || ((numCheck != -1) && (spCheck != -1)) || ((spCheck != -1) && (upperCheck != -1))) {
				$(this).removeClass("is-invalid");
				$(this).addClass("is-valid");
				$(this).siblings("i").removeClass("fa-times");
				$(this).siblings("i").addClass("fa-check");
			} else {
				$(this).removeClass("is-valid");
				$(this).addClass("is-invalid");
				$(this).siblings("i").removeClass("fa-check");
				$(this).siblings("i").addClass("fa-times");
			}
		}
	}
});

$(pass).blur(function() {
	if(!pass.val()) {
		$(this).removeClass("is-valid");
		$(this).addClass("is-invalid");
		$(this).siblings("i").removeClass("fa-check");
		$(this).siblings("i").addClass("fa-times");
	}
});

$(passCheck).keyup(function() {
	if(passCheck.val() == pass.val()) {
		$(this).removeClass("is-invalid");
		$(this).addClass("is-valid");
		$(this).siblings("i").removeClass("fa-times");
		$(this).siblings("i").addClass("fa-check");
	} else {
		$(this).removeClass("is-valid");
		$(this).addClass("is-invalid");
		$(this).siblings("i").removeClass("fa-check");
		$(this).siblings("i").addClass("fa-times");
	}
});

$(passCheck).blur(function() {
	if(!passCheck.val()) {
		$(this).removeClass("is-valid");
		$(this).addClass("is-invalid");
		$(this).siblings("i").removeClass("fa-check");
		$(this).siblings("i").addClass("fa-times");
	}
});

$(ph).keyup(function() {
	if(regPh.test(ph.val())) {
		$(this).removeClass("is-invalid");
		$(this).addClass("is-valid");
		$(this).siblings("i").removeClass("fa-times");
		$(this).siblings("i").addClass("fa-check");
	} else {
		$(this).removeClass("is-valid");
		$(this).addClass("is-invalid");
		$(this).siblings("i").removeClass("fa-check");
		$(this).siblings("i").addClass("fa-times");
	}
});

$(ph).blur(function() {
	if(!ph.val()) {
		$(this).removeClass("is-valid");
		$(this).addClass("is-invalid");
		$(this).siblings("i").removeClass("fa-check");
		$(this).siblings("i").addClass("fa-times");
	}
});

$(year).keyup(function() {
	if(regYear.test(year.val())) {
		$(this).removeClass("is-invalid");
		$(this).addClass("is-valid");
		$(this).next("i").removeClass("fa-times");
		$(this).next("i").addClass("fa-check");

		$(month).attr('disabled', false);
	} else {
		$(this).removeClass("is-valid");
		$(this).addClass("is-invalid");
		$(this).next("i").removeClass("fa-check");
		$(this).next("i").addClass("fa-times");
	}
});

$(year).blur(function() {
	if(!year.val()) {
		$(this).removeClass("is-valid");
		$(this).addClass("is-invalid");
		$(this).next("i").removeClass("fa-check");
		$(this).next("i").addClass("fa-times");
	}
});

$(month).keyup(function() {
	if(regMonth.test(month.val())) {
		$(this).removeClass("is-invalid");
		$(this).addClass("is-valid");
		$(this).next("i").removeClass("fa-times");
		$(this).next("i").addClass("fa-check");

		$(date).attr('disabled', false);
	} else {
		$(this).removeClass("is-valid");
		$(this).addClass("is-invalid");
		$(this).next("i").removeClass("fa-check");
		$(this).next("i").addClass("fa-times");
	}
});

$(month).blur(function() {
	if(!month.val()) {
		$(this).removeClass("is-valid");
		$(this).addClass("is-invalid");
		$(this).next("i").removeClass("fa-check");
		$(this).next("i").addClass("fa-times");
	}
});

$(date).keyup(function() {
	if(regMonth31.test(month.val())) {
		if(regDate31.test(date.val())) {
			$(this).removeClass("is-invalid");
			$(this).addClass("is-valid");
			$(this).next("i").removeClass("fa-times");
			$(this).next("i").addClass("fa-check");
		} else {
			$(this).removeClass("is-valid");
			$(this).addClass("is-invalid");
			$(this).next("i").removeClass("fa-check");
			$(this).next("i").addClass("fa-times");
		}
	} else if(month.val() != 2) {
		if(regDate30.test(date.val())) {
			$(this).removeClass("is-invalid");
			$(this).addClass("is-valid");
			$(this).next("i").removeClass("fa-times");
			$(this).next("i").addClass("fa-check");
		} else {
			$(this).removeClass("is-valid");
			$(this).addClass("is-invalid");
			$(this).next("i").removeClass("fa-check");
			$(this).next("i").addClass("fa-times");
		}
	} else {
		if((month.val() % 400) == 0) {
			if(regDate29.test(date.val())) {
				$(this).removeClass("is-invalid");
				$(this).addClass("is-valid");
				$(this).next("i").removeClass("fa-times");
				$(this).next("i").addClass("fa-check");
			} else {
				$(this).removeClass("is-valid");
				$(this).addClass("is-invalid");
				$(this).next("i").removeClass("fa-check");
				$(this).next("i").addClass("fa-times");
			}
		} else if((month.val() % 100) == 0) {
			if(regDate28.test(date.val())) {
				$(this).removeClass("is-invalid");
				$(this).addClass("is-valid");
				$(this).next("i").removeClass("fa-times");
				$(this).next("i").addClass("fa-check");
			} else {
				$(this).removeClass("is-valid");
				$(this).addClass("is-invalid");
				$(this).next("i").removeClass("fa-check");
				$(this).next("i").addClass("fa-times");
			}
		} else if((month.val() % 4) == 0) {
			if(regDate29.test(date.val())) {
				$(this).removeClass("is-invalid");
				$(this).addClass("is-valid");
				$(this).next("i").removeClass("fa-times");
				$(this).next("i").addClass("fa-check");
			} else {
				$(this).removeClass("is-valid");
				$(this).addClass("is-invalid");
				$(this).next("i").removeClass("fa-check");
				$(this).next("i").addClass("fa-times");
			}
		} else {
			if(regDate28.test(date.val())) {
				$(this).removeClass("is-invalid");
				$(this).addClass("is-valid");
				$(this).next("i").removeClass("fa-times");
				$(this).next("i").addClass("fa-check");
			} else {
				$(this).removeClass("is-valid");
				$(this).addClass("is-invalid");
				$(this).next("i").removeClass("fa-check");
				$(this).next("i").addClass("fa-times");
			}
		}
	}
});

$(date).blur(function() {
	if(!date.val()) {
		$(this).removeClass("is-valid");
		$(this).addClass("is-invalid");
		$(this).next("i").removeClass("fa-check");
		$(this).next("i").addClass("fa-times");
	}
});
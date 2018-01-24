'use strict';

$(function () {

	$("button").click(function () {

		$.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
			function (pobierzDane) {
				var kontener = $("<div></div>");

				$("button").after(kontener);

				$("div").append("imię: " + pobierzDane.imie + "; nazwisko: " + pobierzDane.nazwisko + "; zawód: " + pobierzDane.zawod + "; firma: " + pobierzDane.firma);

				$("div").attr("id", "dane-programisty");

			});
	});
});
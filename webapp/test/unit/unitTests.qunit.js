/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"projeto_netflix_abap/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});

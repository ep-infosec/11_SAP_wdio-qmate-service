/* eslint-disable no-undef */
sap.ui.define([
  "sap/ui/demo/nav/localService/mockserver",
  "sap/m/MessageBox"
], function (mockserver, MessageBox) {
  "use strict";

	// initialize the mock server
  mockserver.init().catch(function (oError) {
    MessageBox.error(oError.message);
  }).finally(function () {
		// initialize the embedded component on the HTML page
    // eslint-disable-next-line no-undef
    sap.ui.require(["sap/ui/core/ComponentSupport"]);
  });
});
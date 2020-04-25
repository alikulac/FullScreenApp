sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageBox"
], function (Controller, JSONModel, MessageBox) {
	"use strict";

	return Controller.extend("FullScreenApp.controller.View1", {

	// Viewde kullanılan JSON Model oluşturuldu
	onInit: function () {
		this._oView = this.getView();
		
		var oViewModel = new JSONModel({
	        Ponumber: "",
	        Lifnr: "",
	        Waers: "",
	        Bukrs: ""
		});
		// Model Viewa bağlandı
		this._oView.setModel(oViewModel, "viewModel");
		// Tablo viewdan controllera çağrılır
		this._oTable = this._oView.byId("table0");
	},
	//Buttonun kodu yazıldı
	onAddPurchaseOrder: function () {
		debugger;
	//Model ve entity tanımlandı
		var oModel = this._oView.getModel(),
			sPath  = "/POServisiSet",
			oData  = {},
			mParameters = {};
	
	//Ekrana girilen bilgiler alınarak servise gönderilir
			oData.Ponumber = this._oView.getModel("viewModel").getProperty("/Ponumber");
			oData.Lifnr = this._oView.getModel("viewModel").getProperty("/Lifnr");
			oData.Waers = this._oView.getModel("viewModel").getProperty("/Waers");
			oData.Bukrs = this._oView.getModel("viewModel").getProperty("/Bukrs");
			
			mParameters.success = function (oData2, oResponse) {
				debugger;
				
				var oBinding = this._oTable.getBinding("items");
				oBinding.filter([]);
				MessageBox.success("Tablo çağrıldı");
				
			}.bind(this);
			mParameters.error = function (oError) {
				debugger;
				MessageBox.error("Hata alındı");
			};
			oModel.create(sPath, oData, mParameters);
	}
	});
});
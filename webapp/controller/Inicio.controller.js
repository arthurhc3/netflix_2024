sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller,JSONModel) {
    "use strict";

    return Controller.extend("projetonetflixabap.controller.Inicio", {
        onInit: function () {
            //lista vazia de resultados
            let resultados = {
                titles: []
            }
            // variavel especial para mostrar dados na tela
            let resultadosModel = new JSONModel();
            resultadosModel.setData(resultados);
            let tela = this.getView();
            tela.setModel(resultadosModel, "APINetflix")

        },
        onInicioLinkPress: function(){
            alert("navegar para tela inicial");
        },

        onBuscarDados: function(){
            //Busca de dados na API
            let searchField = this.byId("idSearchField");
            let filtro = searchField.getValue();

            alert(filtro);      

            const settings = {
                async: true,
                crossDomain: true,
                url: 'https://netflix54.p.rapidapi.com/search/?query='
                + filtro + '&offset=0&limit_titles=50&limit_suggestions=20&lang=en',
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '284a3915edmshc753f93db1712c1p1be667jsn52d20efabaa3',
                    'x-rapidapi-host': 'netflix54.p.rapidapi.com'
                }
            };
            
            $.ajax(settings).done(function (response) {
                console.log(response);

                //Atualizar os dados

                let tela = this.getView();
                let modelo = tela.getModel("APINetflix");
                let dados = modelo.getData();

                //Limpar a lista

                dados.titles = [];
                dados.titles = response.titles;
                modelo.refresh();
            }.bind(this));
        }
    });
});

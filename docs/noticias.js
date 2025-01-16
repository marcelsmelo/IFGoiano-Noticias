/**
@swagger
  {
    "/noticias/" : {
      "get": {
        "description": "Busca todas as noticias recuperadas do site do IFGoiano",
        "tags":['Noticias'],
        "security": [
            { "BearerAuth": [] }
          ],
        "parameters":[
          "$ref": "#/components/parameters/lastIdParam",
          "$ref": "#/components/parameters/limitParam",
          "$ref": "#/components/parameters/campusParam",
        ],
        "responses": {
          "200":{
            "$ref": "#/components/responses/arrayNoticias"
          },
          "500":{
            "$ref": "#/components/responses/genericError"
          }
        }
      },
      "put": {
        "description": "Atualizar o banco de dados buscando novas noticias no site do IFGoiano",
        "tags":['Noticias'],
        "security": [
            { "BearerAuth": [] }
          ],
        "parameters":[],
        "responses": {
          "201": {
            "$ref": "#/components/responses/singleMsg"
          },
          "500":{
            "$ref": "#/components/responses/genericError"
          }
        }
      }
    },
  }
*/
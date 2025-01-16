/**
@swagger
{
  components:{
    parameters:{
      'lastIdParam':{
        'description': "ID da ultima notícia anteriormente recuperada. Caso esse parametro seja informado, a API retornará as notícias a partir deste ID. Caso contrário será retornada TODAS notícias a partir da primeira cadastrada.",
        'in': 'query',
        'name': 'lastId',
        'required': false,
        "schema":{
          "type": "int"
        }
      },
      'limitParam':{
        'description': "Quantidade máxima de notícias retornadas. Serão retornadas as notícias a partir do ID informado ou em ordem crescente de data.",
        'in': 'query',
        'name': 'limit',
        'required': false,
        "schema":{
          "type": "int"
        }
      },
      'campusParam':{
        'description': "Array com os campus que deseja notícias.",
        'in': "query",
        'name': 'campus',
        'required':false,
        "schema":{
              "type":"array",
              "items":{
                "type":"string",
                "enum":["Morrinhos", "Reitoria", "Urutaí", "Campos Belos", "Catalão", "Ceres", "Cristalina", "Hidrolândia", "Ipameri", "Iporá", "Posse", "Rio Verde", "Trindade", "Polo de Inovação", "Centro de Referência"]
              }
        }
      },
    },
    responses: {
      "genericError": {
        "description": "Erro ao buscar noticias",
        "content":{
          "application/json":{
            "schema":{
              "type":"object",
              "properties":{
                "msg": { "type":"string"},
                "error": { "type":"string"}
              }
            }
          }
        }
      },
      "singleMsg":{
        "description": "Operação realizada com sucesso",
        "content":{
          "application/json":{
            "schema":{
              "type":"object",
              "properties":{
                "msg": { "type":"string"}
              }
            }
          }
        }
      },
      "arrayNoticias":{
        "description": "Array JSON com notícias recuperadas no site do IFGoiano",
        "content":{
          "application/json":{
            "schema":{
              "type":"array",
              "items":{
                "$ref":"#/components/schemas/Noticia"
              }
            }
          }
        }
      },
      "singleNoticia":{
        "description": "Noticia recuperada",
        "content":{
          "application/json":{
            "schema":{
              "$ref":"#/components/schemas/Noticia"
            }
          }
        }
      },
      "autenticacaoError":{
        "description": "Erro na autenticação ou verificação do token de acesso!",
        "content":{
          "application/json":{
            "schema":{
              "type":"object",
              "properties":{
                "msg": { "type":"string"},
                "error":{ "type": "string"}
              }
            }
          }
        }
      },
      "acessoError":{
        "description": "O usuário não tem acesso a esta rota!",
        "content":{
          "application/json":{
            "schema":{
              "type":"object",
              "properties":{
                "msg": { "type":"string"},
                "error":{ "type": "string"}
              }
            }
          }
        }
      },
    }
  }
}
*/
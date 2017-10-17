const request = require('request');

module.exports = (id) => {
    console.log('Buscar notícia ID=' + id)
    let params = {
        url: 'https://www.ifgoiano.edu.br/home/index.php/component/content/article?id=' + id,
        method: 'GET'
    }

    request(params, (err, response, html) => {
        if (!err && response.statusCode == 200) {
            console.log('[GetPageFromSite]', 'Página recuperada com sucesso');
            return html;
        } else {
            console.log('[GetPageFromSite]', 'Erro ao buscar página do site IFGoiano. ID=' + id)
            return null;
        }
    })

}
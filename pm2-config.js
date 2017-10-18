{
    "apps": [{
        "name": "ifgoiano-noticias",
        "script": "./bin/www",
        "watch": true,
        "env": {
            "NODE_ENV": "development",
            "PORT": 3000
        },
        "env_production": {
            "NODE_ENV": "production",
            "PORT": 80
        }
    }]
}
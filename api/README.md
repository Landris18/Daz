# API DAZ

## Installation de l'API
- `npm install` pour installer les dépendances
- configurer le fichier .env
- `npm start` lancer le serveur

## Documentation
- ### Exemple de requête enregistrement d'utilisateur 
```
POST http://<host>:3001/api/v1/register HTTP/1.1
content-type: application/json

{
    "username": "arleme",
    "email": "arleme.etech@gmail.com",
    "password": "arleme123"
}
```

- ### Exemple login connection utilisateur
```
    POST http://<host>:3001/api/v1/login HTTP/1.1
    content-type: application/json

    {
        "username": "arleme",
        "password": "arleme123"
    }
```
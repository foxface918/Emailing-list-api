# Emailing-list-api
This is a api that will let you add users to a JSON file for a emailing list. This app makes a webserver on port 3000.

Get request----------------------------------------- 
```
localhost:3000/users/
```
returns:
```
{
    "status": "get"
}
```


Post request----------------------------------------
```
localhost:3000/users/Email|Name|Day|Hour
```
writes to JSON file:
```
{
    Userdata[
        {
            "email": "Email",
            "name": "Name",
            "Day": "Day",
            "Hour": "Hour"
        }
    ]
}
```
Returns:
```
{
    "email": "email",
    "name": "name",
    "day": "day"
}
```



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
<br>
<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.


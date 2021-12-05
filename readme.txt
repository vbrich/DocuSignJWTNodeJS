### If you decide to fork this repo

Create the following secrets based on your DocuSign account

1. integrationkey = When you create an API application, you get this 
2. userid = At the account level. This is who our JWT is impersonating for esigning
3. privatekey = Cut/paste your RSA private key here
4. redirecturi = Cut/paste the redirect uri you set in your DocuSign API app

### General synopsis

* index.js = main program
* docs.js = functions that return documents for quick changing/tweaking
* makeenvelope.js = function to create envelope using passed in arguments



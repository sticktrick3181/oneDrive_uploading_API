# oneDrive_uploading_API
A single script for uploading all your local files to a particular folder in your Microsoft oneDrive Account.
CLIENT_ID & CLIENT_SECRET can be obtained from -> YOUR AZURE AAD
ACCESS_TOKEN has to be generated automatically using your refresh_token.

Now how to get your refresh token.

along with client_id,client_secret you will be requiring one additional field to get your refresh_token ,that is, "scope" which we essentially tell your request for request_token to fetch some particular services out the the "GIANT MICROSOFT GRAPH API" which is like on ocean to all the existing user delegated and application based REST APIs tha exists(obviously talking about all the services by microsoft).
1>> open postman and select oauth2.0 authentication and header prefix to Bearer.
<img width="596" alt="Screenshot 2022-07-04 at 4 33 09 PM" src="https://user-images.githubusercontent.com/79782184/177142190-ddfdd005-61d6-448b-a12d-02759bae813c.png">
2>> Select grant type -> Authorization Code
<img width="582" alt="Screenshot 2022-07-04 at 4 39 43 PM" src="https://user-images.githubusercontent.com/79782184/177143045-99a84005-7243-4b5c-b6a6-ce7f8e117777.png">
3>> Here you can se a field CallBack Url as i am using postman inside a browser so it is fixed for me but if you guys are using postman dedicated app then you can enter your own callback.
4>> Formats for your callback would be of type (below)::
<img width="1429" alt="Screenshot 2022-07-04 at 11 56 39 PM" src="https://user-images.githubusercontent.com/79782184/177203781-9ef59ec7-e378-446e-9aad-5dc43dbfcfce.png">
5 >> Paste your client id and client secret created on Azure Active Directory.

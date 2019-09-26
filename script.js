// Javascript-dokument 

// // skapa nyckel till github
// require 'openssl'
// require 'jwt'  # https://rubygems.org/gems/jwt

// # Private key contents
// private_pem = File.read(YOUR_PATH_TO_PEM)
// private_key = OpenSSL::PKey::RSA.new(private_pem)

// # Generate the JWT
// payload = {
//   # issued at time
//   iat: Time.now.to_i,
//   # JWT expiration time (10 minute maximum)
//   exp: Time.now.to_i + (10 * 60),
//   # GitHub App's identifier
//   iss: YOUR_APP_ID
// }

// jwt = JWT.encode(payload, private_key, "RS256")
// puts jwt
// läser infil
//"https://github.com/skka19st"
fetch ("https://api.github.com/users/skka19st/repos")
//fetch ("https://api.github.com/search/repositories?q=MVP")
//fetch ("https://api.github.com/skka19st/repos?page=2&per_page=100")
// '.then' är ett promise som gör att JavaScript väntar tills 
// förra anropet är klart
.then (function(response) { 
    // 'respons.json()' är resultatet av fetch-läsningen             
    return response.json()                
})
// 'data' innehåller resultatet av föregående '.then'
// function utan namn (triggas av en händelse, anropas aldrig utifrån)
.then(function(data) { 
    // går att använda variabeln 'data' direkt                    
    adressbok = data  
    console.log(data)
    //SorteraData(adressbok); 
    BehandlaData(adressbok);                    
})
.catch(function(data) {
    console.log("fel vid inläsning")
});

function SorteraData(data) {
     console.log("sortera-data");
     console.log(data);
}

function BehandlaData(data) {
    console.log("behandla-data");
    console.log(data);

    var listrad = "";

    for (ind=0 ; ind < data.length ; ind++){      
        document.getElementById("githubRad").innerHTML = data[ind].name;
        listrad += document.getElementById("listrad").innerHTML;

        console.log("index = " + ind);
        console.log(listrad);
    }
    // data läggs ut till skärmen
    document.getElementById("listrad").innerHTML = listrad;
}

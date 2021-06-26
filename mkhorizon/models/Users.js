{ 
    firstname: String,
    lastname: String,
    username: String,
    email: String,
    date: 

    accounts: [             
             { kind: 'fonebox',
               username: String,
               hash: String,
               salt: String
             },
             { kind: 'btc',
               publicAdress: String,
               quantity: Number
             },
     
          ]
    }

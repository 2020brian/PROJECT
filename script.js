function createPost(data)

            //fetch(url, config)
            //data = {title, body}

            const config = {

                method: "POST",

                headers: {
                    'Content-Type':'application/json'

                },

                body: JSON.stringify(data)

            }

            return fetch("http://localhost:3000/posts",config)

            .then(function(response){

                return response.json()

            })
        




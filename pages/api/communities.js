import { SiteClient } from 'datocms-client'

export default async function getDataFromDato(request, response) {
   if (request.method == 'POST') {      
      
      const token = '52070916fefb4fb4bd3fb1c508fced'
      console.log(token)
      const client = new SiteClient(token)
      
      const modelCreated = await client.items.create({
         itemType: "975968", // model ID criado pelo Dato
         ...request.body,
         // title: "Comunidade teste POST",
         // imageUrl: "https://github.com/omariosouto",
         // creatorSlug: "omariosouto"
      })
      
      console.log(modelCreated)
      
      response.json({         
         modelCreated: modelCreated
      })
      return
   } 

   response.status(404).json({
      message : 'ainda nao temos nada no GET, mas no POST tem!'
   })
}
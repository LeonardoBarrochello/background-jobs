import Mail from "../lib/Mail.js"
import Queue from "../lib/Queue";

export default {
     async store(req,res){
          const { name , email , password} = req.body

          const user  = {
              name,
              email,
              password
          };
          //Adicionar job de registration mail na fila 
          try {
               
               await Queue.add("RegistrationMail",{user})
               
          } catch (error) {
               console.log(error.message)
          }

          return res.json(user)
     }
}
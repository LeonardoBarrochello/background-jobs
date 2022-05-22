import Mail from "../lib/Mail";


export default {
    key : "RegistrationMail",
    options : {
        delay : 5000,  
    },
    async handle({data}) {
        const {user} = data
        await Mail.sendMail({
            from : "Queue test <queue@queuetest.com.br>",
            to: `${user.name}  <${user.email}>`,
            subject : "Cadastro de usuario",
            html : `Olá , ${user.name} , bem vindo ao sistema de filas da Rocketseat`
        })
    }
}
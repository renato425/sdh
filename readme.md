# Saturn Discord Hosting™
* Discord (Português): [https://discord.gg/2vsNNgmJP5](https://discord.gg/2vsNNgmJP5) **Alpha-Test!**
# Por que utilizar esse módulo
Com esse módulo, a configuração do seu bot na SDH fica muito mais prática e rápida!

Se você não conhece a SDH. Somos uma hospedagem gratuita para bots Discord feitos em JavaScript!

#Exemplo
```js
const Discord = require("discord.js")
const client = new Discord.Client()
const SDH = require("sdh")

client.on("ready", async () => {
    const API = new SDH(client)
    let connection = await API.connect()
    if (connection) console.error(connection)
    let warn = API.ready("id de um canal aqui")
})
```

**Qualquer erro... POR FAVOR! Reportem em nosso projeto no github!**

**Estamos sempre lendo as issues e os pull requests!**
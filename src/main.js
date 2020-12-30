/**
 * @class SDH
 */

class saturn {
    /**
     * com e sem shards
     * @param {*} connect() - conecta-se a instância na hospedagem
     * @param {*} ready(channelid) - o seu bot envia uma mensagem no canal que você escolheu informado que ele está online!
     */
    constructor(client) {
        try {
            this.discord = require("discord.js")

        } catch (e) {
            throw new Error("discord.js não instalado!")
        }
        this.client = client
    }
    async connect() {
        const client = new this.discord.Client()
        client.on("message", async message => {
            if (message.channel.id == "793849267965001749") {
                const filter = m => m.content.startsWith(`${client.user.id}`) && m.author.id == "687841307607302149"
                client.channels.cache.get("793849267965001749").awaitMessages(filter, {max: 1, time: 25000}).then(collected => {
                    if (collected.first().content.startsWith(`${client.user.id}|stop`)) {
                        return process.exit()
                    }
                    if (collected.first().content.startsWuth(`${client.user.id}|uptime`)) {
                        return client.channels.cache.get("793849267965001749").send(bot.uptime)
                    }
                })
            }
        })
    }
    async ready(channel) {
        const client = new this.discord.Client()
        client.on("ready", async () => {
            client.channels.cache.get(channel).send(`Seu bot (${bot.user.tag}(${bot.user.id}) está online com a host da Saturn Discord Hosting!)`)
        })
    }
}

module.exports = saturn
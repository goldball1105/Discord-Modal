const { Events } = require('discord.js');
const { clientId, guildId } = require('../config.json')
const { Rcon } = require('minecraft-rcon-client')

const mcserver = new Rcon({
    port: 25575,
    host: '26.50.90.87',
    password: 'WhiteDragon115'
})



module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        client.user.setActivity({ name: '休閒生存 :>', type: 3 });

        console.log(`\x1B[32mLogin : Bot \x1B[33m${client.user.tag}\n\x1B[32mBotID : \x1B[33m${clientId}\x1B[0m`);
        console.log(`\x1B[32mServerID : \x1B[33m${guildId}`);
        console.log('\x1B[0m-----------------------------')
        const guild = client.guilds.cache.get(guildId);
        const memberCount = guild.memberCount;
        console.log(`\x1B[32m伺服器中有 \x1B[33m${memberCount} \x1B[32m位成員\x1B[34m`);

        mcserver.connect().then(() => {
            console.log('連線中')
            mcserver.send(`tellraw @a ["",{"text":"[RCON] ","color":"red"},{"text":"connect successfully","color":"green"}]`).then((res) => {
                console.log(res)
            }).catch(eer => {
                console.log(eer)
            })
        }).catch(eer => {
            console.log(eer)
        })

    },
};
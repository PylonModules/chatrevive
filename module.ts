import * as config from '../config';
const revive = new pylon.KVNamespace('PylonModules-ReviveChat');
discord.interactions.commands.register(
  {
    name: 'chat-revive',
    description: 'Revive this chat!',
  },
  async (interaction) => {
    if (!config.chatrevive.role) {
      await interaction.respondEphemeral(
        'Something went wrong. Please have a server admin check their Pylon logs.'
      );
      console.log(
        "[CHATREVIVE] You haven't set a chat revive role in your config.ts"
      );
      return;
    }

    await discord.getGuild(interaction.guildId).then(async (guild) => {
      await guild
        .getRole(config.chatrevive.role)
        .then(async (role) => {
          await interaction.respondEphemeral('Successfully revived chat!');
          let msg = `<@&${role.id}>\nChat revived by <@${interaction.member.user.id}>`;
          const channel = await discord.getGuildTextChannel(
            interaction.channelId
          );
          await channel?.sendMessage(msg);
        })
        .catch(async (err) => {
          console.log(
            '[CHATREVIVE] The role with id ' +
              config.chatrevive.role +
              " does't exist."
          );
          return await interaction.respondEphemeral(
            'Something went wrong. Please have a server admin check their Pylon logs.'
          );
        });
    });

    /*if (await revive.get<boolean>('revive')) {
      return await interaction.respondEphemeral(
        'The chat was already revived within the last hour. Please wait before using this command.'
      );
    }
    await revive.put('revive', true, {
      ttl: Math.ceil(Date.now() / 1000 / 60 / 60) * 60 * 60 * 1000 - Date.now(),
    });*/
  }
);

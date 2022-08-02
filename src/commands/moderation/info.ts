import Discord from 'discord.js';
import { CommandCategories, CommandDefinition } from '../index';
import { color } from '../..';

export const info: CommandDefinition = {
    names: ['info'],
    description: 'Displays an embed with core information about the Discord server',
    category: CommandCategories.MODERATION,
    permissions: ['MANAGE_GUILD'],
    execute: async (message, args) => {
        const embed = new Discord.MessageEmbed()
            .setColor(color)
            .setTitle('Information')
            .setDescription(
                'Please read the rules before anything else.\n\n' +
                    'Go to <#994242763736490056> to obtain announcement/student roles.\n\n',
            );

        await message.channel.send({ embeds: [embed] }).catch(console.error);
    },
};

import Discord from 'discord.js';
import { CommandCategories, CommandDefinition } from '../index';
import { color } from '../../index';

export const reactionroles: CommandDefinition = {
    names: ['reactionroles', 'rr'],
    description: 'Sends the reaction roles embed',
    category: CommandCategories.MODERATION,
    permissions: ['MANAGE_GUILD'],
    execute: async (message, args) => {
        const announcementsEmoji = '📣';
        const progressEmoji = '👨‍🎓';

        const embed = new Discord.MessageEmbed()
            .setColor(color)
            .setTitle('Announcement Roles')
            .setDescription(
                'React with the emojis to recieve the roles associated to them.\n\n' +
                    'Server Announcements - :mega:\n' +
                    'Student role - :student:\n'
            );

        const rrMessage = await message.channel.send({ embeds: [embed] }).catch(console.error);

        if (!rrMessage) return;

        await rrMessage.react(announcementsEmoji);
        await rrMessage.react(progressEmoji);
    },
};

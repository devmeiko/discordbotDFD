import Discord from 'discord.js';
import { CommandCategories, CommandDefinition } from '../index';
import { color } from '../..';

export const faq: CommandDefinition = {
    names: ['faq'],
    description: 'Displays an embed with FAQ to AirbusTeacher',
    category: CommandCategories.AIRBUSTEACHER,
    execute: async (message, args) => {
        const embed = new Discord.MessageEmbed()
            .setColor(color)
            .setTitle('Frequently Asked Questions')
            .setDescription('This will hopefully answer most of your questions. If you have any other questions, you may ask in <#994377011994841129>')
            .addFields(
                {
                    name: 'Q: Who is the owner of this server?',
                    value: 'A: <@890361765551013929> is.',
                },
                {
                    name: 'Q: Is this server "noob"-friendly?',
                    value: 'A: It totally is, we strive to help newcomers but also more knowledged aviation lovers.',
                },
                {
                    name: 'Q: What is the purpose of this server?',
                    value: 'A: To bring more people together who love aviation',
                },
                {
                    name: 'Q: I want to become a moderator. Where can I start?',
                    value:
                        "A: Currently the staff team has reached it's maximum amount of members, when a spot opens we'll let everyone know."
                },
            );

        await message.channel.send({ embeds: [embed] }).catch(console.error);
    },
};

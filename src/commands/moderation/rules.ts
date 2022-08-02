import Discord from 'discord.js';
import { CommandCategories, CommandDefinition } from '../index';
import { color } from '../..';

export const rules: CommandDefinition = {
    names: ['rules'],
    description: 'Displays an embed with the rules for the Discord server',
    category: CommandCategories.MODERATION,
    permissions: ['MANAGE_GUILD'],
    execute: async (message, args) => {
        const embed = new Discord.MessageEmbed().setColor(color).setTitle('Server Rules').setDescription(`
                Rules and Terms.\n
                Hello and welcome to the AirbusTeacher official discord! Please read the rules below before continuing.\n
                \n
                1. No Harassment, as well as respectful.\n
                2. Racism, Sexism, or any form of slurs will not be tolerated and will result in an automatic ban from AirbusTeacher.\n
                3. No spam.\n
                4. No Political Discussions\n
                5. You must follow Discord ToS and Community Guidelines. More at https://discord.com/terms & https://discord.com/guidelines.\n
                If you see anything that is against the rules, please let our staff know.\n
                6. No NSFW Content.\n
                7. English only\n
                8. No advertisement without operator permission.\n
                9. Do not attempt to teach a student or another pilot something without quoting the source you're getting the information from. (Ex. FAR/AIM, PHAK, AOM, etc)\n
                \n
                INFORMATION\n
                This server is dedicated to all aviation enthusiasts, not just those that are only fans of the Airbus. If you have a question you'd like to get answered by a Certificated Flight Instructor, please direct it to the "ask-a-cfi" text channel.
                `);
                

        await message.channel.send({ embeds: [embed] }).catch(console.error);
    },
};

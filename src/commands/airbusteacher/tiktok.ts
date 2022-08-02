import Discord from 'discord.js';
import { CommandCategories, CommandDefinition } from '../index';
import { color } from '../../index';

export let whenedAvailable;

export const tiktok: CommandDefinition = {
    names: ['tiktok'],
    description: "Shows AirbusTeachers TikTok",
    category: CommandCategories.AIRBUSTEACHER,
    execute: async (message, args) => {
        const embed = new Discord.MessageEmbed()
            .setColor(color)
            .setTitle('What is AirbusTeachers TikTok')
            .setDescription(
                '@airbusteacher => https://www.tiktok.com/@airbusteacher'
            );

        await message.channel.send({ embeds: [embed] }).catch(console.error);

        setWhenedAvailable(true);
    },
};

export const setWhenedAvailable = (avail: boolean) => {
    whenedAvailable = avail;
};

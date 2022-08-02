import axios from 'axios';
import Discord from 'discord.js';
import { color } from '../..';
import { CommandCategories, CommandDefinition, createErrorEmbed } from '../index';

export const taf: CommandDefinition = {
    names: ['taf'],
    description: 'Displays the TAF for the given airport. (currently not working)',
    category: CommandCategories.GENERAL,
    execute: async (message, args) => {
        const icao = args[0];

        if (!icao) {
            await message.channel.send({ embeds: [createErrorEmbed('Please provide an ICAO code')] }).catch(console.error);
            return;
        }

        let embed = undefined;
        let shouldReturn = false;

        await axios
            .get(`https://avwx.rest/api/taf/${icao}`, {
                headers: {
                    Authorization: `BEARER ${process.env.AVWX_KEY}`,
                },
            })
            .then(async (response) => {
                const report = response.data;

                if (!report) {
                    await message.channel.send({ embeds: [createErrorEmbed(`No station available at the moment near ${icao.toUpperCase()}`)] }).catch(console.error);
                    shouldReturn = true;
                    return;
                }

                console.log(report);

                const { raw, units, station, wind_direction, wind_speed } = report;
                const time = `${report.time.dt.replace('T', ' ')}`;
                const end_time = `${report.end_time.dt.replace('T', ' ')}`;

                embed = new Discord.MessageEmbed()
                    .setColor(color)
                    .setTitle(`TAF for ${station}`)
                    .addFields(
                        { name: 'Raw Report', value: `${raw}` },
                        {
                            name: 'Readable Report',
                            value: 'Coming soon\n' +
                            `**Station:** ${station}\n` +
                            `**Observed at:** ${time}\n` +
                            `**End time:** ${end_time}\n`,
                            
                        },
                    )
                    .setFooter('Source: AVWX')
                    .setTimestamp();
            })
            .catch(async () => {
                await message.channel.send({ embeds: [createErrorEmbed('Please provide a valid ICAO code')] }).catch(console.error);
                shouldReturn = true;
            });

        if (shouldReturn) return;

        await message.channel.send({ embeds: [embed] }).catch(console.error);
    },
};

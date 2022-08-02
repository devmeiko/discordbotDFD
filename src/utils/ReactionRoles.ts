const ANNOUNCEMENTS_EMOJI = '📣';
const PROGRESS_EMOJI = '👨‍🎓';

export const addRole = {
    event: 'messageReactionAdd',
    execute: async (reaction, user) => {
        const roleChannel = await reaction.message.guild.channels.fetch('994242763736490056').catch(console.error);

        if (!roleChannel) {
            console.error('Error: Could not find channel #roles');
            return;
        }

        if (reaction.message.channel.id !== roleChannel.id) return;
        if (user.bot) return;

        const { roles } = reaction.message.guild;

        const announcementsRole = await roles.fetch('995435664634023946').catch(console.error);
        const progressRole = await roles.fetch('994374391372730388').catch(console.error);
        if (!announcementsRole) {
            console.error('Error: Could not find announcements role');
            return;
        }
        if (!progressRole) {
            console.error('Error: Could not find progress role');
            return;
        }

        const emoji = reaction.emoji.name;
        const member = await reaction.message.guild.members.fetch(user.id).catch(console.error);

        if (emoji === ANNOUNCEMENTS_EMOJI) {
            await member.roles.add(announcementsRole).catch(console.error);
        } else if (emoji === PROGRESS_EMOJI) {
            await member.roles.add(progressRole).catch(console.error);
        } 
    },
};
export const removeRole = {
    event: 'messageReactionRemove',
    execute: async (reaction, user) => {
        const roleChannel = await reaction.message.guild.channels.fetch('994242763736490056').catch(console.error);

        if (!roleChannel) {
            console.error('Error: Could not find channel #roles');
            return;
        }

        if (reaction.message.channel.id !== roleChannel.id) return;
        if (user.bot) return;

        const { roles } = reaction.message.guild;

        const announcementsRole = await roles.fetch('995435664634023946').catch(console.error);
        const progressRole = await roles.fetch('994374391372730388').catch(console.error);

        if (!announcementsRole) {
            console.error('Error: Could not find announcements role');
            return;
        }
        if (!progressRole) {
            console.error('Error: Could not find progress role');
            return;
        }

        const emoji = reaction.emoji.name;
        const member = await reaction.message.guild.members.fetch(user.id).catch(console.error);

        if (emoji === ANNOUNCEMENTS_EMOJI) {
            await member.roles.remove(announcementsRole).catch(console.error);
        } else if (emoji === PROGRESS_EMOJI) {
            await member.roles.remove(progressRole).catch(console.error);
        } 
    },
};

import Discord from 'discord.js';
import { tiktok } from './airbusteacher/tiktok';
import { faq } from './airbusteacher/faq';
import { help } from './general/help';
import { metar } from './general/metar';
import { taf } from './general/taf';
import { whoosh } from './fun/whoosh';
import { info } from './moderation/info';
import { rules } from './moderation/rules';
import { reactionroles } from './moderation/reactionroles';
import { purge } from './moderation/purge';
import { ban } from './moderation/ban';
import { unban } from './moderation/unban';
import { kick } from './moderation/kick';
import { dm } from './moderation/dm';
import { whois } from './moderation/whois';

export const enum CommandCategories {
    AIRBUSTEACHER = 'AIRBUSTEACHER',
    GENERAL = 'General',
    FUN = 'Fun',
    MODERATION = 'Moderation',
    SUPPORT = 'Support',
}
export type CommandDefinition = {
    names: string[];
    description: string;
    category: CommandCategories;
    permissions?: Discord.PermissionString[];
    execute: (message: Discord.Message, args: Array<string>) => Promise<any>;
};
export const createErrorEmbed = (description: string) => new Discord.MessageEmbed().setColor('#FF0000').setTitle('Error').setDescription(description);

export const commands: CommandDefinition[] = [
    tiktok,
    faq,
    help,
    metar,
    taf,
    whoosh,
    info,
    rules,
    reactionroles,
    purge,
    ban,
    unban,
    kick,
    dm,
    whois,
];

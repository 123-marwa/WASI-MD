let handler = async (m, { conn, usedPrefix, command}) => {
      let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
      if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`;
    
      let pp = (thumb);
      let more = String.fromCharCode(8206);
      let readMore = more.repeat(850); 
    
      let lkr;
      switch (command) {
        case 'menu3':
lkr = "*Get ready for the ride, here are your ticket options:*\n\n" +
"📚 *" + usedPrefix + "sdmenu* -ᵀʰᵉ ᶜᵒᵐᵐᵃⁿᵈˢ ʷʰⁱᶜʰ ᵐᵃʸ ʰᵉˡᵖ ʸᵒᵘ ᵗᵒ ⁱᵐᵖʳᵒᵛᵉ ˢᵒᵐᵉᵗʰⁱⁿᵍ ⁱⁿ ʸᵒᵘʳ ᵏⁿᵒʷˡᵉᵈᵍᵉ.\n\n" +
"🤖 *" + usedPrefix + "botmenu* - ᵀʰᵉ ᴮᵒᵗ'ˢ ˢᵉᶜʳᵉᵗ ᶜᵒⁿᵗʳᵒˡ ᵖᵃⁿᵉˡ. ᵂʰᵃᵗ'ˢ ʸᵒᵘʳ ᶜᵒᵐᵐᵃⁿᵈ, ᵒʰ ᵍʳᵉᵃᵗ ᵒⁿᵉ?\n\n" +
"♥️ *" + usedPrefix + "ownermenu* - ᵀʰᵉ ˢᵃᶜʳᵉᵈ ˢᶜʳᵒˡˡ ᵒⁿˡʸ ᶠᵒʳ ᵗʰᵉ ᶜʰᵒˢᵉⁿ ᵒⁿᵉ. ᵞᵉᵖ, ᵗʰᵃᵗ'ˢ ʸᵒᵘ, ᴮᵒˢˢ!\n\n" +
"🧬 *" + usedPrefix + "groupmenu* - ᴳʳᵒᵘᵖ ˢʰᵉⁿᵃⁿⁱᵍᵃⁿˢ ᶜᵉⁿᵗʳᵃˡ! ᵁⁿⁱᵗᵉ, ᶜʰᵃᵗ, ᶜᵒⁿᵠᵘᵉʳ!\n\n" +
"📥 *" + usedPrefix + "dlmenu* - 'ᴰᴸ' ˢᵗᵃⁿᵈˢ ᶠᵒʳ 'ᴰᵉˡⁱᶜⁱᵒᵘˢ ᴸᵒᵒᵗ'. ᶜᵒᵐᵉ ᵍʳᵃᵇ ʸᵒᵘʳ ᵍᵒᵒᵈⁱᵉˢ!\n\n" +
"🎉 *" + usedPrefix + "funmenu* - ᵀʰᵉ ᵇᵒᵗ'ˢ ᵖᵃʳᵗʸ ʰᵃᵗ. ᴳᵃᵐᵉˢ, ʲᵒᵏᵉˢ ᵃⁿᵈ ⁱⁿˢᵗᵃⁿᵗ ᴿᴼᶠᴸˢ. ᴸᵉᵗ'ˢ ᵍᵉᵗ ᵗʰⁱˢ ᵖᵃʳᵗʸ ˢᵗᵃʳᵗᵉᵈ!\n\n" +
"🎮 *" + usedPrefix + "gamemenu* - ᴱⁿᵗᵉʳ ᵗʰᵉ ᵍᵃᵐⁱⁿᵍ ᵃʳᵉⁿᵃ. ᴹᵃʸ ᵗʰᵉ ᵒᵈᵈˢ ᵇᵉ ᵉᵛᵉʳ ⁱⁿ ʸᵒᵘʳ ᶠᵃᵛᵒʳ!\n\n" +
"🎨 *" + usedPrefix + "stickermenu* - ᴬ ʳᵃⁱⁿᵇᵒʷ ᵒᶠ ˢᵗⁱᶜᵏᵉʳˢ ᶠᵒʳ ʸᵒᵘʳ ⁱⁿⁿᵉʳ ᵃʳᵗⁱˢᵗ. ᴹᵃᵏᵉ ʸᵒᵘʳ ᶜʰᵃᵗˢ ᵖᵒᵖ!\n\n" +
"🧰 *" + usedPrefix + "toolmenu* - ᵞᵒᵘʳ ʰᵃⁿᵈʸ-ᵈᵃⁿᵈʸ ᵗᵒᵒˡᵏⁱᵗ. ᵂʰᵃᵗ'ˢ ʸᵒᵘʳ ᵖⁱᶜᵏ, ᵍᵉⁿⁱᵘˢ?\n\n" +
"🎩 *" + usedPrefix + "logomenu* - ᶜʳᵉᵃᵗᵉ ᵃ ˡᵒᵍᵒ ᵗʰᵃᵗ ˢᶜʳᵉᵃᵐˢ ᵞᴼᵁ. ᴼʳ ʷʰⁱˢᵖᵉʳˢ. ᵞᵒᵘ ᶜʰᵒᵒˢᵉ ᵗʰᵉ ᵛᵒˡᵘᵐᵉ.";
break;
        
        

        case 'botmenu':
          lkr = `┌────•✧𝘽𝙊𝙏_𝙈𝙀𝙉𝙐✧•────┐
┊ ꒰ ͜͡➸ ${usedPrefix}𝙋𝙞𝙣𝙜 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙐𝙥𝙩𝙞𝙢𝙚 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝘽𝙤𝙩/𝙋𝙧𝙞𝙣𝙘𝙚 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙊𝙬𝙣𝙚𝙧 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙄𝙣𝙛𝙤𝙗𝙤𝙩 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙂𝙧𝙤𝙪𝙥𝙨 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝘽𝙡𝙤𝙘𝙠𝙡𝙞𝙨𝙩 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙇𝙞𝙨𝙩𝙥𝙧𝙚𝙢 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙂𝙜𝙥 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙂𝙥𝙥𝙧𝙞𝙣𝙘𝙚 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙈𝙚𝙣𝙪/𝙃𝙚𝙡𝙥/𝙃 ✧
└───── •✧✧✧✧✧✧• ─────┘`; // Your bot menu message here
          break;
        case 'ownermenu':
          lkr = `┌────•✧𝙊𝙒𝙉𝙀𝙍 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎✧•────┐
┊ ꒰ ͜͡➸ ${usedPrefix}𝘽𝙖𝙣𝙘𝙝𝙖𝙩 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙐𝙣𝙗𝙖𝙣𝙘𝙖𝙝𝙩 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝘽𝙖𝙣𝙪𝙨𝙚𝙧 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙐𝙣𝙗𝙖𝙣𝙐𝙨𝙚𝙧 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙋𝙧𝙚𝙢𝙡𝙞𝙨𝙩 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝘽𝙖𝙣𝙡𝙞𝙨𝙩 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝘼𝙙𝙙𝙥𝙧𝙚𝙢 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝘽𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝘽𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙜𝙘 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙅𝙤𝙞𝙣 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙩𝙭 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙎𝙚𝙩𝙥𝙥𝙗𝙤𝙩 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙎𝙚𝙩𝙥𝙧𝙚𝙛𝙞𝙭 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙍𝙚𝙨𝙚𝙩𝙥𝙧𝙚𝙛𝙞𝙭 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙂𝙚𝙩𝙛𝙞𝙡𝙚 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙂𝙚𝙩𝙥𝙡𝙪𝙜𝙞𝙣 ✧
└───── •✧✧✧✧✧✧✧✧✧✧• ─────┘`; // 
          break;
          case 'groupmenu':
          lkr = `┌────•✧𝙂𝙍𝙊𝙐𝙋_𝙈𝙀𝙉𝙐✧•────┐
┊ ꒰ ͜͡➸ ${usedPrefix}𝙆𝙞𝙘𝙠      𝙩𝙖𝙜/𝙨𝙡𝙞𝙙𝙚
┊ ꒰ ͜͡➸ ${usedPrefix}𝙋𝙧𝙤𝙢𝙤𝙩𝙚   𝙩𝙖𝙜/𝙨𝙡𝙞𝙙𝙚
┊ ꒰ ͜͡➸ ${usedPrefix}𝘿𝙚𝙢𝙤𝙩𝙚    𝙩𝙖𝙜/𝙨𝙡𝙞𝙙𝙚
┊ ꒰ ͜͡➸ ${usedPrefix}𝙍𝙚𝙨𝙚𝙩𝙡𝙞𝙣𝙠   𝙧𝙚𝙫𝙤𝙠𝙚 𝙜𝙘𝙡𝙞𝙣𝙠
┊ ꒰ ͜͡➸ ${usedPrefix}𝙄𝙣𝙛𝙤𝙜𝙧𝙤𝙪𝙥   𝙜𝙘 𝙞𝙣𝙛𝙤
┊ ꒰ ͜͡➸ ${usedPrefix}𝙇𝙞𝙣𝙠        𝙘𝙪𝙧𝙧𝙚𝙣𝙩 𝙜𝙘𝙡𝙞𝙣𝙠
┊ ꒰ ͜͡➸ ${usedPrefix}𝙎𝙚𝙩𝙥𝙥      𝙘𝙪𝙧𝙧𝙚𝙣𝙩 𝙜𝙘 𝙥𝙧𝙤𝙛𝙞𝙡𝙚
┊ ꒰ ͜͡➸ ${usedPrefix}𝙎𝙚𝙩𝙣𝙖𝙢𝙚    𝙜𝙘 𝙣𝙖𝙢𝙚
┊ ꒰ ͜͡➸ ${usedPrefix}𝙎𝙚𝙩𝙙𝙚𝙨𝙘     𝙜𝙘 𝙙𝙚𝙨𝙘𝙧𝙞𝙥𝙩𝙞𝙤𝙣
┊ ꒰ ͜͡➸ ${usedPrefix}𝙎𝙚𝙩𝙬𝙚𝙡𝙘𝙤𝙢𝙚  𝙬𝙚𝙡𝙘𝙤𝙢𝙚 𝙢𝙨𝙜
┊ ꒰ ͜͡➸ ${usedPrefix}𝙎𝙚𝙩𝙗𝙮𝙚      𝙗𝙮𝙚 𝙢𝙨𝙜
┊ ꒰ ͜͡➸ ${usedPrefix}𝙃𝙞𝙙𝙚𝙩𝙖𝙜     𝙩𝙖𝙜 𝙖𝙣𝙮𝙩𝙝𝙞𝙣𝙜 
┊ ꒰ ͜͡➸ ${usedPrefix}𝙒𝙖𝙧𝙣       𝙬𝙖𝙧𝙣 𝙪𝙨𝙚𝙧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙐𝙣𝙬𝙖𝙧𝙣     𝙪𝙣𝙬𝙖𝙧 𝙪𝙨𝙚𝙧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙂𝙧𝙤𝙪𝙥      𝙤𝙥𝙚𝙣/𝙘𝙡𝙤𝙨𝙚
┊ ꒰ ͜͡➸ ${usedPrefix}𝙀𝙣𝙖𝙗𝙡𝙚      𝙛𝙤𝙧 𝙘𝙢𝙙𝙨
┊ ꒰ ͜͡➸${usedPrefix}𝙊𝙉/𝙊𝙁𝙁      𝙛𝙤𝙧 𝙘𝙢𝙙𝙨
└───── •✧✧✧✧✧✧✧• ──────┘`; // 
          break;
          case 'downloadermenu':
            case 'dlmenu' :
          lkr = `┌────•✧𝘿𝙇 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎✧•────┐
┊ ꒰ ͜͡➸ ${usedPrefix}𝙋𝙡𝙖𝙮     𝙉𝙖𝙖𝙩...
┊ ꒰ ͜͡➸ ${usedPrefix}𝙋𝙡𝙖𝙮2    𝙉𝙖𝙖𝙩...
┊ ꒰ ͜͡➸ ${usedPrefix}𝙄𝙜      𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙁𝙗       𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙄𝙢𝙜      𝙉𝙖𝙢𝙚
┊ ꒰ ͜͡➸ ${usedPrefix}𝙂𝙙𝙧𝙞𝙫𝙚     𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙂𝙞𝙩𝙘𝙡𝙤𝙣𝙚    𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙞𝙜𝙨𝙩𝙖𝙡𝙠      𝙐𝙨𝙚𝙧𝙣𝙖𝙢𝙚
┊ ꒰ ͜͡➸ ${usedPrefix}𝙈𝙚𝙙𝙞𝙖𝙛𝙞𝙧𝙚     𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙈𝙛𝙞𝙧𝙚      𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙏𝙞𝙠𝙩𝙤𝙠.     𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙏𝙞𝙠𝙩𝙤𝙠𝙨𝙩𝙖𝙡𝙠     𝙐𝙨𝙚𝙧𝙣𝙖𝙢𝙚
┊ ꒰ ͜͡➸ ${usedPrefix}𝙏𝙬𝙞𝙩𝙩𝙚𝙧     𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙔𝙩𝙨      𝙉𝙖𝙢𝙚/𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙔𝙩𝙢𝙥4    𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙔𝙩𝙢𝙥3    𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙔𝙩𝙖      𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙎𝙤𝙣𝙜    𝙉𝙖𝙢𝙚
┊ ꒰ ͜͡➸ ${usedPrefix}𝙑𝙞𝙙𝙚𝙤    𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝘼𝙥𝙠     𝙉𝙖𝙢𝙚/𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙋𝙞𝙣𝙩𝙚𝙧𝙚𝙨𝙩    𝙐𝙍𝙇
└───── •✧✧✧✧✧✧✧✧✧• ─────┘`; // 
                  
          break;
          case 'sdmenu':
          lkr = `┌────•✧STUDY COMMɑNDS✧•────┐
┊ ꒰ ͜͡➸${usedPrefix}QURAN ... .Sᴜʀᴀʜ ɴᴀᴍᴇ/ɴᴜᴍʙᴇʀ
┊ ꒰ ͜͡➸${usedPrefix}GPT ...  ʏᴏᴜʀ ǫᴜᴇʀʏ
┊ ꒰ ͜͡➸${usedPrefix}ɑi ...  ʏᴏᴜʀ ǫᴜᴇʀʏ
┊ ꒰ ͜͡➸${usedPrefix}DEFINE ...  ᴛʏᴘᴇ ᴡᴏʀᴅ
┊ ꒰ ͜͡➸${usedPrefix}ELEMET ...  ᴇʟᴇᴍᴇɴᴛ ɴᴀᴍᴇ
┊ ꒰ ͜͡➸${usedPrefix}QUOTE ... ᴊᴜsᴛ ᴛʏᴘᴇ
└───── •✧✧✧✧✧✧✧✧✧✧• ─────┘`; // 
                  
          break;
          case 'funmenu':
          lkr = `┏━━━ʕ•𝙁𝙐𝙉 𝙈𝙀𝙉𝙐•ʔ━━━┓
⎪⌲🔖🇵🇰 _${usedPrefix}character_
⎪⌲🔖🇵🇰 _${usedPrefix}truth_
⎪⌲🔖🇵🇰 _${usedPrefix}dare_
⎪⌲🔖🇵🇰 _${usedPrefix}flirt_
⎪⌲🔖🇵🇰 _${usedPrefix}gay_
⎪⌲🔖🇵🇰 _${usedPrefix}shayeri_
⎪⌲🔖🇵🇰 _${usedPrefix}ship_
⎪⌲🔖🇵🇰 _${usedPrefix}waste_
⎪⌲🔖🇵🇰 _${usedPrefix}simpcard_
⎪⌲🔖🇵🇰 _${usedPrefix}hornycard_
⎪⌲🔖🇵🇰 _${usedPrefix}ytcomment_
⎪⌲🔖🇵🇰 _${usedPrefix}stupid_
⎪⌲🔖🇵🇰 _${usedPrefix}lolicon_
┗━━━ʕ•💌•ʔ━━━┛`; // 
   
          break;
          case 'gamemenu':
          lkr = `┏━━━ʕ•𝙂𝘼𝙈𝙀 𝙈𝙀𝙉𝙐•ʔ━━━┓
⎪⌲🎮 _${usedPrefix}tictactoe_
⎪⌲🎮 _${usedPrefix}delttt_
⎪⌲🎮 _${usedPrefix}math_
⎪⌲🎮 _${usedPrefix}math answer_
⎪⌲🎮 _${usedPrefix}ppt_
⎪⌲🎮 _${usedPrefix}slot_
┗━━━ʕ•💌•ʔ━━━┛`; // 
          break;
          case 'stickermenu':
          lkr = `┏━━━ʕ•𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙈𝙀𝙉𝙐•ʔ━━━┓
⎪⌲🔖🇵🇰 _${usedPrefix}sticker_
⎪⌲🔖🇵🇰 _${usedPrefix}take_
⎪⌲🔖🇵🇰 _${usedPrefix}scircle_
⎪⌲🔖🇵🇰 _${usedPrefix}smaker_
⎪⌲🔖🇵🇰 _${usedPrefix}sremovebg_
⎪⌲🔖🇵🇰 _${usedPrefix}getsticker_
⎪⌲🔖🇵🇰 _${usedPrefix}emojimix_
⎪⌲🔖🇵🇰 _${usedPrefix}toimg_
⎪⌲🔖🇵🇰 _${usedPrefix}tovid_
⎪⌲🔖🇵🇰 _${usedPrefix}ttp_
⎪⌲🔖🇵🇰 _${usedPrefix}ttp2_
⎪⌲🔖🇵🇰 _${usedPrefix}ttp3_
⎪⌲🔖🇵🇰 _${usedPrefix}ttp4_
⎪⌲🔖🇵🇰 _${usedPrefix}ttp5_
⎪⌲🔖🇵🇰 _${usedPrefix}attp_
⎪⌲🔖🇵🇰 _${usedPrefix}attp2_
⎪⌲🔖🇵🇰 _${usedPrefix}attp3_
┗━━━ʕ•💌•ʔ━━━┛`; 
          break;
          case 'toolmenu':
          lkr = `┏━━━ʕ•𝙏𝙊𝙊𝙇𝙎 𝙈𝙀𝙉𝙐•ʔ━━━┓
⎪⌲🔖🇵🇰 _${usedPrefix}autosticker_
⎪⌲🔖🇵🇰 _${usedPrefix}pdf_
⎪⌲🔖🇵🇰 _${usedPrefix}whatmusic_
⎪⌲🔖🇵🇰 _${usedPrefix}calc_
⎪⌲🔖🇵🇰 _${usedPrefix}google_
⎪⌲🔖🇵🇰 _${usedPrefix}lyrics_
⎪⌲🔖🇵🇰 _${usedPrefix}readmore_
⎪⌲🔖🇵🇰 _${usedPrefix}ssweb_
⎪⌲🔖🇵🇰 _${usedPrefix}tts_
⎪⌲🔖🇵🇰 _${usedPrefix}translate_
⎪⌲🔖🇵🇰 _${usedPrefix}tourl_
⎪⌲🔖🇵🇰 _${usedPrefix}wikipedia_
⎪⌲🔖🇵🇰 _${usedPrefix}nowa_
⎪⌲🔖🇵🇰 _${usedPrefix}qrmaker_
⎪⌲🔖🇵🇰 _${usedPrefix}readqr_
⎪⌲🔖🇵🇰 _${usedPrefix}styletext_
⎪⌲🔖🇵🇰 _${usedPrefix}weather_
⎪⌲🔖🇵🇰 _${usedPrefix}siri_
⎪⌲🔖🇵🇰 _${usedPrefix}alexa_
⎪⌲🔖🇵🇰 _${usedPrefix}dalle_
⎪⌲🔖🇵🇰 _${usedPrefix}wa_
⎪⌲🔖🇵🇰 _${usedPrefix}itunes_
⎪⌲🔖🇵🇰 _${usedPrefix}tinyurl/shorturl_
⎪⌲🔖🇵🇰 _${usedPrefix}readvo_
⎪⌲🔖🇵🇰 _${usedPrefix}true_
┗━━━━━━━ʕ•🧬•ʔ━━━━━━┛`; // 
          break;
          case 'nsfwmenu':
          lkr = `use command ${usedPrefix}nsfw`; // 
          break;
          case 'logomenu':
          lkr = `use ${usedPrefix}logo to see all options \ngfx cmd upto 12`; // 
          break;
        default:
          lkr = `Invalid command. Type ${usedPrefix}list to see available options.`;
      }
    
      conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, m, false, { mentions: [who] });
    
      let done = '✅';
      m.react(done);
    };
    
    handler.help = ['menu3', 'sdmenu', 'botmenu', 'ownermenu', 'groupmenu', 'dlmenu', 'downloadermenu', 'economymenu', 'funmenu', 'gamemenu', 'stickermenu', 'nsfwmenu', 'logomenu', 'toolmenu'];
    handler.tags = ['main'];
    handler.command = ['menu3', 'sdmenu', 'botmenu', 'ownermenu', 'groupmenu', 'dlmenu', 'downloadermenu', 'economymenu', 'funmenu', 'gamemenu', 'stickermenu', 'nsfwmenu', 'logomenu', 'toolmenu'];
    
    export default handler

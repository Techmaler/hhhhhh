const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "📥┃𝐖𝐞𝐥𝐜𝐨𝐦┃📥";
const byeChannelName = "📤┃𝐆𝐨𝐨𝐝𝐛𝐲𝐞┃📤";
const welcomeChannelComment = "어서오세요.";
const byeChannelComment = "안녕히가세요.";

client.on('ready', () => {
  console.log('켰다.');
  client.user.setPresence({ game: { name: '짱귀욤 하은이에욤!' }, status: 'online' })
});


client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == ""));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
    if(message.content === '&출근') {
      let img = 'https://cdn.discordapp.com/attachments/762183389456367616/762191677527293972/unknown.png'; // 임베드에 나오는 사진
      let embed = new Discord.RichEmbed()
        .setTitle('모든 문의 받습니다.')// 한번 켜보시고 테스트 하면서 원하는대로 수정하심됩니다
        .setThumbnail(img)
        .setDescription(` <@${message.author.id}> ` + '님 , ** 정상적으로 출근하셨습니다 **') //  <@${message.author.id}> 이 구문은 사용자를 태그하는 구문입니다 손대시면 오류뜹니다 , + 뒤에 있는건 수정하셔도 됩니다 
        .setTimestamp()
        .setFooter('하은봇 팜매점', img) // 제작자 ( 수정금지 )
  
      message.channel.send(embed)
    }
    if(message.content === '&퇴근') {
      let img = 'https://cdn.discordapp.com/attachments/762183389456367616/762191677527293972/unknown.png'; // 임베드에 나오는 사진
      let embed = new Discord.RichEmbed()
        .setTitle('문의가 불가능합니다')// 한번 켜보시고 테스트 하면서 원하는대로 수정하심됩니다
        .setThumbnail(img)
        .setDescription(` <@${message.author.id}> ` + '님 , ** 정상적으로 퇴근하셨습니다 **')//  <@${message.author.id}> 이 구문은 사용자를 태그하는 구문입니다 손대시면 오류뜹니다, + 뒤에 있는건 수정하셔도 됩니다 
        .setTimestamp()
        .setFooter('하은봇 팜매점', img) // 제작자 ( 수정금지 )
  
      message.channel.send(embed)
    }
    if(message.content === '&임시퇴근') {
      let img = 'https://cdn.discordapp.com/attachments/762183389456367616/762191677527293972/unknown.png';
      let embed = new Discord.RichEmbed()
        .setTitle('문의가 가능합니다')
        .setThumbnail(img)
        .setDescription(` <@${message.author.id}> ` + '님 , ** 정상적으로 임시퇴근하셨습니다 **')//  <@${message.author.id}> 이 구문은 사용자를 태그하는 구문입니다 손대시면 오류뜹니다
        .addField('** 문의확인시 답변해드리겠습니다 . **', ' ** 문의 남겨주세요 **  ') // 한번 켜보시고 테스트 하면서 원하는대로 수정하심됩니다
        .setTimestamp()
        .setFooter('하은봇 팜매점', img)// 제작자 ( 수정금지 )
  
      message.channel.send(embed)
    }
    if(message.content === '&휴가') {
      let img = 'https://cdn.discordapp.com/attachments/762183389456367616/762191677527293972/unknown.png'; // 임베드에 나오는 사진
      let embed = new Discord.RichEmbed()
        .setTitle('휴가중 입니다.')// 한번 켜보시고 테스트 하면서 원하는대로 수정하심됩니다
        .setThumbnail(img)
        .setDescription(` <@${message.author.id}> ` + '님 , ** 정상적으로 휴가 가셨습니다. **')//  <@${message.author.id}> 이 구문은 사용자를 태그하는 구문입니다 손대시면 오류뜹니다, + 뒤에 있는건 수정하셔도 됩니다 
        .setTimestamp()
        .setFooter('하은봇 판매점', img) // 제작자 ( 수정금지 )
  
      message.channel.send(embed)
    }
});

client.on('message', (message) => {
    if(message.author.bot) return;
  
    if(message.content == 'ping') {
      return message.reply('pong');
    }
    if(message.content == '&보기') {
      let img = 'https://cdn.discordapp.com/attachments/762183389456367616/762191677527293972/unknown.png';
      let embed = new Discord.RichEmbed()
        .setTitle('하은봇 보기')
        .setURL('http://www.naver.com')
        .setAuthor('Apple', img, 'http://www.naver.com')
        .setThumbnail(img)
        .addBlankField()
        .addField('귀염둥이 하은봇', '하은봇 판매점')
        .addField('짱귀욤 하은봇', '싸고 좋습니다', true)
        .addField('엄청 기여운 하은봇', '24시간 호스팅', true)
        .addField('엄청엄청 사랑스러운 하은봇', '어서와요', true)
        .addField('하은하은 귀염둥이 하은봇', '첫 구매시 할인 들어갑니돠아~~!')
        .addBlankField()
        .setTimestamp()
        .setFooter('Apple 만듬', img)
  
      message.channel.send(embed)
    } else if(message.content == '&도움') {
      let helpImg = 'https://cdn.discordapp.com/attachments/762183389456367616/762191677527293972/unknown.png';
      let commandList = [
        {name: '&도움', desc: '도움말을 펼칩니다.'},
        {name: '&참여', desc: '이벤트 참여를 합니다.'},
        {name: '&보기', desc: '귀염둥이 하은봇 정보를 봅니다.'},
        {name: '&전체공지', desc: 'dm으로 전체 공지 보내기'},
        {name: '&전체공지2', desc: 'dm으로 전체 embed 형식으로 공지 보내기'},
        {name: '&청소', desc: '텍스트 지움'},
        {name: '&초대코드', desc: '해당 채널의 초대 코드 표기'},
        {name: '&초대코드2', desc: '봇이 들어가있는 모든 채널의 초대 코드 표기'},
      ];
      let commandStr = '';
      let embed = new Discord.RichEmbed()
        .setAuthor('Help of 짱귀욤 하은봇', helpImg)
        .setColor('#186de6')
        .setFooter(`짱귀욤 하은봇`)
        .setTimestamp()
      
      commandList.forEach(x => {
        commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
      });
  
      embed.addField('Commands: ', commandStr);
  
      message.channel.send(embed)
    } else if(message.content == '&초대코드2') {
      client.guilds.array().forEach(x => {
        x.channels.find(x => x.type == 'text').createInvite({maxAge: 0}) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
          .then(invite => {
            message.channel.send(invite.url)
          })
          .catch((err) => {
            if(err.code == 50013) {
              message.channel.send('**'+x.channels.find(x => x.type == 'text').guild.name+'** 채널 권한이 없어용!')
            }
          })
      });
    } else if(message.content == '&초대코드') {
      if(message.channel.type == 'dm') {
        return message.reply('dm에서 사용할 수 없는 명령어에용!');
      }
      message.guild.channels.get(message.channel.id).createInvite({maxAge: 0}) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
        .then(invite => {
          message.channel.send(invite.url)
        })
        .catch((err) => {
          if(err.code == 50013) {
            message.channel.send('**'+message.guild.channels.get(message.channel.id).guild.name+'** 채널 권한이 없어용!')
          }
        })
    } else if(message.content.startsWith('&전체공지2')) {
      if(checkPermission(message)) return
      if(message.member != null) { // 채널에서 공지 쓸 때
        let contents = message.content.slice('&전체공지2'.length);
        let embed = new Discord.RichEmbed()
          .setAuthor('공지 of 짱귀욤 하은봇')
          .setColor('#186de6')
          .setFooter(`귀염둥이 하은봇`)
          .setTimestamp()
    
        embed.addField('공지: ', contents);
    
        message.member.guild.members.array().forEach(x => {
          if(x.user.bot) return;
          x.user.send(embed)
        });
    
        return message.reply('공지를 전송했어용!');
      } else {
        return message.reply('채널에서 실행해주세용!');
      }
    } else if(message.content.startsWith('&전체공지')) {
      if(checkPermission(message)) return
      if(message.member != null) { // 채널에서 공지 쓸 때
        let contents = message.content.slice('&전체공지'.length);
        message.member.guild.members.array().forEach(x => {
          if(x.user.bot) return;
          x.user.send(`<@${message.author.id}> ${contents}`);
        });
    
        return message.reply('공지를 전송했어용!');
      } else {
        return message.reply('채널에서 실행해주세용!');
      }
    } else if(message.content.startsWith('&청소')) {
      if(message.channel.type == 'dm') {
        return message.reply('dm에서 사용할 수 없는 명령어에용!');
      }
      
      if(message.channel.type != 'dm' && checkPermission(message)) return
  
      var clearLine = message.content.slice('&청소 '.length);
      var isNum = !isNaN(clearLine)
  
      if(isNum && (clearLine <= 0 || 100 < clearLine)) {
        message.channel.send("1부터 100까지의 숫자만 입력해주세용!")
        return;
      } else if(!isNum) { 
        if(message.content.split('<@').length == 2) {
          if(isNaN(message.content.split(' ')[2])) return;
  
          var user = message.content.split(' ')[1].split('<@!')[1].split('>')[0];
          var count = parseInt(message.content.split(' ')[2])+1;
          let _cnt = 0;
  
          message.channel.fetchMessages().then(collected => {
            collected.every(msg => {
              if(msg.author.id == user) {
                msg.delete();
                ++_cnt;
              }
              return !(_cnt == count);
            });
          });
        }
      } else {
        message.channel.bulkDelete(parseInt(clearLine)+1)
          .then(() => {
            AutoMsgDelete(message, `<@${message.author.id}> ` + parseInt(clearLine) + "개의 메시지를 삭제했어용! (이 메세지는 잠시 후에 사라져용)");
          })
          .catch(console.error)
      }
    }
  });
  
  function checkPermission(message) {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
      message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 않아용!")
      return true;
    } else {
      return false;
    }
  }
  
  function changeCommandStringLength(str, limitLen = 8) {
    let tmp = str;
    limitLen -= tmp.length;
  
    for(let i=0;i<limitLen;i++) {
        tmp += ' ';
    }
  
    return tmp;
  }
  
  async function AutoMsgDelete(message, str, delay = 3000) {
    let msg = await message.channel.send(str);
  
    setTimeout(() => {
      msg.delete();
    }, delay);
  }

client.on('message', (message) => {
    if(message.author.bot) return;
  
    if(message.content == '&참여') {
      return message.reply('이벤트 참여가 완료되었습니다. 참여해주셔서 감사합니다.');
    }
  
    if (message.content === 'embed') {
      let embed = new Discord.RichEmbed()
      .setColor('#000000')
      .setTitle('이벤트 참여')
      .setDescription('이벤트 참여가 완료되었습니다. 참여해주셔서 감사합니다.')
      .addField('made by bliss')
      message.channel.send(embed)
  }});

  
  client.login(token);
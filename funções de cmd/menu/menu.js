const fs = require("fs")
const chalk = require("chalk")


const menu = (prefix, pushname, numerodn, NomeDoBot,  wame) => {

return `
╭═•ೋ•『 𝐈𝐍𝐅𝐎✰𝐁𝐎𝐓 』
╎│⋟ 𝑼𝒔𝒖𝒂𝒓𝒊𝒐 ${pushname}
╎│⋟ 𝑫𝒖𝒆ñ𝒐 wa.me/51925814988
╎│⋟ 𝑩𝒐𝒕⧽ ${NomeDoBot}
╎│⋟ 𝑷𝒓𝒆𝒇𝒊𝒙𝒐『 ${prefix} 』
╎│⋟ 𝑽𝒆𝒓𝒔𝒊ó𝒏 3.5
╰══•ೋ•✧๑•๑✧•ೋ•═╯

╭══•ೋ•『 𝐑𝐄𝐃𝐄𝐒 』
╎│⋟ 𝑰𝒏𝒔𝒕𝒂𝒈𝒓𝒂𝒎⧽ @null
╎│⋟ ⇘ 𝑺𝒊𝒕𝒊𝒐 𝒘𝒆𝒃 𝒐𝒇𝒊𝒄𝒊𝒂𝒍 𝒅𝒆 𝑵𝒆𝒛𝒖𝒌𝒐-𝑩𝒐𝒕
╎│⋟ https://linktr.ee/NEZUKO_OFC
╰══•ೋ•✧๑•๑✧•ೋ•═╯

╭══•ೋ•『️️ 𝑵𝑼𝑬𝑽𝑶 』
╎│⋟ ${prefix}americanas [nome]
╎│⋟ ${prefix}amazon [nome]
╎│⋟ ${prefix}submarino [nome]
╎│⋟ ${prefix}noticias [nome]
╎│⋟ ${prefix}meme2 
╎│⋟ ${prefix}meme3
╎│⋟ ${prefix}memevid
╎│⋟ ${prefix}pornovid
╎│⋟ ${prefix}recrutar
╎│⋟ ${prefix}anotar [texto]
╎│⋟ ${prefix}tirar_nota
╎│⋟ ${prefix}notas
╎│⋟ ${prefix}validar-key
╎│⋟ ${prefix}pgt_desafio
╎│⋟ ${prefix}speedtest
╎│⋟ ${prefix}happymod2
╎│⋟ ${prefix}apkmody
╎│⋟ ${prefix}filmeapi
╎│⋟ ${prefix}nerding
╎│⋟ ${prefix}wikipedia2
╎│⋟ ${prefix}petrobas
╎│⋟ ${prefix}gprandom
╎│⋟ ${prefix}genshin
╎│⋟ ${prefix}frasemae
╎│⋟ ${prefix}signo
╰══•ೋ•✧๑•๑✧•ೋ•══╯

╭══•ೋ•『️️ 𝑴𝑰𝑬𝑴𝑩𝑹𝑶𝑺 』
╎│⋟ ${prefix}convite [link do gp]
╎│⋟ ${prefix}conselhobiblico 
╎│⋟ ${prefix}ping2
╎│⋟ ${prefix}perfil
╎│⋟ ${prefix}gtts pt [texto] 
╎│⋟ ${prefix}metadinha
╎│⋟ ${prefix}metadinha2
╎│⋟ ${prefix}metadinha3
╎│⋟ ${prefix}metadinha4
╎│⋟ ${prefix}videopralink [marcar vídeo] 
╎│⋟ ${prefix}gerarlink 
╎│⋟ ${prefix}level
╎│⋟ ${prefix}ranklevel
╎│⋟ ${prefix}correio
╎│⋟ ${prefix}letra [nome da música]
╎│⋟ ${prefix}enquete 
╎│⋟ ${prefix}suic 
╎│⋟ ${prefix}sn [sua pergunta]
╎│⋟ ${prefix}semoji
╎│⋟ ${prefix}creditos
╎│⋟ ${prefix}donate
╎│⋟ ${prefix}git
╎│⋟ ${prefix}wa.me
╎│⋟ ${prefix}audiomeme
╎│⋟ ${prefix}quando [sua pergunta]
╎│⋟ ${prefix}planos
╎│⋟ ${prefix}live
╎│⋟ ${prefix}figs
╎│⋟ ${prefix}rename2
╎│⋟ ${prefix}stickeralet
╎│⋟ ${prefix}checarprem
╎│⋟ ${prefix}cantada
╎│⋟ ${prefix}cantada2
╎│⋟ ${prefix}fuckmylife
╎│⋟ ${prefix}frase
╎│⋟ ${prefix}frase2
╎│⋟ ${prefix}frase3
╎│⋟ ${prefix}outroshitpost
╎│⋟ ${prefix}memesdasam
╎│⋟ ${prefix}shitpost
╎│⋟ ${prefix}recadoprowhatsapp
╎│⋟ ${prefix}frasecriativas
╎│⋟ ${prefix}frasebonita
╎│⋟ ${prefix}membros
╎│⋟ ${prefix}qrcode
╎│⋟ ${prefix}covid2
╎│⋟ ${prefix}gamer [nome do jogo]
╎│⋟ ${prefix}gato
╎│⋟ ${prefix}fig-gato
╎│⋟ ${prefix}doge
╎│⋟ ${prefix}ebase
╎│⋟ ${prefix}debase
╰══•ೋ•✧๑•๑✧•ೋ•══╯


╭════•ೋ•『 ️️𝐌𝐄𝐍𝐔𝐒 』
╎│⋟ ${prefix}menulist
╎│⋟ ${prefix}menulogos
╎│⋟ ${prefix}menuadm
╎│⋟ ${prefix}menudono
╎│⋟ ${prefix}infodono
╎│⋟ ${prefix}menuporno
╎│⋟ ${prefix}menufigurinhas
╎│⋟ ${prefix}menuedit
╎│⋟ ${prefix}menuedit2
╎│⋟ ${prefix}menunaruto
╎│⋟ ${prefix}menumusica
╎│⋟ ${prefix}menu-pesquisas
╎│⋟ ${prefix}menuefeito
╎│⋟ ${prefix}imitações
╎│⋟ ${prefix}funções-grupo
╎│⋟ ${prefix}menuanime
╎│⋟ ${prefix}menu-anime
╎│⋟ ${prefix}menu-hentai
╎│⋟ ${prefix}menutits
╎│⋟ ${prefix}menupack
╎│⋟ ${prefix}menugeradores
╎│⋟ ${prefix}menufilme
╎│⋟ ${prefix}menuserie
╎│⋟ ${prefix}menutravas
╎│⋟ ${prefix}menugerar
╎│⋟ ${prefix}geradores
╎│⋟ ${prefix}banmtd
╎│⋟ ${prefix}metodos
╎│⋟ ${prefix}bases
╎│⋟ ${prefix}menupuxadas
╎│⋟ ${prefix}menuwallpapers
╎│⋟ ${prefix}figu-curso
╎│⋟ ${prefix}menuart
╎│⋟ ${prefix}edits
╎│⋟ ${prefix}menuimunes
╎│⋟ ${prefix}menuwallpaper
╰══•ೋ•✧๑•๑✧•ೋ•══╯


╭═•ೋ•️️『 𝐒𝐔𝐏𝐎𝐑𝐓𝐄✰𝐁𝐎𝐓 』
╎│⋟ ${prefix}bug
╎│⋟ ${prefix}convite
╎│⋟ ${prefix}criador
╎│⋟ ${prefix}sugestão 
╎│⋟ ${prefix}perfil
╎│⋟ ${prefix}suporte
╎│⋟ ${prefix}avalie
╎│⋟ ${prefix}avaliar
╎│⋟ ${prefix}creditos
╎│⋟ ${prefix}donate
╰══• 𝐍𝐄𝐙𝐔𝐊𝐎-𝐁𝐎𝐓 •═╯

╭═•ೋ•『 𝐌𝐄𝐍𝐔✰𝑱𝑼𝑬𝑮𝑶𝑺 』
╎│⋟ ${prefix}pix2
╎│⋟ ${prefix}saldo
╎│⋟ ${prefix}apostar
╎│⋟ ${prefix}cassino
╎│⋟ ${prefix}cassino2
╎│⋟ ${prefix}tac
╎│⋟ ${prefix}round6
╎│⋟ ${prefix}rr
╎│⋟ ${prefix}minerar
╎│⋟ ${prefix}akinator
╎│⋟ ${prefix}resetaki
╎│⋟ ${prefix}jogodaforca
╎│⋟ ${prefix}jogodavelha
╎│⋟ ${prefix}resetarvelha
╰══•ೋ•✧๑•๑✧•ೋ•══╯


╭═•ೋ•️️『 𝑺𝑰𝑵✰𝑷𝑹𝑬𝑭𝑰𝑿 』
╎│⋟ nezuko fechargp
╎│⋟ nezuko abrirgp
╎│⋟ nezuko ban
╎│⋟ nezuko reviver
╎│⋟ nezuko promover
╎│⋟ nezuko rebaixar
╎│⋟ nezuko limpa o chat ai
╎│⋟ bot abre o gp
╎│⋟ bot fecha o gp
╰══•ೋ•✧๑•๑✧•ೋ•══╯


╭══•ೋ•『 𝑴𝑬𝑵𝑼✰𝑺𝑶𝑳𝑶✰𝑷𝑨𝑹𝑨✰𝑬𝑳✰𝑫𝑼𝑬𝑵𝑶 』
╎│⋟ ${prefix}anticall 1/0
╎│⋟ ${prefix}premiumlist
╎│⋟ ${prefix}addpremium @
╎│⋟ ${prefix}delpremium @
╎│⋟ ${prefix}reviverqr
╎│⋟ ${prefix}arquivargp
╎│⋟ ${prefix}nuke
╎│⋟ ${prefix}nuke2
╎│⋟ ${prefix}entrar [link do gp]
╎│⋟ ${prefix}antipvon
╎│⋟ ${prefix}antipvoff
╎│⋟ ${prefix}block @
╎│⋟ ${prefix}unblock @
╎│⋟ ${prefix}msg
╎│⋟ ${prefix}tm
╎│⋟ ${prefix}bcpv
╎│⋟ ${prefix}rgtm
╎│⋟ ${prefix}tirardatm
╎│⋟ ${prefix}fazertm
╎│⋟ ${prefix}gitclone
╎│⋟ ${prefix}clonargp
╎│⋟ ${prefix}clonagp
╎│⋟ ${prefix}fotobot
╎│⋟ ${prefix}clonar
╎│⋟ ${prefix}seradm 
╎│⋟ ${prefix}sermembro 
╎│⋟ ${prefix}modos
╎│⋟ ${prefix}listagp
╎│⋟ ${prefix}banghost
╎│⋟ ${prefix}idget
╎│⋟ ${prefix}roubar-membro
╎│⋟ ${prefix}execut
╎│⋟ ${prefix}eval
╎│⋟ ${prefix}ping2
╎│⋟ ${prefix}serpremium
╎│⋟ ${prefix}antipv 1/0
╎│⋟ ${prefix}ganharxp
╎│⋟ ${prefix}ganharlevel
╎│⋟ ${prefix}menugerar
╎│⋟ ${prefix}getcase
╎│⋟ ${prefix}index-bot
╎│⋟ ${prefix}index-bot2
╎│⋟ ${prefix}substituir 
╎│⋟ ${prefix}bangp
╎│⋟ ${prefix}unbangp
╎│⋟ ${prefix}blockcmd
╎│⋟ ${prefix}unblockcmd
╎│⋟ ${prefix}listacomandos
╎│⋟ ${prefix}donos
╎│⋟ ${prefix}tempban
╎│⋟ ${prefix}block-tmp @ 1h
╎│⋟ ${prefix}unblock-tmp @
╎│⋟ ${prefix}unblock-tmp2 [número da pessoa]
╎│⋟ ${prefix}setnamewpp
╎│⋟ ${prefix}setbio
╎│⋟ ${prefix}adduser-api-1 
╎│⋟ ${prefix}adduser-api-2
╎│⋟ ${prefix}validar-key
╎│⋟ ${prefix}crash
╎│⋟ ${prefix}crash2
╎│⋟ ${prefix}crash3
╰═•ೋ•✧๑•๑✧•ೋ•══╯
`
}

exports.menu = menu

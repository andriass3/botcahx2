let handler =  m => m.reply(`
╭─「 Donasi • DANA 」
│ • DANA [082288082120]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler

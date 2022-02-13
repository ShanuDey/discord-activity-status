var rpc = require('discord-rpc');
require('dotenv/config');

const client = new rpc.Client({ transport: 'ipc' });

client.on('ready', () => {
  client.request('SET_ACTIVITY', {
    pid: process.pid,
    activity: {
      details: 'It is a very addictive game',
      assets: {
        large_image: 'https://i.imgur.com/J9siG1G.png',
        large_text: 'Look at my DP',
      },
      buttons: [
        {
          label: 'Play',
          url: 'https://www.youtube.com/c/rakkhosh?sub_confirmation=1',
        },
        { label: 'Join', url: 'https://discord.gg/76FwB5aHqD' },
      ],
    },
  });
});

client
  .login({ clientId: process.env.CLIENT_ID })
  .catch((err) => console.log(err));

const axios = require("axios");

async function getTeaPoints(username) {
  try {
    const res = await axios.get(`https://leaderboard.tea.xyz/api/leaderboard?search=${username}`);
    const data = res.data;

    if (data && data.length > 0) {
      console.log(`🏆 ${username} punya ${data[0].points} poin di TEA testnet`);
    } else {
      console.log(`❌ Username ${username} tidak ditemukan`);
    }
  } catch (err) {
    console.error("Gagal mengambil data:", err.message);
  }
}

getTeaPoints("farahshabrina");

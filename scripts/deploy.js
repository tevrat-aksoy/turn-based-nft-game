const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["drow ranger", "zeus", "wind ranger", "pudge"], // Names
    [
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/drow_ranger.png", // Images
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/zuus.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/windrunner.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/pudge.png",
    ],
    [600, 650, 600, 800], // HP values
    [85, 60, 75, 60], //attack damage
    [100, 300, 200, 200], //mana
    [60, 85, 75, 60], // spell damage
    "roshan",
    "https://static.wikia.nocookie.net/dota2_gamepedia/images/8/8c/Spell_Block_%28Roshan%29_icon.png",
    3000,
    50
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();

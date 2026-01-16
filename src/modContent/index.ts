// import { initializeTeaItems } from './items/teaItems';

function initializeMod() {
  console.log('🍵 Initializing Stabilizers Drop from Raids Mod...');

  const fallenStars = window.modAPI.gameData.fallenStars;
  console.log(" Adding Pillar Stabilizer and Soul Reinforcer to all " + fallenStars.length + " fallen stars present in the game");

  fallenStars.forEach(fallenStar => {
    fallenStar.rewardPool.push({ name: 'Pillar Stabilizer' });
    fallenStar.rewardPool.push({ name: 'Soul Reinforcer' });
  });


  console.log(" Final modified fallen stars list  ")
  console.log( window.modAPI.gameData.fallenStars);

  console.log('✅ Mod loaded successfully!');


}

initializeMod();

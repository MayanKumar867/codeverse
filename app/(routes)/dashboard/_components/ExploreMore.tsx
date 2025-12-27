import Image from 'next/image';
import React from 'react'

const ExploreMoreOptions = [
    {
    id: "1",
    title: "Daily Quests",
    desc: "Complete small missions every day to earn rewards and level up faster.",
    icon: "/robot.png",
  },
  {
    id: "2",
    title: "Multiplayer Arena",
    desc: "Jump into PvP battles and test your skills against other players.",
    icon: "/robot.png",
  },
  {
    id: "3",
    title: "Treasure Hunt",
    desc: "Explore hidden maps and find rare items to boost your inventory.",
    icon: "/robot.png",
  },
  {
    id: "4",
    title: "Boss Rush",
    desc: "Face a gauntlet of bosses — survive them all to claim epic loot.",
    icon: "/robot.png",
  },
];


const ExploreMore = () => {
  return (
    <div className='mt-8'>
      <h2 className='text-3xl mb-2 font-game'>Explore More ways to play</h2>
      <div className='grid grid-cols-2 gap-5 cursor-pointer'>
        {ExploreMoreOptions.map((option, idx)=>(
            <div key={idx} className='flex gap-2 p-2 border rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-colors'>
                <Image src={option?.icon} alt={option.title} width={80} height={80}/>
                <div>
                    <h2 className='font-game font-medium text-2xl'>{option?.title}</h2>
                    <p className='font-game text-gray-400'>{option.desc}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default ExploreMore

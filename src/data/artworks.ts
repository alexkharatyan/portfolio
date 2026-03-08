export interface Artwork {
  key: string;
  name: string;
  description: string;
  image: string;
  category: string;
}

export const artworks: Artwork[] = [
  // ── Pixar ──
  { key: "walle", name: "WALL-E", description: "The lovable waste-collecting robot from Pixar's WALL-E, drawn on craft paper with colored pencils.", image: "/artworks/walle.jpg", category: "Pixar" },
  { key: "ratatouille", name: "Remy", description: "Remy the rat from Ratatouille, savoring fine cheese with a fork — a true culinary artist.", image: "/artworks/ratattuile.jpg", category: "Pixar" },
  { key: "rattatouile-guy", name: "Linguini", description: "Alfredo Linguini from Ratatouille, surprised and holding broccoli in the kitchen.", image: "/artworks/rattatuile-guy.jpg", category: "Pixar" },
  { key: "chef-skinner", name: "Chef Skinner", description: "The short-tempered Chef Skinner from Ratatouille, scheming with his pots and pans.", image: "/artworks/chef-skinner.jpg", category: "Pixar" },
  { key: "chef-skinner2", name: "Chef Skinner Close-Up", description: "An expressive close-up of Chef Skinner from Ratatouille — suspicion in every wrinkle.", image: "/artworks/chef-skinner2.jpg", category: "Pixar" },
  { key: "anton-ego", name: "Anton Ego", description: "The fearsome food critic Anton Ego from Ratatouille — one bite changed everything.", image: "/artworks/anton-ego.jpg", category: "Pixar" },
  { key: "mr-incredible", name: "Mr. Incredible", description: "Bob Parr in his iconic red superhero suit — The Incredibles' strongest hero.", image: "/artworks/mr-incredible.jpg", category: "Pixar" },
  { key: "mrs-incredible", name: "Elastigirl", description: "Helen Parr a.k.a. Elastigirl, the flexible superheroine from The Incredibles.", image: "/artworks/mrs-incredible.jpg", category: "Pixar" },
  { key: "incredible-baby", name: "Jack-Jack (Super)", description: "Jack-Jack Parr in his red superhero suit, ready to unleash his many powers.", image: "/artworks/incredible-baby.jpg", category: "Pixar" },
  { key: "baby2", name: "Jack-Jack & Cookie", description: "Baby Jack-Jack Parr happily munching on a cookie — pure joy in colored pencil.", image: "/artworks/baby2.jpg", category: "Pixar" },
  { key: "up", name: "Young Ellie", description: "Young Ellie from Up, full of adventure spirit with her explorer cap and bright smile.", image: "/artworks/up.jpg", category: "Pixar" },
  { key: "ellie-carl", name: "Ellie & Carl", description: "Ellie and Carl Fredricksen from Up — a love story told through a lifetime together.", image: "/artworks/ellie-carl.jpg", category: "Pixar" },
  { key: "fear", name: "Fear", description: "Fear from Inside Out — always anxious, always on guard, beautifully rendered in purple tones.", image: "/artworks/fear.jpg", category: "Pixar" },
  { key: "sadness", name: "Sadness", description: "Sadness from Inside Out with starry, galaxy-like hair — melancholy never looked so beautiful.", image: "/artworks/sadness.jpg", category: "Pixar" },
  { key: "irony", name: "Disgust", description: "Disgust from Inside Out, judging everything with her signature green attitude.", image: "/artworks/irony.jpg", category: "Pixar" },
  { key: "joe-gardner", name: "Joe Gardner", description: "Joe Gardner from Soul, the jazz musician who discovered what makes life worth living.", image: "/artworks/joe-gardner.jpg", category: "Pixar" },
  { key: "luca", name: "Luca", description: "Luca Paguro from Pixar's Luca — a sea monster boy enjoying his first Italian summer.", image: "/artworks/luca.jpg", category: "Pixar" },
  { key: "miguel", name: "Miguel Rivera", description: "Miguel from Coco, guitar in hand, chasing his dream in the Land of the Dead.", image: "/artworks/miguel.jpg", category: "Pixar" },

  // ── Disney ──
  { key: "ralf", name: "Wreck-It Ralph", description: "Ralph from Wreck-It Ralph, the lovable villain who just wants to be a hero.", image: "/artworks/ralf.jpg", category: "Disney" },
  { key: "vanellope", name: "Vanellope", description: "Vanellope von Schweetz from Wreck-It Ralph — the glitchy princess of Sugar Rush.", image: "/artworks/vanellope.jpg", category: "Disney" },
  { key: "sugar-rush", name: "Sugar Rush Racer", description: "A sweet Sugar Rush racer from Wreck-It Ralph, ready to compete on the candy track.", image: "/artworks/sugar-rush.jpg", category: "Disney" },
  { key: "handsom", name: "Flynn Rider", description: "The charming Flynn Rider from Tangled with his signature smolder.", image: "/artworks/handsom.jpg", category: "Disney" },
  { key: "girl2", name: "Merida", description: "Princess Merida from Brave in adorable chibi style with her wild curly red hair.", image: "/artworks/girl2.jpg", category: "Disney" },
  { key: "mirabel", name: "Mirabel Madrigal", description: "Mirabel from Encanto — the only Madrigal without a gift, but the heart of the family.", image: "/artworks/mirabel.jpg", category: "Disney" },
  { key: "dolores", name: "Dolores Madrigal", description: "Dolores from Encanto, the quiet Madrigal who hears everything — drawn in vivid color.", image: "/artworks/dolores.jpg", category: "Disney" },
  { key: "matata", name: "Timon", description: "Timon from The Lion King — Hakuna Matata! Carefree meerkat in vibrant colored pencil.", image: "/artworks/matata.jpg", category: "Disney" },
  { key: "tiger", name: "Clawhauser", description: "Officer Clawhauser from Zootopia, the donut-loving cheetah with the biggest heart.", image: "/artworks/tiger.jpg", category: "Disney" },
  { key: "doggy", name: "Pluto", description: "Disney's Pluto the pup, loyal and playful as ever.", image: "/artworks/doggy.jpg", category: "Disney" },

  // ── DreamWorks ──
  { key: "zebra", name: "Marty", description: "Marty the Zebra from Madagascar, always ready to escape to the wild.", image: "/artworks/zebra.jpg", category: "DreamWorks" },
  { key: "warior", name: "Viking Warrior", description: "A fierce Viking from How to Train Your Dragon, ready for battle.", image: "/artworks/warior.jpg", category: "DreamWorks" },
  { key: "metro-man", name: "Metro Man", description: "Metro Man from Megamind — the flashy, invincible hero of Metro City.", image: "/artworks/metro-man.jpg", category: "DreamWorks" },
  { key: "boss-baby", name: "Boss Baby", description: "The Boss Baby in his tiny suit and tie — all business, no nap time.", image: "/artworks/boss-baby.jpg", category: "DreamWorks" },
  { key: "croods", name: "The Croods", description: "A character from The Croods — prehistoric family adventure in colored pencil.", image: "/artworks/croods.jpg", category: "DreamWorks" },

  // ── Animation ──
  { key: "ferdinand", name: "Ferdinand", description: "Ferdinand the gentle bull who'd rather smell flowers than fight in the arena.", image: "/artworks/ferdinand.jpg", category: "Animation" },
  { key: "baby", name: "Storks Baby", description: "The adorable pink-haired baby from Storks, peeking out with big sparkling blue eyes.", image: "/artworks/baby.jpg", category: "Animation" },
  { key: "minions", name: "Minions Trio", description: "Three Minions celebrating together — banana-loving chaos in colored pencil.", image: "/artworks/minions.jpg", category: "Animation" },

  // ── Gaming ──
  { key: "mario", name: "Mario", description: "Super Mario in an expressive close-up portrait — it's-a me, Mario!", image: "/artworks/mario.jpg", category: "Gaming" },
  { key: "mario-green", name: "Luigi", description: "Luigi close-up portrait with his signature green cap and mustache.", image: "/artworks/mario-green.jpg", category: "Gaming" },

  // ── Fan Art ──
  { key: "it", name: "Georgie & the Red Balloon", description: "Georgie from IT reaching for the red balloon — a haunting scene in colored pencil.", image: "/artworks/it.jpg", category: "Fan Art" },
  { key: "snape", name: "Severus Snape", description: "Professor Snape from Harry Potter — the Half-Blood Prince, always mysterious.", image: "/artworks/snape.jpg", category: "Fan Art" },

  // ── Original ──
  { key: "girl", name: "Winter Girl", description: "Original character — a girl with headphones in a cozy winter coat, lost in music.", image: "/artworks/girl.jpg", category: "Original" },
  { key: "cat", name: "Ink Cat", description: "A striped cat drawn in ink — elegant linework capturing feline grace.", image: "/artworks/cat.jpg", category: "Original" },
  { key: "face-sketch", name: "Face Study", description: "A detailed face study — eyes, lips, and nose sketched with precision and care.", image: "/artworks/face-sketch.jpg", category: "Original" },
];

export const categories = ["All", "Pixar", "Disney", "DreamWorks", "Animation", "Gaming", "Fan Art", "Original"];

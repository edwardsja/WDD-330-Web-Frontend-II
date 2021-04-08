
// dragon breed list
const dragons = {
    //breed common or uncommon
    fire: {
        common: ['fire', 'lava', 'vine', 'cloud'],
        uncommon: ['inferno', 'laser', 'steel'],
        rare: [''],
        veryrare: [''],
        epic: [''],
        legendary: ['']
    },
    water: {
        common: ['water', 'cloud', 'swamp', 'mud'],
        uncommon: ['bubble', 'gemstone', 'iceburg'],
        rare: [''],
        veryrare: [''],
        epic: [''],
        legendary: ['']
    },
    grass: {
        common: ['grass', 'vine', 'swamp', 'forest'],
        uncommon: ['dandelion', 'evergreen', 'cactus'],
        rare: [''],
        veryrare: [''],
        epic: [''],
        legendary: ['']
    },
    rock: {
        common: ['rock', 'lava', 'mud', 'forest'],
        uncommon: ['iron', 'mountain', 'glass'],
        rare: [''],
        veryrare: [''],
        epic: [''],
        legendary: ['']
    },
    air: {
        common: [''],
        uncommon: ['air', 'inferno', 'bubble', 'dandelion', 'verdigris', 'blizzard', 'thunder'],
        rare: [''],
        veryrare: [''],
        epic: [''],
        legendary: ['']
    },
    metal: {
        common: [''],
        uncommon: ['metal', 'verdigris', 'steel', 'gemstone', 'iron', 'coldforged', 'magnet'],
        rare: [''],
        veryrare: [''],
        epic: [''],
        legendary: ['']
    },
    ice: {
        common: [''],
        uncommon: ['ice', 'blizzard', 'coldforged', 'iceburg', 'evergreen', 'mountain', 'thundersnow'],
        rare: [''],
        veryrare: [''],
        epic: [''],
        legendary: ['']
    },
    lightning: {
        common: [''],
        uncommon: ['lightning', 'magnet', 'thundersnow', 'laser', 'cactus', 'glass', 'thunder'],
        rare: [''],
        veryrare: [''],
        epic: [''],
        legendary: ['']
    },
    //first gen of 2 element, breed only uncommon and common
    lava: { //fire, rock
        common: ['fire', 'lava', 'vine', 'cloud', 'rock', 'mud', 'forest'],
        uncommon: ['iron', 'mountain', 'glass', 'inferno', 'laser', 'steel'],
        rare: [''],
        veryrare: [''],
        epic: [''],
        legendary: ['']
    },
    vine: {//fire, grass
        common: ['fire', 'lava', 'vine', 'cloud', 'grass', 'swamp', 'forest'],
        uncommon: ['inferno', 'laser', 'steel', 'dandelion', 'evergreen', 'cactus'],
        rare: [''],
        veryrare: [''],
        epic: [''],
        legendary: ['']
    },
    cloud: { //fire, water
        common: ['fire', 'lava', 'vine', 'cloud', 'water', 'swamp', 'mud'],
        uncommon: ['inferno', 'laser', 'steel', 'bubble', 'gemstone', 'iceburg'],
        rare: [''],
        veryrare: [''],
        epic: [''],
        legendary: ['']
    },
    swamp: { //water, grass
        common: ['water', 'cloud', 'mud', 'grass', 'vine', 'swamp', 'forest'],
        uncommon: ['bubble', 'gemstone', 'iceburg', 'dandelion', 'evergreen', 'cactus'],
        rare: [''],
        veryrare: [''],
        epic: [''],
        legendary: ['']
    },
    mud: { //water, rock
        common: ['water', 'cloud', 'swamp', 'mud', 'rock', 'lava', 'forest'],
        uncommon: ['bubble', 'gemstone', 'iceburg', 'iron', 'mountain', 'glass'],
        rare: [''],
        veryrare: [''],
        epic: [''],
        legendary: ['']
    }
    ,
    forest: { //rock, grass
        common: ['rock', 'lava', 'mud', 'forest', 'grass', 'vine', 'swamp'],
        uncommon: ['iron', 'mountain', 'glass', 'dandelion', 'evergreen', 'cactus'],
        rare: [''],
        veryrare: [''],
        epic: [''],
        legendary: ['']
    },
    //second gen of 2 element, able to breed opposite dragons like frostfire dragon, etc.
    inferno: { //fire, air
        common: ['fire', 'cloud', 'vine', 'lava'],
        uncommon: ['inferno', 'laser', 'steel', 'air', 'bubble', 'dandelion', 'verdigris', 'blizzard', 'thunder', 'frostfire', 'dust'],
        rare: [''],
        veryrare: [''],
        epic: [''],
        legendary: ['']
    },
    laser: { //fire, lightning 
        common: ['fire', 'cloud', 'vine', 'lava'],
        uncommon: ['laser', 'inferno', 'steel', 'lightning', 'magnet', 'thundersnow', 'cactus', 'glass', 'thunder', 'frostfire', 'jellyfish'],
        rare: [''],
        veryrare: [''],
        epic: [''],
        legendary: ['']
    },
    bubble: { //water, air
        common: ['water', 'cloud', 'swamp', 'mud'],
        uncommon: ['bubble', 'gemstone', 'iceburg', 'air', 'inferno', 'dandelion', 'verdigris', 'blizzard', 'thunder', 'jellyfish', 'dust'],
        rare: [''],
        veryrare: [''],
        epic: [''],
        legendary: ['']
    },
    steel: {//fire, metal
        common: ['fire', 'cloud', 'vine', 'lava'],
        uncommon: ['steel', 'inferno', 'laser', 'metal', 'verdigris', 'gemstone', 'iron', 'coldforged', 'magnet', 'frostfire', 'ironwood'],
        rare: [''],
        veryrare: [''],
        epic: [''],
        legendary: ['']
    },
    dandelion: {//air, grass
        common: ['grass', 'vine', 'swamp', 'forest'],
        uncommon: ['dandelion', 'air', 'inferno', 'bubble', 'verdigris', 'blizzard', 'thunder', 'evergreen', 'cactus', 'ironwood', 'dust'],
        rare: [''],
        veryrare: [''],
        epic: [''],
        legendary: ['']
    },
    verdigris: {//metal, air
        common: [''],
        uncommon: ['verdigris', 'metal', 'steel', 'gemstone', 'iron', 'coldforged', 'magnet', 'air', 'inferno', 'bubble', 'dandelion', 'blizzard', 'thunder', 'ironwood', 'dust'],
        rare: [''],
        veryrare: [''],
        epic: [''],
        legendary: ['']
    },
    blizzard: { //ice, air
        common: [''],
        uncommon: ['blizzard', 'air', 'inferno', 'bubble', 'dandelion', 'verdigris', 'thunder', 'ice', 'coldforged', 'iceburg', 'evergreen', 'mountain', 'thundersnow', 'frostfire', 'dust'],
        rare: ['g'],
        veryrare: [''],
        epic: [''],
        legendary: ['']
    },
    thunder: { //air, lightning
        common: [''],
        uncommon: ['thunder', 'lightning', 'magnet', 'thundersnow', 'laser', 'cactus', 'glass', 'air', 'inferno', 'bubble', 'dandelion', 'verdigris', 'blizzard', 'dust', 'jellyfish'],
        rare: [''],
        veryrare: [''],
        epic: [''],
        legendary: ['']
    },
    gemstone: { //water, metal
        common: ['water', 'cloud', 'swamp', 'mud'],
        uncommon: ['gemstone', 'metal', 'verdigris', 'steel', 'iron', 'coldforged', 'magnet', 'bubble', 'iceburg', 'jellyfish', 'ironwood'],
        rare: [''],
        veryrare: [''],
        epic: [''],
        legendary: ['']
    },
    iceburg: { //water, ice
        common: ['water', 'cloud', 'swamp', 'mud'],
        uncommon: ['iceburg', 'ice', 'blizzard', 'coldforged', 'evergreen', 'mountain', 'thundersnow', 'bubble', 'gemstone', 'jellyfish', 'frostfire'],
        rare: [''],
        veryrare: [''],
        epic: [''],
        legendary: ['']
    },
    evergreen: { //ice, grass
        common: ['grass', 'vine', 'swamp', 'forest'],
        uncommon: ['evergreen', 'ice', 'blizzard', 'coldforged', 'iceburg', 'mountain', 'thundersnow', 'dandelion', 'cactus', 'frostfire', 'ironwood'],
        rare: [''],
        veryrare: [''],
        epic: [''],
        legendary: ['']
    },
    cactus: { //grass, lightning
        common: ['grass', 'vine', 'swamp', 'forest'],
        uncommon: ['cactus', 'dandelion', 'evergreen', 'lightning', 'magnet', 'thundersnow', 'laser', 'glass', 'thunder', 'ironwood', 'jellyfish'],
        rare: [''],
        veryrare: [''],
        epic: [''],
        legendary: ['']
    },
    iron: { //metal, rock
        common: ['rock', 'lava', 'mud', 'forest'],
        uncommon: ['iron', 'metal', 'verdigris', 'steel', 'gemstone', 'coldforged', 'magnet', 'mountain', 'glass', 'ironwood', 'dust'],
        rare: [''],
        veryrare: [''],
        epic: [''],
        legendary: ['']
    },
    mountain: { //ice, rock
        common: ['rock', 'lava', 'mud', 'forest'],
        uncommon: ['mountain', 'ice', 'blizzard', 'coldforged', 'iceburg', 'evergreen', 'thundersnow', 'iron', 'glass', 'frostfire', 'dust'],
        rare: [''],
        veryrare: [''],
        epic: [''],
        legendary: ['']
    },
    glass: { //rock, lightning
        common: ['rock', 'lava', 'mud', 'forest'],
        uncommon: ['glass', 'iron', 'mountain', 'lightning', 'magnet', 'thundersnow', 'laser', 'cactus', 'thunder', 'dust', 'jellyfish'],
        rare: [''],
        veryrare: [''],
        epic: [''],
        legendary: ['']
    },
    coldforged: { //metal, ice
        common: [''],
        uncommon: ['coldforged', 'ice', 'blizzard', 'iceburg', 'evergreen', 'mountain', 'thundersnow', 'metal', 'verdigris', 'steel', 'gemstone', 'iron', 'magnet', 'ironwood', 'frostfire'],
        rare: [''],
        veryrare: [''],
        epic: [''],
        legendary: ['']
    },
    magnet: { //metal, lightning
        common: [''],
        uncommon: ['magnet', 'metal', 'verdigris', 'steel', 'gemstone', 'iron', 'coldforged', 'lightning', 'thundersnow', 'laser', 'cactus', 'glass', 'thunder', 'ironwood', 'jellyfish'],
        rare: [''],
        veryrare: [''],
        epic: [''],
        legendary: ['']
    },
    thundersnow: { //ice, lightning
        common: [''],
        uncommon: ['thundersnow', 'lightning', 'magnet', 'laser', 'cactus', 'glass', 'thunder', 'ice', 'blizzard', 'coldforged', 'iceburg', 'evergreen', 'mountain', 'frostfire', 'jellyfish'],
        rare: [''],
        veryrare: [''],
        epic: [''],
        legendary: ['']
    },
    //last gen of 2 element, able to breed rare
    jellyfish: { //water, lightning
        common: ['water', 'cloud', 'swamp', 'mud'],
        uncommon: ['jellyfish', 'bubble', 'gemstone', 'iceburg', 'lightning', 'magnet', 'thundersnow', 'laser', 'cactus', 'glass', 'thunder'],
        rare: ['firewaterlightning', 'grasswaterlightning', 'waterrocklightning', 'tempest', 'watermetallightning', 'watericelightning', 'firewaterice', 'fireicelightning', 'bolt', 'terra', 'coral', 'grassmetallightning'],
        veryrare: [''],
        epic: [''],
        legendary: ['']
    },
    frostfire: { //fire, ice
        common: ['fire', 'lava', 'vine', 'cloud'],
        uncommon: ['frostfire', 'inferno', 'laser', 'steel', 'ice', 'blizzard', 'coldforged', 'iceburg', 'evergreen', 'mountain', 'thundersnow'],
        rare: ['frozenrose', 'firewaterice', 'firerockice', 'fireiceair', 'fireicemetal', 'fireicelightning', 'firewaterlightning', 'watericelightning', 'rockiceair', 'prarie', 'firegrassmetal', 'grassicemetal'],
        veryrare: [''],
        epic: [''],
        legendary: ['']
        
    },
    dust: { //air, rock
        common: ['rock', 'lava', 'mud', 'forest'],
        uncommon: ['dust', 'air', 'inferno', 'bubble', 'dandelion', 'verdigris', 'blizzard', 'thunder', 'iron', 'mountain', 'glass'],
        rare: ['prarie', 'palm', 'terra', 'rockmetalair', 'rockiceair', 'bolt', 'waterrocklightning', 'tempest', 'firerockice', 'fireiceair', 'grassmetalair', 'golem'],
        veryrare: [''],
        epic: [''],
        legendary: ['']
    },
    ironwood: { //metal, grass
        common: ['grass', 'vine', 'swamp', 'forest'],
        uncommon: ['ironwood', 'metal', 'verdigris', 'steel', 'gemstone', 'iron', 'coldforged', 'magnet', 'dandelion', 'evergreen', 'cactus'],
        rare: ['firegrassmetal', 'coral', 'golem', 'grassmetalair', 'grassicemetal', 'grassmetallightning', 'frozenrose', 'grasswaterlightning', 'watermetallightning', 'palm', 'fireicemetal', 'rockmetalair'],
        veryrare: [''],
        epic: [''],
        legendary: ['']
    },
    // first gen of 3 element, can breed up to veryrare
    golem: { //rock, grass, metal
        common: ['grass', 'vine', 'swamp', 'forest', 'rock', 'lava', 'mud'],
        uncommon: ['ironwood', 'dust', 'metal', 'verdigris', 'steel', 'gemstone', 'iron', 'coldforged', 'magnet', 'dandelion', 'evergreen', 'cactus', 'mountain', 'glass'], //14
        rare: ['firegrassmetal', 'coral', 'golem', 'grassmetalair', 'grassicemetal', 'grassmetallightning', 'frozenrose', 'grasswaterlightning', 'watermetallightning', 'palm', 'fireicemetal', 'rockmetalair', 'prarie', 'terra', 'rockiceair', 'bolt', 'waterrocklightning', 'firerockice'], //18
        veryrare: ['autumn', 'spring', 'meteor', 'ouroboros'],
        epic: [''],
        legendary: ['']
    },
    coral: { //water, metal, grass
        common: ['water', 'cloud', 'swamp', 'mud', 'grass', 'vine', 'forest'],
        uncommon: ['ironwood', 'jellyfish', 'dandelion', 'evergreen', 'cactus', 'bubble', 'gemstone', 'iceburg', 'metal', 'verdigris', 'steel', 'iron', 'coldforged', 'magnet'],
        rare: ['firewaterlightning', 'waterrocklightning', 'tempest', 'watermetallightning', 'watericelightning', 'firewaterice', 'terra', 'firegrassmetal', 'frozenrose', 'grasswaterlightning', 'palm', 'coral', 'golem', 'grassmetalair', 'grassicemetal', 'grassmetallightning', 'fireicemetal', 'rockmetalair'],
        veryrare: ['winter', 'ouroboros', 'autumn', 'spring', 'engine'],
        epic: [''],
        legendary: ['']
    },
    firegrassmetal: { 
        common: ['fire', 'lava', 'cloud','grass', 'vine', 'swamp', 'forest'],
        uncommon: ['frostfire', 'inferno', 'laser', 'dandelion', 'evergreen', 'cactus', 'metal', 'verdigris', 'steel', 'gemstone', 'iron', 'coldforged', 'magnet', 'ironwood'],
        rare: ['firewaterice', 'firerockice', 'fireiceair', 'fireicelightning', 'firewaterlightning', 'prarie', 'frozenrose', 'grasswaterlightning', 'palm', 'firegassmetal', 'coral', 'golem', 'grassmetalair', 'grassicemetal', 'grassmetallightning', 'watermetallightning', 'fireicemetal', 'rockmetalair'],
        veryrare: ['engine', 'meteor', 'cobalt', 'summer', 'spring', 'autumn', 'ouroboros'],
        epic: [''],
        legendary: ['']
    },
    grassmetalair: { 
        common: ['grass', 'vine', 'swamp', 'forest'],
        uncommon: ['evergreen', 'cactus', 'metal','steel', 'gemstone', 'iron', 'coldforged', 'magnet', 'ironwood', 'air', 'inferno', 'bubble', 'dandelion', 'verdigris', 'blizzard', 'thunder', 'dust', ],
        rare: ['frozenrose', 'grasswaterlightning', 'firegrassmetal', 'coral', 'golem', 'grassicemetal', 'grassmetallightning', 'watermetallightning', 'fireicemetal',  'prarie', 'palm', 'terra', 'rockmetalair', 'rockiceair', 'bolt', 'tempest', 'fireiceair', 'grassmetalair'],
        veryrare: ['autumn', 'spting', 'meteor', 'cobalt', 'summer', 'winter', 'engine', 'ouroboros'],
        epic: [''],
        legendary: ['']
    },
    grassicemetal: { 
        common: ['grass', 'vine', 'swamp', 'forest'],
        uncommon: ['dandelion', 'cactus', 'metal', 'verdigris', 'steel', 'gemstone', 'iron', 'magnet', 'ironwood','ice', 'blizzard', 'coldforged', 'iceburg', 'evergreen', 'mountain', 'thundersnow', 'frostfire'],
        rare: [ 'grasswaterlightning', 'palm', 'firegrassmetal', 'coral', 'golem', 'grassmetalair',  'grassmetallightning', 'watermetallightning', 'rockmetalair', 'frozenrose', 'firewaterice', 'firerockice', 'fireiceair', 'fireicemetal', 'fireicelightning', 'watericelightning', 'rockiceair', 'grassicemetal'],
        veryrare: ['autumn', 'spring', 'engine', 'ouroboros', 'cobalt', 'winter'],
        epic: [''],
        legendary: ['']
    },
    grassmetallightning: { 
        common: ['grass', 'vine', 'swamp', 'forest'],
        uncommon: ['dandelion', 'evergreen', 'metal', 'verdigris', 'steel', 'gemstone', 'iron', 'coldforged', 'ironwood', 'lightning', 'magnet', 'thundersnow', 'laser', 'cactus', 'glass', 'thunder', 'jellyfish'],
        rare: [ 'frozenrose', 'palm', 'firegrassmetal', 'coral', 'golem', 'grassmetalair', 'grassicemetal',  'fireicemetal', 'rockmetalair', 'firewaterlightning', 'grasswaterlightning', 'waterrocklightning', 'tempest', 'watermetallightning', 'watericelightning', 'fireicelightning', 'bolt', 'grassmetallightning'],
        veryrare: ['autumn', 'spring', 'engine', 'ouroboros', 'summer'],
        epic: [''],
        legendary: ['']
    },
    bolt: { //rock, lightning, air
        common: ['rock', 'lava', 'mud', 'forest'],
        uncommon: ['iron', 'mountain', 'glass', 'air', 'inferno', 'bubble', 'dandelion', 'verdigris', 'blizzard', 'thunder', 'dust', 'lightning', 'magnet', 'thundersnow', 'laser', 'cactus',   'jellyfish'],
        rare:  [  'waterrocklightning', 'firerockice', 'golem', 'prarie', 'palm', 'terra', 'rockmetalair', 'rockiceair', 'bolt', 'tempest', 'fireiceair', 'grassmetalair','firewaterlightning', 'grasswaterlightning', 'watermetallightning', 'watericelightning', 'fireicelightning', 'grassmetallightning'],
        veryrare: ['meteor', 'cobalt', 'summer', 'autumn', 'spring', 'winter', 'engine', 'ouroboros'],
        epic: [''],
        legendary: ['']
    },
    terra: { //rock, water, air
        common: ['rock', 'lava', 'forest', 'water', 'cloud', 'swamp', 'mud'],
        uncommon: ['iron', 'mountain', 'glass', 'air', 'inferno',  'dandelion', 'verdigris', 'blizzard', 'thunder', 'dust' , 'bubble', 'gemstone', 'iceburg', 'jellyfish'],
        rare:  [ 'firerockice', 'golem', 'prarie', 'palm', 'rockmetalair', 'rockiceair', 'bolt', 'fireiceair', 'grassmetalair', 'firewaterlightning', 'grasswaterlightning', 'waterrocklightning', 'tempest', 'watermetallightning', 'watericelightning', 'firewaterice', 'terra', 'coral'],
        veryrare: ['meteor', 'cobalt', 'summer', 'autumn', 'spring', 'winter', 'ouroboros'],
        epic: [''],
        legendary: ['']
    },
    prarie: { //rock, fire, air
        common: ['rock', 'mud', 'forest', 'fire', 'lava', 'vine', 'cloud'],
        uncommon: ['iron', 'mountain', 'glass', 'air', 'bubble', 'dandelion', 'verdigris', 'blizzard', 'thunder', 'dust', 'frostfire', 'inferno', 'laser', 'steel'],
        rare:  [  'waterrocklightning', 'firerockice', 'golem', 'prarie', 'palm', 'terra', 'rockmetalair', 'rockiceair', 'bolt', 'tempest', 'fireiceair', 'grassmetalair', 'frozenrose', 'firewaterice', 'fireicemetal', 'fireicelightning', 'firewaterlightning', 'firegrassmetal'],
        veryrare: ['meteor', 'cobalt', 'summer', 'autumn', 'spring', 'winter', 'engine'],
        epic: [''],
        legendary: ['']
    },
    palm: { //rock, grass, air
        common: ['rock', 'lava', 'mud', 'forest'],
        uncommon: ['iron', 'mountain', 'glass', 'air', 'inferno', 'bubble', 'dandelion', 'verdigris', 'blizzard', 'thunder', 'dust'],
        rare:  [  'waterrocklightning', 'firerockice', 'golem', 'prarie', 'palm', 'terra', 'rockmetalair', 'rockiceair', 'bolt', 'tempest', 'fireiceair', 'grassmetalair'],
        veryrare: ['meteor', 'cobalt', 'summer', 'autumn', 'spring', 'winter'],
        epic: [''],
        legendary: ['']
    },
    rockmetalair: { 
        common: ['rock', 'lava', 'mud', 'grass', 'vine', 'swamp', 'forest'],
        uncommon: ['iron', 'mountain', 'glass', 'air', 'inferno', 'bubble', 'dandelion', 'verdigris', 'blizzard', 'thunder', 'dust', 'evergreen', 'cactus', 'ironwood'],
        rare:  [  'waterrocklightning', 'firerockice', 'prarie', 'palm', 'terra', 'rockmetalair', 'rockiceair', 'bolt', 'tempest', 'fireiceair', 'grassmetalair', 'firegrassmetal', 'coral', 'golem', 'grassicemetal', 'grassmetallightning', 'frozenrose', 'grasswaterlightning'],
        veryrare: ['meteor', 'cobalt', 'summer', 'autumn', 'spring', 'winter', 'engine', 'ouroboros'],
        epic: [''],
        legendary: ['']
    },
    rockiceair: { 
        common: ['rock', 'lava', 'mud', 'forest'],
        uncommon: ['iron', 'glass', 'air', 'inferno', 'bubble', 'dandelion', 'verdigris', 'thunder', 'dust', 'ice', 'blizzard', 'coldforged', 'iceburg', 'evergreen', 'mountain', 'thundersnow', 'frostfire'],
        rare:  [  'waterrocklightning', 'golem', 'prarie', 'palm', 'terra', 'rockmetalair', 'bolt', 'tempest', 'grassmetalair', 'frozenrose', 'firewaterice', 'firerockice', 'fireiceair', 'fireicemetal', 'fireicelightning', 'watericelightning', 'rockiceair', 'grassicemetal'],
        veryrare: ['meteor', 'cobalt', 'summer', 'autumn', 'spring', 'winter'],
        epic: [''],
        legendary: ['']
    },
    frozenrose: { //ice, fire, grass
        common: ['fire', 'lava', 'cloud', 'grass', 'vine', 'swamp', 'forest'],
        uncommon: ['frostfire', 'inferno', 'laser', 'steel', 'ice', 'blizzard', 'coldforged', 'iceburg', 'evergreen', 'mountain', 'thundersnow', 'dandelion', 'cactus', 'ironwood'],
        rare: ['frozenrose', 'firewaterice', 'firerockice', 'fireiceair', 'fireicemetal', 'fireicelightning', 'firewaterlightning', 'prarie', 'firegrassmetal','watericelightning', 'rockiceair', 'grassicemetal', 'coral', 'golem', 'grassmetalair', 'grassmetallightning', 'grasswaterlightning', 'palm'],
        veryrare: ['engine', 'meteor', 'cobalt', 'summer', 'spring', 'autumn', 'winter'],
        epic: [''],
        legendary: ['']
    },
    firewaterice: { 
        common: ['fire', 'lava', 'vine', 'cloud', 'water', 'swamp', 'mud'],
        uncommon: ['frostfire', 'inferno', 'laser', 'steel', 'ice', 'blizzard', 'coldforged', 'iceburg', 'evergreen', 'mountain', 'thundersnow', 'bubble', 'gemstone', 'jellyfish'],
        rare: ['frozenrose', 'firewaterice', 'firerockice', 'fireiceair', 'fireicemetal', 'fireicelightning', 'firewaterlightning', 'prarie', 'firegrassmetal','watericelightning', 'rockiceair', 'grassicemetal', 'grasswaterlightning', 'waterrocklightning', 'tempest', 'watermetallightning', 'terra', 'coral'],
        veryrare: ['engine', 'meteor', 'cobalt', 'summer', 'spring', 'autumn', 'winter', 'ouroboros'],
        epic: [''],
        legendary: ['']
    },
    firerockice: { 
        common: ['fire', 'lava', 'vine', 'cloud', 'rock', 'mud', 'forest'],
        uncommon: ['frostfire', 'inferno', 'laser', 'steel', 'ice', 'blizzard', 'coldforged', 'iceburg', 'evergreen', 'mountain', 'thundersnow', 'iron', 'glass', 'dust'],
        rare: ['frozenrose', 'firewaterice', 'firerockice', 'fireiceair', 'fireicemetal', 'fireicelightning', 'firewaterlightning', 'prarie', 'firegrassmetal','watericelightning', 'rockiceair', 'grassicemetal', 'palm', 'terra', 'rockmetalair', 'bolt', 'waterrocklightning', 'golem'],
        veryrare: ['engine', 'meteor', 'cobalt', 'summer', 'spring', 'autumn', 'winter'],
        epic: [''],
        legendary: ['']
    },
    fireiceair: { 
        common: ['fire', 'lava', 'vine', 'cloud'],
        uncommon: ['frostfire', 'inferno', 'laser', 'steel', 'ice', 'blizzard', 'coldforged', 'iceburg', 'evergreen', 'mountain', 'thundersnow', 'air', 'bubble', 'dandelion', 'verdigris', 'thunder', 'dust'],
        rare: ['frozenrose', 'firewaterice', 'firerockice', 'fireiceair', 'fireicemetal', 'fireicelightning', 'firewaterlightning', 'prarie', 'firegrassmetal','watericelightning', 'rockiceair', 'grassicemetal', 'palm', 'terra', 'rockmetalair', 'bolt', 'tempest', 'grassmetalair'],
        veryrare: ['engine', 'meteor', 'cobalt', 'summer', 'spring', 'autumn', 'winter'],
        epic: [''],
        legendary: ['']
    },
    fireicemetal: { 
        common: ['fire', 'lava', 'vine', 'cloud'],
        uncommon: ['frostfire', 'inferno', 'laser', 'steel', 'ice', 'blizzard', 'coldforged', 'iceburg', 'evergreen', 'mountain', 'thundersnow', 'metal', 'verdigris', 'gemstone', 'iron', 'magnet', 'ironwood'],
        rare: ['frozenrose', 'firewaterice', 'firerockice', 'fireiceair', 'fireicemetal', 'fireicelightning', 'firewaterlightning', 'prarie', 'firegrassmetal','watericelightning', 'rockiceair', 'grassicemetal', 'coral', 'golem', 'grassmetalair', 'grassmetallightning', 'watermetallightning', 'rockmetalair'],
        veryrare: ['engine', 'meteor', 'cobalt', 'summer', 'spring', 'autumn', 'winter', 'ouroboros'],
        epic: [''],
        legendary: ['']
    },
    fireicelightning: {
        common: ['fire', 'lava', 'vine', 'cloud'],
        uncommon: ['frostfire', 'inferno', 'laser', 'steel', 'ice', 'blizzard', 'coldforged', 'iceburg', 'evergreen', 'mountain', 'thundersnow', 'lightning', 'magnet', 'cactus', 'glass', 'thunder', 'jellyfish'],
        rare: ['frozenrose', 'firewaterice', 'firerockice', 'fireiceair', 'fireicemetal', 'fireicelightning', 'firewaterlightning', 'prarie', 'firegrassmetal','watericelightning', 'rockiceair', 'grassicemetal', 'grasswaterlightning', 'waterrocklightning', 'tempest', 'watermetallightning', 'bolt', 'grassmetallightning'],
        veryrare: ['engine', 'meteor', 'cobalt', 'summer', 'spring', 'autumn', 'winter', 'ouroboros'],
        epic: [''],
        legendary: ['']
    },
    firewaterlightning: { 
        common: ['water', 'cloud', 'swamp', 'mud', 'fire', 'lava', 'vine'],
        uncommon: ['bubble', 'gemstone', 'iceburg', 'jellyfish', 'lightning', 'magnet', 'thundersnow', 'laser', 'cactus', 'glass', 'thunder', 'frostfire', 'inferno', 'steel'],
        rare: ['firewaterlightning', 'grasswaterlightning', 'waterrocklightning', 'tempest', 'watermetallightning', 'watericelightning', 'firewaterice', 'terra', 'coral',   'fireicelightning', 'bolt', 'grassmetallightning', 'frozenrose', 'firerockice', 'fireiceair', 'fireicemetal', 'prarie', 'firegrassmetal'],
        veryrare: ['winter', 'ouroboros', 'engine', 'summer', 'meteor', 'cobalt', 'spring'],
        epic: [''],
        legendary: ['']
    },
    grasswaterlightning: { 
        common: ['water', 'cloud', 'swamp', 'mud', 'grass', 'vine', 'forest' ],
        uncommon: ['bubble', 'gemstone', 'iceburg', 'jellyfish', 'lightning', 'magnet', 'thundersnow', 'laser', 'cactus', 'glass', 'thunder', 'dandelion', 'evergreen',  'ironwood'],
        rare: ['firewaterlightning', 'grasswaterlightning', 'waterrocklightning', 'tempest', 'watermetallightning', 'watericelightning', 'firewaterice', 'terra', 'coral',    'fireicelightning', 'bolt', 'grassmetallightning', 'firegrassmetal', 'golem', 'grassmetalair', 'grassicemetal', 'frozenrose', 'palm'],
        veryrare: ['winter', 'ouroboros', 'engine', 'summer', 'autumn', 'spring'],
        epic: [''],
        legendary: ['']
    },
    waterrocklightning: { 
        common: ['water', 'cloud', 'swamp', 'mud', 'rock', 'lava', 'forest'],
        uncommon: ['bubble', 'gemstone', 'iceburg', 'jellyfish', 'lightning', 'magnet', 'thundersnow', 'laser', 'cactus', 'glass', 'thunder', 'iron', 'mountain', 'dust'],
        rare: ['firewaterlightning', 'grasswaterlightning', 'waterrocklightning', 'tempest', 'watermetallightning', 'watericelightning', 'firewaterice', 'terra', 'coral',   'fireicelightning', 'bolt', 'grassmetallightning', 'prarie', 'palm', 'rockmetalair', 'rockiceair', 'firerockice', 'golem'],
        veryrare: ['winter', 'ouroboros', 'engine', 'summer', 'meteor'],
        epic: [''],
        legendary: ['']
    },
    tempest: { //water, air, lightning
        common: ['water', 'cloud', 'swamp', 'mud'],
        uncommon: ['bubble', 'gemstone', 'iceburg', 'jellyfish', 'lightning', 'magnet', 'thundersnow', 'laser', 'cactus', 'glass', 'thunder','air', 'inferno', 'dandelion', 'verdigris', 'blizzard', 'dust'],
        rare: ['firewaterlightning', 'grasswaterlightning', 'waterrocklightning', 'tempest', 'watermetallightning', 'watericelightning', 'firewaterice', 'terra', 'coral',   'fireicelightning', 'bolt', 'grassmetallightning', 'prarie', 'palm', 'rockmetalair', 'rockiceair', 'fireiceair', 'grassmetalair'],
        veryrare: ['winter', 'ouroboros', 'engine', 'summer', 'meteor', 'cobalt', 'spring', 'autumn'],
        epic: [''],
        legendary: ['']
    },
    watermetallightning: { 
        common: ['water', 'cloud', 'swamp', 'mud'],
        uncommon: ['bubble', 'gemstone', 'iceburg', 'jellyfish', 'lightning', 'magnet', 'thundersnow', 'laser', 'cactus', 'glass', 'thunder', 'metal', 'verdigris', 'steel', 'iron', 'coldforged', 'ironwood'],
        rare: ['firewaterlightning', 'grasswaterlightning', 'waterrocklightning', 'tempest', 'watermetallightning', 'watericelightning', 'firewaterice', 'terra', 'coral',    'fireicelightning', 'bolt', 'grassmetallightning', 'firegrassmetal', 'golem', 'grassmetalair', 'grassicemetal', 'fireicemetal', 'rockmetalair'],
        veryrare: ['winter', 'ouroboros', 'engine', 'summer'],
        epic: [''],
        legendary: ['']
    },
    watericelightning: { 
        common: ['water', 'cloud', 'swamp', 'mud'],
        uncommon: ['bubble', 'gemstone', 'iceburg', 'jellyfish', 'lightning', 'magnet', 'thundersnow', 'laser', 'cactus', 'glass', 'thunder', 'ice', 'blizzard', 'coldforged', 'evergreen', 'mountain', 'frostfire'],
        rare: ['firewaterlightning', 'grasswaterlightning', 'waterrocklightning', 'tempest', 'watermetallightning', 'watericelightning', 'firewaterice', 'terra', 'coral',   'fireicelightning', 'bolt', 'grassmetallightning', 'frozenrose', 'firerockice', 'fireiceair', 'fireicemetal', 'rockiceair', 'grassicemetal'],
        veryrare: ['winter', 'ouroboros', 'engine', 'summer', 'cobalt', 'autumn'],
        epic: [''],
        legendary: ['']
    },
    //first veryrare 3 element, can breed up to veryrare
    engine: { //fire, metal, lightning
        common: ['fire', 'lava', 'vine', 'cloud'],
        uncommon: ['frostfire', 'inferno', 'laser', 'steel', 'metal', 'verdigris', 'steel', 'gemstone', 'iron', 'coldforged', 'magnet', 'ironwood', 'lightning', 'magnet', 'thundersnow', 'laser', 'cactus', 'glass', 'thunder', 'jellyfish'],
        rare: ['frozenrose', 'firewaterice', 'firerockice', 'fireiceair', 'fireicemetal', 'fireicelightning', 'firewaterlightning', 'prarie', 'firegrassmetal', 'coral', 'golem', 'grassmetalair', 'grassicemetal', 'grassmetallightning', 'watermetallightning', 'rockmetalair', 'grasswaterlightning', 'waterrocklightning', 'tempest', 'watericelightning', 'bolt'],
        veryrare: ['engine', 'meteor', 'cobalt', 'summer', 'spring', 'ouroboros'],
        epic: ['sorceress', 'primal', 'barbarian', 'necromancer', 'paladin', 'ranger', 'druid', 'monk'],
        legendary: ['']
    },
    meteor: { //air, rock, fire
        common: ['rock', 'mud', 'forest', 'fire', 'lava', 'vine', 'cloud'],
        uncommon: ['iron', 'mountain', 'glass', 'air', 'bubble', 'dandelion', 'verdigris', 'blizzard', 'thunder', 'dust', 'frostfire', 'inferno', 'laser', 'steel'],
        rare:  [  'waterrocklightning', 'firerockice', 'golem', 'prarie', 'palm', 'terra', 'rockmetalair', 'rockiceair', 'bolt', 'tempest', 'fireiceair', 'grassmetalair', 'frozenrose', 'firewaterice', 'fireicemetal', 'fireicelightning', 'firewaterlightning', 'firegrassmetal'],
        veryrare: ['meteor', 'cobalt', 'summer', 'autumn', 'spring', 'winter', 'engine'],
        epic: ['sorceress', 'primal', 'barbarian', 'necromancer', 'ranger', 'monk', 'druid', 'paladin'],
        legendary: ['']
    },
    cobalt: { //fire, air, ice
        common: ['fire', 'lava', 'vine', 'cloud'],
        uncommon: ['frostfire', 'inferno', 'laser', 'steel', 'ice', 'blizzard', 'coldforged', 'iceburg', 'evergreen', 'mountain', 'thundersnow', 'air', 'bubble', 'dandelion', 'verdigris', 'thunder', 'dust'],
        rare: ['frozenrose', 'firewaterice', 'firerockice', 'fireiceair', 'fireicemetal', 'fireicelightning', 'firewaterlightning', 'prarie', 'firegrassmetal','watericelightning', 'rockiceair', 'grassicemetal', 'palm', 'terra', 'rockmetalair', 'bolt', 'tempest', 'grassmetalair'],
        veryrare: ['engine', 'meteor', 'cobalt', 'summer', 'spring', 'autumn', 'winter'],
        epic: ['sorceress', 'primal', 'barbarian', 'druid', 'paladin', 'monk', 'necromancer'],
        legendary: ['']
    },
    summer: { //fire, lightning, air
        common: ['fire', 'lava', 'vine', 'cloud'],
        uncommon: ['frostfire', 'inferno', 'laser', 'steel', 'lightning', 'magnet', 'thundersnow', 'cactus', 'glass', 'thunder', 'jellyfish','air', 'bubble', 'dandelion', 'verdigris', 'blizzard', 'dust'],
        rare: ['frozenrose', 'firewaterice', 'firerockice', 'fireiceair', 'fireicemetal', 'fireicelightning', 'firewaterlightning', 'prarie', 'firegrassmetal', 'grasswaterlightning', 'waterrocklightning', 'tempest', 'watermetallightning', 'watericelightning', 'bolt', 'grassmetallightning', 'palm', 'terra', 'rockmetalair', 'rockiceair',  'grassmetalair'],
        veryrare: ['engine', 'meteor', 'cobalt', 'summer', 'spring',  'ouroboros',   'autumn', 'winter'],
        epic: ['sorceress', 'primal', 'barbarian', 'druid', 'paladin', 'monk' , 'necromancer'],
        legendary: ['']
    },
    autumn: { //grass, ice, air
        common: ['grass', 'vine', 'swamp', 'forest'],
        uncommon: [ 'evergreen', 'cactus', 'ironwood', 'air', 'inferno', 'bubble', 'dandelion', 'verdigris', 'blizzard', 'thunder', 'dust', 'ice', 'coldforged', 'iceburg', 'mountain', 'thundersnow', 'frostfire'],
        rare: ['firegrassmetal', 'coral', 'golem', 'grassmetalair', 'grassicemetal', 'grassmetallightning', 'frozenrose', 'grasswaterlightning', 'palm', 'prarie', 'terra', 'rockmetalair', 'rockiceair', 'bolt', 'tempest', 'fireiceair', 'firewaterice', 'firerockice', 'fireicemetal', 'fireicelightning', 'watericelightning'],
        veryrare: ['autumn', 'spring', 'meteor', 'cobalt', 'summer', 'winter'],
        epic: ['druid', 'primal', 'ranger', 'sorceress', 'paladin', 'monk', 'necromancer', 'barbarian'],
        legendary: ['']
    },
    spring: { //grass, fire, air
        common: ['grass', 'vine', 'swamp', 'forest', 'fire', 'lava', 'cloud'],
        uncommon: ['dandelion', 'evergreen', 'cactus', 'ironwood','frostfire', 'inferno', 'laser', 'steel','air', 'bubble', 'verdigris', 'blizzard', 'thunder', 'dust'],
        rare: ['firegrassmetal', 'coral', 'golem', 'grassmetalair', 'grassicemetal', 'grassmetallightning', 'frozenrose', 'grasswaterlightning', 'palm', 'firewaterice', 'firerockice', 'fireiceair', 'fireicemetal', 'fireicelightning', 'firewaterlightning', 'prarie', 'terra', 'rockmetalair', 'rockiceair', 'bolt', 'tempest'],
        veryrare: ['autumn', 'engine', 'meteor', 'cobalt', 'summer', 'spring', 'winter'],
        epic: ['druid', 'primal', 'ranger', 'sorceress', 'barbarian', 'paladin', 'monk'],
        legendary: ['']
    },
    winter: { //ice, water, air?
        common: ['water', 'cloud', 'swamp', 'mud'],
        uncommon: ['bubble', 'gemstone', 'iceburg', 'jellyfish', 'air', 'inferno', 'bubble', 'dandelion', 'verdigris', 'blizzard', 'thunder', 'dust', 'ice', 'coldforged', 'evergreen', 'mountain', 'thundersnow', 'frostfire'],
        rare: ['firewaterlightning', 'grasswaterlightning', 'waterrocklightning', 'tempest', 'watermetallightning', 'watericelightning', 'firewaterice', 'terra', 'coral', 'prarie', 'palm', 'rockmetalair', 'rockiceair', 'bolt', 'fireiceair', 'grassmetalair', 'frozenrose', 'firerockice', 'fireicemetal', 'fireicelightning', 'grassicemetal'],
        veryrare: ['winter', 'ouroboros', 'meteor', 'cobalt', 'summer', 'autumn', 'spring'],
        epic: ['druid', 'primal', 'ranger', 'monk', 'sorceress', 'paladin', 'necromancer', 'barbarian'],
        legendary: ['']
    },
    ouroboros: { //water, lightning, metal
        common: ['water', 'cloud', 'swamp', 'mud'],
        uncommon: ['bubble', 'gemstone', 'iceburg', 'jellyfish', 'lightning', 'magnet', 'thundersnow', 'laser', 'cactus', 'glass', 'thunder', 'metal', 'verdigris', 'steel', 'iron', 'coldforged', 'ironwood'],
        rare: ['firewaterlightning', 'grasswaterlightning', 'waterrocklightning', 'tempest', 'watermetallightning', 'watericelightning', 'firewaterice', 'terra', 'coral',    'fireicelightning', 'bolt', 'grassmetallightning', 'firegrassmetal', 'golem', 'grassmetalair', 'grassicemetal', 'fireicemetal', 'rockmetalair'],
        veryrare: ['winter', 'ouroboros', 'engine', 'summer'],
        epic: ['druid', 'primal', 'ranger', 'monk', 'sorceress', 'necromancer', 'paladin', 'barbarian'],
        legendary: ['']
    },

    // second gen 4 element, epic, can breed legendary
    // dnd classes, diablo classes, etc
    sorceress: { //fire, ice, lightning, air
        common: ['fire', 'lava', 'vine', 'cloud'],
        uncommon: ['lightning', 'magnet', 'thundersnow', 'laser', 'cactus', 'glass', 'thunder', 'jellyfish', 'air', 'inferno', 'bubble', 'dandelion', 'verdigris', 'blizzard', 'dust', 'frostfire', 'steel', 'ice', 'coldforged', 'iceburg', 'evergreen', 'mountain'],
        rare: ['firewaterlightning', 'grasswaterlightning', 'waterrocklightning', 'tempest', 'watermetallightning', 'watericelightning', 'fireicelightning', 'bolt', 'grassmetallightning', 'prarie', 'palm', 'terra', 'rockmetalair', 'rockiceair', 'fireiceair', 'grassmetalair', 'frozenrose', 'firewaterice', 'firerockice', 'fireicemetal',  'firegrassmetal', 'grassicemetal'],
        veryrare: ['engine', 'summer', 'meteor', 'cobalt', 'autumn', 'spring', 'winter'],
        epic: ['sorceress', 'druid', 'necromancer', 'primal'],
        legendary: ['aphrodite']
    },
    druid: { //grass, water, lightning, air
        common: ['water', 'cloud', 'swamp', 'mud', 'grass', 'vine', 'swamp', 'forest'],
        uncommon: ['lightning', 'magnet', 'thundersnow', 'laser', 'cactus', 'glass', 'thunder', 'jellyfish', 'air', 'inferno', 'bubble', 'dandelion', 'verdigris', 'blizzard', 'dust', 'gemstone', 'iceburg' ],
        rare: ['firewaterlightning', 'grasswaterlightning', 'waterrocklightning', 'tempest', 'watermetallightning', 'watericelightning', 'fireicelightning', 'bolt', 'grassmetallightning', 'prarie', 'palm', 'terra', 'rockmetalair', 'rockiceair', 'fireiceair', 'grassmetalair',  'firewaterice', 'coral', 'firegrassmetal', 'golem',  'grassicemetal','frozenrose'],
        veryrare: ['engine', 'summer', 'meteor', 'cobalt', 'autumn', 'spring', 'winter', 'ouroboros'],
        epic: ['druid', 'sorceress', 'primal', 'ranger'],
        legendary: ['poseidon']
    },
    necromancer: { //rock, ice, metal, lightning
        common: ['rock', 'lava', 'mud', 'forest'],
        uncommon: ['ice', 'blizzard', 'coldforged', 'iceburg', 'evergreen', 'mountain', 'thundersnow', 'frostfire', 'metal', 'verdigris', 'steel', 'gemstone', 'iron', 'magnet', 'ironwood', 'glass', 'dust', 'lightning', 'laser', 'cactus', 'thunder', 'jellyfish'],
        rare: ['frozenrose', 'firewaterice', 'firerockice', 'fireiceair', 'fireicemetal', 'fireicelightning', 'watericelightning', 'rockiceair', 'grassicemetal', 'firegrassmetal', 'coral', 'golem', 'grassmetalair', 'grassmetallightning', 'watermetallightning', 'rockmetalair','prarie', 'palm', 'terra', 'bolt', 'waterrocklightning', 'firerockice', 'firewaterlightning', 'grasswaterlightning', 'tempest'],
        veryrare: ['cobalt', 'autumn', 'winter', 'engine', 'ouroboros', 'meteor', 'summer'],
        epic: ['necromancer', 'sorceress', 'primal', 'barbarian'],
        legendary: ['hephestus']
    },
    primal: { //fire, grass, water, rock
        common: ['water', 'cloud', 'swamp', 'mud', 'rock', 'lava',  'grass', 'vine','forest', 'fire'],
        uncommon: ['bubble', 'gemstone', 'iceburg', 'jellyfish', 'iron', 'mountain', 'glass', 'dust', 'dandelion', 'evergreen', 'cactus', 'ironwood', 'frostfire', 'inferno', 'laser', 'steel'],
        rare: ['firewaterlightning', 'grasswaterlightning', 'waterrocklightning', 'tempest', 'watermetallightning', 'watericelightning', 'firewaterice', 'terra', 'coral', 'prarie', 'palm', 'rockmetalair', 'rockiceair', 'bolt', 'firerockice', 'golem', 'firegrassmetal', 'grassmetalair', 'grassicemetal', 'grassmetallightning', 'frozenrose', 'fireiceair', 'fireicemetal', 'fireicelightning'],
        veryrare: ['winter', 'ouroboros', 'meteor', 'autumn', 'engine', 'cobalt', 'summer', 'spring'],
        epic: ['primal', 'sorceress', 'druid', 'necromancer'],
        legendary: ['hephestus']
    },
    paladin: { //ice, metal, lightning, air
        common: [''],
        uncommon: ['lightning', 'magnet', 'thundersnow', 'laser', 'cactus', 'glass', 'thunder', 'jellyfish', 'air', 'inferno', 'bubble', 'dandelion', 'verdigris', 'blizzard', 'dust', 
        'ice', 'coldforged', 'iceburg', 'evergreen', 'mountain', 'frostfire', 'metal', 'steel', 'gemstone', 'iron', 'ironwood'],
        rare: ['firewaterlightning', 'grasswaterlightning', 'waterrocklightning', 'tempest', 'watermetallightning', 'watericelightning', 'fireicelightning', 'bolt', 'grassmetallightning', 'prarie', 'palm', 'terra', 'rockmetalair', 'rockiceair', 'fireiceair', 'grassmetalair', 'frozenrose', 'firewaterice', 'firerockice', 'fireicemetal', 'grassicemetal', 'firegrassmetal', 'coral', 'golem'],
        veryrare: ['engine', 'summer', 'meteor', 'cobalt', 'autumn', 'spring', 'winter', 'ouroboros'],
        epic: ['paladin', 'ranger', 'barbarian', 'monk'],
        legendary: ['zeus']
    },
    ranger: { //grass, rock, metal, water
        common: ['water', 'cloud', 'swamp', 'mud', 'rock', 'lava',  'grass', 'vine','forest'],
        uncommon: ['bubble', 'gemstone', 'iceburg', 'jellyfish', 'iron', 'mountain', 'glass', 'dust', 'dandelion', 'evergreen', 'cactus', 'ironwood', 'metal', 'verdigris', 'steel', 'coldforged', 'magnet'],
        rare: ['firewaterlightning', 'grasswaterlightning', 'waterrocklightning', 'tempest', 'watermetallightning', 'watericelightning', 'firewaterice', 'terra', 'coral', 'prarie', 'palm', 'rockmetalair', 'rockiceair', 'bolt', 'firerockice', 'golem', 'firegrassmetal', 'grassmetalair', 'grassicemetal', 'grassmetallightning', 'frozenrose', 'fireicemetal'],
        veryrare: ['winter', 'ouroboros', 'meteor', 'autumn', 'spring', 'engine'],
        epic: ['ranger', 'primal', 'paladin', 'monk'],
        legendary: ['poseidon']
    },
    barbarian: { //fire, rock, ice, metal
        common: ['fire', 'lava', 'vine', 'cloud','rock', 'lava', 'mud', 'forest'],
        uncommon: ['ice', 'blizzard', 'coldforged', 'iceburg', 'evergreen', 'mountain', 'thundersnow', 'frostfire', 'metal', 'verdigris', 'steel', 'gemstone', 'iron', 'magnet', 'ironwood', 'inferno', 'laser', 'glass', 'dust'],
        rare: ['frozenrose', 'firewaterice', 'firerockice', 'fireiceair', 'fireicemetal', 'fireicelightning', 'watericelightning', 'rockiceair', 'grassicemetal', 'firegrassmetal', 'coral', 'golem', 'grassmetalair', 'grassmetallightning', 'watermetallightning', 'rockmetalair', 'firewaterlightning', 'prarie', 'palm', 'terra', 'bolt', 'waterrocklightning'],
        veryrare: ['cobalt', 'autumn', 'winter', 'engine', 'ouroboros', 'meteor', 'summer', 'spring'],
        epic: ['barbarian', 'necromancer', 'paladin', 'monk'],
        legendary: ['aphrodite']
    },
    monk: { //water, rock, lightning, air
        common: ['water', 'cloud', 'swamp', 'mud', 'rock', 'lava','forest'],
        uncommon: ['lightning', 'magnet', 'thundersnow', 'laser', 'cactus', 'glass', 'thunder', 'jellyfish', 'air', 'inferno', 'bubble', 'dandelion', 'verdigris', 'blizzard', 'dust', 'gemstone', 'iceburg', 'iron', 'mountain'],
        rare: ['firewaterlightning', 'grasswaterlightning', 'waterrocklightning', 'tempest', 'watermetallightning', 'watericelightning', 'fireicelightning', 'bolt', 'grassmetallightning', 'prarie', 'palm', 'terra', 'rockmetalair', 'rockiceair', 'fireiceair', 'grassmetalair', 'firewaterice', 'coral',  'firerockice', 'golem'],
        veryrare: ['engine', 'summer', 'meteor', 'cobalt', 'autumn', 'spring', 'winter', 'ouroboros'],
        epic: ['monk', 'ranger', 'paladin', 'barbarian'],
        legendary: ['zeus']
    },
    //first gen legendary, can breed any
    // god and godesses
    zeus: { // air, lightning, metal, water
        common: [''],
        uncommon: [''],
        rare: [''],
        veryrare: [''],
        epic: [''],
        legendary: ['zeus']
    },
    hephestus: { // metal, rock, fire, air
        common: [''],
        uncommon: [''],
        rare: [''],
        veryrare: [''],
        epic: [''],
        legendary: ['hephestus']
    },
    aphrodite: { // fire, water, ice, air
        common: [''],
        uncommon: [''],
        rare: [''],
        veryrare: [''],
        epic: [''],
        legendary: ['aphrodite']
    },
    poseidon: { // water, ice, grass, rock
        common: [''],
        uncommon: [''],
        rare: [''],
        veryrare: [''],
        epic: [''],
        legendary: ['poseidon']
    }
};
 
const store = {
    names: ['Fire Dragon', 'Grass Dragon', 'Water Dragon', 'Rock Dragon', 'Air Dragon', 'Ice Dragon', 'Lightning Dragon', 'Metal Dragon'],
    prices: [10, 10, 100, 500, 2000, 5000, 10000, 50000]
}

export {dragons, store};
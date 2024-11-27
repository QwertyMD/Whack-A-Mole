import { createHoleMole } from "./createHoleMole.js";
createHoleMole();

import { createCounter } from "./createCounter.js";
createCounter();

import { createMoleSpawn } from "./createMoleSpawn.js";
setInterval(createMoleSpawn, 1600);

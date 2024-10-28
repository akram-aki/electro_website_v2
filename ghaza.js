// tunnels = [50, 100, 10];
// ressources = 80;
// ```

// output:

// ```js
// {
//   "ressourcesTransported": 80,
//   "tunnelsUsed": [0, 2, 2, 2]
// }

const tunnels = [305, 632, 121, 742];
const ressources = 3242;

function ghaza(tunnels, ressources) {
  let currRessources = ressources;
  let sortedarr = tunnels.sort();
  let i = 3;
  let currmax = [Math.max(...tunnels), tunnels.indexOf(Math.max(...tunnels))];
  let tunnelsUsed = [];
  let min = Math.min(...tunnels);
  while (currRessources >= min) {
    if (currmax[0] <= currRessources) {
      currRessources = currRessources - currmax[0];
      tunnelsUsed.push(currmax[1]);
    } else {
      i = i - 1;
      currmax = [sortedarr[i], tunnels.indexOf(Math.max(sortedarr[i]))];
    }
  }
  return ressources - currRessources;
}

console.log(ghaza(tunnels, ressources));

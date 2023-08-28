const hosiptal = {
  patients: [],
  sickPatients() {
    return this.patients.filter((p) => p.isSick);
  },
  healthPatients() {
    return this.patients.filter((p) => !p.isSick);
  },
};

function Patient(name, treament) {
  this.name = name;
  this.treament = treament;
  this.isSick = true;
  this.giveTreament = function (treament) {
    if (treament === this.treament) this.isSick = false;
  };
}

const game = setInterval(() => {
  if (hosiptal.sickPatients().length < 5) {
    const p = new Patient('K', 'water');
    hosiptal.patients.push(p);
    console.log('new patients', p);
  } else {
    clearInterval(game);
  }
  if (hosiptal.healthPatients().length === 5) {
    console.log('You win, game over');
    clearInterval(game);
  }
}, 5000);

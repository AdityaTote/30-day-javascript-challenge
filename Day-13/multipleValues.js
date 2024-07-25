const g = 9.8;
const u = 5;
const t = 10;

const displacement = () => {
    console.log(`Displacement = ${u+(0.5*g*t)}`)
}

const finalVel = () => {
    console.log(`Final Velocity = ${u+(g*t)}`);
}

const info = {
    acceleration: g,
    displacement: displacement(),
    initialVelocity: u,
    fianlVelocity: finalVel(),
    time: t,
}

module.exports = {
    g,
    u,
    t,
    displacement,
    finalVel,
    info
}
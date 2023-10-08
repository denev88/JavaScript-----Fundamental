function solve(centuries) {
    let years = centuries * 100
    let days = Math.trunc(years * 365.2422)
    let hours = 24 * days
    let minets = hours * 60
    console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minets} minets `);
}
solve(1)
solve(5)
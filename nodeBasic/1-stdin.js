console.log("Welcome to ALX, what is your name?");

process.stdin.on('data', (data)=>{
    const name = data.toString().trim();
    console.log("Yur name is:", name);
    console.log("This important software is now closing");
    process.exit();
})

import chalk from "chalk";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let tasks = [];

function showMenu() {
  console.log(chalk.blue("\nTo-Do List Options:"));
  console.log("1. Add a task");
  console.log("2. View tasks");
  console.log("3. Exit");

  rl.question(chalk.yellow("Choose an option (1-3): "), handleMenu);
}

function handleMenu(option) {
  if (option === "1") {
    rl.question(chalk.green("Enter your task: "), (task) => {
      tasks.push(task);
      console.log(chalk.greenBright("✅ Task added!"));
      showMenu();
    });
  } else if (option === "2") {
    console.log(chalk.magentaBright("\n📝 Your Tasks:"));
    tasks.forEach((task, index) => {
      console.log(`${chalk.cyan(index + 1 + ".")} ${task}`);
    });
    showMenu();
  } else if (option === "3") {
    console.log(chalk.red("👋 Exiting..."));
    rl.close();
  } else {
    console.log(chalk.red("❌ Invalid choice."));
    showMenu();
  }
}

showMenu();

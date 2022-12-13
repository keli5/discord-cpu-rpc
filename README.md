# discord-cpu-rpc
Show your friends how computer your computer is
## Installation
You'll need `node` > 15.0.0 and `npm`.<br><br>
1. Clone it: `git clone https://github.com/keli5/discord-cpu-rpc`<br>
2. Enter folder: `cd discord-cpu-rpc`<br>
3. Install dependencies: `npm install`<br>
4. Run it! `node .`
## Troubleshooting
<b>Not showing up?</b> Make sure that `Display current activity as a status message` is enabled in your `Activity Privacy` settings on Discord.<br>
<b>Updating too slow?</b> Try increasing the priority of the process.<br>
  - On Windows, this is done via the Task Manager - find node.exe in the Details tab, right click it, select Set priority, and select Realtime.
  - On Linux, use `ps -a` in your terminal of choice to find the pid of node, and use `renice -20 -p <node pid>`.
## Screenshots
![Screenshot of Intel processor](https://user-images.githubusercontent.com/46039037/207209367-64274e03-ff02-4378-bb59-688b6591df83.png)
![Screenshot of AMD processor](https://user-images.githubusercontent.com/46039037/207209388-33dd6a5e-28e5-4e17-98a4-d6ac6f71247e.png)

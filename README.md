![chatrevive](https://socialify.git.ci/pylonmodules/chatrevive/image?description=1&descriptionEditable=A%20module%20for%20reviving%20your%20dead%20chats&forks=1&issues=1&language=1&logo=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F126590123%3Fs%3D200%26v%3D4&name=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Dark)

> Made by **[proudparrot2](https://github.com/proudparrot2)** and **[3kh0](https://github.com/3kh0)**
>
> If you haven't used Pylon Modules before, or are confused by what's in this README, please read our [guide repository](https://github.com/pylonmodules/guide)


## Installation
1. Make a new file in the Pylon Studio Editor called `modules/chatrevive.ts`, and add the contents of `module.ts` to it.
2. Add this configuration to your config.ts file:
```ts
const chatrevive = {
  role: '',
  channel: '',
}; export { chatrevive };
```
> `role` is a string containing the chat revive role ID
>
> `channel` is a string containing your general chat's channel ID


3. Append this to your `main.ts` file
```ts
import 'modules/chatrevive' 
 ```
 
 When you save (CTRL/CMD + S), the module should be enabled!
 
 > If you need help with this module, please join our [support server](https://discord.gg/85Jmh74ePB)!

import { Component } from '@angular/core';

interface Scene {
  text: string;
  choices: { text: string; next: string }[];
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})

export class Tab1Page {
  scenes: { [key: string]: Scene } = {
    start: {
      text: "You are walking through the woods and see a bridge, it must be crossed. As you begin to cross the bridge, a troll jumps out!",
      choices: [
        { text: "Attack!", next: "mush" },
        { text: "Hear him out", next: "riddle" }
      ]
    },
    mush: {
      text: "The troll turns you into mush. Game over",
      choices: [{text: "Retry?", next: "start"}]
    },
    riddle: {
      text: "The troll asks: What gets shorter as it gets older?",
      choices: [
        { text: "Chicken", next: "mush"},
        { text: "Candle", next: "win"},
        { text: "Hair", next: "mush"},
        { text: "Time", next: "mush"}
      ]
    },
    win: {
      text: "You are allowed to pass, you win",
      choices: []
    }
  };

  currentScene = this.scenes['start'];

  makeChoice(nextSceneKey: string) {
    this.currentScene = this.scenes[nextSceneKey];
  }
}


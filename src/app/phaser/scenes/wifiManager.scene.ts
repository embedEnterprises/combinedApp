import { Injectable } from "@angular/core";
import * as Phaser from "phaser";
import { ServiceLocator } from "src/app/services/locator.services";

@Injectable()
export class WifiManagerScene extends Phaser.Scene {
  dataStore;
  ws;
  text;
  element;

  constructor() {
    super({ key: "WifiManagerScene" });

    this.dataStore = ServiceLocator.getInstance("dataStoreService");
    this.ws = ServiceLocator.getInstance("websocketService");
  }

  preload() {
    this.load.html("wifiForm", "assets/html/wifiManager.html");
    this.load.image("pic", "assets/turkey-1985086.jpg");
  }

  create() {

    const connect = () => {
      if (this.ws.isOpen()) {
        console.log("Got connected");
        this.scene.start("GameScene");
      } else {
        console.log("Nope nothing yet");
        setTimeout(connect, 1000);
      }
    };
    setTimeout(() => {
      this.ws.changeConnection("ws://192.168.184.58/ws");
      connect();
    }, 3000);
    
    this.add.image(400, 300, "pic");

    this.text = this.add.text(10, 10, "Please login to play", {
      color: "white",
      fontFamily: "Arial",
      fontSize: "32px ",
    });

    this.element = this.add.dom(400, 600).createFromCache("wifiForm");

    if (this.element) {
      this.element.setPerspective(800);
    } else {
      console.error("Failed to create DOM this.element from cache.");
    }

    this.element.addListener("click");

    this.element.on("click", this.handleSubmit, this);

    this.tweens.add({
      targets: this.element,
      y: 300,
      duration: 1500,
      ease: "Power3",
    });

    this.attachEvents();
  }

  private handleSubmit = (event) => {
    if (event.target.name === "submitBtn") {
      const inputSSID = this.element.getChildByName(
        "username"
      ) as HTMLFormElement;
      const inputPassword = this.element.getChildByName(
        "password"
      ) as HTMLFormElement;

      if (inputSSID.value !== "" && inputPassword.value !== "") {
        this.element.removeListener("click");

        const formData = new FormData();
        formData.append("username", inputSSID.value);
        formData.append("password", inputPassword.value);
        const url = "http://192.168.4.1/submit"; // Replace with your ESP32 server URL

        this.ws.sendMessage("S:" + inputSSID.value);
        this.ws.sendMessage("P:" + inputPassword.value);
        console.log("changing connection");
        const connect = () => {
          if (this.ws.isOpen()) {
            console.log("Got connected");
            this.scene.start("GameScene");
          } else {
            console.log("Nope nothing yet");
            setTimeout(connect, 1000);
          }
        };
        setTimeout(() => {
          this.ws.changeConnection("ws://192.168.184.58/ws");
          connect();
        }, 3000);
        // fetch(url, {
        //   method: "POST",
        //   body: formData,
        // })
        //   .then((response) => {
        //     if (!response.ok) {
        //       throw new Error("Network response was not ok");
        //     }
        //     return response.text();
        //   })
        //   .then((data) => {
        //     // Handle the response from the server (if needed)
        //     console.log("Server response:", data);
        //     document.querySelector(".res").innerHTML = data;
        //   })
        //   .catch((error) => {
        //     // Handle any errors that occurred during the fetch
        //     console.error("Fetch error:", error);
        //   });

        //  Tween the login form out
        this.tweens.add({
          targets: this.element.rotate3d,
          x: 1,
          w: 90,
          duration: 3000,
          ease: "Power3",
        });

        this.tweens.add({
          targets: this.element,
          scaleX: 2,
          scaleY: 2,
          y: 700,
          alpha: 0,
          duration: 3000,
          ease: "Power3",
          onComplete: function () {
            this.element.setVisible(false);
          },
        });

        //  Populate the text with whatever they typed in as the username!
        this.text.setText(`Welcome ${inputSSID.value}`);
      } else {
        //  Flash the prompt
        this.tweens.add({
          targets: this.text,
          alpha: 0.1,
          duration: 200,
          ease: "Power3",
          yoyo: true,
        });
      }
    }
  };

  private attachEvents() {
    this.ws.onMessage().subscribe((message) => {
      console.log(message);
      let data = message.split(":");
      switch (data[0]) {
        case "W":
          console.log("Recevied the value back -> " + data[1]);
          if (data[1] == "1") {
            this.scene.start("GameScene");
          }
          // this.dataStore.setLighting(parseInt(data[1]));
          break;
        case "T":
          this.dataStore.setBattery(parseInt(data[1]));
          break;
        default:
          break;
      }
    });
  }
}

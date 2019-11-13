import { Component, ViewChild } from "@angular/core";
import { BackedRequestsService } from "../services/backed-requests.service";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor(private back: BackedRequestsService) {}
  blacks: Array<Object> = [];
  form: Object = {
    content: "",
    author: "Allwka"
  };
  ngOnInit() {
    this.getAllBlacks();
  }
  async getAllBlacks() {
    const result = await this.back.getBlacks();
    this.blacks = result["data"];
  }
  sendBlack() {
    this.back.postBlack(this.form);
    this.getAllBlacks();
  }
  deleteBlack(id) {
    this.back.eliminateBlack(id);
    this.getAllBlacks();
  }
}
import { Component, Input, SimpleChanges, OnInit, OnChanges } from "@angular/core";
import { MessageModel, MessageType } from "../../components/message-setting";

@Component({
    selector: 'message-bar',
    templateUrl: './message-bar.component.html',
})

export class MessageBarComponent implements OnInit, OnChanges {
  @Input() messageModel: MessageModel ;
  @Input() requiredDataRefresh: boolean = false;
  
  MessageType = MessageType;

  ngOnInit(): void {
  }

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(()=>{
     this.Close();
    }, 5000);
  }

  Close():void{
    if (this.messageModel!==undefined){
      this.messageModel.MessageType = null;
    }
  }

}
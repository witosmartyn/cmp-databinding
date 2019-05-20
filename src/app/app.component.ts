import {Component, DoCheck, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    // {type: 'server', name: 's1', content: '----'},
    {type: 'server', name: 's2', content: '----'}
  ];

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed';
  }
  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

}

import {Component} from '@angular/core';
import {Tabs} from './tabs/tabs.component'
import {Tab} from './tabs/tab.component';

@Component({
    selector: 'my-app',
    template: `<tabs>
        <tab [tabTitle]="'Tab 1'">Tab 1 Content</tab>
        <tab tabTitle="Tab 2">Tab 2 Content</tab>
      </tabs>`,
    directives: [Tabs, Tab]
})

export class AppComponent {

}


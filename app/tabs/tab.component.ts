import {Component} from '@angular/core';
import {Tabs} from './tabs.component';

@Component({
    selector: 'tab',
    template: `
        <div [hidden]="!active" class="pane">
            <ng-content></ng-content>
        </div>`,
    styles: [`
        .pane{
            padding: 1em;
        }
     `],
     inputs:['title:tabTitle','active']
})

export class Tab {
    title: string;
    active = this.active || false;

    constructor(tabs: Tabs) {
        tabs.addTab(this);
    }

}
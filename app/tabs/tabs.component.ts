import {Component} from '@angular/core';
import {NgFor} from '@angular/common';
import {Tab} from './tab.component';

@Component({
    selector:'tabs',
    templateUrl:'/app/tabs/assets/templates/tabs.html'
})

export class Tabs{
    tabs: Tab[];

    constructor(){
        this.tabs = [];
    }

    addTab(tab){
        if(!this.tabs.length){
            tab.active = true;
        }
        this.tabs.push(tab);
    }

    selectTab(tab){
        _deactivateAllTabs(this.tabs);
        tab.active = true;

        function _deactivateAllTabs(tabs:Tab[]){
            tabs.forEach(tab => tab.active = false);
        }
    }


}

import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-multi-select',
    templateUrl: 'multi-select.component.html'
})
export class MultiSelectComponent implements OnInit {
    // Contains all selects possible
    @Input() private list: any[];

    // Within those possibilities, this var contains only the selected
    @Input() private selected: any[];

    // For future use, make a selection between the list
    private searchFilter: string;
    private tempList : any[] = [];


    constructor() { 
    }

    ngOnInit() {
        // if the selected is provided, make those selected on the HTML component.
    }


    updateSelection() {
    }
}
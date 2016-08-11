import { BaseComponent, BaseElement, BaseOptions } from '../base';
import { FormioComponents } from '../components';
import { FormioTemplate } from '../../formio.template';
import { FormArray, FormGroup, FormControl } from '@angular/forms';

export interface PanelOptions extends BaseOptions<any> {
    title?: string,
    theme?: string,
    components: Array<any>
}

export class PanelComponent extends BaseComponent<PanelOptions> {
    getControl(): FormArray | FormGroup | FormControl {
        if (!this.control) {
            this.control = new FormGroup({});
        }
        return this.control;
    }
}

export class PanelElement extends BaseElement<PanelComponent> {
    get numComponents() : number { return this.component.settings.components.length; }
}

export function Panel(template:FormioTemplate) {
    FormioComponents.register('panel', PanelComponent, PanelElement, {
        template: template.components.panel
    });
    return PanelElement;
}
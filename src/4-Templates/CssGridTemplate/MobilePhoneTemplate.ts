import { AddArguments, Template, TemplateDefinition } from "../abstract/abstract";
import MobileComponent from "./MobileComponent.svelte";


export class MobilePhoneTemplate extends Template<AddArguments, TemplateDefinition> {
    getChildComponent() {
        throw new Error("Method not implemented.");
    }
    getComponent() {
        return MobileComponent;
    }

    static create(definition: TemplateDefinition): MobilePhoneTemplate {
        return super._create(MobilePhoneTemplate, definition);
    }
}

import type { oRegistry } from "@omoearth/o-types";
import { AddArguments, Template, TemplateDefinition, ViewLeaf } from "../abstract/abstract";
import CssGridComponent from "./CssGridComponent.svelte";




export class SvelteLeafAddArguments extends AddArguments {
    ViewName: string;
}

export class Molecule extends ViewLeaf<SvelteLeafAddArguments> {
    viewName: string;

    getComponent(registry: oRegistry) {
        return registry.getClass(this.viewName);
    }

    static create(viewName: string) {
        var molecule = new Molecule(Molecule.name);
        molecule.viewName = viewName;
        return molecule;
    }
}



export class CssGridDefinition extends TemplateDefinition {
    templateAreas?: string;
    templateRows?: string;
    templateColumns?: string;
}

export class CssGridAddArguments extends AddArguments {
    area?: string;
}

export class CssGridTemplate extends Template<CssGridAddArguments, CssGridDefinition>{
    getChildComponent() {
        throw new Error("Method not implemented.");
    }
    getComponent() {
        return CssGridComponent;
    }

    get gridStyle(): string {
        return `--areas: ${this.definition.templateAreas};
                --columns: ${this.definition.templateColumns}; 
                --rows: ${this.definition.templateRows};`;
    }

    static create(definition: CssGridDefinition): CssGridTemplate {
        return super._create(CssGridTemplate, definition);
    }
}

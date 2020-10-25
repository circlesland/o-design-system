import type { oRegistry } from "@omoearth/o-types";
import { ViewComponent } from "./4-Templates/abstract/abstract";

export class Page {
    title: string = "";
    dataSources: string[] = [];
    ui: ViewComponent<any>;

    toString() {
        return this.serialize;
    }

    serialize() {
        function replacer(key, value) {
            if (key == "ui")
                return value.toString();
            else
                return value;
        }
        return JSON.stringify(this, replacer);
    }

    static deserialize(json: string, registry: oRegistry): Page {
        function reviver(nm, val) {
            if (nm == "ui") {
                return ViewComponent.fromObject(val, registry);
            }
            return val;
        }

        var page = JSON.parse(json, reviver);
        return registry.getNewInstance<Page>(Page.name, page);
    }
}
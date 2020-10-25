import type { Constructor, oRegistry } from "@omoearth/o-types";

export abstract class AddArguments { }
export abstract class Component<Args extends AddArguments> {
    parent: Component<any> | null = null;
    children: { child: Component<any>; args: AddArguments; }[] = [];
    type: string = "";

    constructor(type: string) {
        this.type = type;
    }

    add(child: Component<any>, args: Args): Component<Args> {
        if (this.isComposite()) {
            child.parent = this;
            this.children.push({ child, args });
        }
        else {
            throw Error("you cannot add a composite to a leaf. I have added it to parent Component.");
        }
        return this;
    }

    remove(component: Component<any>): Component<Args> {
        component.parent = null;
        this.children = this.children.filter(x => x.child == component);
        return this;
    }

    abstract isComposite(): boolean;

    toString() {
        function replacer(key, value) {
            if (key == "parent")
                return undefined;
            if (key == "children")
                return value.length ? value : undefined;
            else
                return value;
        }
        return JSON.stringify(this, replacer);
    }

    static fromString(str: string, registry: oRegistry): Component<any> {
        function reviver(nm, val) {
            if (nm == "children") {
                for (let child of val)
                    child.parent = this;
            }
            return val;
        }
        var json = JSON.parse(str, reviver);
        var composite = this.convertToComposite(json, registry);
        return composite;
    }

    private static convertToComposite(json: any, registry: oRegistry): Component<any> {
        var converted = registry.getNewInstance<Component<any>>(json.type, json, json.type);
        var children: { child: Component<any>; args: AddArguments; }[] = [];
        for (let child of converted.children) {
            let convertedChild = this.convertToComposite(child.child, registry);
            convertedChild.parent = converted;
            children.push({ args: child.args, child: convertedChild });
        }
        converted.children = children;
        return converted;
    }
}

export abstract class ViewComponent<A extends AddArguments> extends Component<A>{
}

export abstract class ViewComposite<A extends AddArguments> extends ViewComponent<A>{
    abstract getComponent();
    abstract getChildComponent();
    isComposite() {
        return true;
    }
}

export abstract class ViewLeaf<A extends AddArguments> extends ViewComponent<A>{
    abstract getComponent(registry: oRegistry);

    isComposite() {
        return false;
    }
}

export abstract class Template<A extends AddArguments, D extends TemplateDefinition> extends ViewComposite<A>{
    protected definition: D;

    protected static _create<U extends Constructor<T>, T extends Template<A, D>, A extends AddArguments, D extends TemplateDefinition>(t: U, definition: D): T {
        var instance = new t(t.name);
        instance.definition = definition;
        return instance;
    }
}

export abstract class TemplateDefinition { }
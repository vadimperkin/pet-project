import { PageHolder } from "./abstract";
import { WaitCondition } from "../app/page/waitCondition.page";
import { Form } from "../app/page/form.page"

export class Application extends PageHolder {
    public waitCondition = new WaitCondition(this.page);
    public form = new Form(this.page);
}
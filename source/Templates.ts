//import { Title } from "./Fields"

export class ListOverrideTemplate {
  View: Object;
  Body: Object;
  Header: Object;
  Footer: Object;
  Group: Object;
  Item: Object;
  Fields: Object;

  constructor() {
    this.Item = this.helloWorld;
  }

  public helloWorld() {
    return "Hello World";
  }

  public renderBody(ctx) {
      let bodyHtml: string;

      bodyHtml = '\
      <tr><td colspan="13"> \
        <div id="fip"> \
        </div> \
      <td></tr>';

      
  }

  public renderItem(ctx) {
    let itemHtml: string;

    itemHtml = '<div class="listItem">';
    itemHtml += String.format('<a href="{0}">{1}</a>', item.ID, item.Title);
    itemHtml += String.format('<div id="panel{0}" class="accordion-content" data-tab-content>', item.ID);
    itemHtml += String.format('<a href="{0}" onclick="EditItem2(event, \'{0}\');return false;" class="text-right;"><img border="0" alt="edit" src="/_layouts/15/images/edititem.gif?rev=23"> Edit Request</a>', url);
  }
}
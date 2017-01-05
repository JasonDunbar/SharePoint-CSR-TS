import { Fields } from "./Fields"

export class ListOverrideTemplate {
  View: Object;
  Body: Object;
  Header: Object;
  Footer: Object;
  Group: Object;
  Item: Object;
  Fields: Object;

  constructor() {
    this.Body = this.renderBody; // Override to custom render the entire Body
    //this.Item = this.renderItem; // Override to custom render each list item (is executed for each item)
    this.Fields = new Fields();
  }

  public renderBody(ctx) {
    let bodyHtml: string;
    let itemHtml: string = ''; // important to set this, or else we get an undesired 'undefined' when building the HTML
    let webUrl = ctx.HttpRoot;
    let listItems: Array<Object>;

    // Use Ajax call to get list items (async)
    $.ajax({
      url: webUrl + '/_api/web/lists/getbytitle(\'requests\')/items',
      type: 'GET',
      headers: { 'accept': 'application/json;odata=verbose' },
      success: (responseData) => {
        console.log(responseData.d); // Log to debugger
        console.debug('successfully retrieved list items');
        listItems = responseData.d.results;
        
        for (let listItem of listItems) {
          itemHtml += '<p>' + listItem.ID + '</p>';
        }
        $('#dataContainer').html(itemHtml); // Place the Items HTML into the main body in DOM
      },
      error: (xhr, ajaxOptions, thrownError) => {
        let resText = 'Request failed: ' + xhr.status + '\n' + thrownError + '\n' + xhr.responseText;
        console.log(resText);
      }
    });

    // Construct the body of the list view
    // 'dataContainer' is added to in the DOM in the 'success' part of the Ajax call
    bodyHtml = '\
      <tr><td colspan="13"> \
        <div id="dataContainer"></div> \
      <td></tr>';
    return bodyHtml;
  }

  public renderItem(ctx) {
    let itemHtml: string;

    itemHtml = '<div class="listItem">';
    itemHtml += String.format('<a href="{0}">{1}</a>', ctx.CurrentItem.ID, ctx.CurrentItem.Title);
    itemHtml += String.format('<div id="panel{0}" class="accordion-content" data-tab-content>', ctx.CurrentItem.ID);
    //itemHtml += String.format('<a href="{0}" onclick="EditItem2(event, \'{0}\');return false;" class="text-right;"><img border="0" alt="edit" src="/_layouts/15/images/edititem.gif?rev=23"> Edit Request</a>', url);
    
    return itemHtml;
  }
}
/*
  Copyright 2017 Atos Consulting Switzerland

  This file is part of SharePoint-CSR-TS.

  SharePoint-CSR-TS is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  SharePoint-CSR-TS is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with SharePoint-CSR-TS.  If not, see <http://www.gnu.org/licenses/>.
*/

import { Fields } from "./Fields"

export class ListOverrideTemplate {
  //  Declare the objects that can be overriden within the Template
  View: Object;
  Body: Object;
  Header: Object;
  Footer: Object;
  Group: Object;
  Item: Object;
  Fields: Object;

  constructor() {
    // Further define the objects to override
    this.Body = this.renderBody; // Override to custom render the entire Body
    //this.Item = this.renderItem; // Override to custom render each list item (is executed for each item)
    this.Fields = new Fields(); // Overriden object that will determine the rendering of fields on form views
  }

  public renderBody(ctx) {
    let bodyHtml: string;
    let itemHtml: string = ''; // important to set this, or else we get an 'undefined' at the beginning when building the HTML
    let webUrl = ctx.HttpRoot;
    let listItems: Array<Object>;

    // Use Ajax call to get list items (async)
    $.ajax({
      url: webUrl + '/_api/web/lists/getbytitle(\'CustomList\')/items',
      type: 'GET',
      headers: { 'accept': 'application/json;odata=verbose' },
      success: (responseData) => {
        console.log(responseData.d); // Log to debugger
        console.debug('successfully retrieved list items');
        listItems = responseData.d.results;
        
        for (let listItem of listItems) {
          // the following line will raise typescript compile time errors due to it not being aware of the listItem object definition.
          // as long as the Typescript compiles successfully to Javascript and you can see the output, you can ignore such 'errors'
          itemHtml += '<p><strong>List Item Title: </strong>' + listItem.Title + ' <strong>List Item ID:</strong> ' + listItem.ID + '</p>';
        }
        $('#dataContainer').html(itemHtml); // Place the Items HTML into the main body in DOM
      },
      error: (xhr, ajaxOptions, thrownError) => {
        let resText = 'Request failed: ' + xhr.status + '\n' + thrownError + '\n' + xhr.responseText;
        console.log(resText);
      }
    });

    // Construct the body of the list view
    // 'dataContainer' is populated as a result of the above asynch ajax call
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
    itemHtml += String.format('<div id="panel{0}"></div>', ctx.CurrentItem.ID);
    
    return itemHtml;
  }
}
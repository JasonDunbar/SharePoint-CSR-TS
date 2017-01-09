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

export class Title {
  NewForm: Function = this.hiddenFieldTemplate;
  EditForm: Function = this.hiddenFieldTemplateOnPreRender;

  // This function provides the rendering logic
  public hiddenFieldTemplate() {
    return "<span class='csrHiddenField'></span>"; 
  }

  // This function provides the rendering logic 
  public hiddenFieldTemplateOnPreRender(ctx) { 
      $(".csrHiddenField").closest("tr").hide(); 
  } 
}
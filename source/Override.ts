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

// JS Link Property Value for reference - you'll want to update with the correct path to your scripts
// ~site/SiteAssets/vendor/js/jquery.js|~site/SiteAssets/bundle.js
import { ListOverrideTemplate } from "./Templates";

class listRenderOverride {
  // Define pre-render functions
  // For both the PreRender and PostRender objects, the array of functions must take on the type <any> 
  // This is only really to avoid Typescript compilation issues because @types\sharepoint specifies that 
  // the PreRender and PostRender objects are of type RenderCallback or RenderCallback[] but does not expose the type
  OnPreRender: Array<any> =  [
    (ctx: Object) => {
      console.log("OnPreRender fired");
    }
  ];

  // Declare the Templates object that will contain the overrides
  Templates: Object;

  // Define post-render functions
  OnPostRender: Array<any> = [
    (ctx: Object) => {
      console.log("OnPostRender fired");
    }
  ];
}

// Instantiate the Override and Template objects and register with SP
let customOverride = new listRenderOverride();
customOverride.Templates = new ListOverrideTemplate();
SPClientTemplates.TemplateManager.RegisterTemplateOverrides(customOverride);
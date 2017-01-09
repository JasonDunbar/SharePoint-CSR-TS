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
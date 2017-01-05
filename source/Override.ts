// JS Link Property
// ~site/SiteAssets/vendor/js/jquery.js|~site/SiteAssets/vendor/js/foundation.js|~site/SiteAssets/bundle.js
import { ListOverrideTemplate } from "./Templates";

class listRenderOverride {
  // Register pre-render functions
  // CHALLENGE - for both the PreRender and PostRender objects we must use <any> as the type to avoid Typescript compilation issues
  // @types\sharepoint specifies that the PreRender and PostRender objects are of type RenderCallback or RenderCallback[] but does not expose the type
  OnPreRender: Array<any> =  [
    (ctx: Object) => {
      console.log("OnPreRender fired");
    }
  ];

  // Initialise the Templates object that will contain the overrides
  Templates: Object;

  // Register post-render functions
  OnPostRender: Array<any> = [
    (ctx: Object) => {
      console.log("OnPostRender fired");
    }
  ];
}

let customOverride = new listRenderOverride();
customOverride.Templates = new ListOverrideTemplate();
SPClientTemplates.TemplateManager.RegisterTemplateOverrides(customOverride);
import { ListOverrideTemplate } from "./Templates";

class listRenderOverride {
  // declare the properties for objects and configuration
  Templates: any;
  ListTemplateType: number;

  // deal with PreRender and PostRender
  OnPreRender =  (ctx: Object) => {
    console.log("OnPreRender fired");
  };

  OnPostRender = (ctx: Object) => {
    console.log("OnPostRender fired");
  };
}

let customOverride = new listRenderOverride();
customOverride.Templates = new ListOverrideTemplate();
SPClientTemplates.TemplateManager.RegisterTemplateOverrides(customOverride);

/* Sample
var requestsListOverride = {};
requestsListOverride.Templates = {};
requestsListOverride.Templates.Item = fipViews.requestItemHtml;
requestsListOverride.ListTemplateType = 100;
SPClientTemplates.TemplateManager.RegisterTemplateOverrides(requestsListOverride);
*/
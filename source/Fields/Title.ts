export class Title {
  NewForm: Function = this.hiddenFieldTemplate;
  EditForm: Function = this.hiddenFieldTemplateOnPreRender;

  // This function provides the rendering logic
  public hiddenFieldTemplate() {
    return "<span class='csrHiddenField'></span>"; 
  }

  // This function provides the rendering logic 
  public hiddenFieldTemplateOnPreRender(ctx) { 
      //$(".csrHiddenField").closest("tr").hide(); 
  } 
}
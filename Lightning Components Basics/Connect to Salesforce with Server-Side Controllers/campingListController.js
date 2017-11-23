({
    doInit  : function(component, event, helper) {
		var action = component.get("c.getItems");
        action.setCallback(this, function(response){
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                component.set("v.items", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
	},
    
    clickCreateCamping: function(component, event, helper) {
        if(helper.createItem(component)){            
            var newItem = component.get("v.newItem");
            helper.createCamping(component, newItem);
        }
    },
    
    CreateCamping : function(component, event, helper){
        helper.validateFields (component,component.find("name"));
        helper.validateFields (component,component.find("Price"));
        helper.validateFields (component,component.find("Quantity"));
        if(component.get("v.er") === false)
        {     
            //Here I removed the lines and shifted the code to the helperJs       
            console.log('Before:'+Items);            
            helper.CreateCampaign(component,Item);             
             console.log('After:'+Items);                    
        }
	}    
})

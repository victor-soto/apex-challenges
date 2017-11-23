({
	createCamping : function(component, item) {
        var action = component.get("c.saveItem");
        action.setParams({
            "item": item
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                	console.log('pasok1');       
                    var items = component.get("v.items");        
                	items.push(response.getReturnValue());
                    component.set('v.items', items);             
                    
                    component.set("v.newItem",{ 'sobjectType': 'Camping_Item__c','Name': '','Quantity__c': 0, 'Price__c': 0,'Packed__c': false });
            }
         });
         $A.enqueueAction(action);        
	},
    createItem: function(component, camping) { 
		var name = component.find('Name').get("v.value");
        var quantity = component.find('Quantity').get("v.value");
        var price = component.find('Price').get("v.value");
        var validation = true;
        
        if($A.util.isEmpty(name)) {
            validation = false;
            component.find("Name").set("v.errors", [{message:"Camping name can't be blank."}]);
        }
        if(quantity == 0) {
            validation = false;
            component.find("Quantity").set("v.errors", [{message:"Camping quantity can't be blank."}]);
        }
        if(price == 0) {
            validation = false;
            component.find("Price").set("v.errors", [{message:"Camping price can't be blank."}]);
        }
        return(validation);
    }
})

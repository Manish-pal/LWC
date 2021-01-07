trigger MK_Case_trigger on Case (before insert) {

    for(Case c : Trigger.new) {
        
        if(c.Origin == 'Email') {
            
            c.Status = 'New';
            c.Priority = 'Medium';
            c.Description = 'This is updated after the trigger is ran';
            
        }
        
    }

}
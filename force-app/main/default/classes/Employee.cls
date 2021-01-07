public class Employee {
    
    public decimal exp {get;set;}
    public decimal salary {get;set;}
    public decimal bonus {get;set;}
    
    public void calculate(){
        /*if(Test.isRunningTest()) {
            exp = 6;
        }*/
        if((exp != null) && (exp > 0)) {
            if(exp > 5) {
                salary = 68000;
				bonus = salary * 0.10; 
                
            }else{
             salary = 36540;
             bonus = salary * 0.10; 
             System.debug('This is deployed via the VS code');  
            }
            apexpages.Message ss = new apexpages.Message(apexpages.Severity.CONFIRM, 'SUCCESS');
            apexpages.addMessage(ss);
        }else{
            apexpages.Message ms = new apexpages.Message(apexpages.Severity.ERROR,'Please enter a valid Experience value');
        	apexpages.addMessage(ms);
        }
        
        
    }

}
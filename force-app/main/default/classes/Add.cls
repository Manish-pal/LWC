public class Add {
	
    public Integer firstNum {get;set;}
    public Integer secondNum {get;set;}
    public Integer sum {get;set;}
    
    public void add() {
        
        sum = firstNum + secondNum;
    }
    
    public void reset() {
        firstNum = null;
        secondNum = null;
        sum= null;
        
    }
}
public class StudentExample {
	
    public String name {set;get;}
    public String branch {set;get;}
    public String city {set;get;}
    
    
    public StudentExample() {
        name = 'Manish Kumar';
        branch = 'Computer Science';
        city = 'Chandigarh';
        
    } 
    
    public void DataUpdation() {
        name = 'Karan';
        branch = 'Aeronautical Engineering';
        city = 'Delhi';
    }
    
    public void Reset() {
        
        name = 'Manish Kumar';
        branch = 'Computer Science';
        city = 'Chandigarh';
    }
}
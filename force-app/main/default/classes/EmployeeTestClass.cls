@isTest
private class EmployeeTestClass {
	
    @isTest static void myTest1() {
        Employee obj = new Employee();
        obj.exp = 6;
		obj.calculate();

    }
    
    @isTest static void myTest2() {
        Employee obj = new Employee();
        obj.exp = 2;
        obj.calculate();

    }

    @isTest static void myTest3() {
      Employee obj = new Employee();
		obj.exp = 0;
		obj.calculate();

    }
    
}
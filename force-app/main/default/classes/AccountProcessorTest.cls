@IsTest
public class AccountProcessorTest {

    @IsTest
    private static void testcase1() {
        
        List<Account> acList = new List<Account>();
        List<Contact> conList = new List<Contact>();
        for(Integer i = 0; i < 3; i++) {
            
            Account ac1 = new Account();
            ac1.Name = 'TestAccount'+i;
            acList.add(ac1);
        }
        insert acList;
        
        for(Integer i = 0; i < 3; i++) {
            
            Contact con = new Contact();
            con.LastName = 'LastName'+i;
            con.AccountId = acList[i].Id;
            conList.add(con);
        }
        
        insert conList;
        
        List<Id> acclist = new List<Id>();
        
        //AccountProcessor obj = new AccountProcessor();
            for(Account a : [Select Id from Account limit 10]) {
                acclist.add(a.Id);
            }
        Test.startTest(); 
        AccountProcessor.countContacts(acclist);
        Test.stopTest(); 
    }
}
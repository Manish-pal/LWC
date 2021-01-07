public with sharing class AccountProcessor {
    
    @future(callout = true)
    public static void countContacts(List<Id> accIdList) {
        Map<Id,Integer> AccToContactCount = new Map<Id, Integer>();
        List<Account> listToBeUpdated = new List<Account>();
        
        List<contact> contactList = [SELECT Id, accountID from contact where accountID IN: accIdList];
        SObjectAccessDecision securitydecision = Security.stripInaccessible(AccessType.READABLE, contactList);
        contactList = securitydecision.getRecords();
        
        System.debug('The contact List ' + contactList);
        
        for(Contact con : contactList) {
            if(!AccToContactCount.containsKey(con.AccountId)) {
                AccToContactCount.put(con.AccountId, 1);
            }else{
                //Incrementing the count of contacts associated witht the particular Acc ID
                AccToContactCount.put(con.AccountId, AccToContactCount.get(con.AccountId) + 1);
            }
            
        }
        for(Id ac : AccToContactCount.keyset()) {
            
            Account accObj = new Account();
            accObj.Id = ac;
            accObj.Number_of_Contacts__c = AccToContactCount.get(ac);
            listToBeUpdated.add(accObj);
        }
        
        Database.insert(listToBeUpdated);
    }
}
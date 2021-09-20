public with sharing class AccountManager {

    //wire service can only make a call to cacheable methods response will be cached
/*
    @AuraEnabled(cacheable = true)
    public static List<Account> getAccount(){
        try {
            
            return [SELECT Id, Name, Phone FROM ACCOUNT LIMIT 10];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
*/

    @AuraEnabled(cacheable = true)
    public static  List<Account> getAccount(Integer numOfRecords){
        try {
            
            return [SELECT id, Name, Phone FROM Account limit :numOfRecords];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}

public with sharing class opportunityData {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunities(String accId, Decimal amt) {
        
            return [Select Id, Name, Amount from Opportunity where AccountId = :accId and amount <: amt];
       
    }
}


/*
    public static List<Opportunity> getOpportunities(String accId) {
        
            return [Select Id, Name, Amount from Opportunity where AccountId = :accId];
       
    }

*/
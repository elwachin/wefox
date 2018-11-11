Feature: Surgimap automation

Scenario: Surgimap
Given I navigate to company page
And I click on login
And I see login page
And I click on create account
And I see create account page
When I create the account
Then I check the activation email appeared in the mailbox
 

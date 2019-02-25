Feature: wefox

Scenario: Login
Given I navigate to company page
When I login
And I am on homepage
And I navigate contracts page
And I navigate to personal data
Then I logout
 

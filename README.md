# test-businessX-ride-sharing

Question: A new Ride sharing company is entering the market in Lagos and they would like to make sure they don't mix up their commission from rides taken by independent riders on the platform. How can Flutterwave solve this? 

ANSWER:
Flutterwave can solve this issue for the ride-sharing company by training them on the sub account and split payment features.
-Firstly, the ride-sharing company needs to create an account on the Fluttterwave dashboard that would enable them make live and sandboxed API calls to Flutterwave API end points from their website or mobile app. So when a rider signs up on the website or app and choose a mode of payment, a unique ID is assigned to the rider which links to the ride-sharing company flutterwave dashboard.
-Thereafter, the ride-sharing company needs to create a sub-account on their Flutterwave dashboard for every registered driver on their platform. Then after a successful ride sharing trip, the Card charge Parameter or preauthorize parameter will be passed;this will be used to validate and charge each rider their share of the trip. 
The ride-sharing company will then implement the rave split payment feature using their rave API and the sub-account ID. Rave's split payment feature allows you split a transaction between two (2) or more accounts and collect fees on the transaction. 
This split payment feature will allow the ride-sharing company to collect payments and revenue as commission based on percentage after a successful trip by an independent rider.
This feature automatically split the settlement based on type of split set(flat or percentage) between the ride-sharing company and the sub-account. The registered sub-account gets credited and the ride sharing company gets their own commission credited as well. 


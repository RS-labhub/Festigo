## Routes

1. **auth**
   - 1.1 signin
   - 1.2 signup
   - 1.3 forget password

2. **event**
   - 2.1 createEvent (also has to hit createchannel endpoint scheduling and venue will be done over here)need clarification on this
   - 2.2 AddGuests(rsvp -pending)
   - 2.3 AddVendors
   - 2.4 GetVendors
   - 2.5 DeleteVendors
   - 2.6 Payments

3. **channels**
   - 3.1 createchannel
   - 3.2 getallchannels(according to the event)
   - 3.3 addpeopletochannel
   - 3.4 getmessagesinchannel
   - 3.5 sendmessageinchannel
   - 3.6 editmessageinchannel
   - 3.7 deletemessageinchannel

4. **dms**
   - 4.1 createchat
   - 4.2 getallchats(according to the events)
   - 4.3 getmessagesinchannel
   - 4.4 sendmessageinchannel
   - 4.5 editmessageinchannel
   - 4.6 deletemessageinchannel
5. **Payments**
   - 5.1 getallpayments
   - 5.2 makeanpayment

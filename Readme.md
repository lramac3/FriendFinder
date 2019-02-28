# Friend Finder

 [Find a Friend!](https://friend-finder-fsfs.herokuapp.com/)

![friend-finder](https://user-images.githubusercontent.com/28829258/53590763-85d8fc00-3b60-11e9-932e-3a46b211052e.png)

###Overview

A compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site takes in results from users' surveys, then compares their answers with those from other users. The app then displays the name and picture of the user with the best overall match.

###Description

Friend Finder implements friend matching based on the user's responses to a ten-question survey. The user responds to questions with values from 1 (Strongly Disagree) to 5 (Strongly Agree). The app then takes the scores of the recently completed survey and compares them to every other friend already in the data and returns the one with the lowest difference in score. In other words, it returns the friend with the most answers in common.Users can also access all friends by looking at API Friends List for JSON object of all friends.


### Technologies

* HTML 
* CSS
* JavaScript

### Dependencies

* express
* body-parser
* path

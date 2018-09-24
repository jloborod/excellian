## Excellian Coding challenge

I have a few doubts regarding some of the behaviours of the application as I just had description and the screen shot. To buy/sell currency the user must select first one they want to do and then type the amount (which will be displayed in the other read only input). Then clicking on RFS the user can record the transaction.

In order to create the stream of data I used RxJS observables, as I consider is the best option.

Instead of displaying a popup, I display an alert as I assume you just wanted to display the action and you didn't really mind about the presentation of the element (there wasn't anything challenging about displaying a popup, but it might cause problems with popup blockers).

I didn't eject the application as I haven't changed any webpack configuration, and there was any particular requirement in the test regarding this.

I have written a bit of a mix of tests, using mainly Enzyme and Jest. We usually use snapshot testing to make sure that when the templates get updated the developer doesn't change the markup involuntarily.

Regarding the styles, I wouldn't had included all the styles in JS, but in css files imported inside the components, however, the challenge requested that, so I did, apart from some reset styles that I added to the application.

## Install and run the application

$ git checkout https://github.com/fabiotisci/excellian.git

$ cd excellian

$ npm install && npm test

$ npm start

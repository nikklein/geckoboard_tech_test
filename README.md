# Integrations Engineer Coding Challenge #

#### Technology
To write this program I chose Node.js/JS. I feel more comfortable with Ruby/Rails, but I am curious to learn Node.js and JS. Thus, if in a challenge I have a choice of languages, platforms I often choose Node.js/JS.
Initially I wrote MVP and the first version of the program has been written within one file ```app.js```. After I decided to refactor the program and rewrote it using modules. I see the advantage of using modules - it makes a program flexible and structured.

#### Description
This program pulls data from external API and pushes this data onto Geckoboard using Geckoboard's API.
This program is designed to use a Blockchain API. However program can be easily refactored to be able use another API.

#### Manual
In the beginning you need to register at ```geckoboard.com``` to gain your API key. Your key can be stored in .env file to avoid publishing it on Github and etc. Install ```dotenv```, create ```.env``` in your app's folder, then store Geckoboard API key as key-value pair ```API_KEY = YOUR_KEY``` in ```.env```. Next you need to install Geckoboard API. In command line run ```npm install geckoboard```.
To start using this program type in the currency abbreviation in ```app.js``` and set an interval in milliseconds. Now in terminal ```cd```to the app's folder and run ```node.js app.js```. Programs runs automatically with predefined intervals. You can change it at any time. Soon after you will see following messages in terminal:

>Authentication successful

>Dataset created and data added

It means your data has been stored into Geckoboard Datasets and now you can add widgets in Geckoboard Dashboard to display your data. Otherwise you get an error message with full stack trace.
Since this moment you are able to add widgets onto Geckoboard :sparkles :metal

#### How it works
In the program I use "iffy"(IIFE) to run the code. It calls function which creates or updates dataset, and a function ```setInterval``` which calls the same function with predefined interval.
All it does it makes a simple request to Blockchain API and passes response body into function ```updateRates```. This function in turn updates rates and converts money to "coins" and passes all values into ```updateDataSet``` function. This function is a "wrapper" for Geckoboard API function which doesn't accepts arguments by default. Now data has been stored and sent to Geckoboard.

#### Future development
I tried to automatically generate many datasets from response body for all currencies at the same time. I spent a few hours to make it work. All I've done is that I can create dataset for all currencies with predefined names, however, for some reason it stores only value of last key in response body object.

#### [Link to dashboard] (https://objcoding.geckoboard.com/dashboards/DC4047A4A66CEDBF)

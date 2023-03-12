# Simply Weather 🔥

- [View the live project here](https://jmcbeath1966.github.io/Simply-Weather/)

- Mock Up Design ![Here](https://github.com/JMcbeath1966/Simply-Weather/blob/main/images/all-devices-black.png)

## Project Overview 🔥

This project is an interactive site providing the weather for cities and information on other weather/climate related sites, to make it more than just a weather application. The site will be interactive, using HTML5, CSS3 and JavaScript(ES6) to code the site.

The website site is designed to be accessed and responsive to make it simple for players to access weather details and, using clear click-on links, find out about weather related topics such as climate change and other world weather information services.

## User Experience 🔥

- Visit goals

  - Prominent search function to enter city at the earliest opportunity
  - Visually access a range of key weather details for the users chosen city location.
  - Navigate intuitively through the site to find key information about the weather related topics
  - Provide key information to encourage the user to look at the recommended sites
  - Easy access to the recommended sites.

  ## Design 🔥

* Color Scheme

  - White will be the only color used for text and icons. Default color will be the only exception as this will use the default color.

* Typography

  - The font-family is: font-family: 'Golos Text', sans-serif which has clean, modern style.

* Imagery Design

  - The imagery is designed to be striking and catch the user's attention, but not distract too much from the content, hence a subtle linear gradient has been applied

## Wireframes 🔥

- [Balsamic wireframe designs - live link](https://balsamiq.cloud/se8movd/pg4vl36/r1744)

## Technologies Used 🔥

1. [Bootstrap 4.4.1:](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
   - Bootstrap was used to assist with the responsiveness and styling of the website.
2. [Google Fonts:](https://fonts.google.com/)
   - Google fonts were used to import the Lato and Oswald fonts into the style.css file which is used on all pages throughout the project.
3. [jQuery:](https://jquery.com/)
   - jQuery came with Bootstrap to make the navbar responsive but was also used for the smooth scroll function in JavaScript.
4. [GitHub:](https://github.com/)
   - GitHub is used to store the projects code after being pushed from Git.
5. [Photoshop:](https://www.adobe.com/ie/products/photoshop.html)
   - Photoshop was used to resize images and editing photos for the website.
6. [Balsamiq:](https://balsamiq.com/)
   - Balsamiq was used to create the during the design process.
7. [Code Institute Template:](https://codeinstitute.net/)
   - The template was used to provide various libraries to simplify coding within GitPod
8. [GitPod](https://www.gitpod.io/)
   - GitPod was used for version control, storage and deployment of the Simply Weather site

CHECK ABOVE

## Testing 🔥

## HTML, CSS and SEO Testing 🔥

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

- W3C Markup Validator - Saved Result Files and Resolutions -[Here](https://github.com/JMcbeath1966/Simply-Weather/blob/main/validation/w3c-html-results.png)
  - Error produced on trailing slashes on void elements. These were removed as the can act badly with attribute values.
- W3C CSS Validator - Saved Result Files and Resolutions - [Here](https://github.com/JMcbeath1966/Simply-Weather/blob/main/validation/w3c-css-results.png)
  - No errors
- Lighthouse SEO - Saved Result Files and Resolutions - [Here](https://github.com/JMcbeath1966/Simply-Weather/blob/main/validation/seo-lighthouse-sw.png)
  - Accessability, performance and best practice all 91% and above.

## Javascript Testing 🔥

My choice of project is a realtively simple to code appication with manual testing, and this decision was based on three key factors:

1. - Firstly, I wanted to produce a project using my own code to the largest possible extent and not to copy code from external sources unless absolutely needed. 
2. - Secondly, A project with simpler code would also require less testing, and due a restricted time line (two weeks to produce the whole project) I did not have the time required to produce automated testing.

I fully understand that, in a real development environment, automated testing is an essential element to testing and I would definitely use JEST had time allowed. I will ensure my following projects have automated testing included as appropriate to the project. Automated testing is efficient, faster, and more accurate than manual testing, and it's ideal for testing complex applications. Automated testing is also repeatable, meaning that the same tests can be run multiple times to ensure that the code is working as intended. 

Manual testing requires a lot of effort and time, and it's prone to human errors. However, manual testing is flexible and allows testers to identify issues that might be missed by automated testing. I understand manual testing can lead to high error rates, but for the reasons I have already stated in this section I think that manual testing is the right solution within the context of my abiities as a coder, the project simplicity and the constraints of timescales for the project to be completed

 - JSLint Testing and Results

The approach adopted was to identify any critical errors in code and correct them one by one. 
 - There was only one error which was the baseurl code was mistakenly entered as just base. I corrected this during production and committed the change with comments supporting the correction.

Then work on any warnings would be corrected individually. Screenshots bellow show JSLint after corrections.
  - The first js lint produced 0 errors, but did include 23 warnings 
  The first correction was to change single quotation marks to double quotation marks which has been corrected - [Here](https://github.com/JMcbeath1966/Simply-Weather/blob/main/validation/jslint-test1-sw.png)
  - Second issue resolved was trailing spaces between lines of code. Removed as required - [Here](https://github.com/JMcbeath1966/Simply-Weather/blob/main/validation/jslint-test2-sw.png)
  - Third issue was trailing spaces at the end of code lines - [Here](https://github.com/JMcbeath1966/Simply-Weather/blob/main/validation/jslint-test3-sw.png)
  - Issue four was correcting the message (Wrap the parameter before '=>' in parens.) - The weather variable had no parethesis, and whilst this had seemingly no impact on performance, the error still shows. I have tried to use StackOverflow and ESLint sites to correct this but as performance is not impacted in the use of the site I decided to make no amendments to the script.js code - [Here](https://github.com/JMcbeath1966/Simply-Weather/blob/main/validation/jslint-test4-sw.png)

## Further Testing 🔥

- Predominantly friends & family (total 8 users) were asked to use and test the website and to provide user experience feedback. My son who is also learning to code also provided feedback on the website.
- The website was tested on Mozilla, Google Chrome, Safari, Microsoft Edge, and Internet Explorer browsers
- Testing was carried out thoroughly on external/internal links to ensure they all opened to a new tab.
- The website was viewed on a variety of mobiles, laptop and desktops.
- My mentor also provided valued feedback on the project.
- One significant issue that reamins in the application (due to time constraints) is a message to notify users that if a city does not come up becuase there is more than one city with the same name, then a message should be used to say to try adding a country name to the city, seperated with a comma to get the result in the country you want!

### Visitor Goals 🔥

1. As a user, I want to easily understand the main purpose of the site and find the weather easily - [Here] (https://github.com/JMcbeath1966/Simply-Weather/blob/main/images/user-experience-1.png)
3. Visually access all key weather details for the users chosen city location. - [Here] (https://github.com/JMcbeath1966/Simply-Weather/blob/main/images/user-experience-1.png)
4. Navigate intuitively through the site to find key information - [Here] (https://github.com/JMcbeath1966/Simply-Weather/blob/main/images/user-experience-2.png)
5. Provide key information to encourage the user to look at the recommended sites - [Here] (https://github.com/JMcbeath1966/Simply-Weather/blob/main/images/user-experience-2.png)
6. Easy access to the recommended sites. - [Herw] (https://github.com/JMcbeath1966/Simply-Weather/blob/main/images/user-experience-2.png)

EVIDENCE THESE WITH EMBEDDED IMAGES

## Deployment 🔥

Site is deployed using GitHub pages and is live now.

### GitHub Pages 

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
   - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://github.com) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

### Code 🔥

- JavaScript (ES6)
- HTML5
- CSS3
- Bootstrap4: Bootstrap Library used throughout the project to make site responsive using the Bootstrap Grid System.

### Content and Problem Solving 🔥

The function getResults (Query) was produced using a StackOverflow solution to the fetch, then syntax

The remainder of the code is my own work

### Media 🔥https://github.com/JMcbeath1966/Simply-Weather.git

### Acknowledgements 🔥

Thanks for my Code Institute Tutor (Rachel Furlong) and my mentor (Jubril Akolade) for their encouragment and advice.


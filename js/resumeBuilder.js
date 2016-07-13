//create Objectvar bio = {    "name": "Jung Younghun",    "role": "Web Developer",    "contacts": {        "mobile": "010-2780-6169",        "email": "youngj6169@gmail.com",        "github": "Younghun-Jung",        "twitter": "@younghun",        "location": "Seoul",        "location_details": "384-1 Gildong Gangdong-gu Seoul South Korea"    },    "welcomeMessage": "Welcome to Young's World",    "skills": [        "HTML", "CSS", "JavaScript", "InfoVis"    ],    "biopic": "./images/myImg.jpeg",    "displayTopContacts": function() {    	//Top Name & Role		var formattedName = HTMLheaderName.replace("%data%", bio.name);		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);		$('#header').prepend(formattedRole);		$('#header').prepend(formattedName);		        var formattedTopContacts;        formattedTopContacts = HTMLmobile.replace("%data%", bio.contacts.mobile);        $('#topContacts').append(formattedTopContacts);        formattedTopContacts = HTMLemail.replace("%data%", bio.contacts.email);        $('#topContacts').append(formattedTopContacts);        formattedTopContacts = HTMLgithub.replace("%data%", bio.contacts.github);        $('#topContacts').append(formattedTopContacts);        formattedTopContacts = HTMLtwitter.replace("%data%", bio.contacts.twitter);        $('#topContacts').append(formattedTopContacts);        formattedTopContacts = HTMLlocation.replace("%data%", bio.contacts.location);        $('#topContacts').append(formattedTopContacts);    },    "displayFooterContacts": function() {        var formattedTopContacts;        formattedTopContacts = HTMLmobile_footer.replace("%data%", bio.contacts.mobile);        $('#footerContacts').append(formattedTopContacts);        formattedTopContacts = HTMLemail_footer.replace("%data%", bio.contacts.email);        $('#footerContacts').append(formattedTopContacts);        formattedTopContacts = HTMLgithub_footer.replace("%data%", bio.contacts.github);        $('#footerContacts').append(formattedTopContacts);        formattedTopContacts = HTMLtwitter_footer.replace("%data%", bio.contacts.twitter);        $('#footerContacts').append(formattedTopContacts);        formattedTopContacts = HTMLlocation_footer.replace("%data%", bio.contacts.location);        $('#footerContacts').append(formattedTopContacts);    },    "displayBioPic": function() {        var formattedBioPic;        formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);        $('#topContacts').after(formattedBioPic);    },    "displayWelcomeMsg": function() {        var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);        $('#header').append(formattedMsg);    },    "displaySkills": function() {        if (bio.skills.length) {            $('#header').append(HTMLskillsStart);            var formattedSkill;            for (var i in bio.skills) {                formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);                $('#skills').append(formattedSkill);            }        }    },    "display": function(){    	bio.displayTopContacts();		bio.displayFooterContacts();		bio.displayBioPic();		bio.displayWelcomeMsg();		bio.displaySkills();		bio.displayFooterContacts();    }}var education = {    "schools": [{        "name": "Korea Advanced Institue Science and Technology",        "city": "Daejeon South Korea",        "degree": "Masters",        "majors": ["Information visualization, HCI"],        "dates": 2016,        "url": "http://ct.kaist.ac.kr"    }],    "onlineCourses": [{        "title": "Web Development Course",        "school": "Coding Everybody",        "dates": 2016,        "url": "http://opentutorials.org"    }, {        "title": "Front-end Web Development",        "school": "Udacity",        "dates": 2016,        "url": "http://www.udacity.com"    }],    "display": function() {        $('#education').append(HTMLschoolStart);        var formattedVar;        //School        for (var sch in education.schools) {            formattedVar = HTMLschoolName.replace("#", education.schools[sch].url);            formattedVar = formattedVar.replace("%data%", education.schools[sch].name);            formattedVar = formattedVar + HTMLschoolDegree.replace("%data%", education.schools[sch].degree);            $('.education-entry').append(formattedVar);            formattedVar = HTMLschoolDates.replace("%data%", education.schools[sch].dates);            $('.education-entry').append(formattedVar);            formattedVar = HTMLschoolLocation.replace("%data%", education.schools[sch].city);            $('.education-entry').append(formattedVar);            if (education.schools[sch].majors.length > 0) {                for (var img in education.schools[sch].majors) {                    formattedVar = HTMLschoolMajor.replace("%data%", education.schools[sch].majors[img]);                    $('.education-entry').append(formattedVar);                }            }        }        //$('.education-entry').append(HTMLonlineClasses);        for (ons in education.onlineCourses) {            formattedVar = HTMLonlineTitle.replace("#", education.onlineCourses[ons].url);            formattedVar = formattedVar.replace("%data%", education.onlineCourses[ons].title);            formattedVar = formattedVar + HTMLonlineSchool.replace("%data%", education.onlineCourses[ons].school);            $('.education-entry').append(formattedVar);            formattedVar = HTMLonlineDates.replace("%data%", education.onlineCourses[ons].dates);            $('.education-entry').append(formattedVar);            formattedVar = HTMLonlineURL.replace("%data%", education.onlineCourses[ons].url);            $('.education-entry').append(formattedVar);        }    }}var work = {    "jobs": [{        "employer": "National Research Foundation",        "title": "Interaction and InfoVis for Tiled display system",        "location": "Daejeon, South Korea",        "dates": "June 2014 - December 2015",        "description": "There has been research about tiled display system which can be used as a screen by combining multiple displays in specific configuration for overcoming limitations of single display in size and resolution. However, tiled display system has been used mainly by expert people in restricted environments because of complex architecture of it. In KAIST GSCT Experience Lab, I participated in research on scalability of usage and improving to be used widely by general people.",        "images": ["./images/tile1.png", "./images/tile2.png", "./images/tile3.png"]    }],     "displayWork": function() {        for (var i=0; i<work.jobs.length; i++) {            $("#workExperience").append(HTMLworkStart);            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);            var formattedEmployerTitle = formattedEmployer + formattedTitle;            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);            $(".work-entry").append(formattedEmployerTitle);            $(".work-entry").append(formattedDates);            $(".work-entry").append(formattedLocation);            $(".work-entry").append(formattedDescription);            //I wanna add some images for my work            if (work.jobs[i].images.length > 0) {                for (var img in work.jobs[i].images) {                    var formattedImage = HTMLworkImage.replace("%data%", work.jobs[i].images[img]);                    $('.work-entry').append(formattedImage);                }            }        }    }}var projects = {    "projects": [        /*        	{        		"title" : "InfoViz and User Interaction for Tiled display",        		"dates" : 2015,        		"description" : "Draw Scenario for tiled display, Design user interface and interaction method and Create several contents",        		"images" : ["./images/tile1.png","./images/tile2.png", "./images/tile3.png"]        	},        */        {            "title": "Easy Screens and Play: A Library for Information Visualization in Tiled Display Environments",            "dates": 2015,            "description": "In this work, we present a library, called Easy Screens and Play (ESP), for information visualization in tiled display systems. We describe the design of the ESP library in the tiled display environment for novice users and its unique features as compared to other distributed display libraries. We also demonstrate the efficacy and effectiveness of the ESP library by using several examples of information visualization. Discussions on the extension of the library and future improvements are presented as well.",            "images": ["./images/esp1.png", "./images/esp2.png", "./images/esp3.png"]        }, {            "title": "User Interaction and Interface Design in Collaborative Environment using Tiled-display",            "dates": 2016,            "description": "This research considers tiled display system as an environment which ensures users can interact with others as well as a platform to visualize information and suggests a method of interaction among members in collaborative environment. Also, this research aims to verify usefulness of this interaction method through user case study using prototype application. For that, this research classified interaction patterns into three categories depending on the ways of sharing information in collaborative environment using tiled display. After that, this research extracted interaction elements, wrote scenarios to reflect them through analyzing related studies and usage of tiled display, and designed interaction model.",            "images": ["./images/colla1.png", "./images/colla2.png", "./images/colla3.png"]        }, {            "title": "YouSeeMe: The perspective-aware display  and its contents",            "dates": 2016,            "description": "We created our own perspective-aware system YouSeeMe. This system warps the image towards the viewer’s position; the viewer always perceives undistorted image wherever they are in front of the display. Our research questions are the followings: “Does the perspective-aware display YouSeeMe give a better experience to the users?” “Do the types of the contents matter for user satisfaction?” and if so, “What is the most proper type of digital contents for the perspective-aware display?” To answer these questions, we conducted experiment consisting of showing image, shape, and text type content to participants in various angles, since those types of contents represent graphical elements that are commonly shown on public displays. We surveyed the participants and evaluated based on four criteria; immersion, satisfaction, frontality, and affection. Our results show that text type content is the most suitable while shape type content is the least suitable in YouSeeMe. The completion of our ongoing experiments will provide guidelines about contents design for perspective-aware displays in the future.",            "images": ["./images/ysm1.png", "./images/ysm2.png", "./images/ysm3.png"]        }    ],    "display": function() {        $('#projects').append(HTMLprojectStart);        for (var prj in projects.projects) {            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[prj].title);            $('.project-entry:last').append(formattedTitle);            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[prj].dates);            $('.project-entry:last').append(formattedDates);            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[prj].description);            $('.project-entry:last').append(formattedDescription);            if (projects.projects[prj].images.length > 0) {                for (var img in projects.projects[prj].images) {                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[prj].images[img]);                    $('.project-entry:last').append(formattedImage);                }            }        }    }}//Display bio contentsbio.display();//Display Work Experiencework.displayWork();//Display projectsprojects.display();//Display educationeducation.display();//Map$('#mapDiv').append(googleMap);//InternationalizeButton for name/*function inName(name){	name = name.trim().split(" ");	console.log(name);	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();	name[1] = name[1].toUpperCase();	return name[0] + " " + name[1];}$('#main').append(internationalizeButton);*/
//create Objectvar bio = {	"name" : "Jung Younghun",	"role" : "Web Developer",	"contacts" : {		"mobile" : "010-2780-6169",		"email" : "youngj6169@gmail.com",		"github" : "Younghun-Jung",		"twitter" : "@younghun",		"location" : "Seoul",		"location_details" : "384-1 Gildong Gangdong-gu Seoul South Korea"	},	"welcomeMessage" : "Hello World",	"skills" : [		"HTML", "CSS", "JavaScript", "InfoVis"	],	"bioPic" : "http://placehold.it/220x220",	"displayTopContacts" : function(){		var formattedTopContacts;		formattedTopContacts = HTMLmobile.replace("%data%", bio.contacts.mobile);		$('#topContacts').append(formattedTopContacts);		formattedTopContacts = HTMLemail.replace("%data%", bio.contacts.email);		$('#topContacts').append(formattedTopContacts);		formattedTopContacts = HTMLgithub.replace("%data%", bio.contacts.github);		$('#topContacts').append(formattedTopContacts);		formattedTopContacts = HTMLtwitter.replace("%data%", bio.contacts.twitter);		$('#topContacts').append(formattedTopContacts);		formattedTopContacts = HTMLlocation.replace("%data%", bio.contacts.location);		$('#topContacts').append(formattedTopContacts);	},	"displayFooterContacts" : function(){		var formattedTopContacts;		formattedTopContacts = HTMLmobile_footer.replace("%data%", bio.contacts.mobile);		$('#footerContacts').append(formattedTopContacts);		formattedTopContacts = HTMLemail_footer.replace("%data%", bio.contacts.email);		$('#footerContacts').append(formattedTopContacts);		formattedTopContacts = HTMLgithub_footer.replace("%data%", bio.contacts.github);		$('#footerContacts').append(formattedTopContacts);		formattedTopContacts = HTMLtwitter_footer.replace("%data%", bio.contacts.twitter);		$('#footerContacts').append(formattedTopContacts);		formattedTopContacts = HTMLlocation_footer.replace("%data%", bio.contacts.location);		$('#footerContacts').append(formattedTopContacts);	},		"displayBioPic" : function(){		var formattedBioPic;		formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);		$('#topContacts').after(formattedBioPic);	},		"displayWelcomeMsg" : function(){		var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);		$('#header').append(formattedMsg);	},		"displaySkills" : function(){		if(bio.skills.length >0){			$('#header').append(HTMLskillsStart);			var formattedSkill;			for(var i in bio.skills){				formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);				$('#skills').append(formattedSkill);				}		}		}}var education = {	"schools" : [		{			"name" : "Korea Advanced Institue Science and Technology",			"city" : "Daejeon South Korea",			"degree" : "Masters",			"majors" : ["Information visualization"],			"dates" : 2016,			"url" : "http://ct.kaist.ac.kr"		}	],	"onlineCourses" : [		{			"title" : "Web Development Course",			"school" : "Coding Everybody",			"dates" : 2016,			"url" : "http://opentutorials.org"		},		{			"title" : "Front-end Web Development",			"school" : "Udacity",			"dates" : 2016,			"url" : "http://www.udacity.com"		}	],	"display" : function(){		$('#education').append(HTMLschoolStart);		var formattedVar;		//School		for(var sch in education.schools){			formattedVar = HTMLschoolName.replace("#", education.schools[sch].url);			formattedVar = formattedVar.replace("%data%", education.schools[sch].name);			formattedVar = formattedVar + HTMLschoolDegree.replace("%data%", education.schools[sch].degree);			$('.education-entry').append(formattedVar);			formattedVar = HTMLschoolDates.replace("%data%", education.schools[sch].dates);			$('.education-entry').append(formattedVar);			formattedVar = HTMLschoolLocation.replace("%data%", education.schools[sch].city);			$('.education-entry').append(formattedVar);			if(education.schools[sch].majors.length>0){				for(var img in education.schools[sch].majors){					formattedVar = HTMLschoolMajor.replace("%data%", education.schools[sch].majors[img]);					$('.education-entry').append(formattedVar);				}			}		}		//$('.education-entry').append(HTMLonlineClasses);		for(ons in education.onlineCourses){			formattedVar = HTMLonlineTitle.replace("%data%", education.onlineCourses[ons].title);			formattedVar = formattedVar + HTMLonlineSchool.replace("%data%", education.onlineCourses[ons].school);			$('.education-entry').append(formattedVar);			formattedVar = HTMLonlineDates.replace("%data%", education.onlineCourses[ons].dates);			$('.education-entry').append(formattedVar);			formattedVar = HTMLonlineURL.replace("%data%", education.onlineCourses[ons].url);			$('.education-entry').append(formattedVar);		}	}}var work = {	"jobs":[		{			"employer" : "National Research Foundation",			"title" : "Interaction and InfoVis for Tiled display system",			"dates" : "June 2014 - December 2015",			"description" : "Not yet"		}	],	"displayWork" : function(){		for(var job in work.jobs){			$("#workExperience").append(HTMLworkStart);			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);			var formattedEmployerTitle = formattedEmployer + formattedTitle;			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);			$(".work-entry").append(formattedEmployerTitle);			$(".work-entry").append(formattedDates);			$(".work-entry").append(formattedDescription);		}	}}var projects = {	"projects" : [		{			"title" : "Sameple Pro 1",			"dates" : 2014,			"description" : "Interactive Developer Interactive Developer Interactive Developer ",			"images" : ["http://placehold.it/300x300","http://placehold.it/300x300", "http://placehold.it/300x300"]		},		{			"title" : "Sameple Pro 2",			"dates" : 2014,			"description" : "Interactive Developer Interactive Developer Interactive Developer ",			"images" : ["http://placehold.it/300x300", "http://placehold.it/300x300", "http://placehold.it/300x300"]		}	],	"display" : function(){		$('#projects').append(HTMLprojectStart);		for(var prj in projects.projects){			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[prj].title);			$('.project-entry:last').append(formattedTitle);			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[prj].dates);			$('.project-entry:last').append(formattedDates);			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[prj].description);			$('.project-entry:last').append(formattedDescription);			if(projects.projects[prj].images.length >0){				for(var img in projects.projects[prj].images){					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[prj].images[img]);					$('.project-entry:last').append(formattedImage);				}			}		}	}}//Top Name & Rolevar formattedName = HTMLheaderName.replace("%data%", bio.name);var formattedRole = HTMLheaderRole.replace("%data%", bio.role);$('#header').prepend(formattedRole);$('#header').prepend(formattedName);//Display top contactsbio.displayTopContacts();//Display bio imagebio.displayBioPic();//Display Welcome Messagebio.displayWelcomeMsg();//Display skill contents bio.displaySkills();//Display Work Experiencework.displayWork();//Display projectsprojects.display();//Display educationeducation.display();//Display Footer Contactsbio.displayFooterContacts();//Map$('#mapDiv').append(googleMap);//InternationalizeButton for name/*function inName(name){	name = name.trim().split(" ");	console.log(name);	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();	name[1] = name[1].toUpperCase();	return name[0] + " " + name[1];}$('#main').append(internationalizeButton);*/
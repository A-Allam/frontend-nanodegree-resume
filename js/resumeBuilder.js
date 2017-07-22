// bio section
var bio = {
  "name" : "Ali Mohammed Allam",
  "role" : "Front-end developer",
  "contacts" : {
    "mobile": "01063842334",
    "email": "me.aliallam@gmail.com",
    "github": "https://github.com/a-allam",
    "twitter": "https://twitter.com/aliallam",
    "location": "Mansoura, Cairo, Egypt",
  },
  "welcomeMessage": "Designer and front-end developer. currently working in Mansoura, Egypt for Cube as a designer and front-end developer. More specifically, I work with the Web team. Outside of cube, I am aiming to start Marsala my own design studio, I never stop learning and access new knowledge, I like reading, drawing and walking.",
  "skills": [
    "Photoshop",
    "angular",
    "React"
  ],
  "biopic": "images/fry.jpg",
  "display" : bioDisplay
 };


function bioDisplay() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);

  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").append(formattedBioPic);

  var formattedContactInfo = [];
  formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
  formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
  formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
  formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));
  if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for( var i in bio.skills) {
      $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
  }

  for(var i in formattedContactInfo) {
    $("#topContacts").append(formattedContactInfo[i]);
    $("#footerContacts").append(formattedContactInfo[i]);
  }
}

bio.display();

// education section
var education = {
  "schools": [
    {
      "name": "Mansoura School",
      "location": "Mansoura",
      "degree": "100",
      "majors": [
        "Computer Science", "Art"
      ],
      "dates": "22-4-2014",
      "url": "www.google.com",
    }
  ],
  "onlineCourses": [
    {
      "title": "onlineCourses-1",
      "school": "Udacity",
      "dates": "22-9-2015",
      "url": "www.udacity.com"
    },
    {
      "title": "onlineCourses-2",
      "school": "Udacity",
      "dates": "22-9-2015",
      "url": "www.udacity.com"
    },
    {
      "title": "onlineCourses-3",
      "school": "Udacity",
      "dates": "22-9-2015",
      "url": "www.udacity.com"
    }
  ],
  "display" : displayEducation
};


function displayEducation () {
  if(education.schools.length > 0 || education.onlineCourses.length > 0) {
    for(var i in education.schools) {
      $("#education").append(HTMLschoolStart);

      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);      
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

      $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
      $(".education-entry:last").append(formattedSchoolDates);
      $(".education-entry:last").append(formattedSchoolLocation);
      $(".education-entry:last").append(formattedSchoolMajor);
    }

    if(education.onlineCourses.length > 0) {
      $("#education").append(HTMLonlineClasses);
      for(var i in education.onlineCourses) {       
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedOnlineURL);
      }
    }
  }
}


// work section
var work  = {
  "jobs": [
    {
      "employer": "cube solutions",
      "title": "me the employer",
      "location": "here",
      "dates": "Present",
      "description": "some description" 
    },
    {
      "employer": "cube solutions",
      "title": "me the employer",
      "location": "here",
      "dates": "Present",
      "description": "some description" 
    },
    {
      "employer": "cube solutions",
      "title": "me the employer",
      "location": "here",
      "dates": "Present",
      "description": "some description" 
    },
    {
      "employer": "cube solutions",
      "title": "me the employer",
      "location": "here",
      "dates": "Present",
      "description": "some description" 
    },
  ],
  "display" : displayWork
};

function displayWork() {
  if(work.jobs.length > 0) {
  
    $("#workExperience").append(HTMLworkStart);

    for(var i in work.jobs) {
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
      var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
      var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
      var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
      var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

      var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

      $(".work-entry:last").append(formattedEmployerWorkTitle);
      $(".work-entry:last").append(formattedWorkLocation);
      $(".work-entry:last").append(formattedDatesWorked);
      $(".work-entry:last").append(formattedWorkDescription);
    }
  }
}

work.display();


// projects section
var projects = {
  "projects": [
    {
      "title": "Project -1",
      "dates": "22-8-1015",
      "description": "this is description of project 1",
      "images": ["images/197x148.gif", "images/197x148.gif"]
    },
    {
      "title": "Project -2",
      "dates": "22-8-1015",
      "description": "this is description of project 1",
      "images": ["images/197x148.gif", "images/197x148.gif"]
    },
  ],
  "display": displayProjects
};

function displayProjects() {
  if(projects.projects.length > 0) {
    for(var i in projects.projects) {
      $("#projects").append(HTMLprojectStart);

      var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
      var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
      var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

      $(".project-entry:last").append(formattedProjectTitle);
      $(".project-entry:last").append(formattedProjectDates);
      $(".project-entry:last").append(formattedProjectDescription);

      for(var img in projects.projects[i].images) {
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
        $(".project-entry:last").append(formattedProjectImage);
      }
    }
  }
}

projects.display();


function addMpas(){
  $("#mapDiv").append(googleMap);
}

addMpas();

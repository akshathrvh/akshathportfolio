// Define an array of data for your projects
let projectData = [
    {
      title: "Project 1",
      description: "A brief description of this project",
      image: "path/to/project1.jpg",
      video: "path/to/project1.mp4"
    },
    {
      title: "Project 2",
      description: "A brief description of this project",
      image: "path/to/project2.jpg",
      video: "path/to/project2.mp4"
    },
    {
      title: "Project 3",
      description: "A brief description of this project",
      image: "path/to/project3.jpg",
      video: "path/to/project3.mp4"
    }
  ];
  
  // Get the container element where the projects will be displayed
  let projectsContainer = document.querySelector("#projects");
  
  // Iterate through the projectData array and create elements for each project
  projectData.forEach(function(project) {
    // Create a container for this project
    let projectContainer = document.createElement("div");
    projectContainer.classList.add("project");
    
    // Create the project title
    let title = document.createElement("h2");
    title.textContent = project.title;
    projectContainer.appendChild(title);
  
    // Create the project description
    let description = document.createElement("p");
    description.textContent = project.description;
    projectContainer.appendChild(description);
  
    // Create the project image
    let image = document.createElement("img");
    image.src = project.image;
    projectContainer.appendChild(image);
    
    // Create the project video
    let video = document.createElement("video");
    video.src = project.video;
    video.controls = true;
    projectContainer.appendChild(video);
    
    // Add the project container to the projects container
    projectsContainer.appendChild(projectContainer);
  });
  
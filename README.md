
# Recipe Finder - Personalized Recipe Finder & Collection Manager


## Project Overview

Recipe Finder is a web application designed to help users discover and organize recipes based on available ingredients or recipe names. By integrating the Spoonacular API, the application provides robust recipe search functionality, user authentication, and personalized recipe management. Users can explore recipes tailored to their preferences, save favorites, and manage their ingredient lists, all within a mobile-responsive, user-friendly interface. Food-related news and articles are provided through NewsAPI, keeping users updated on culinary trends and cuisine stories.

The main goal is to create an intuitive platform for food enthusiasts to find inspiration, manage their recipe collections, and explore detailed recipe information while ensuring secure user authentication and data privacy.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [UX](#ux)
4. [Design](#design)
5. [Technologies Used](#technologies-used)

## Features
#### User Authentication
- Google Sign-In Authentication: Secure login using Firebase Authentication with Google accounts.
- Personal Profiles: Users can save favorite recipes and dietary preferences in their profiles.
- Data Privacy: All user information is securely stored and protected.

#### Admin Features

website design

<img width="1440" alt="Screen Shot 2025-06-17 at 22 30 28" src="https://github.com/user-attachments/assets/066d6c19-4d75-4978-9756-01d3ee487b60" />

<img width="1438" alt="Screen Shot 2025-06-17 at 22 30 58" src="https://github.com/user-attachments/assets/85241e5e-4d70-4b1b-9f96-dcbf34611238" />

<img width="1440" alt="Screen Shot 2025-06-17 at 22 31 22" src="https://github.com/user-attachments/assets/b1f90ece-468c-46c6-8e3c-4150cc5cfaa1" />


- User Management: Add, edit, or delete user accounts.
- Recipe Management: Admins can view or delete recipes on behalf of users.

#### User Features
###### Smart Recipe Search & Generation

website design

<img width="1440" alt="Screen Shot 2025-06-17 at 22 33 54" src="https://github.com/user-attachments/assets/84bd68cc-dd0e-4deb-ad72-60b779630164" />

<img width="1440" alt="Screen Shot 2025-06-17 at 22 34 29" src="https://github.com/user-attachments/assets/c548b862-777c-42f0-8fdd-bf90853e8d44" />

<img width="1440" alt="Screen Shot 2025-06-17 at 22 34 56" src="https://github.com/user-attachments/assets/e3c76f4a-1253-4496-93e1-d75eadc6f830" />


- Utilize the Spoonacular API to retrieve recipes based on user-selected ingredients or recipe name
- Provide comprehensive recipe details including preparation instructions and nutritional information
- Support multiple ingredient selection for more precise search results

###### Recipe Management

website design

<img width="1440" alt="Screen Shot 2025-06-17 at 22 35 20" src="https://github.com/user-attachments/assets/c0976b86-e5ce-432d-9f51-34bf602aae3d" />


- Allow users to bookmark and organize favorite recipes for future reference
- Enable easy removal of recipes from the wishlist when no longer needed
- Provide a user-friendly interface for recipe collection management

###### Recipe information displayed: When a user selects a recipe, the application will present:

website design 


- Name of the dish
- Cooking time and number of servings
- Introduction about the dish
- Complete list of required ingredients with measurements
- Step-by-step instructions
- Nutritional information
- Similar recipes

###### Ingredient Insights: When a user selects a ingredient/view full ingredients, the application will present:

website design

<img width="1440" alt="Screen Shot 2025-06-17 at 22 36 45" src="https://github.com/user-attachments/assets/1082e4b1-0ec6-461a-b269-bde4c6cb1055" />

<img width="1440" alt="Screen Shot 2025-06-17 at 22 37 00" src="https://github.com/user-attachments/assets/e7ed8246-5425-4da2-8ead-6f6ef3ea4989" />

<img width="1440" alt="Screen Shot 2025-06-17 at 22 37 16" src="https://github.com/user-attachments/assets/f032f9d0-a8e8-42fa-804b-33a777ad47fc" />


- View full ingredient list or individual details.
- For each ingredient: name, image, description, reference price, and nutritional values per unit.

###### Food News & Articles:

website design

<img width="1440" alt="Screen Shot 2025-06-17 at 22 37 59" src="https://github.com/user-attachments/assets/5c56c706-c352-415d-9536-5520af953b6c" />

<img width="1427" alt="Screen Shot 2025-06-17 at 22 38 11" src="https://github.com/user-attachments/assets/300aff0f-2c72-4e4b-9e50-6e3ba4872cbc" />

- Search by Tags: Nutrition, recipe, culinary culture, and more.
- Featured Posts: Curated articles offering deep culinary insights. 
- Latest Posts: Up‑to‑date news from trusted sources.
- Filtered Browsing: Browse by culinary categories for personalized reading.

###### Mobile-Responsive UI
- Design a fully responsive interface optimized for all device types
- Ensure seamless user experience across desktop, tablet, and mobile platforms
- Implement intuitive navigation and accessibility features

## UX
#### Goals
The primary goal is to provide a seamless and engaging experience for users to discover recipes, manage collections, and explore culinary inspiration. The application prioritizes:
- Ease of Use: Intuitive interface for users of all technical levels.
- Accessibility: Responsive design ensures usability on any device.

#### User Stories
As a user, I want to:
- Log in securely using my Google account.
- Search for recipes using ingredients I have at home or by recipe names
- View detailed recipe information, including introduction, visuals, cooking time, servings, ingredients and instructions.
- Save and organize my favorite recipes for quick access.
- Read and discover news and stories about culinary.

As an admin, I want to:
- Manage user accounts and their saved recipes efficiently.

## Design
#### Color Scheme
The design emphasizes a clean, appetizing aesthetic
Main color palette:
- #B4324F - Rusty Red
- #F39AA7 - Pale Pink
- #531A27 - Dark Maroon
- #D86680 - Rose Pink
- #F7F2EE - Cream White
- #FFFFFF - Pure White
- #000000 - Pure Black
  
#### Typography
- Inter (clean and modern, used for body text and forms).

## Technologies Used
- Front-End
React: JavaScript library for building dynamic UI components. Tailwind CSS: Utility-first CSS framework for styling.

- Back-End
Node.js: Runtime environment for server-side logic.
  
- OAuth2 Authentication (Google Sign‑In)

- API Integration

- Spoonacular API: Provides recipe search, ingredient data, and nutritional information.

- NewsAPI (food and culinary articles)

- Hosting
Vite: Fast and modern build tool for deploying the application.

- Development Tools
Git: Version control system.
GitHub: Remote repository for code storage and collaboration.
Jira/Trello: Project management tools for task tracking.
Scrum: Agile methodology for development sprints.


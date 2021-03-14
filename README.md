# Tech Test

Your task is to create a React application that will consume data from the SpaceX public API. The application must retrieve historic and future SpaceX launches and present them in a list view.
Provided in this pack are a copy of the designs as well as all of the assets you will need. Use the create-react-app CLI tool to generate a new react project and feel free to use any 3rd party packages that will assist in your development.

Designs are available from: [https://sketch.cloud/s/yyv1b/agmoaZP](https://sketch.cloud/s/yyv1b/agmoaZP)

The API documentation is available from:
Postman - [https://docs.spacexdata.com](https://docs.spacexdata.com/)
GitHub - [https://github.com/r-spacex/SpaceX-API](https://github.com/r-spacex/SpaceX-API)
## User Stories
- As a user, I want the ability to load the full list of SpaceX launches from the SpaceX API
- As a user, I want the ability to reload the data to see any new changes
- As a user, I want the ability to filter the launch list by year
- As a user, I want the ability to sort all launches by date (ascending/descending)

## Considerations we will be looking for in your submission are:

- Project approach
- Accuracy of designs
- State management
- Code quality (e.g patterns and organisation of the application code)
- Network logic

## Bonus Considerations:

- Accessibility (A11y) best practices.
- Type Safety i.e propTypes or TypeScript
- Unit Tests

# How to run
- npm install
- npm start
- npm test (for albeit limited tested)


# Final Thoughts
I'm not happy with the final project structure. My plan was to make the SplashImage and Button component to be completely reusable, however as they stand, they still have project specific logic in them. I do feel I rushed this but I've realised how difficult is to come up with a project structure and for me the most important question is could another dev come into this codebase and grasp what's going on? I think so. Do I think this is production ready? Absolutely not :)
With more time, I would have properly researched Accessibility best practices, I made an attempt to follow a A11y checklist but I feel this was more lip service than treating it with due diligence. I would have also liked to finish tests off. Also, I would have liked to add in an animation to the reload button, currently it looks like it does nothing. React Query is triggering a fresh network query (as seen in the network tab of devtools), but you do not see any rerendering unless the new data fetched differs from the old data.

# React Segment Saving Application

This project is a React application that allows users to save segments by selecting schemas. It utilizes Redux for state management and Material-UI for the modal UI components.

## Project Structure

The project is organized into the following main components:

- **App Component**: The main component that handles the modal toggle and renders the `ModalComponent`.
- **ModalComponent**: A modal window that allows users to input the segment name and select schemas.
- **Redux Store**: Manages the application state related to schemas and modal visibility.

## Features

1. **Modal for Segment Creation**: Users can open a modal to create a new segment.
2. **Dynamic Schema Selection**: Users can add and remove schemas from the segment.
3. **State Management with Redux**: Centralized state management for smooth user experience.
4. **Responsive Design**: Basic styles to ensure the application is user-friendly.

## Technologies Used

- **React**: For building the user interface.
- **Redux**: For managing application state.
- **Material-UI**: For the modal and styling components.
- **CSS**: For custom styles.

## Steps to Build the Application

1. **Setup the React App**:
   - Created a new React application using `create-react-app`.

2. **Install Dependencies**:
   - Installed Redux and Material-UI for state management and UI components:
     ```bash
     npm install @reduxjs/toolkit react-redux @mui/material @emotion/react @emotion/styled
     ```

3. **Setup Redux Store**:
   - Created a Redux slice (`schemaSlice.js`) to manage the state of schemas and modal visibility.
   - Configured the store in `store.js` and integrated it with the main application.

4. **Implement the Modal Functionality**:
   - Developed the `ModalComponent` to handle input for segment name and schema selection.
   - Integrated Material-UI modal components for better UI experience.

5. **Add Functionality for Adding/Removing Schemas**:
   - Implemented actions in Redux to add and remove schemas dynamically within the modal.

6. **Handle Form Submission**:
   - Created a function to handle saving the segment which includes resetting the input fields and selected schemas after successful submission.

7. **Styling the Application**:
   - Created custom CSS for better user experience and responsive design.

## How to Run the Application

1. Clone the repository:
   ```bash
   git clone https://github.com/medheerajput/customerlabs-redux-schema-app.git

2. cd client

3. npm install

4. npm start


PREVIEW
![assignment](https://github.com/user-attachments/assets/eebdae1b-681e-47b6-b057-9d28443da4ba)



# **Custom Onboarding Flow**

## **Description**
A wizard-style user onboarding application with an admin configuration panel. Users can sign up, complete their onboarding steps, and resume from where they left off. Admins can customize the onboarding flow, and a data view is provided to display user data.

---

## **Technologies Used**
- **Frontend**: React.js
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Deployment**: Heroku (connected to GitHub for automated deploys)

---

## **Features**
1. **Wizard-style Onboarding**:
   - 3-step process for onboarding users.
   - Step 1 includes user login/signup.
   - Steps 2 and 3 allow users to enter their information using customizable forms.
   - Accessible via `/`.

2. **Progress Tracking**:
   - User information is saved in the database after each step submission.
   - The last submitted step is recorded to allow users to resume from where they left off.

3. **Administration Panel**:
   - A dedicated admin view to configure the components displayed in Steps 2 and 3.
   - Form 1 is read-only and cannot be configured.
   - Accessible via `/admin`.

4. **Data View**:
   - Displays user data stored in the database in a tabular format.
   - Accessible via `/data`.

---

## **API Documentation**

### **Endpoint: `/api/users`**
#### **GET**:
- Fetches all user data from the database.

#### **POST**:
- Creates a new user and stores onboarding data.

#### **PUT**:
- Updates user progress and information for a given step.

---

## **Setup Instructions**

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Application**:
   ```bash
   npm run start
   ```

4. **Access the Application**:
   - **Onboarding Flow**: `http://localhost:3000/`
   - **Admin Panel**: `http://localhost:3000/admin`
   - **Data View**: `http://localhost:3000/data`

---

## **Deployment**
The app is deployed on Heroku with automated deployments linked to GitHub. Each new commit triggers a redeployment.

---

## **Future Improvements**
1. Save configuration changes (admin screen for Steps 2 and 3) to the backend for persistence. Currently, local storage is used for simplicity.
2. Enhance UI/UX for a smoother onboarding experience.
3. Add authentication for the admin panel and data view for better security.

---

Feel free to share feedback or suggestions for further improvement!

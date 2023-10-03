# SAS (Attendance and Absence Management) Backend

Welcome to the SAS Backend repository! This repository contains the source code for the backend of the SAS web application, designed for managing the attendance and absences of SONELGAZ employees using Card ID and QR Code. This README will guide you through the setup and provide an overview of the backend components.

## Features

SAS offers the following features:

- Attendance tracking using Card ID and QR Code.
- Manual attendance entry.
- Generate attendance reports.
- Automated Card generation with QR Code.
- Simple and cost-effective system maintenance.
- Quick generation of results.
- Provides accurate and effective data.

## Installation

To get started with SAS, follow these steps:

1. Clone or download the repository.
    ```bash
    git clone https://github.com/Yassine-Benlaria/SAS_backend
    ```

2. Navigate to the `BACKEND` directory by running:

    ```bash
    cd SAS_backend
    ```

3. Install the required dependencies for the backend by running:

    ```bash
    npm install
    ```
4. Start the server by running either:

    ```bash
    node server.js
    ```

    or

    ```bash
    nodemon server.js
    ```

5. The SAS Backend provides the following API routes to interact with the application:

- `/api/employee`: Manages employee-related functionalities.
- `/api/admin`: Provides administrative functionalities for the platform.
- `/api/scan`: Handles scanning and attendance tracking.
- `/api/reception`: Manages reception-related tasks.

Thank you for using SAS! If you have any questions or need assistance, feel free to reach out to us. Happy coding!

# Stripe Django OscarAPI

This repository contains code for a project utilizing Stripe, React, Django, and OscarAPI.

## About

The **Stripe Django OscarAPI** project is designed to integrate Stripe payment functionalities into a Django project using OscarAPI, an API wrapper for Django Oscar, an e-commerce framework.

## Note
I had to downgrade the Django version as the latest 4.2.4 is not compatible with django-oscar and django-oscar-api. 

## Installation

To install and set up the project locally, follow these steps:

1.  Clone the repository: `git clone https://github.com/parth-5097/Stripe_django_oscarapi.git`
2.  Install the required dependencies: `pip install -r requirements.txt`
3.  Set up the backend:`pip install -r requirements.txt` and `python manage.py migrate`

## Usage

To use this project, follow these steps:

1.  Configure your Stripe API keys in the settings file.
2.  Start the development server: `python manage.py runserver`
3.  Access the project in your browser at `http://localhost:8000`
4.  Start react app using command `npm install` and `npm run dev`

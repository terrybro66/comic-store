
The  name of the project is comic-store


This is an online store for selling comics

Seeding the database - install django-seed

##  pip install django-seed

Add it to your installed apps in settings.py:

INSTALLED_APPS = (
    ...
    'django_seed',
)

To seed 15 of each model for the app 'comics'

## python manage.py seed comics --number=15

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
# Readme


The source code is split into 2 main parts, django_project for the web application and theia for the workspace page of the web application.

The file structure in Django is as follow:
* htmlcov, test coverage report
* media, all uploaded lab and lecture slide files of the web application will be stored here
* rfwa, this is where the views, models, urls, utils and forms lie
* static, this is where all the images, css, javascript and bootstrap source is stored
* templates, HTML template for the web application

The file structure in Theia is as follow:
* browser-app, the browser version of the Eclipse Theia application, this is used in the web application
* electron-app, the electon version of the Eclipse Theia application, this is NOT used in the web application
* switch-workspace, the custom theia extension which is used to meet the project requirements (switching workspaces seamlessly)
* plugins, VS code plugins (.vsix) files will be stored here


## Build instructions

**You must** include the instructions necessary to build and deploy this project successfully. If appropriate, also include 
instructions to run automated tests. 

### Requirements

List the all of the pre-requisites software required to set up your project (e.g. compilers, packages, libraries, OS, hardware)

For running the web application:

* Python >= 3.7.3
* Django >= 2.2.6

For running Eclipse Theia:
* node >= 10.17.0
* npm >= 6.11.3 
* yarn >= 1.19.1

For setting up VNCs:
* TigerVNC >= 1.7.0
* noVNC > = 1.1.0
* WebSockify >= 0.9.0

* a Linux host machine with Robot Operating System ( ROS Melodic ) intalled

For Django Unit Testing
* model-mommy                        2.0.0 
* coverage                           5.0.3


## Some Helpful Links

Django Web Application:
* https://www.djangoproject.com/download/
* https://www.python.org/downloads/source/

Eclipse Theia:
* https://theia-ide.org/docs/composing_applications/

VNCs:
* https://github.com/TigerVNC/tigervnc
* https://github.com/novnc/noVNC
* https://github.com/novnc/websockify

Testing:
* https://pypi.org/project/model-mommy/
* https://pypi.org/project/coverage/


### Build steps

List the steps required to build software. 

To set up the Django web application:

* First, navigate to the Django project (django_project) directory '$ cd django_project'
* For course coordinators/admins, you can create a superuser profile which allows you to manage contents on the web app using '$python manage.py createsuperuser'
* Start the web application '$python manage.py runserver"


To set up Eclipse Theia:
* First, navigate to the Eclipse Theia project (theia) directory '$ cd theia'
* Install all dependencies using '$yarn'
* Build Eclipse Theia using '$yarn theia build'
* Rebuild the Browser Application '$yarn rebuild:browser'
* Navigate to the Browser Application (browser-app) directory '$cd browser-app'
* Get the path to 'plugins' folder by navigating to the plugins folder '$cd plugins' followed by 'pwd'
* Start the Browser Application using '$yarn run start --plugins=local-dir:YOUR PATH TO PLUGINS FOLDER'

To set up VNCs:
* Create a VNC display on TigerVNC '$export DISPLAY=:99' followed by '$vncserver :99 -xdisplaydefaults -SecurityTypes None'
* Generate forwarding link on noVNC '$cd /root/noVNC && ./utils/launch.sh --vnc localhost:5999 --listen 6081'

Note: You have to be signed in as a superuser before being able to generate forwarding link on noVNC, this can be done by '$sudo su'

## Some Helpful Links

Eclipse Theia:
* https://theia-ide.org/docs/composing_applications/

### Test steps

To run the Django unit test:
* First, navigate to the Django project (django_project) directory '$ cd django_project'
* Run the test using '$python manage.py test'

To run a test coverage:
* First, navigate to the Django project (django_project) directory '$ cd django_project'
* Run the test using '$coverage run manage.py test'
* Run '$coverage report' to view the results

## Some Helpful Links

* https://adamj.eu/tech/2019/04/30/getting-a-django-application-to-100-percent-coverage/




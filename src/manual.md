# User manual 

As normal user:

* This is a web application where users can create account and log in
* Users can work on their lab exercises in the Workspace page
* users can view lecture slides on the Slides page
* users can view upcoming due dates and receive reminders on incomplete labs in the Home page
* users can choose the lab exercises and download their code in the Lab page
* users can view feedback provided by admins in the Feedback page
* users can update their lab completion progress in the Summary page

* To launch the terminal, click ![Image description](robotics-web-app/src/django_project/static/images/terminal.png) or CTRL + SHIFT + `</li>
            <div class="line-spacing"></div>
            <li>To view robot visualisation, Rviz, click <img src= "{% static "images/browser-preview-icon.png" %}" alt="Browser preview icon"> located at the workspace sidebar.</li>
            <div class="line-spacing"></div>
            <li>If the icon can not be found/ does not seem to be working, manually bring it up by CTRL + SHIFT + P and type the following <img src= "{% static "images/manual-browser-preview.png" %}" alt="Browser preview icon"></li>
            <div class="line-spacing"></div>
            <li>Experience a full screen IDE on the Workspace page by clicking the "Toggle Menu"   <img src= "{% static "images/toggle-menu.png" %}" alt="Menu toggle button"> button and scrolling down.</li>

As admin user:

* Admins have the same permissions as a normal user would.
* Admins can have access to the admin management page. 
* This is where they can upload, update, delete contents such as lab exercises, lecture slides and student feedback
* Admins have to click on the "unzip" button after uploading a lab.zip file

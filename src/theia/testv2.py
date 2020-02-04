import subprocess
from subprocess import Popen, PIPE
import time

import os
#p1 = subprocess.Popen(["ls"], stdout=PIPE, shell=True, cwd= "/home/nicholas/Documents/robotics-web-app/src/theia")

#using OS
# current_path = os.getcwd()

# theia_path = '/home/nicholas/Documents/robotics-web-app/src/theia' 
# os.chdir(theia_path)
# yarn_theia_start = "yarn theia start --plugins=local-dir:/home/nicholas/Documents/robotics-web-app/src/theia/plugins"

# os.system(yarn_theia_start)

process1 = subprocess.Popen(["yarn theia start --port 5000"], shell=True, cwd= "/home/nicholas/Documents/robotics-web-app/src/theia")
time.sleep(30)
print("killing process")
subprocess.Popen.kill(process1)
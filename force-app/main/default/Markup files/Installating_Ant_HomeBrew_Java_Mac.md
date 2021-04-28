Installation Doc for Java, Ant, HomeBrew in Mac

HomeBrew Installation From _https://github.com/Homebrew/brew_


Paste the below command in mac terminal.

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"


Installation of Java in Mac via HomeBrew

Run the below mentioned commands in the terminal below:

brew tap adoptopenjdk/openjdk

brew install --cask adoptopenjdk11

You will need to add your password and then the installation will be completed! (refer screenshot)
<img src="https://user-images.githubusercontent.com/61345495/116382074-2acfec00-a833-11eb-89f5-9e06ae00da2c.png">
Download Ant  See Binary Distribution (http://ant.apache.org/manual/install.html#getBinary) for details.

1. Uncompress the downloaded file into a directory.
2. Add the bin directory to your path.
3. Set the ANT_HOME environment variable to the directory where you installed Ant.

*[Note: Not able to install ANT via downloading and setting up the Path in bash_profile so going for the Brew Installation!]*


*cmd + shift + [.].  ----> For seeing the hidden files:
cmd + shift + G -----> Enter the path location to access the folder/directory* 

Issues Faced during accessing the .bash_profile along with setting path variables:
[Image: image.png]
Used below command as sudo user in order to open and access the file:
sudo open -e ~/.bash_profile

brew install ant. ---> Success!


[Image: image.png]
Downlaod the ant Migration tool zip file from below link:
https://developer.salesforce.com/docs/atlas.en-us.daas.meta/daas/forcemigrationtool_install.htm


_*If you want to check the path where HomeBrew installed your packages:
*_
The /usr/local/Cellar directory is the default location on OS X. You'll see sub-directories in there for all your installed formulae.

Add the Jar file ant-salesforce.jar into the directory of the ant installation (The path should look something like this see below)
/usr/local/Cellar/ant/1.10.10/libexec


Now let’s see how this can be used with Salesforce:


When you give Ant a command, it will read the build.xml configuration file, searching for the target matching that name and once it finds it, it will execute it.

We may wonder how ANT connects to our target Salesforce instance, that’s where build.properties file comes into the picture 
i.e. build.properties where you can specify the Salesforce instance details such as test | login, username and password with security token.

[Image: image.png]*build.xml File*
[Image: image.png]Once the components are identified, we can make a list and put it into the package.xml file 
when we run ANT it will check for the package.xml file and list of components. 

See below screenshot for reference, you will get to know that we’ve to specify the components in element you can either specify individual component names or specify * for all components for that type like (ApexClass, ApexTrigger, Pages, and so on). 

[Image: image.png]
For more info on component types (https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/manifest_samples.htm)

Now we need to retrieve the data from 1st org and will be deploying it to another org.

_*retrieve data* _
Now the first step is to first retrieve Code from my DevOrg1. to do this, open the command prompt and navigate to the path/directory where you want to retrieve the code.

Let’s see how that works:-Let’s observe and understand build.xml tags, in this case we first understand the structure of retrieveCode tag.
[Image: image.png]Two Important Attributes are 
retrieveTarget → where exactly (directory name) you want to retrieve your code.
unpackaged → this attribute is to specify the package.xml itself (I am specifying it inside the codepkg folder itself)

Now we can execute the ant command to retrieve all components, ant retrieveCode
once you hit enter it will, it will fetch all the components mentioned in the package.xml and put those into the target folder.

[Image: image.png]
Since we fetched all the related components in a folder now, we want to copy the same code to my second org. In order to that follow the below steps:

Open the Build.properties file and replace the org credentials, with the 2nd Org credentials.
Goto build.xml to see the configuration for the deployCode tag. <Screenshot below>
[Image: image.png]Now let’s deploy the code to the other org.
Open the command prompt and navigate until the you source code folder (where we saved our code).

Enter command ant deployCode 
it will start deploying your source code to the specified Salesforce org. 
This runs using the deployAPI call, using the sample class and Account trigger provided with the Force.com Migration Tool. The ant deployCode calls the Ant target named deploy in the build.xml file.

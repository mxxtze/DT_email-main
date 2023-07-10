# DT_email
## Chrome Extension

Considering that the document accounts for 4 pages when printed, the analysis shows that on-screen reading is better than printing
from an environmental point of view if the reading time remains below 3 to 4 minutes per page.

--> Nutzer beim Einrichten einer Mail Signatur unterstützen (vorgefertigter Text der nur noch ggf personalisiert werden muss)
--> Nicht nur "Please don't print" sondern auch mit Begründung.

Datacenters are the other main contributor to the environmental impacts of electronic mail due to the electricity consumed by data storage units

--> Verlinkung zu Cleanfox zum Mailbox säubern https://www.cleanfox.io/#privacy
--> Ein Newsletter verursacht ca. 10g Co2 (deutlich höher als "normale" Mails)
--> Nachhaltige Server oder so verlinken?

As an example, 60-80% are associated with a viewing time of 3.25 minutes, and if this time
can be reduced to e.g. 2.5 minutes, the overall impacts may be reduced by 20%. 

--> Screen Time reduzieren
--> Call to action ab bestimmter Länge (Wortanzahl)
--> Mail Historie löschen
--> Pop Up

Emissionen entstehen bei Absender | Empfänger | Server Absender | Server Empfänger | Übertrag

--> MB entscheidend bei Server Absender, Übertrag und Server Empfänge --> Insgesamt für ca 53% der Emissionen verantwortlich
--> Kleinere Größe der Mail --> Sparpotential an diesen 3 Stellschrauben
--> Komprimieren von Anhängen (wie genau?) --> Am besten wäre es wenn das Tool einen Anhang automatisch erkennt und anbietet zu komprimieren -> umsetzbar?
	--> Alternativ gibt es sowohl online tools, als auch meist bereits im Betriebssystem integriert


Link vs. Anhang

--> Bei Links werden ggü. Anhängen keine Serverspeicher beansprucht
--> Schwer im Einzelfall umzusetzen? 
--> Eventuell eher tracken ob an Person x häufig Anhänge geschickt werden und dann Pop up "Arbeiten sie an einem gemeinsamen Projekt? - Wie wäre es mit
Dropobox / Onedrive / Sharefile)

Generell:

--> Bei allen Pop Ups etc. immer die Option "nicht mehr anzeigen" machen damit tool nicht nervt
--> Belohnungssystem?

Back-End:

--> Welche Funktionen werden genutzt?
--> Was muss getrackt werden?
--> Verschiedene Arten von "Awareness"-schaffen (UVs)

------------------------------------------------------------------------------------------------------------------------------------------

Back-end
- Tool modes
	- analysis
	- assistant
	- standby
- Email Parser --> fetch components
- Mail component analysis --> calculate approximate emissions from current mail contents, create rankings
- Appendix and embedded image compressor (images and pdfs) --> helper functions that could reduce the emission impact
- Mail editor
	- replace images, superfluous text, ...
	- set coordinates, size, etc
- Analytics Manager --> google analytics API and custom logging functions
- Regular expressions Matcher or NLP component to find the necessary elements in Chrome

## Front-end (react API?)
- Rating visualizations (numerical, plastic bags, ..)
- Highlighting
- Master Window look at __Grammarly__
	- explanations
	- auto-fix all (similar to magic wand in photo editors) (opt out/opt in) 
- Processing animations (nice to have)
Check Grammarly for design inspiration


---
Requirements:

General requirements, deviations possible if warranted, for implementation of isolated repetetive code without complex logic use ChatGPT. In general, use Github Copilot wherever applicable.

Backend: 
	BR1: The chrome extension should only activate on emailing sites, after a person has logged into their account. x
	BR2: Analysis of a mail should only be done once a mail is selected (mail analysis) or once a new mail is being written (mail writing assistance)x
	BR3: If the user is on an emailing site and the a received email is currently selected, the chrome extension backend will find the currently focused email element, extract the components relevant for emission estimation (e.g. CCs BCCs, Appendix, mail body length, in-line images, links, buttons, etc). x
	BR4: The chrome extension backend (CEB) includes a function/functions that calculate/s the approximate emissions using previously extracted email components based on
	BR5: The CEB includes a function that takes an appendix or inline image as input and returns its type and file size.
	BR6: (Using 3rd-Party libraries), the CEB includes a function that takes an appendix file as input, compresses it based on its data type, and returns it. 
	BR7: If the extensions is actively used, the CEB contains functions that log the following attributes into a .json file (within the chrome storage?):
		- Number of uses per day
		- Time that the extension was used per day on average
		- The number of clicks for every front-end element
		- Number of suggestions made by the extensions per day
		- Number of accepted suggestions made by the extension (e.g. compressions, explanations, etc..)
		- Number of accepted opt out suggestions (don't show anymore)
		- Average emissions per sent mail
	For each day participants take part in the study, all these attributes are logged within seperate files which are named using the format UserID_YYYY-MM-DD__HH:mm:ss. 
	BR8: On first use (after installing and first activation in the browser), the CEB will generate a unique user ID and keep it fixed throughout the study period
	BR9: The CEB must keep track of the current time. More precisely it must know:
		- When did the user first start using the extension (first time activation)
		- If the study period is over (check if predefined number of days/hours/minutes/seconds has passed since first activation)
		- The overall usage time per day (this has to be implemented to ensure that participants have used the extension long enough)






--- 
## About Chrome Extensions
### Components
1.  Manifest file: This file is the heart of the extension and contains metadata about the extension, such as its name, version number, and permissions required. It is written in JSON format.
    
2.  Background script: This is a script that runs in the background of the browser and performs tasks that need to be done even when the extension is not actively being used. It can be used for tasks such as monitoring browser events, fetching data from remote servers, and updating the extension's user interface.
    
3.  Content script: This script runs on specific web pages and can interact with the page's content. It is often used to modify the appearance or behavior of a website.
    
4.  Popup: This is a small window that appears when the user clicks on the extension icon in the browser toolbar. It can display information, accept user input, and perform actions.
    
5.  Options page: This is a page that allows the user to configure the extension's settings. It can be accessed by clicking on the extension's icon and selecting "Options" from the dropdown menu.
    
6.  Icons: These are the images that represent the extension in the browser toolbar, the extension management page, and other places where the extension is listed.
    
7.  Background page: This is a web page that runs in the background of the browser and can be used to perform complex operations that require more resources than a content script. It can communicate with other pages and scripts using messaging.
    
8.  Local storage: This is a feature that allows the extension to store data on the user's computer. It can be used to store user preferences, cache data, or store information about the user's interaction with the extension.
    
9.  WebRequest API: This is an API that allows the extension to intercept and modify web requests made by the browser. It can be used to block ads, modify headers, or redirect requests.
    
10.  Browser action: This is an event that occurs when the user interacts with the extension's icon in the browser toolbar. It can be used to display a popup, open a new tab, or perform other actions.

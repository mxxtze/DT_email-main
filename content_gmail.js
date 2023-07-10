
if (window.location.protocol !== 'chrome:') {

     //button for received emails
     //create a button, that stays there when I switch between emails using the arrow keys

      var currentDate = new Date();
      var downloadDate = new Date('2023-07-10'); 

      // Define the different containers
      const emailViewContainer = document.querySelector(".adn.ads");
      const composingContainer = document.querySelector(".aaZ");
      const replyContainer = document.querySelector(".gA.gt");

      var bottle = `<svg width="15" height="40" viewBox="0 0 31 68" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.0002 67.56C5.15231 67.56 3.37937 66.8294 2.06804 65.5275C0.756712 64.2255 0.0133971 62.4578 0.000197951 60.61V53.87C0.00222965 52.1358 0.65533 50.4656 1.8302 49.19L2.43019 48.53L1.7102 48C1.17955 47.6153 0.747815 47.1101 0.450531 46.5259C0.153246 45.9418 -0.0010961 45.2954 0.000197951 44.64V42.97C-0.00869595 41.9718 0.346866 41.0047 1.0002 40.25L1.45019 39.73L1.0002 39.21C0.347541 38.4588 -0.00809913 37.4951 0.000197951 36.5V34.82C-0.00746939 33.819 0.347787 32.8492 1.0002 32.09L1.45019 31.57L1.0002 31.04C0.346058 30.2858 -0.00961977 29.3183 0.000197951 28.32V25.95C0.000197951 25.51 0.1702 21.51 8.4402 11.2L9.4402 9.89999H6.73019C6.47824 9.89999 6.2366 9.79989 6.05844 9.62173C5.88028 9.44358 5.7802 9.20194 5.7802 8.94998C5.7802 8.69803 5.88028 8.45639 6.05844 8.27823C6.2366 8.10007 6.47824 8 6.73019 8H23.5502C23.8022 8 24.0438 8.10007 24.222 8.27823C24.4001 8.45639 24.5002 8.69803 24.5002 8.94998C24.5002 9.20194 24.4001 9.44358 24.222 9.62173C24.0438 9.79989 23.8022 9.89999 23.5502 9.89999H20.8302L21.8802 11.2C30.1502 21.5 30.3202 25.54 30.3202 25.96V28.32C30.311 29.3317 29.9342 30.3055 29.2602 31.06L28.8002 31.58L29.2602 32.11C29.9057 32.8653 30.2604 33.8264 30.2602 34.82V36.5C30.2639 37.4943 29.9089 38.4565 29.2602 39.21L28.8102 39.73L29.2602 40.25C29.9096 41.007 30.2645 41.9726 30.2602 42.97V44.64C30.2595 45.2961 30.1033 45.9428 29.8043 46.5269C29.5053 47.1109 29.0721 47.6158 28.5402 48L27.8302 48.53L28.4302 49.19C29.6051 50.4656 30.2582 52.1358 30.2602 53.87V60.61C30.247 62.4578 29.5037 64.2255 28.1924 65.5275C26.881 66.8294 25.1081 67.56 23.2602 67.56H7.0002ZM6.84019 48.83C5.53327 48.8587 4.28959 49.3982 3.37556 50.3328C2.46154 51.2674 1.94988 52.5227 1.95019 53.83V60.57C1.95284 61.9085 2.48575 63.1915 3.43224 64.138C4.37872 65.0845 5.66167 65.6174 7.0002 65.62H23.4202C24.7587 65.6174 26.0417 65.0845 26.9882 64.138C27.9347 63.1915 28.4676 61.9085 28.4702 60.57V53.83C28.4705 52.521 27.9574 51.2642 27.0413 50.3293C26.1251 49.3945 24.8789 48.8562 23.5702 48.83H17.0002C16.7482 48.83 16.5066 48.7299 16.3284 48.5518C16.1503 48.3736 16.0502 48.132 16.0502 47.88C16.0502 47.628 16.1503 47.3864 16.3284 47.2083C16.5066 47.0301 16.7482 46.93 17.0002 46.93H26.1702C26.4709 46.93 26.7687 46.8708 27.0465 46.7557C27.3244 46.6406 27.5768 46.4719 27.7895 46.2593C28.0021 46.0466 28.1708 45.7942 28.2859 45.5163C28.401 45.2385 28.4602 44.9407 28.4602 44.64V42.97C28.4577 42.3686 28.2197 41.7921 27.7973 41.3641C27.3748 40.936 26.8015 40.6904 26.2002 40.68H17.0902C16.94 40.7294 16.7803 40.7424 16.624 40.7181C16.4678 40.6937 16.3196 40.6327 16.1915 40.54C16.0635 40.4473 15.9592 40.3256 15.8873 40.1848C15.8154 40.0439 15.778 39.8881 15.778 39.73C15.778 39.5719 15.8154 39.416 15.8873 39.2752C15.9592 39.1344 16.0635 39.0127 16.1915 38.92C16.3196 38.8273 16.4678 38.7662 16.624 38.7419C16.7803 38.7176 16.94 38.7306 17.0902 38.78H26.1702C26.775 38.7774 27.3545 38.5367 27.7831 38.1099C28.2117 37.6832 28.455 37.1048 28.4602 36.5V34.82C28.4576 34.2135 28.2154 33.6325 27.7866 33.2036C27.3577 32.7747 26.7767 32.5326 26.1702 32.53H17.0002C16.85 32.5794 16.6902 32.5924 16.534 32.5681C16.3778 32.5438 16.2296 32.4827 16.1015 32.39C15.9735 32.2973 15.8692 32.1755 15.7973 32.0347C15.7254 31.8939 15.6879 31.7381 15.6879 31.58C15.6879 31.4219 15.7254 31.266 15.7973 31.1252C15.8692 30.9844 15.9735 30.8627 16.1015 30.77C16.2296 30.6773 16.3778 30.6163 16.534 30.5919C16.6902 30.5676 16.85 30.5806 17.0002 30.63H21.4102H26.2102C26.8167 30.6274 27.3977 30.3852 27.8266 29.9564C28.2555 29.5275 28.4976 28.9465 28.5002 28.34V25.64L28.3402 25.17C27.8602 23.5 25.9902 18.89 18.6602 10.17L18.4202 9.88998H12.0002L11.7602 10.17C2.29019 21.41 1.94019 25.76 1.93019 25.94V28.31C1.93019 28.6107 1.98942 28.9085 2.10451 29.1863C2.21959 29.4642 2.38827 29.7166 2.60092 29.9293C2.81357 30.1419 3.06602 30.3106 3.34386 30.4257C3.62169 30.5408 3.91947 30.6 4.2202 30.6H6.04019H6.84019H8.0002C8.20027 30.6658 8.37447 30.793 8.49797 30.9636C8.62147 31.1342 8.68794 31.3394 8.68794 31.55C8.68794 31.7606 8.62147 31.9658 8.49797 32.1364C8.37447 32.307 8.20027 32.4342 8.0002 32.5H4.2402C3.63286 32.5 3.05038 32.7413 2.62093 33.1707C2.19147 33.6002 1.95019 34.1827 1.95019 34.79V36.47C1.95272 37.0687 2.18965 37.6427 2.61021 38.0688C3.03078 38.495 3.60154 38.7395 4.20019 38.75H8.0002C8.25215 38.75 8.49379 38.8501 8.67195 39.0282C8.85011 39.2064 8.9502 39.448 8.9502 39.7C8.9502 39.9519 8.85011 40.1936 8.67195 40.3717C8.49379 40.5499 8.25215 40.65 8.0002 40.65H4.2102C3.60982 40.6605 3.03756 40.9064 2.61671 41.3347C2.19587 41.763 1.96011 42.3395 1.9602 42.94V44.61C1.95888 44.9111 2.01721 45.2095 2.13182 45.4879C2.24643 45.7663 2.41506 46.0193 2.62797 46.2322C2.84089 46.4451 3.09385 46.6137 3.37228 46.7284C3.65072 46.843 3.9491 46.9013 4.2502 46.9H8.0002C8.25215 46.9 8.49379 47.0001 8.67195 47.1783C8.85011 47.3564 8.9502 47.5981 8.9502 47.85C8.9502 48.102 8.85011 48.3436 8.67195 48.5218C8.49379 48.6999 8.25215 48.8 8.0002 48.8H6.8502L6.84019 48.83Z" fill="black"/>
      <path d="M18.88 6.67V3C18.8774 2.72233 18.7659 2.45677 18.5696 2.26042C18.3732 2.06407 18.1077 1.95262 17.83 1.95001H11.95C11.6723 1.95262 11.4068 2.06407 11.2104 2.26042C11.0141 2.45677 10.9026 2.72233 10.9 3V6.67H9V3C8.99989 2.21294 9.30909 1.45736 9.86093 0.896164C10.4128 0.33497 11.163 0.0131177 11.95 0H17.83C18.6257 0 19.3887 0.316068 19.9513 0.878677C20.5139 1.44129 20.83 2.20435 20.83 3V6.67H18.88Z" fill="black"/>
      </svg>`;

      function visualize(co2) {
        var date1 = new Date('2023-08-01');
        var date2 = new Date('2023-08-10');
        var date3 = new Date('2023-08-20');
        var co2count = co2;	
        var waterbottlestring = "";
        if (currentDate <= date1) {
          //visual1
          waterbottlestring = bottle;
            var waterbottles = Math.floor(co2count/50);
            for (var i = 1; i < waterbottles; i++) {
              waterbottlestring += bottle;
            }
        } else if (currentDate >= date1 && currentDate <= date2 ) {
          //visual2
          waterbottlestring = co2count + "g CO2";
        } else if (currentDate >= date2 && currentDate <= date3 ) {
          //visual3
          waterbottlestring = bottle;
            var waterbottles = Math.floor(co2count/50);
            for (var i = 1; i < waterbottles; i++) {
              waterbottlestring += bottle ;
            }
            waterbottlestring += " <br>" + co2count + "g CO2";
          }
          return waterbottlestring;
        }

      function composing(){

        //store the click count in storage
        chrome.storage.local.get(['clickCount'], function(result) {
        //if the click count is not yet stored, set it to 0
        if (result.clickCount == null) {
          chrome.storage.local.set({clickCount: 1}, function() {
            console.log('Value is set to ' + 0);
          });
        }
        //if the click count is stored, increment it by 1
        else {
          chrome.storage.local.set({clickCount: result.clickCount + 1}, function() {
            console.log('Value is set to ' + (result.clickCount + 1));
          });
        }
      }); 

      //select the recipients in bzf AND .afx AND .agh
      const recipients = Array.from(document.querySelectorAll(".bzf:first-of-type .afx .agh"));
      //extract the email addresses from the recipients
      const recipientAddresses = recipients.map((recipient) => recipient.innerText.trim());
      console.log("Recipient addresses: ", recipientAddresses);
      //count the number of recipients
      const recipientCount = recipients.length;
      console.log("Number of recipients: ", recipientCount);
  
      //find the number of cc recipients
      const ccRecipients = Array.from(document.querySelectorAll(".bzf:nth-of-type(2) .afx .akl"));
      //extract the email addresses from the cc recipients
      const ccRecipientAddresses = ccRecipients.map((ccRecipient) => ccRecipient.innerText.trim());
      console.log("CC recipient addresses: ", ccRecipientAddresses);
      //count the number of cc recipients
      const ccRecipientCount = ccRecipients.length;
      console.log("Number of cc recipients: ", ccRecipientCount);


        //find the number of bcc recipients
        const bccRecipients = Array.from(document.querySelectorAll(".bzf:nth-of-type(3) .afx .akl"));
        //extract the email addresses from the bcc recipients
        const bccRecipientAddresses = bccRecipients.map((bccRecipient) => bccRecipient.innerText.trim());
        console.log("BCC recipient addresses: ", bccRecipientAddresses);
        //count the number of bcc recipients
        const bccRecipientCount = bccRecipients.length;
        console.log("Number of bcc recipients: ", bccRecipientCount);
    
        //extract the email body
        const emailBody = document.querySelector(".Am.Al.editable.LW-avf");
        console.log("Email body: ", emailBody.innerHTML);
        //size of email body in KB
        var clicksize = emailBody.innerHTML.length;

        //extract non-text elements from the email body
        const nonTextElements = Array.from(emailBody.querySelectorAll("img, video, audio, iframe, object"));
        console.log("Non-text elements: ", nonTextElements);
      
        //select the aattached files field, .bv8
        const appendix = document.querySelector(".bv8");
        //if there are attached files
        if (appendix) {
          console.log("Email has an appendix");
          //give name and size of each attachment
          //name is stored in class .vI
          //size is stored in class .vJ
          const attachmentElements = appendix.querySelectorAll(".dL");
          if (attachmentElements.length > 0) {
            let totalSize = 0;
            attachmentElements.forEach((attachment) => {
              attachmentName = attachment.querySelector(".vI").innerText.trim();
              //extract size woithout parantheses and K
              attachmentSize = attachment.querySelector(".vJ").innerText.trim().slice(1, -1);
              console.log(attachmentName, attachmentSize);
              totalSize += parseInt(attachmentSize.replace('.', ''));

            });

            clicksize += totalSize;
            console.log("Size of appendix: ", totalSize);
         } 

        } else {
          console.log("Email does not have an appendix");
        }
        
        //give out email size
        console.log("Email size: ", clicksize);

        //calculate CO2
        var calculatedCO2 = calculateCO2(size, recipientCount, ccRecipientCount, bccRecipientCount);
        console.log("CO2 in grams: ", calculatedCO2);

         //on click, open a popup below the button, displaying the number of words in the email body
        var popup = document.createElement("div");
        //the popup should be positioned below the button
        popup.style = "position: absolute; right: 0px; top: 0px; z-index: 1000; background-color: #F7F8FC; border-radius: 10px; border: 0px solid black; padding: 10px;";
        popup.style.width = "200px";
        popup.style.height = "200px";
        //the popup should display the number of words in the email body
        popup.innerHTML = "Size of email: " + clicksize + " bytes" + "<br>";
        //if there are more than 1 [cc+bcc] recipients, display the number of cc and bcc recipients
        if (recipientCount + ccRecipientCount + bccRecipientCount > 1) {
            popup.innerHTML += "<br>Number of recipients: " + (recipientCount + ccRecipientCount + bccRecipientCount) + "<br>";
        }
        //check if there are attachments
        if (appendix && appendix.querySelectorAll(".dO").length > 0) {
            //if there are attachments, display the number of attachments
            popup.innerHTML += "<br>Number of attachments: " + appendix.querySelectorAll(".dO").length + "<br>";
        }
        //if there are images in the mail or in the appendix, include a link to https://www.imagesmaller.com/
        if (nonTextElements.length > 0 || (appendix && appendix.querySelectorAll(".dO").length > 0)) {
            popup.innerHTML += "<br>Images detected. <a href='https://www.imagesmaller.com/' target='_blank'>Compress images</a> to reduce email size.";
        }

        popup.innerHTML += "<br>CO2 emissions: " + calculatedCO2 + " grams";
   
        //close button
        var close = document.createElement("button");
        close.innerHTML = "Close";
        close.style = "position: absolute; right: 0px; bottom: 0px; z-index: 1000; background-color: #F7F8FC; border-radius: 10px; border: 0px solid black; padding: 10px;";
        close.addEventListener ("click", function() {
            popup.remove();
        });
        popup.appendChild(close);
        //add the popup to the page
        document.querySelector(".aoD.az6").appendChild(popup);

  
  }

  function calculateCO2(size, recipientCount, ccRecipientCount, bccRecipientCount) {
    // Umrechnung von bytes in MB
    var sizeInMB = size / 1000;
    // CO2-Basiswert entsprechend der Größe
    var co2 = sizeInMB * 22;
    var co2Base = co2
    // Multiplikationsfaktor für zusätzliche Empfänger
    var recipientMultiplier = 0.55;
    // CO2-Berechnung für Empfänger
    if (recipientCount > 1) {
      co2 += (recipientCount - 1) * recipientMultiplier * co2Base;
    }
    // CO2-Berechnung für CC-Empfänger
    if (ccRecipientCount > 0) {
      co2 += ccRecipientCount * recipientMultiplier * co2Base;
    }
    // CO2-Berechnung für BCC-Empfänger
    if (bccRecipientCount > 0) {
      co2 += bccRecipientCount * recipientMultiplier * co2Base;
    }
    if (co2 < 4){
      co2 = 4;
      return co2;
    } else {
      co2 = Math.floor(co2); // Runde den Wert auf die nächstniedrigere ganze Zahl ab
    }
    return co2;
}

       //if not viewing an email, check if composing an email
    if (composingContainer) {
      var size = 0;
      var emailsent = false;
  
      var button = document.createElement("button");
      button.innerHTML = bottle;
  
      //the button is positioned on the right side of the subject line
      button.style = "position: absolute; right: 0px; top: 0px; z-index: 1000; background-color: #F7F8FC; border-radius: 10px; border: 0px solid black; padding: 10px;";
      if (!document.querySelector(".aoD.az6 button")) {
      document.querySelector(".aoD.az6").appendChild(button);
      }
      button.addEventListener ("click", composing);

        //calculate size every 5 seconds
        let intervalId;
        intervalId = setInterval(function() {
        //set size back to 0
        size = 0;
        var co2 = 4;
        //calculate the size of the composed email
        //get the email body
        const emailBody = document.querySelector(".Am.Al.editable.LW-avf");
        //if there is an email body
        if (emailBody) {
          //recipients
          const recipients = Array.from(document.querySelectorAll(".bzf:first-of-type .afx .agh"));
          const ccRecipients = Array.from(document.querySelectorAll(".bzf:nth-of-type(2) .afx .akl"));
          const bccRecipients = Array.from(document.querySelectorAll(".bzf:nth-of-type(3) .afx .akl"));

          const recipientCount = recipients.length;
          const ccRecipientCount = ccRecipients.length;
          const bccRecipientCount = bccRecipients.length;

          //get the text in the email body
          const emailText = emailBody.innerText.trim();
          const emailTextLength = emailText.split(" ").length;
          //get the number of non-text elements in the email body
          const nonTextElements = Array.from(emailBody.querySelectorAll("img, video, audio, iframe, object"));
          //add email body size and non text element size to size in kilobytes
          size += emailTextLength + nonTextElements.length;
          const appendix = document.querySelector(".bv8");
          //if there is an appendix
          if (appendix) {
            //get the number of attached files
            const attachmentElements = appendix.querySelectorAll(".dL");
            //if there are attached files
            if (attachmentElements.length > 0) {
              let totalSize = 0;
              attachmentElements.forEach((attachment) => {
                //get the size of the attached file
                attachmentSize = attachment.querySelector(".vJ").innerText.trim().slice(1, -1);
                //add the size of the attached file to the total size
                totalSize += parseInt(attachmentSize.replace('.', ''));
              });
              size += totalSize;
            //if there are no attached files
           } 
          } 
          co2 = calculateCO2(size, recipientCount, ccRecipientCount, bccRecipientCount);
        }
        console.log("CO2: ", co2);
        button.innerHTML= bString;
        //give out size
        console.log("Email size: ", size);
        
        if(!emailBody) {
          clearInterval(intervalId);
        }
        }, 5000);

        var sendbutton = document.querySelector(".T-I.J-J5-Ji.aoO.v7.T-I-atl.L3");
         //if button "send" is clicked, add the size of the email to the number "size" in the local storage
        function sendEmail() {
          if (emailsent) {
            return;
          }
        var currentSize = localStorage.getItem("size");
        var sentEmails = localStorage.getItem("sent");
        var currentco2 = localStorage.getItem("co2");
        //if there is no current size, set the current size to 0
        if (!currentSize) {
            currentSize = 0;}
        if (!sentEmails) {
          sentEmails = 0;	}
        if (!currentco2) {
          currentco2 = 0;}
        //add the size of the email to the current size but as numbers, not strings
        currentSize = parseInt(currentSize) + size;
        //set the new size
        localStorage.setItem("size", currentSize);
        //add 1 to the number of sent emails
        sentEmails = parseInt(sentEmails) + 1;
        localStorage.setItem("sent", sentEmails);
        //add the co2 of the email to the current co2
        currentco2 = parseInt(currentco2) + calculateCO2(size, 0, 0, 0);
        //set the new co2
        localStorage.setItem("co2", currentco2);
        console.log("Size of all emails: ", currentSize, " Number of sent emails: ", sentEmails, " CO2 of all emails: ", currentco2);
        emailsent = true;
      }
        sendbutton.addEventListener ("click", sendEmail);
    }

     else if (emailViewContainer) {

        function viewing(){

          var size = 0;

          var button1 = document.createElement("button");
          button1.innerHTML = bottle;
          button1.title = "Find out why";
          button1.style = "position: absolute; right: 150px; bottom: 0px; z-index: 1000; background-color: #F7F8FC; border-radius: 10px; border: 0px solid black; padding: 10px;"; 
          //append the button to .iH.bzn if it exists and button1 has not been appended yet
          if (document.querySelector(".iH.bzn") && !document.querySelector(".iH.bzn").contains(button1)) {
            document.querySelector(".iH.bzn").appendChild(button1);
          }
        
        // store the click count in the local storage
        

        // Find all email addresses in the "from" header and store in an array
        const fromHeader = document.querySelector(".go");
        const fromAddresses = fromHeader ? fromHeader.innerText.trim() : "";


        // Find the email addresses in the "to" header
        const toRecipients = Array.from(emailViewContainer.querySelectorAll(".g2"));
        const toRecipientAddresses = toRecipients.map((toRecipient) => toRecipient.innerText.trim());
        const recipientcount = toRecipientAddresses.length;
        console.log("This email was sent to: ", toRecipientAddresses);

        // Find the email category
        const category = emailViewContainer.querySelector(".byl.aJZ.a0L .aim.ain .nU.n1");
        const categoryText = category ? category.innerText.trim() : "";


        console.log("From addresses: ", fromAddresses);
        
        console.log("Category: ", categoryText);
    
        // Extract the email body
        const emailBody = emailViewContainer.querySelector(".a3s.aiL");
        //console.log("Email body: ", emailBody.innerHTML);
        //save size in kilobytes
        //get the text of the email body
        const emailText = emailBody.innerText.trim();
        //get the length of the text
        size += emailText.length;
        

    
        // Extract non-text elements from the email body
        const nonTextElements = Array.from(emailBody.querySelectorAll("img, video, audio, iframe, object"));
        console.log("Non-text elements: ", nonTextElements);
        //for every non-text element, add the size of the element to the size of the email in kilobytes
        nonTextElements.forEach((nonTextElement) => {
          const nonTextElementSize = nonTextElement.src.length;
          size += nonTextElementSize;
        });

        //check if the word "unsubscribe" or "abmelden" is in the email body, regardless of capital letters
        const unsubscribe = emailBody.innerHTML.match(/unsubscribe/gi);
        const abmelden = emailBody.innerHTML.match(/abmelden/gi);
        //if it does, highlight the word in the email body
        if (unsubscribe || abmelden) {
          console.log("Unsubscribe found");
          emailBody.innerHTML = emailBody.innerHTML.replace(/unsubscribe/gi, "<mark>unsubscribe</mark>");
          emailBody.innerHTML = emailBody.innerHTML.replace(/abmelden/gi, "<mark>abmelden</mark>");
        }
           else {
          console.log("Unsubscribe not found");
        }
    
        // Check if the email has an appendix
        const appendix = emailViewContainer.querySelector(".aQH");
        if (appendix) {
          console.log("Email has an appendix");
          // Find the size of the appendix
          const attachmentElements = appendix.querySelectorAll(".SaH2Ve");
          if (attachmentElements.length > 0) {
            let totalSize = 0;
            attachmentElements.forEach((attachmentElement) => {
              const sizeText = attachmentElement.innerText.trim();
              const sizeMatch = sizeText.match(/(\d+(\.\d+)?)\s*(\w+)/);
              if (sizeMatch) {
                const size_a = parseFloat(sizeMatch[1]);
                const unit = sizeMatch[3];
                if (unit === "MB") {
                  totalSize += size_a * 1000;
                } else if (unit === "KB") {
                  totalSize += size_a;
                }
              }
            });
            console.log("Appendix size: ", totalSize, "KB");
            size += totalSize;
          }
          }
      
        var co2 = calculateCO2(size, recipientcount, 0, 0);
        //give out email size in KB
        console.log("Email size: ", size, "KB");
        var bString = visualize(co2);
        console.log(bString);
        button1.innerHTML = bString;

        button1.addEventListener ("click", function() {
          var clickCount = localStorage.getItem("clickCount");
        //if there is no click count, set the click count to 0
        if (!clickCount) {
            clickCount = 0;
        }
        //add 1 to the click count
        clickCount++;
        //set the new click count
        localStorage.setItem("clickCount", clickCount);
        console.log("Click count: ", clickCount);
        //add a popup to display size of email
        var popup = document.createElement("div");
        popup.className = "popup";
        popup.style = "position: absolute; right: 150px; top: 10px; z-index: 1000; background-color: #F7F8FC; border-radius: 10px;; border: 0px solid black; padding: 10px;";
        popup.innerHTML = "Size of email: " + size/1000 + " MB <br>";
        popup.innerHTML += "CO2: " + calculateCO2(size, recipientcount, 0, 0) + "g";
        //if email body includes "unsubscribe", add "This email contains the word 'unsubscribe'." to the popup
        if (unsubscribe || abmelden) {
          popup.innerHTML += "<br>This is a newsletter with the option of unsubscribing.<br> <br>";
          var unsubscribeButton = document.createElement("button");
          unsubscribeButton.innerHTML = "Unsubscribe";
          unsubscribeButton.style = "position: absolute; left: 0px; bottom: 0px; z-index: 1000; background-color: #F7F8FC; border-radius: 10px; border: 0px solid black; padding: 10px;";
          unsubscribeButton.addEventListener ("click", function() {
            //if clicked, click the word "unsubscribe" or "abmelden" in the email body
              emailBody.querySelector("mark").click();
          });
          popup.appendChild(unsubscribeButton);
        }
        //close button
        var close = document.createElement("button");
        close.innerHTML = "Close";
        close.style = "position: absolute; right: 0px; bottom: 0px; z-index: 1000;";
        close.addEventListener ("click", function() {
          popup.remove();
        }
        );
        popup.appendChild(close);
        //add the popup to the page, positioned at the right side of button1
        document.querySelector('.iH.bzn').appendChild(popup);

        });

        //if reply button gets clicked and reply window is open
        document.querySelector(".ams.bkH").addEventListener ("click", function() {

         //if reply input window is open
          if (replyContainer) {
          
          var button2 = document.createElement("button");
          var waterbottlestring2 = bottle;
          button2.innerHTML = waterbottlestring2;
          button2.style = "position: absolute; right: 90px; bottom: 25px; z-index: 1000; background-color: #F7F8FC; border-radius: 10px; border: 0px solid black; padding: 10px;";
          //position the button in the recipient line
          replyContainer.appendChild(button2);

          let intervalId2;
          //calculate size of reply every 5 seconds
          intervalId2 = setInterval(function() {
            if(replyContainer) {
            sizeReply();
          
            var data = sizeReply();
            var co2 = data[4];
            console.log("Reply size: ", data[0], "KB");
            button2.innerHTML = visualize(co2);
            }
            if(!replyContainer) {
              button2.remove();
              clearInterval(intervalId2);
            }
          }, 5000);

          function sizeReply() {
            const ebody = document.querySelector(".Am.Al.editable.LW-avf.tS-tW");
            //extract the size of the email in byte
            size = ebody.innerText.length;
            //check if the email has an appendix
            const appendix = document.querySelector(".aQH");
            if (appendix) {
              console.log("Email has an appendix");
              //find the size of the appendix
              const attachmentElements = appendix.querySelectorAll(".SaH2Ve");
              if (attachmentElements.length > 0) {
                let totalSize = 0;
                attachmentElements.forEach((attachmentElement) => {
                  const sizeText = attachmentElement.innerText.trim();
                  const sizeMatch = sizeText.match(/(\d+(\.\d+)?)\s*(\w+)/);
                  if (sizeMatch) {
                    const size_a = parseFloat(sizeMatch[1]);
                    const unit = sizeMatch[3];
                    if (unit === "MB") {
                      totalSize += size_a * 1000;
                    } else if (unit === "KB") {
                      totalSize += size_a;
                    }
                  }
                });
                console.log("Appendix size: ", totalSize, "KB");
                size += totalSize;
              }
            }
            console.log("Email size in KB: ", size);

            //get the number of recipients
            const recipientcount = document.querySelector(".vR").childElementCount;
            const ccRecipientCount = document.querySelector(".vR").querySelectorAll(".vN").length;
            const bccRecipientCount = document.querySelector(".vR").querySelectorAll(".vO").length;

            var co2 = calculateCO2(size, recipientcount, ccRecipientCount, bccRecipientCount);

            var data = {
              "size": size,
              "recipientcount": recipientcount,
              "ccRecipientCount": ccRecipientCount,
              "bccRecipientCount": bccRecipientCount,
              "co2": co2
            };

            return data;
          }
          
          //add an event listener to the button
          button2.addEventListener ("click", function() {
            //store the click count in the local storage
            var clickCount = localStorage.getItem("clickCount");
            //if there is no click count, set the click count to 0
            if (!clickCount) {
                clickCount = 0;
            }
            //add 1 to the click count
            clickCount++;
            //set the new click count
            localStorage.setItem("clickCount", clickCount);
            console.log("Click count: ", clickCount);
            
          console.log("User is replying to an email");
       
          sizeReply();
          //calculate the CO2
          var data = sizeReply();
          var size = data[0];
          var co2 = data[4];
          //add popup to display features of email
          var popup = document.createElement("div");
          popup.style = "position: absolute; right: 0px; top: 0px; z-index: 1000; background-color: #F7F8FC; border-radius: 10px; border: 0px solid black; padding: 10px;";
          popup.style.width = "200px";
          popup.style.height = "100px";
          popup.innerHTML = "Size of email: " + size + " KB";
          popup.innerHTML += "<br>CO2 emissions: " + co2 + "g CO2";
          //close button
          var close = document.createElement("button");
          close.innerHTML = "Close";
          close.style = "position: absolute; right: 0px; bottom: 0px; z-index: 1000; background-color: #F7F8FC; border-radius: 10px; border: 0px solid black; padding: 10px;";
          close.addEventListener ("click", function() {
            popup.remove();
          }
          );
          popup.appendChild(close);
          replyContainer.appendChild(popup);

      });


      //if composing button in the left sidebar gets clicked close reply window and remove button 2 from the website
      document.querySelector(".T-I.T-I-KE.L3").addEventListener ("click", function() {
        if(button2){
          button2.remove();
        }
        //discard the reply input window
        document.querySelector(".og.T-I-J3").click();
        //if the user is composing a new email
      
      });

      //if button "send" gets clicked, add size to size in local storage and add 1 to sent emails in local storage
      var sbutton = document.querySelector(".T-I.J-J5-Ji.aoO.v7.T-I-atl.L3.T-I-JW");
      var emailsent = false;
        //get the size from the local storage
        function send() {
          if (emailsent) {
            return;
          }
        var currentSize = localStorage.getItem("size");
        var sentEmails = localStorage.getItem("sent");
        var currentco2 = localStorage.getItem("co2");
        //if there is no current size, set the current size to 0
        if (!currentSize) {
            currentSize = 0;}
        if (!sentEmails) {
          sentEmails = 0;	}
        if (!currentco2) {
          currentco2 = 0;}
        //add the size of the email to the current size but as numbers, not strings
        currentSize = parseInt(currentSize) + size;
        //set the new size
        localStorage.setItem("size", currentSize);
        //add 1 to the number of sent emails
        sentEmails = parseInt(sentEmails) + 1;
        localStorage.setItem("sent", sentEmails);
        //add the co2 of the email to the current co2
        currentco2 = parseInt(currentco2) + calculateCO2(size, 0, 0, 0);
        //set the new co2
        localStorage.setItem("co2", currentco2);
        console.log("Size of all emails: ", currentSize, " Number of sent emails: ", sentEmails, " CO2 of all emails: ", currentco2);
        emailsent = true;
        if(button2){
          button2.remove();
        }
      }
        if (sbutton){
        sbutton.addEventListener ("click", send);
        }
      
      }
      });
        }
      viewing();
      document.querySelector(".T-I.J-J5-Ji.adg.T-I-awG.T-I-ax7.T-I-Js-IF.L3").addEventListener ("click", function() {
        setTimeout(viewing, 500);
      });
      document.querySelector(".T-I.J-J5-Ji.adg.T-I-awG.T-I-ax7.T-I-Js-Gs.L3").addEventListener ("click", function() {
        setTimeout(viewing, 500);
      });
    }else{
        console.log("User is not viewing an email");
      }
     /*   //set all data in the local storage to 0
      localStorage.setItem("clickCount", 0);
      localStorage.setItem("size", 0);
      localStorage.setItem("sent", 0);  */
 
  //add a button to download the userID and clickcount in the chrome local storage to a json file
  if(currentDate >= downloadDate){
  const button3 = document.createElement("button");
  button3.innerHTML = "Download data";
  button3.style = "position: absolute; right: 0px; bottom: 0px; z-index: 1000; background-color: #F7F8FC; border-radius: 10px; border: 0px solid black; padding: 10px;";
  document.querySelector('.V3.aam').appendChild(button3);
  button3.addEventListener ("click", function() {
    //get the data from the local storage
    chrome.storage.local.get('userID', (result) => {
    const userID = result.userID;
    var clickCount = localStorage.getItem("clickCount");
    var res_size = localStorage.getItem("size");
    var sentEmails = localStorage.getItem("sent");
    //convert the data to a json file, line break after each variable
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({userID, clickCount, res_size, sentEmails}));
   //create a link to download the json file
    var dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href",     dataStr   );
    dlAnchorElem.setAttribute("download", "data.json");
    dlAnchorElem.click();
    });
  }
  );
}

}





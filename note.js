let notepad_browser = null;
if (notepad_browser!=null){
    notepad_browser.execute(`$('body').toggle()`);
}  

   
mp.events.add("Note:StartBrowser", (SERVER_NOTEPAD_INPUT) => {
    mp.gui.chat.push("entered Note:StartBrowser event");
   
        mp.gui.cursor.show(true, true);
        mp.gui.chat.push("entered Note:StartBrowser if(browser)"); 
        notepad_browser = mp.browsers.new("package://gamemode/notepad/notepad.html");
        notepad_browser.active = true;   
        mp.gui.chat.push(SERVER_NOTEPAD_INPUT.toString());
        notepad_browser.execute(`setText('${SERVER_NOTEPAD_INPUT}')`);
        //CHAT NEEDS TO BE DISABLED.
    


});    

mp.events.add("Note:ReceiveContent", (notepad_data) =>{
        
     mp.gui.chat.push("entered Note:ReceiveContent");

        if (mp.objects.exists(notepad_browser)){
        mp.gui.chat.push("entered Note:ReceiveCount if(browser)");
        notepad_browser.execute(`$('body').toggle()`);
    }
        //ENABLE CHAT.
        client = mp.players.local;
        mp.events.callRemote("append_string", client, notepad_data);
        
});

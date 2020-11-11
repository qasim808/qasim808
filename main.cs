using System;
using GTANetworkAPI;
using System.Collections.Generic;
using System.Threading;

namespace FishingResource
{
    public class main : Script
    {
        private string notebook_string = "";
        [Command ("book")]
            
        public void openBook(Player client)
        {
            NAPI.Chat.SendChatMessageToPlayer(client, "~r~ openBook entered");
            NAPI.ClientEvent.TriggerClientEvent(client, "Note:StartBrowser", notebook_string);
                
        }

        [RemoteEvent("append_string")]
        public void append(Player client, object []args)
        {

            NAPI.Chat.SendChatMessageToPlayer(client,  "~r~ appendstring entered");
            this.notebook_string = (string)args[1];
            //this.notebook_string.Replace("'", "%27");
            NAPI.Chat.SendChatMessageToPlayer(client, notebook_string);

        }

    }
}
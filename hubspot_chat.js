function onConversationsAPIReady() {
  window.HubSpotConversations.on("conversationStarted", function() {
    dataLayer.push({
      event: "conversationBegan"
    });
});

window.HubSpotConversations.on("conversationClosed", function() {
dataLayer.push({
event: "conversationClosed"
});
});

}
window.HubSpotConversations ? onConversationsAPIReady() : (window.hsConversationsOnReady = window.hsConversationsOnReady || [], window.hsConversationsOnReady.push(onConversationsAPIReady));

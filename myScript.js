function hideClientResponseBox() {
  try {
// Turn off the extension if you want to write a message
    document.querySelector('[id^="email_reply_area_ticket_"]').style.display='none';
  } catch (e) {
    //no op
    console.log(e);
  }
}

// This is really ugly and not optimized, but works :) - hits 100+ times
document.addEventListener('DOMNodeInserted', function (event) {
  if($(event.target).find('[id^="email_reply_area_ticket_"]').length > 0){
    console.log('I made it!');
    hideClientResponseBox();
  }
});

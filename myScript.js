$(document).ready( function () {
  hideClientResponseBox();
});

function hideClientResponseBox() {
  try {
// Turn off the extension if you want to write a message
    document.querySelector('[id^="email_reply_area_ticket_"]').style.display='none';
  } catch (e) {
    //no op
  }
}

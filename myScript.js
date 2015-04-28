function disableClientResponseBox() {
  try {
    $('[id^="email_reply_area_ticket_"]').attr("disable", "disabled");
    $('[id^="email_reply_area_ticket_"]').attr("placeholder", "Disabled to prevent unexpected emails to customers. \nIf you want to email customer, disable the Continuity Desk Tweaks extension.");
  } catch (e) {
    //no op
    console.log(e);
  }
}

function removeAutoResolveButton() {
  if($(".ticket_filter_item_tv_tip_resolve").length > 0 ) {
    $(".ticket_filter_item_tv_tip_resolve").hide()
  }
}

// This is really ugly and not optimized, but works :) - hits 100+ times
document.addEventListener('DOMNodeInserted', function (event) {
  if($(event.target).find('[id^="email_reply_area_ticket_"]').length > 0){
    disableClientResponseBox();
  }
  removeAutoResolveButton();
});

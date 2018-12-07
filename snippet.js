//
// Append the file
// /Applications/Slack.app/Contents/Resources/app.asar.unpacked/src/static/ssb-interop.js (mac)
// /usr/lib/slack/resources/app.asar.unpacked/src/static/ssb-interop.js (linux)
//

document.addEventListener('DOMContentLoaded', function() {
  let tt__customCss = `.menu ul li a:not(.inline_menu_link) {color: #fff !important;}`
  $.ajax({
      url: 'url_to_css_file',
      success: function(css) {
          $("<style></style>").appendTo('head').html(css + tt__customCss);
      }
  });
});

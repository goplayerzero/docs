// HubSpot Tracking Script
(function() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.id = 'hs-script-loader';
  script.async = true;
  script.defer = true;
  script.src = '//js.hs-scripts.com/50205708.js'; // Your HubSpot portal script
  var firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode.insertBefore(script, firstScript);
})();

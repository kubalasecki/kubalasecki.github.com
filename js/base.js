(function() {
  var load_typekit;
  load_typekit = function() {
    try {
      return Typekit.load();
    } catch (_e) {}
  };
  $(load_typekit());
}).call(this);

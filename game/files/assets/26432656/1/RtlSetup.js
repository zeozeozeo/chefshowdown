
var app = pc.Application.getApplication();

// These functions are imported from unicode.bidirectional.js and converter.js
var convertArabicToPresentationForms = arabicConverter.convertArabic;
var reorderUnicode = UnicodeBidirectional.reorder;
var resolveRtlOrLtr = UnicodeBidirectional.resolve;

// Unicode Converter takes the original unicode string and transforms into a different set of unicode charactesr
// In the case of arabic, we convert the unicode input string which contains the regular arabic alphabet and
// converts it into the "presentation forms" which are the characters that are specific to the location in the word
app.systems.element.registerUnicodeConverter(convertArabicToPresentationForms);

// The RTL re-order function reverses the input string in a clever way (preserving LTR portions etc)
app.systems.element.registerRtlReorder(function (symbols) {
  // We need to convert the array of string symbols because UnicodeBidirectional.reorder only works with codepoints.
  // Also some emoji are made up of multiple codepoints, so we have to do some special logic to handle those.
  // 
  var codes = [];
  for (var i = 0; i < symbols.length; i++) {
    var symbol = symbols[i];
    codes.push.apply(codes, pc.string.getCodePoints(symbol));
  }
  var levels = resolveRtlOrLtr(codes, 0, true);
  var indexes = UnicodeBidirectional.reorderPermutation(levels);
  var rtl = (levels[0] === 1);
  if (rtl) indexes = indexes.reverse();
  return { mapping: indexes, rtl: rtl };
});

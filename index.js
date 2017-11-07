
var format = function(editor) {
  var text = editor.getText();
  if (text.indexOf('UNA:+') > -1) {
	  text = text.replace(/([^?]')(\s+)/g, "$1");
	  text = text.replace(/([^?]')([^\r\n])/g, "$1\r\n$2");
	  text = text.replace(/(\r\n\r\n)/g, "\r\n");
	  text = text.replace(/(\r\r)/g, "\r");
	  text = text.replace(/(\n\n)/g, "\n");
	  editor.setText(text);
  }
  /*wholeFile = grammar === 'JSON' || grammar === 'CSON';
  if (wholeFile) {
    text = editor.getText();
    return editor.setText(parser.toCSON(text));
  } else {
    return text = editor.replaceSelectedText({}, function(text) {
      return parser.toCSON(text);
    });
}*/
	return text;
};

module.exports = {
  activate: function() {
    return atom.commands.add('atom-workspace', {
      'Format EDIFACT': function() {
        var editor;
        editor = atom.workspace.getActiveTextEditor();
        return format(editor);
      }
    });
  }
};
